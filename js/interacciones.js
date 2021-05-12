var noAbrido=true;
function deslizar(numero_datos_mostrar){
  var taparOpcion=document.getElementById('tapar_1');
  var cajaEsondida=document.getElementById('parte_escondida');
  if(numero_datos_mostrar==0){
    for (var i = 1; i <= 5; i++) {
      var flecha=document.getElementById('flecha_'+i);
      flecha.style="-webkit-transform: rotate(0deg);-moz-transform: rotate(0deg);-ms-transform: rotate(0deg);transform: rotate(0deg);";
      taparOpcion.style="display:none; z-index:1;"
    }
  }else{
    var flecha=document.getElementById('flecha_'+numero_datos_mostrar);
    var caja_subir_z_index=document.getElementById('caja_'+numero_datos_mostrar);
  }
  var opciones=document.getElementById('actividades');
  if(noAbrido){
    document.getElementById('cerrarDesplegado').style='display: block; z-index:5;';
    document.getElementById('fondo-abrido').style='display: block; z-index:4;';
    cajaEsondida.style="left:10% ;z-index:6";
    flecha.style="-webkit-transform: rotate(180deg);-moz-transform: rotate(180deg);-ms-transform: rotate(180deg);transform: rotate(180deg);";
    opciones.style="z-index:7";
    caja_subir_z_index.style="z-index: 4";
    taparOpcion.style="display:block; z-index:2;"
    noAbrido=false;
}else{
    document.getElementById('cerrarDesplegado').style='display: none; z-index:0;';
    document.getElementById('fondo-abrido').style='display: none; z-index:0;';
    cajaEsondida.style="left:-50%; z-index:2;";
    for (var i = 1; i <= 5; i++) {
      var flecha=document.getElementById('flecha_'+i);
      flecha.style="-webkit-transform: rotate(0deg);-moz-transform: rotate(0deg);-ms-transform: rotate(0deg);transform: rotate(0deg);";
    }
    opciones.style="z-index:1";
    caja_subir_z_index.style="z:index:1";
    taparOpcion.style="display:none; z-index:1;"
    noAbrido=true;
  }
  switch(numero_datos_mostrar){
    case 1:
    cajaEsondida.innerHTML="<img src='img/taller.svg' alt='P.A.F - Tallleres'>"+
    "<h2>Talleres</h2>"+
    "<ul>"+
      "<li>Escuela para padres</li>"+
      "<li>Codependencia</li>"+
      "<li>Violencia familiar</li>"+
      "<li>Autoestima</li>"+
    "</ul>";
    break;
    case 4:
    cajaEsondida.innerHTML="<img src='img/salud-mental.svg' alt='P.A.F - Terapias'>"+
    "<h2>Terapias</h2>"+
    "<ul>"+
      "<li>Terapia individual</li>"+
      "<li>Terapia de pareja</li>"+
      "<li>Terapia familiar</li>"+
    "</ul>";
    break;
  }
}
