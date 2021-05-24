<!DOCTYPE html>
<?php
if(isset( $_POST['Enviar'])){
  $to="antoniochavezmarco@gmail.com";
  $subject="Sugerencia de ".$_POST['usuario'];
  $message=$_POST['sugerencia'];
  $headers = 'From: noreply@fap.com'.'\r\n';
  $correo=@mail($to, $subject, $message, $headers);
  if($correo){
    echo "Mensaje enviado con éxito";
  }else{
    echo "No se puedo enviar el mail";
  }
}
 ?>
<html lang="es" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0">
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="shortcut icon" type="image/ico" href="img/personas.png">
    <script src="js/interacciones.js"></script>
    <title>P.A.F -  Psicología al apoyo de la familia</title>
  </head>
  <body>
    <button type="button" name="button" id="cerrarDesplegado" onclick="deslizar(0)" class="fondo-abrido"></button>
    <img src="img/Fondo-abrido.png" alt="Fondo" class="fondo-abrido" id=fondo-abrido>
    <div class="parte_arriba">
      <div class="relleno_arriba">
        <div class="direccion">
          <p>Psic. Moisés Crespo.</p>
        </div>
        <div class="direccion">
          <p>Psic. Jesús Gómez.</p>
        </div>
        <p>Calle Benito Juárez 3b, Col. Jardín Juárez, Jiutepec Mor. CP: 62576</p>
      </div>
      <div class="logo">
        <img src="img/personas.png" alt="PAF - Psicología al apoyo de la familia">
          <div class="texto_logo">
            <h1>Psicología al apoyo de la familia</h1>
            <h2>P.A.F</h2>
          </div>
        <img src="img/abrazo_corazon.png" alt="Abrazo - P.A.F - Psicología al apoyo de la familia">
      </div>
      <div class="redes pc">
        <a href="#"> <img src="img/facebook.svg" alt="P.A.F Facebook"> Psicología de tus emociones </a>
        <a href="https://wa.me/5217773450967"> <img src="img/whatsapp.svg" alt="Whatsapp - P.A.F Whatsapp"> 7773450967</a>
        <a href="https://wa.me/5217777880080"> <img src="img/whatsapp.svg" alt="Whatsapp - P.A.F Whatsapp"> 7777880080</a>
      </div>
    </div>
    <div class="principal">
      <nav>
        <button type="button" name="button" class="seccion_boton" onclick="cambio(1)">Introducción</button>
        <button type="button" name="button" class="seccion_boton" onclick="cambio(2)">Misión</button>
        <button type="button" name="button" class="seccion_boton" onclick="cambio(3)">Visión</button>
      </nav>
      <div class="centro">
        <main id=principal>
          <h2 id=titulo>Introducción</h2>
          <div id="contenido">
            <p class="parrafo">Si nos sentimos mal; si algo nos duele, buscamos un médico para que nos ayude a aliviar el dolor y nos explique lo que pasa. Pero si el dolor es más profundo, emocional, estamos acostumbrados a creer  que va a desaparecer en algún momento por sí solo, qué tal vez baste  con distraernos y apoyarnos en los que nos rodea. Sin embargo... ¿Qué ocurre cuando esto no es suficiente?</p>
            <p class="parrafo">Cada uno  de nosotros hemos pasado por diferentes situaciones en la vida. Algunos de esos problemas conllevan una oleada de emociones, las cuales tratamos de sobrellevar lo mejor posible. Pero hay momentos que nos rebasan y sentimos que no encontramos la salida: la perdida de un familiar, exceso de necesidad por una pareja, violencia familiar entre muchas otras más. En esos casos es posible necesitar atención especializada.</p>
          </div>
          <button type="button" name="button" class="siguiente" onclick="cambio(0)"><img src="img/flecha-correcta.svg" alt="Siguiente"></button>
        </main>
      </div>
      <section class="actividades" id=actividades>
        <button class="opcion"  onclick="deslizar(1)" id=caja_1>
          <div class="relleno">
            <span style="width:100%; height:100%;"></span>
          </div>
          <div class="imagen_boton">
            <img src="img/taller.svg" alt="P.A.F - Tallleres">
            <p>Talleres</p>
          </div>
          <div class="flecha_div">
            <img src="img/proximo.svg" alt="P.A.F - Flecha de abrir" id=flecha_1 class="flecha">
          </div>
        </button>
        <button class="opcion" onclick="deslizar(2)" id=caja_2 style="display: none;">
          <div class="relleno">
            <span style="width:100%; height:100%;"></span>
          </div>
          <div class="imagen_boton">
            <img src="img/conversacion.svg" alt="P.A.F - Charlas  - Pláticas">
            <p>Pláticas</p>
          </div>
          <div class="flecha_div">
            <img src="img/proximo.svg" alt="P.A.F - Flecha de abrir" id=flecha_2 class="flecha">
          </div>
        </button>
        <button class="opcion" onclick="deslizar(3)" id=caja_3>
          <div class="relleno">
            <span style="width:100%; height:100%;"></span>
          </div>
          <div class="imagen_boton">
            <img src="img/psicologia.svg" alt="P.A.F - Apoyo psicológico">
            <p>Apoyo psicológico</p>
          </div>
          <div class="flecha_div">
            <img src="img/proximo.svg" alt="P.A.F - Flecha de abrir" id=flecha_3 class="flecha">
          </div>
        </button>
        <button class="opcion" onclick="deslizar(4)" id=caja_4>
          <div class="relleno">
            <span style="width:100%; height:100%;"></span>
          </div>
          <div class="imagen_boton">
            <img src="img/salud-mental.svg" alt="P.A.F - Terapias">
            <p>Terapias</p>
          </div>
          <div class="flecha_div">
            <img src="img/proximo.svg" alt="P.A.F - Flecha de abrir" id=flecha_4 class="flecha">
          </div>
        </button>
        <button class="opcion" onclick="deslizar(5)" id=caja_5>
          <div class="relleno">
            <span style="width:100%; height:100%;"></span>
          </div>
          <div class="imagen_boton">
            <img src="img/conferencias.svg" alt="P.A.F - Conferencias">
            <p>Conferencias</p>
          </div>
          <div class="flecha_div">
            <img src="img/proximo.svg" alt="P.A.F - Flecha de abrir" id=flecha_5 class="flecha">
          </div>
        </button>
        <img src="img/Fondo-abrido.png" alt="" class="taparOpcion" id=tapar_1>
      </section>
      <section id=parte_escondida>
      </section>
      <section class="derecha" id=derecha>
        <div class="organigrama">
          <h2>Organigrama</h2>
        </div>
        <form class="sugerencias" action="" method="post">
          <h2>Quejas y sigerencias</h2>
          <br>
          <input type="text" name="usuario" placeholder="Usuario" required>
          <br>
          <textarea name="sugerencia" placeholder="Escribe aquí cualquier sugerencia que tengas" required></textarea>
          <br>
          <input type="submit" name="Enviar" value="Enviar sugerencia">
        </form>
      </section>
    </div>
    <footer>
      <h2>Contactános: </h2>
      <a href="#"> <img src="img/facebook.svg" alt="P.A.F Facebook"> Psicología de tus emociones </a>
      <a href="https://wa.me/5217773450967"><img src="img/whatsapp.svg" alt="Whatsapp - P.A.F Whatsapp"> 7773450967
        <p>Psic. Moisés Crespo.</p>
      </a>
      <a href="https://wa.me/5217777880080"><img src="img/whatsapp.svg" alt="Whatsapp - P.A.F Whatsapp"> 7777880080
        <p>Psic. Jesús Gomez.</p>
      </a>
      <h2>Puede encontrarnos en: </h2>
      <p>Calle Benito Juárez 3b, Col. Jardín Juárez, Jiutepec Mor. CP: 62576</p>
    </footer>
  </body>
</html>
