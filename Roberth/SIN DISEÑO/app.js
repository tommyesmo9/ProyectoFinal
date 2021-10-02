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
function ingreso() {
  var email2 = document.getElementById('email2').value;
  var contrasena2 = document.getElementById('contrasena2').value;

  firebase.auth().signInWithEmailAndPassword(email2, contrasena2).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;

    console.log(errorCode);
    console.log(errorMessage);
  })
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

function aparece(user) {
  var user = user;
  var contenido = document.getElementById('contenido');
  if(user.emailVerified){
    contenido.innerHTML = `
    <p>Bienvenido</p>
    <button onclick="cerrar()">Cerrar sesion</button>
    `;
  }

}

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
