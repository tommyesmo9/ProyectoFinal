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
    var picture = document.getElementById('picture').value;
    var precio = document.getElementById('precio').value;
    var cantidad = document.getElementById('cantidad').value;    
    var coments = document.getElementById('comments').value;

    db.collection("gasolina").add({
        date: fecha,
        veiculo: camion,
        foto: picture,
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

// LEER DATOS
var tabla=document.getElementById('tabla');

db.collection("gasolina").get().then((querySnapshot) => {
    tabla.innerHTML = '';
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        tabla.innerHTML += `
        <tr>
            <th scope="row">${doc.id}</th>
            <td>${doc.data().date}</td>
            <td>${doc.data().veiculo}</td>
            <td>${doc.data().price}</td>
            <td>${doc.data().amount}</td>
            <td>${doc.data().foto}</td>
            <td>${doc.data().more}</td>
            </tr>
        `
    });
});