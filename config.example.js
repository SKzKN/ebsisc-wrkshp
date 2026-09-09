/**
 * EBS Investment Club — Stock Analysis Workshop
 *
 * Copy this file to config.js and fill in the values from
 * Firebase console → Project settings → General → Your apps → Web app.
 *
 * config.js is gitignored. Keep it out of the repo and add it at deploy time.
 *
 * These are public client identifiers, not secrets — a browser has to receive
 * them to talk to Firestore at all. What actually protects the data is the
 * ruleset in firestore.rules.txt, plus an HTTP referrer restriction on the key
 * in Google Cloud console → APIs & Services → Credentials.
 */
window.IC_WORKSHOP_CONFIG = {
  firebase: {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    projectId: "YOUR_PROJECT",
    storageBucket: "YOUR_PROJECT.firebasestorage.app",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID",
  },
};
