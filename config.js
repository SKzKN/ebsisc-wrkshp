/**
 * EBS Investment Club — Stock Analysis Workshop
 *
 * Firebase web config for the live claims board. Committed deliberately: a
 * browser has to receive these values to reach Firestore at all, so they are
 * public on any deployed page regardless of whether they sit in the repo.
 *
 * They are not a security boundary. What constrains every write is the ruleset
 * in firestore.rules.txt. Add an HTTP referrer restriction on the key in
 * Google Cloud console → APIs & Services → Credentials so it only works from
 * workshop.ebsic.ee, and rotate the key in the Firebase console if it ever
 * needs replacing.
 */
window.IC_WORKSHOP_CONFIG = {
  firebase: {
    apiKey: "AIzaSyCn14E-Ex_79Wf14va1ilLoM1WcGj7AXmw",
    authDomain: "ic-workshop-c7938.firebaseapp.com",
    projectId: "ic-workshop-c7938",
    storageBucket: "ic-workshop-c7938.firebasestorage.app",
    messagingSenderId: "601965176639",
    appId: "1:601965176639:web:e7db567a5b80341cbc158a",
  },
};
