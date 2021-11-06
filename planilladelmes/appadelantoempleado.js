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
  
    var id = document.getElementById('id').value;
    var adelanto = document.getElementById('adelanto').value;
    var fecha = document.getElementById('fecha').value
  
    //verificar campos vacios
    if (id=="" || adelanto=="" || fecha=="" ) {
      if (id=="") {
        document.getElementsByName('id')[0].placeholder='*Eror, el campo nombre no puede estar vacio';
        console.log("Gasto vacio");
           };
      if (adelanto=="") {
        document.getElementsByName('adelanto')[0].placeholder='*Eror, el campo adelanto a empleado no puede estar vacio';
        console.log("Gasto vacio");
           };
      if (fecha=="") {
        document.getElementsByName('fecha')[0].placeholder='*Eror, el campo fecha no puede estar vacio ';
        console.log("Gasto vacio");
           };
      console.log("Debe de ingresar datos")
  
    }
  else{
  
      db.collection("adelanto_empleado").add({
          nombre: id,
          adelanto: adelanto,
          fecha: fecha
  
      })
      .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
          document.getElementById('id').value ='';
          document.getElementById('adelanto').value ='';
          document.getElementById('fecha').value ='';
          
          document.getElementsByName('id')[0].placeholder='Ingrese nombre';
          document.getElementsByName('adelanto')[0].placeholder='Ingrese adelanto realizado al empleado';
          document.getElementsByName('fecha')[0].placeholder='Ingrese fecha de realizado adelanto';
            
      })
      .catch((error) => {
          console.error("Error adding document: ", error);
      });
    }
  
  }