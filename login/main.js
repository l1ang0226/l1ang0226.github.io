const firebaseConfig = {
    apiKey: "AIzaSyA_1vA9VnvkatB8exIo3hWLCc54DcI8hoE",
    authDomain: "finalwebproject-76874.firebaseapp.com",
    projectId: "finalwebproject-76874",
    storageBucket: "finalwebproject-76874.appspot.com",
    messagingSenderId: "1005780715046",
    appId: "1:1005780715046:web:51ab0e2676a09d2a0408e7",
    measurementId: "G-XD0QTV3X1B"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();


function signUp(){
    var email = document.getElementById("account");
    var password = document.getElementById("password");
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    alert("Signed Up");
}
function signIn(){
    var account = document.getElementById("account");
    var password = document.getElementById("password");

    const promise = auth.signInWithEmailAndPassword(account.value, password.value);
    promise.catch(e => alert(e.message));
}
function signOut(){
    auth.signOut();
    alert("signed Out");
}
auth.onAuthStateChanged(function(user){
    
    if(user){
        var account = user.account;
        alert("Active User" + account);

        document.location.href="../admin/index.html";
    }
    else{
        alert("No Active User");
    }
}
);