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
  
    var nombre = document.getElementById('nombre').value;
    var fechanacimiento = document.getElementById('fechanacimiento').value;
    var direccion = document.getElementById('direccion').value;
    var telefono = document.getElementById('telefono').value;
    var sueldo = document.getElementById('sueldo').value;

  
    //verificar campos vacios
    if (nombre=="" || fechanacimiento=="" || direccion=="" || telefono=="" || sueldo =="") {
      if (nombre=="") {
        document.getElementsByName('nombre')[0].placeholder='*Eror, el campo nombre no puede estar vacio';
        console.log("Gasto vacio");
           };
      if (fechanacimiento=="") {
        document.getElementsByName('fechanacimiento')[0].placeholder='*Eror, el campo fecha nacimiento no puede estar vacio ';
        console.log("Gasto vacio");
           };
           if (direccion=="") {
            document.getElementsByName('direccion')[0].placeholder='*Eror, el campo dirección no puede estar vacio ';
            console.log("Gasto vacio");
               };
               if (telefono=="") {
                document.getElementsByName('telefono')[0].placeholder='*Eror, el campo telefono no puede estar vacio ';
                console.log("Gasto vacio");
                   };
                   if (sueldo=="") {
                    document.getElementsByName('sueldo')[0].placeholder='*Eror, el campo sueldo no puede estar vacio ';
                    console.log("Gasto vacio");
                       };
      console.log("Debe de ingresar datos")
  
    }
  else{
  
      db.collection("empleados").add({
          nombre: nombre,
          fechanacimiento: fechanacimiento,
          direccion: direccion,
          telefono: telefono,
          sueldo: sueldo
  
      })
      .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
          document.getElementById('nombre').value ='';
          document.getElementById('fechanacimiento').value ='';
          document.getElementById('direccion').value ='';
          document.getElementById('telefono').value ='';
          document.getElementById('sueldo').value ='';
          
          
          document.getElementsByName('nombre')[0].placeholder='Ingrese el nombre del empleado';
          document.getElementsByName('fechanacimiento')[0].placeholder='Ingrese fecha de nacimiento';
          document.getElementsByName('direccion')[0].placeholder='Ingrese la dirección';
          document.getElementsByName('telefono')[0].placeholder='Ingrese el telefono';
          document.getElementsByName('sueldo')[0].placeholder='Ingrese sueldo del empleado';
            
      })
      .catch((error) => {
          console.error("Error adding document: ", error);
      });
    }
  
  }

