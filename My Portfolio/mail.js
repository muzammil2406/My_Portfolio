const firebaseConfig = {
    apiKey: "AIzaSyAQWXeRUqS2nS085d_s3am2U_tToPbBTfg",
    authDomain: "contact-form-b4056.firebaseapp.com",
    databaseURL: "https://contact-form-b4056-default-rtdb.firebaseio.com",
    projectId: "contact-form-b4056",
    storageBucket: "contact-form-b4056.appspot.com",
    messagingSenderId: "485710908228",
    appId: "1:485710908228:web:8a06984ac5909eec94a511",
    measurementId: "G-9VQNNF5ZR1"
  };
  
//initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactform");

document.getElementById("contactform").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var email = getElementVal("email");
  var message = getElementVal("message");

  saveMessages(name, email, message);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactform").reset();
}

const saveMessages = (name, email, message) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    email: email,
    message: message,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};