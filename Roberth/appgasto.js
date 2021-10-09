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

//agregar gastos
function guardar() {

  var fecha = document.getElementById('fecha').value;
  var gasto = document.getElementById('gasto').value;
  var descripcion = document.getElementById('descripcion').value;
  var cant_precio = document.getElementById('cant_precio').value;
  var cant_unidad = document.getElementById('cant_unidad').value;

  var numero1 = document.getElementById("cant_precio").value;
  var numero2 = document.getElementById("cant_unidad").value;

  var suma = numero1 * numero2;

  //validar fecha
  if (fecha=="" || gasto=="" || descripcion=="" || cant_precio=="" || cant_unidad=="") {
    if (gasto=="") {
      document.getElementsByName('gasto1')[0].placeholder='*Eror, ingrese un gasto no puede registrar algo vacio';
      console.log("Gasto vacio");
 		};
    if (descripcion=="") {
      document.getElementsByName('descripcion1')[0].placeholder='*Eror, ingrese una descripcion del gasto';
      console.log("Gasto vacio");
 		};
    if (cant_precio=="") {
      document.getElementsByName('cant_precio1')[0].placeholder='*Eror, ingrese el precio del gasto ';
      console.log("Gasto vacio");
 		};
    if (cant_unidad=="") {
      document.getElementsByName('cant_unidad1')[0].placeholder='*Eror, ingrese las unidades del producto';
      console.log("Gasto vacio");
 		};

    console.log("Debe de ingresar datos")

  }
else{

    db.collection("Gastos").add({
        fecha: fecha,
        gasto: gasto,
        descripcion: descripcion,
        precio_unidad: cant_precio,
        cantidad_unidad: cant_unidad,
        total_precio: suma

    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        document.getElementById('fecha').value ='';
        document.getElementById('gasto').value ='';
        document.getElementById('descripcion').value ='';
        document.getElementById('cant_precio').value ='';
        document.getElementById('cant_unidad').value ='';
        suma='';
        document.getElementsByName('gasto1')[0].placeholder='Ingrese gasto a registrar';
        document.getElementsByName('descripcion1')[0].placeholder='Ingrese descripcion del gasto';
        document.getElementsByName('cant_precio1')[0].placeholder='Ingrese el precio por unidad';
        document.getElementsByName('cant_unidad1')[0].placeholder='Ingrese la cantidad de unidades';

    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
  }

}

//Leer datos
function consulta() {

  var tabla = document.getElementById('tabla');
  var filtro = document.getElementById('filtro').value;
  console.log(filtro);
  console.log("hola");
  if (filtro==""){
    db.collection("Gastos").onSnapshot((querySnapshot) => {
      tabla.innerHTML = '';
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
            tabla.innerHTML += `
            <tr>
          <th scope="row">${doc.id}</th>
          <td>${doc.data().fecha}</td>
          <td>${doc.data().gasto}</td>
          <td>${doc.data().descripcion}</td>
          <td>${doc.data().precio_unidad}</td>
          <td>${doc.data().cantidad_unidad}</td>
          <td>${doc.data().total_precio}</td>
          <td><button class="btn btn-warning" onclick="editar('${doc.id}','${doc.data().fecha}','${doc.data().gasto}','${doc.data().descripcion}','${doc.data().precio_unidad}','${doc.data().cantidad_unidad}','${doc.data().total_precio}')">Editar</button></td>
          <td><button class="btn btn-danger" onclick="eliminar('${doc.id}')">Eliminar</button></td>
          </tr>
          `

        });
    });

    } else{
    db.collection("Gastos")
    .where("fecha", "==", filtro).onSnapshot((querySnapshot) => {
      tabla.innerHTML = '';
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
            tabla.innerHTML += `
            <tr>
          <th scope="row">${doc.id}</th>
          <td>${doc.data().fecha}</td>
          <td>${doc.data().gasto}</td>
          <td>${doc.data().descripcion}</td>
          <td>${doc.data().precio_unidad}</td>
          <td>${doc.data().cantidad_unidad}</td>
          <td>${doc.data().total_precio}</td>
          <td><button class="btn btn-warning" onclick="editar('${doc.id}','${doc.data().fecha}','${doc.data().gasto}','${doc.data().descripcion}','${doc.data().precio_unidad}','${doc.data().cantidad_unidad}','${doc.data().total_precio}')">Editar</button></td>
          <td><button class="btn btn-danger" onclick="eliminar('${doc.id}')">Eliminar</button></td>
        </tr>
            `
        });
    });
  }
  };




//Borrar
function eliminar(id) {

  db.collection("Gastos").doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
  }).catch((error) => {
      console.error("Error removing document: ", error);
  });

}


//Editar


function editar(id,fecha,gasto,descripcion,precio_unidad,cantidad_unidad,total_precio) {

  document.getElementById('fecha').value =fecha;
  document.getElementById('gasto').value =gasto;
  document.getElementById('descripcion').value =descripcion;
  document.getElementById('cant_precio').value =precio_unidad;
  document.getElementById('cant_unidad').value =cantidad_unidad;

  var boton = document.getElementById('boton');
  boton.innerHTML = 'Editar';
  boton.onclick = function(){

    var washingtonRef = db.collection("Gastos").doc(id);

    // Set the "capital" field of the city 'DC'

    var fecha = document.getElementById('fecha').value;
    var gasto = document.getElementById('gasto').value;
    var descripcion = document.getElementById('descripcion').value;
    var precio_unidad = document.getElementById('cant_precio').value;
    var cantidad_unidad = document.getElementById('cant_unidad').value;
    var suma = precio_unidad * cantidad_unidad;

    return washingtonRef.update({
      fecha: fecha,
      gasto: gasto,
      descripcion: descripcion,
      precio_unidad: precio_unidad,
      cantidad_unidad: cantidad_unidad,
      total_precio: suma
    })
    .then(() => {
        console.log("Document successfully updated!");
        boton.innerHTML = 'Guardar';
        document.getElementById('fecha').value ='';
        document.getElementById('gasto').value ='';
        document.getElementById('descripcion').value ='';
        document.getElementById('cant_precio').value ='';
        document.getElementById('cant_unidad').value ='';
        suma='';
        window.location.reload(true);


    })
    .catch((error) => {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });
  }

}
