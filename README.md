# EBS Investment Club — Stock Analysis Workshop

Single-page site for the workshop. Teams register a stock pick, the board shows
live who has claimed what, and each team uploads its analysis to a shared folder.

Styled to match [ebsic.ee](https://ebsic.ee/) — same palette, typography and
component shapes as the main site and the events page.

## Running it

No build step, no dependencies. It is one HTML file.

```sh
python3 -m http.server 8000
# then open http://localhost:8000
```

Open `index.html` directly over `file://` and most of it works, but the clipboard
copy needs a secure context, so prefer the local server.

## Firebase

The live board is Firestore. Credentials live in `config.js`, which is
**gitignored** — the repo ships `config.example.js` as a template.

1. Create a project at <https://console.firebase.google.com>.
2. Build → Firestore Database → Create database, in **production mode**.
3. Project settings → Your apps → Web app, then:
   ```sh
   cp config.example.js config.js
   # paste your values into config.js
   ```
4. Firestore → Rules → paste `firestore.rules.txt` → Publish.

Without `config.js` the page still loads; the board just reports that it isn't
connected.

### On the API key

A Firebase web `apiKey` is a public client identifier, not a secret — the
browser cannot reach Firestore without receiving it, so anyone can read it from
any deployed site. Keeping it out of the repo is hygiene, not a security
boundary. The things that actually protect the data are:

- the ruleset in `firestore.rules.txt`, which is what constrains every write;
- an **HTTP referrer restriction** on the key in Google Cloud console →
  APIs & Services → Credentials, which stops it being used from other origins.

Set both. If a key has been committed anywhere, rotate it in the Firebase
console rather than relying on deleting the file.

### How claims work

Each stock becomes one document in `claims`, keyed by a slug of its name. The
page runs a transaction that writes only when that document is absent, and the
rules allow `create` but not `update` or `delete`. So the first team to claim a
stock keeps it, and a second team racing for the same one is rejected by the
server rather than by the browser.

Clearing the board between sessions is a Firebase console job — the console
bypasses the rules, the page cannot delete anything.

## Deploying

Static hosting, anywhere. For GitHub Pages: Settings → Pages → deploy from
`main`, root.

## Known limitation

Duplicate detection compares the typed stock name after normalising case and
whitespace. Two different spellings of the same company still read as two
different stocks — `SanDisk Corporation` and `Sandisk Corporation (SNDK)` will
both be allowed. Matching on ticker symbol would close this if it matters.

## Fonts

`Montserrat` is under the SIL Open Font License. `Zin Display Cond` is a
commercial font, included here to match the ebsic.ee brand — check your licence
before redistributing this repo.
