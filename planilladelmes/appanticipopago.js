// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: 'AIzaSyCL5skhwb8FQ4ZBY2RDq2Qg7DT1AnSSYXk',
    authDomain: 'paginasistema-88636.firebaseapp.com',
    projectId: 'paginasistema-88636'
  });
  var db = firebase.firestore();

  function valideKey(evt){
  
    // code is the decimal ASCII representation of the pressed key.
    var code = (evt.which) ? evt.which : evt.keyCode;

    if(code==8) { // backspace.
      return true;
    } else if(code>=48 && code<=57) { // is a number.
      return true;
    } else{ // other keys.
      return false;
    }
}


//Leer datos
function consulta() {

    var tabla = document.getElementById('tabla');
    var pago = document.getElementById('pago');
    var filtro = document.getElementById('filtro').value;
    if (filtro==""){
      db.collection("adelanto_empleado").onSnapshot((querySnapshot) => {
        tabla.innerHTML = '';
          querySnapshot.forEach((doc) => {
              console.log(`${doc.id} => ${doc.data()}`);
              tabla.innerHTML += `
              <tr>
            <th scope="row">${doc.id}</th>
            <td>${doc.data().adelanto}</td>
            <td>${doc.data().fecha}</td>
            <td>${doc.data().nombre}</td>
            </tr>
            `
  
          });
      });

      db.collection("adelanto_pago").onSnapshot((querySnapshot) => {
        pago.innerHTML = '';
          querySnapshot.forEach((doc) => {
              console.log(`${doc.id} => ${doc.data()}`);
              pago.innerHTML += `
              <tr>
            <th scope="row">${doc.id}</th>
            <td>${doc.data().adelanto}</td>
            <td>${doc.data().fecha}</td>
            <td>${doc.data().nombre}</td>
            </tr>
            `
  
          });
      });
  
      } else{
        db.collection("adelanto_empleado").orderBy('nombre').startAt(filtro).endAt(filtro+'\uf8ff').onSnapshot((querySnapshot) => {
            tabla.innerHTML = '';
              querySnapshot.forEach((doc) => {
                  console.log(`${doc.id} => ${doc.data()}`);
                  tabla.innerHTML += `
                  <tr>
                <th scope="row">${doc.id}</th>
                <td>${doc.data().adelanto}</td>
                <td>${doc.data().fecha}</td>
                <td>${doc.data().nombre}</td>
                </tr>
                `
      
              });
          });
    
          db.collection("adelanto_pago").orderBy('nombre').startAt(filtro).endAt(filtro+'\uf8ff').onSnapshot((querySnapshot) => {
            pago.innerHTML = '';
              querySnapshot.forEach((doc) => {
                  console.log(`${doc.id} => ${doc.data()}`);
                  pago.innerHTML += `
                  <tr>
                <th scope="row">${doc.id}</th>
                <td>${doc.data().adelanto}</td>
                <td>${doc.data().fecha}</td>
                <td>${doc.data().nombre}</td>
                </tr>
                `
      
              });
          });
    }
    };
