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
    var coments = document.getElementById('coments').value;
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
