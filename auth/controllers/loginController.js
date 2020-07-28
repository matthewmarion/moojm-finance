const admin = require('firebase-admin');
const serviceAccount = require('../firebaseServiceAccount.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.FIREBASE_URL
});

const db = admin.firestore();

const loginController = {};

loginController.getAccounts = async (req, res) => {
    res.status(200).send("Data")
};

module.exports = loginController;
