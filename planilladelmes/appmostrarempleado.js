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
    var filtro = document.getElementById('filtro').value;
    if (filtro==""){
      db.collection("empleados").onSnapshot((querySnapshot) => {
        tabla.innerHTML = '';
          querySnapshot.forEach((doc) => {
              console.log(`${doc.id} => ${doc.data()}`);
              tabla.innerHTML += `
              <tr>
            <th scope="row">${doc.id}</th>
            <td>${doc.data().nombre}</td>
            <td>${doc.data().fechanacimiento}</td>
            <td>${doc.data().direccion}</td>
            <td>${doc.data().telefono}</td>
            <td>${doc.data().sueldo}</td>
            <td><button class="btn btn-danger" onclick="eliminar('${doc.id}')">Eliminar</button></td>
            <td><button class="btn btn-warning" onclick="editar('${doc.id}','${doc.data().nombre}','${doc.data().direccion}','${doc.data().fechanacimiento}','${doc.data().telefono}','${doc.data().sueldo}')">Editar</button></td>
            </tr>
            `
  
          });
      });
  
      } else{
      db.collection("empleados")
      .where("nombre", "==", filtro).onSnapshot((querySnapshot) => {
        tabla.innerHTML = '';
          querySnapshot.forEach((doc) => {
              console.log(`${doc.id} => ${doc.data()}`);
              tabla.innerHTML += `
              <tr>
            <th scope="row">${doc.id}</th>
            <td>${doc.data().nombre}</td>
            <td>${doc.data().fechanacimiento}</td>
            <td>${doc.data().direccion}</td>
            <td>${doc.data().telefono}</td>
            <td>${doc.data().sueldo}</td>
            <td><button class="btn btn-danger" onclick="eliminar('${doc.id}')">Eliminar</button></td>
            <td><button class="btn btn-warning" onclick="editar('${doc.id}','${doc.data().nombre}','${doc.data().direccion}','${doc.data().fechanacimiento}','${doc.data().telefono}','${doc.data().sueldo}')">Editar</button></td>
            </tr>
              `
          });
      });
    }
    };



 //Borrar
 function eliminar(id) {

  db.collection("empleados").doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
  }).catch((error) => {
      console.error("Error removing document: ", error);
  });

}


//Editar


function editar(id,nombre, fechanacimiento, direccion, telefono, sueldo) {

  document.getElementById('id').value =id;
  document.getElementById('nombre').value =nombre;
  document.getElementById('fechanacimiento').value =fechanacimiento;
  document.getElementById('direccion').value =direccion;
  document.getElementById('telefono').value =telefono;
  document.getElementById('sueldo').value =sueldo;


  var boton = document.getElementById('boton');
  boton.innerHTML = 'Editar';
  boton.onclick = function(){

  var washingtonRef = db.collection("empleados").doc(id);

    // Set the "capital" field of the city 'DC'

    var nombre = document.getElementById('nombre').value;
    var fechanacimiento = document.getElementById('fechanacimiento').value;
    var direccion = document.getElementById('direccion').value;
    var telefono = document.getElementById('telefono').value;
    var sueldo = document.getElementById('sueldo').value;

    return washingtonRef.update({
      nombre: nombre,
      fechanacimiento: fechanacimiento,
      direccion: direccion,
      telefono: telefono,
      sueldo: sueldo
    })
    .then(() => {
        console.log("Document successfully updated!");
        boton.innerHTML = 'Guardar';
        document.getElementById('nombre').value ='';
        document.getElementById('fechanacimiento').value ='';
        document.getElementById('direccion').value ='';
        document.getElementById('telefono').value ='';
        document.getElementById('sueldo').value ='';

    })
    .catch((error) => {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });
    }
  

}
