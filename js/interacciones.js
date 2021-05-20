var noAbrido=true;
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
var anchoPantalla=window.innerWidth;
var porcentajeAAbrir=0;
console.log(anchoPantalla);
if(anchoPantalla<=768){
  porcentajeAAbrir=25;
}
else{
  porcentajeAAbrir=10;
}
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
    cajaEsondida.style="left:"+porcentajeAAbrir+"% ;z-index:6";
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
    cajaEsondida.innerHTML=
    "<img src='img/taller.svg' alt='P.A.F - Tallleres'>"+
    "<h2>Talleres</h2>"+
    "<ul>"+
      "<li>Escuela para padres</li>"+
      "<li>Codependencia</li>"+
      "<li>Violencia familiar</li>"+
      "<li>Autoestima</li>"+
    "</ul>";
    break;
    case 2:
    cajaEsondida.innerHTML=
    "<img src='img/conversacion.svg' alt='P.A.F - Tallleres'>"+
    "<h2>Pláticas</h2>"+
    "<ol>"+
      "<li>Ayuda a tu hijo a sentirse bien con su cuerpo</li>"+
      "<li>¿Cómo entender el pensamiento infantil?</li>"+
      "<li>¿Cómo orientar a mi hijo para que logré sus metas?</li>"+
      "<li>¿Cómo ser un buen papá?</li>"+
      "<li>¿Cómo ser un guía para tu hijo<?/li>"+
      "<li>Cutting</li>"+
      "<li>La crianza respetuosa no es dejar a los niños hacer lo que quieran</li>"+
      "<li>Tu hijo adicto a la tecnología</li>"+
    "</ol>";
    break;
    case 3:
    cajaEsondida.innerHTML=
    "<img src='img/psicologia.svg' alt='P.A.F - Tallleres'>"+
    "<h2>Apoyo psicológico</h2>"+
    "<ul>"+
      "<li>Orientación</li>"+
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
    case 5:
    cajaEsondida.innerHTML=
    "<img src='img/conferencias.svg' alt='P.A.F - Tallleres'>"+
    "<h2>Conferencias</h2>"+
    "<ol>"+
      "<li>Ayuda a tu hijo a sentirse bien con su cuerpo</li>"+
      "<li>¿Cómo entender el pensamiento infantil?</li>"+
      "<li>¿Cómo orientar a mi hijo para que logré sus metas?</li>"+
      "<li>¿Cómo ser un buen papá?</li>"+
      "<li>¿Cómo ser un guía para tu hijo<?/li>"+
      "<li>Cutting</li>"+
      "<li>La crianza respetuosa no es dejar a los niños hacer lo que quieran</li>"+
      "<li>Tu hijo adicto a la tecnología</li>"+
    "</ol>";
    break;
  }
}
var accionActual=1;
async function cambio(accion){
  var titulo=document.getElementById('titulo');
  var contenido=document.getElementById('contenido');
  var derecha=document.getElementById('derecha');
  titulo.style="opacity: 0;";
  contenido.style="opacity: 0;";
  await sleep(300);
  titulo.style="opacity: 1;";
  contenido.style="opacity: 1;";
  if(accion!=1&&anchoPantalla<=768){
    derecha.style="width: 60%; margin-left: 25%;";
  }else{
    derecha.style="";
  }
  switch (accion) {
    case 1:
    titulo.innerHTML="Introducción";
    contenido.innerHTML=
    "<p class='parrafo'>Si nos sentimos mal; si algo nos duele, buscamos un médico para que nos ayude a aliviar el dolor y nos explique lo que pasa. Pero si el dolor es más profundo, emocional, estamos acostumbrados a creer  que va a desaparecer en algún momento por sí solo, qué tal vez baste  con distraernos y apoyarnos en los que nos rodea. Sin embargo... ¿Qué ocurre cuando esto no es suficiente?</p>"+
    "<p class='parrafo'>Cada uno  de nosotros hemos pasado por diferentes situaciones en la vida. Algunos de esos problemas conllevan una oleada de emociones, las cuales tratamos de sobrellevar lo mejor posible. Pero hay momentos que nos rebasan y sentimos que no encontramos la salida: la perdida de un familiar, exceso de necesidad por una pareja, violencia familiar entre muchas otras más. En esos casos es posible necesitar atención especializada.</p>"+
    "</div>";
    accionActual=1;
    break;
    case 2:
    titulo.innerHTML="Misión";
    contenido.innerHTML=
    "<p class='parrafo'>Tener compromiso para ayudar a nuestra sociedad con respeto y responsabilidad de aquellas situaciones que puedan afectar de manera emocional a las personas, con ética y profesionalismo utilizando herramientas como: </p>"+
    "<ul class='lista'>"+
    	"<li>Terapia psicológica</li>"+
      "<li>Talleres</li>"+
      "<li>Pláticas motivacionales.</li>"+
    "</ul>"+
    "<p class='parrafo'>Para ayudar a las personas con ese dolor emocional y mejorar su calidad de vida.</p>";
    accionActual=2;
    break;
    case 3:
    titulo.innerHTML="Visión";
    contenido.innerHTML="<p class='parrafo'>Ayudar a toda persona que llegue a la asociación por medio de: una terapia, una orientación o una plática motivacional</p>";
    accionActual=3;
    break;
    default:
    if(accionActual<3){
      cambio(accionActual+1);
    }else{
      cambio(1);
    }
  }
}
