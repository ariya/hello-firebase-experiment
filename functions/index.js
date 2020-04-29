const admin = require('firebase-admin');
const functions = require('firebase-functions');

admin.initializeApp(functions.config().firebase);
const db = admin.firestore();

exports.ping = functions.https.onRequest((request, response) => {
    response.send(`OK ${Date.now()}`);
});

exports.answer = functions.https.onRequest(async (request, response) => {
    try {
        const doc = await db.collection('universe').doc('answer').get();
        const value = doc.data().value;
        console.log(`Answer is ${value}`);
        response.send(`Answer is ${value}`);
    } catch (err) {
        console.error(`Failed to obtain the answer: ${err.toString()}`);
        response.send(`EXCEPTION: ${err.toString()}`);
    }
});
