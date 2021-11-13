// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyCL5skhwb8FQ4ZBY2RDq2Qg7DT1AnSSYXk",
    authDomain: "paginasistema-88636.firebaseapp.com",
    projectId: "paginasistema-88636"
});

var db = firebase.firestore();

function guardar() {
    var fecha = document.getElementById('fecha').value;
    var camion = document.getElementById('camion').value;
    var precio = document.getElementById('precio').value;
    var cantidad = document.getElementById('cantidad').value;
    var coments = document.getElementById('comments').value;    

    db.collection("gasolina").add({
        date: fecha,
        veiculo: camion,
        price: precio,
        amount: cantidad,
        more: coments
    })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
}

function mostrar(){
// LEER DATOS
var tabla=document.getElementById('tabla');

db.collection("gasolina").onSnapshot((querySnapshot) => {
    tabla.innerHTML = '';
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().first}`);
        tabla.innerHTML += `
        <tr>
            <th scope="row">${doc.id}</th>
            <td>${doc.data().date}</td>
            <td>${doc.data().veiculo}</td>
            <td>${doc.data().price}</td>
            <td>${doc.data().amount}</td>
            <td>${doc.data().more}</td>
            <td><button class="btn btn-warning">Editar</button></td>
            <td><button class="btn btn-danger" onclick="eliminar('${doc.id}')">Eliminar</button></td>
            </tr>
        `
    });
});
};
//Borrar datos
function eliminar(id){
    db.collection("gasolina").doc(id).delete().then(function(){
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
}