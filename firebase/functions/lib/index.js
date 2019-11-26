"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
exports.getFeed = functions.https.onCall(async (req, res) => {
    const docs = await admin.firestore().collection('posts').limit(30).get();
    return docs.docs.map(doc => {
        return Object.assign({ postID: doc.id }, doc.data());
    });
});
//# sourceMappingURL=index.js.map