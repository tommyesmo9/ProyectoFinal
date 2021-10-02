function registrar() {
  console.log('diste un clic')
  var email = document.getElementById('email').value;
  var contrasena = document.getElementById('contrasena').value;

  firebase.auth().createUserWithEmailAndPassword(email, contrasena)
  .then(function(){
    verificar()
  })

  .catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;

    console.log(errorCode);
    console.log(errorMessage);
    // ..
  });

}


function observador() {
  firebase.auth().onAuthStateChanged(function(user){
  if (user) {
    aparece(user);
    var displayName = user.displayName;
    var email = user.email;
    console.log(email);
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;

  } else {
    console.log('no existe')
  }
});

}
observador();


function cerrar() {

  firebase.auth().signOut()
  .then(function(){
    console.log('Saliendo')
  })
  .catch(function(error){
    console.log(error)
  })

}
function verificar() {

  var user = firebase.auth().currentUser;
  user.sendEmailVerification().then(function(){
    console.log('Enviando correo..')
  }).catch(function(error){

  });

}
