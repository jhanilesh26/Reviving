
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
  import { getAuth ,GoogleAuthProvider,signInWithPopup } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBKaiq12_yOfKPmngiMsxkoYBt_dZUNOcc",
    authDomain: "reviving-project-001.firebaseapp.com",
    projectId: "reviving-project-001",
    storageBucket: "reviving-project-001.appspot.com",
    messagingSenderId: "67143874613",
    appId: "1:67143874613:web:c7af0d78dc131bf8b1d97c",
    measurementId: "G-8VEMTHW4K0"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  auth.languageCode = 'en'
  const analytics = getAnalytics(app);
  const provider =new googleAuthProvider();

  const googleLogin = document.getElementById("loginbtn");
  googleLogin.addEventListener("click", function() {
    import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(user);
    window.location.href = "../looged.html";


  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // ...
  });
  }) 
