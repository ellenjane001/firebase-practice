// TODO: Replace the following with your app's Firebase project configuration
var firebaseConfig = {
    apiKey: "AIzaSyCVpp2JIoy8ITI8dsZQkdv_-k0vZLlEk-M",
    authDomain: "kinetic-valor-337400.firebaseapp.com",
    projectId: "kinetic-valor-337400",
    storageBucket: "kinetic-valor-337400.appspot.com",
    messagingSenderId: "485386054736",
    appId: "1:485386054736:web:aa5a4bd2bbae083e27f555",
    measurementId: "G-KSR8678PGK"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// //email and password login
// const auth = firebase.auth()
// const database = firebase.database()
// function register() {
//     auth.createUserWithEmailAndPassword(email = 'test@gmail.com', password = 'password123').then(() => {
//         let user = auth.currentUser

//         let database_ref = database.ref()

//         let user_data = {
//             email: email, last_login: Date.now()
//         }
//         database_ref.child('users/' + user.uid).set(user_data)
//     }).catch((e) => {
//         console.log(e)
//     })

// }
// // google auth
// document.querySelector('button[type="button"]').addEventListener('click', () => {
//     // register()
//     firebase.auth().signInWithRedirect(provider);

// })

// document.querySelector('.sign-out').addEventListener('click', () => {
//     firebase.auth().signOut().then(() => {
//         // Sign-out successful.
//         console.log('success')
//     }).catch((error) => {
//         // An error happened.
//     });
// })

// var provider = new firebase.auth.GoogleAuthProvider();
// provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

// // To apply the default browser preference instead of explicitly setting it.
// // firebase.auth().useDeviceLanguage();
// provider.setCustomParameters({
//     'login_hint': 'user@example.com'
// });
// firebase.auth()
//     .signInWithPopup(provider)
//     .then((result) => {
//         /** @type {firebase.auth.OAuthCredential} */
//         var credential = result.credential;

//         // This gives you a Google Access Token. You can use it to access the Google API.
//         var token = credential.accessToken;
//         // The signed-in user info.
//         var user = result.user;
//         // ...
//     }).catch((error) => {
//         // Handle Errors here.
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         // The email of the user's account used.
//         var email = error.email;
//         // The firebase.auth.AuthCredential type that was used.
//         var credential = error.credential;
//         // ...
//     });





var ui = new firebaseui.auth.AuthUI(firebase.auth());

ui.start('#firebaseui-auth-container', {
    signInOptions: [
        {
            provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            scopes: [
                'https://www.googleapis.com/auth/contacts.readonly'
            ],
            customParameters: {
                // Forces account selection even when one account
                // is available.
                prompt: 'select_account'    
            }
        },
        {
            provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            scopes: [
                'public_profile',
                'email',
                'user_likes',
                'user_friends'
            ],
            customParameters: {
                // Forces password re-entry.
                auth_type: 'reauthenticate'
            }
        },
        firebase.auth.TwitterAuthProvider.PROVIDER_ID, // Twitter does not support scopes.
        firebase.auth.EmailAuthProvider.PROVIDER_ID // Other providers don't need to be given as object.
    ]
});

if (ui.isPendingRedirect()) {
    ui.start('#firebaseui-auth-container', uiConfig);
}
// This can also be done via:
if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
    ui.start('#firebaseui-auth-container', uiConfig);
}