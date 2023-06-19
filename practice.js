//ADICIONE OS LINKS DO SEU APP FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyCSBVAx2pMmYPrTGAq0um69vGLOwPDNZ8s",
  authDomain: "hnhnn-d5c2c.firebaseapp.com",
  databaseURL: "https://hnhnn-d5c2c-default-rtdb.firebaseio.com",
  projectId: "hnhnn-d5c2c",
  storageBucket: "hnhnn-d5c2c.appspot.com",
  messagingSenderId: "220457926872",
  appId: "1:220457926872:web:bda979e4e87617705b57ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);    
  function addUser()
  {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
      purpose : "adicionando usuário"
    });
  }

function addUser() {
    user_name = document.getElementById("user_name").value;
     firebase.database().ref("/").child(user_name).update({
      purpose: "adicionando usuário" 
    });

}