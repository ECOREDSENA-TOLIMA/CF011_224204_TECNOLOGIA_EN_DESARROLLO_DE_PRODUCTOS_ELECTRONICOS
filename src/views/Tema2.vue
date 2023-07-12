<template lang="pug">
.curso-main-container.pb-3.tema2
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Herramientas de diseño mecánico

    p.mt-3(data-aos="fade-left") Uno de los métodos que se podrían tener en cuenta para la lectura de planos de dibujo mecánico sería el siguiente.

    .row.mt-5
      .titulo-sexto.color-acento-contenido.mb-0.offset-lg-1(data-aos="fade-left")
        p.titulo.pb-0.mb-0 <b>Figura 14.</b> <i>Proceso de lectura de planos</i>

    .col.justify-content-center.align-items-center.mt-5(data-aos="fade-up")
      figure
        img(src='@/assets/curso/temas/tema2/info.svg', alt='Texto que describa la imagen')

    p.mt-3(data-aos="fade-left") Hoy por hoy las herramientas empleadas en el diseño mecánico las representa el <em>software</em> asistido por computador, pues este ha reemplazado a muchos de los instrumentos que se empleaban antiguamente para el dibujo en el puesto de trabajo, haciendo hoy día de la labor de diseño algo más cómodo, rápido y mucho más eficiente, tal y como se presenta en el siguiente esquema.

    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      .tarjeta.tarjeta--gris.p-4
        LineaTiempoC.color-acento-contenido(text-small)
          .row(titulo="1970")
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema2/2.svg', alt='Texto que describa la imagen')
            .col-md-8.mb-4.mb-md-0.mt-5
              br
              br
              p Antes del año de 1970 los puestos de trabajo se caracterizaban por una mesa o tablero enorme denominado restirador, en donde se ubicaban, entre otras cosas, el soporte del dibujo (diferentes tipos de papel y materiales en los que se trazaba el dibujo) y los instrumentos de trazado y medición que hacía de su uso algo limitado para el público de la época.

          .row(titulo="1980")
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema2/3.svg', alt='Texto que describa la imagen')

            .col-md-8.mb-4.mb-md-0.mt-5
              br
              br
              p Hacia finales de los años 70 y comienzos de los 80, varios sectores de la industria vieron la necesidad de emplear herramientas que permitieran optimizar el diseño a mano del dibujo mecánico, por tal razón varias empresas de la época empezaron a desarrollar sus propios <em>software</em> de dibujo.

          .row(titulo="Actualidad")
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema2/4.svg', alt='Texto que describa la imagen')
                
            .col-md-8.mb-4.mb-md-0.mt-5
              br
              br
              p Con la evolución de los computadores y su asequibilidad, las primeras herramientas CAD fueron actualizándose al punto que pasaron de ser simples herramientas de dibujo a herramientas integrales en la gestión del diseño mecánico.
          
    p.mt-3(data-aos="fade-left") Las herramientas de <em>software CAD,</em> en la actualidad, permiten la creación y el modelamiento de piezas y objetos sólidos en tres dimensiones. Además de gestionar la documentación, analizar y simular situaciones que afecten el desempeño de la pieza mecánica, y de ser capaces de integrarse con otras herramientas de dibujo diferentes al mecánico (electrónico, eléctrico, neumático, entre otras) que permiten la fabricación completa de un producto o sistema completamente terminado. En la figura se puede observar un puesto de trabajo utilizando herramientas CAD.

    .row.mt-5
      .titulo-sexto.color-acento-contenido.mb-0.offset-lg-1(data-aos="fade-left")
        p.titulo.pb-0.mb-0 <b>Figura 15.</b> <i>. Puesto de trabajo utilizando herramientas CAD </i>
    
    .col.justify-content-center.align-items-center.mt-5(data-aos="fade-up")
      figure
        img(src='@/assets/curso/temas/tema2/5.svg', alt='Texto que describa la imagen')

    p.mt-5(data-aos="fade-left") Las características que posee un <em>software CAD</em> dependen mucho de su aplicación y de la empresa que lo desarrolle, actualmente el mercado de software asistido por computador ha crecido masivamente y existen un sin número de herramientas CAD que integran una variedad de elementos para una correcta gestión del proceso de diseño mecánico.

    .row.mt-5
      .titulo-sexto.color-acento-contenido.mb-0.offset-lg-1(data-aos="fade-left")
        p.titulo.pb-0.mb-0 <b>Figura 16.</b> <i>Caracterísitcas</i>

    .col.justify-content-center.align-items-center.mt-5(data-aos="fade-up")
      figure
        img(src='@/assets/curso/temas/tema2/6.svg', alt='Texto que describa la imagen')

    p.mt-5(data-aos="fade-left") <b><em>Software</em> de simulación</b>

    p.mt-3 Existen dos términos muy utilizados dentro de las herramientas de <em>software</em> empleadas en el diseño y fabricación de piezas mecánicas. Por un lado, está el <em>software CAD</em> que, como se ha hecho referencia antes, es un tipo de <em>software</em> empleado en el proceso de diseño de una pieza mecánica que se puede realizar en dos dimensiones (2D), tres dimensiones (3D) o en ambas dimensiones, según sea el caso; y por el otro lado, se encuentra el <em>software CAM</em> que interviene en el proceso de fabricación de la pieza mecánica.
    p El <em>software CAM,</em> o <em>software</em> de fabricación asistida por computador, es el encargado de traducir el lenguaje gráfico a un lenguaje de coordenadas y parámetros empleados por los controles números (CNC) de los centros de mecanizados y tornos. A continuación, se explican brevemente algunos <em>software</em> de tipo <em>CAD</em> y <em>software</em> tipo <em>CAM</em> empleados en la industria.

    .row.mt-5
      .titulo-sexto.color-acento-contenido.mb-0.offset-lg-1(data-aos="fade-left")
        p.titulo.pb-0.mb-0 <b>Figura 17.</b> <i>Software CAD, software CAM</i>

    
    .row.justify-content-center.align-items-center.tarjeta--azul-custom.mb-0.p-4.pt-5
      .col-md-10.col-lg-8.col-12(data-aos="fade-down")
        ImagenInfografica.color-acento-contenido
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema2/7.svg', alt='')

          .tarjeta.color-custom--borde-1.p-3(x="77.2%" y="69%")
            .h5.mb-2 TopSolid'CAM
            p Una solución de CAD/CAM sencilla, intuitiva y evolutiva, sencillez de uso del control de un torno, fresadora o de un centro de mecanizado de 5 ejes continuos, simulación fiable y fiel para una producción segura, verdadera interoperabilidad, sea cual sea el sistema de CAD utilizado, además de gestión de las tolerancias gracias a la herramienta FreeShape y bibliotecas ricas en herramientas cortantes y de condiciones de cortes.

          .tarjeta.color-custom--borde-2.p-3(x="82.2%" y="50.5%")
            .h5.mb-2 Climatron
            p Es un programa para diseño y manufactura CAD/CAM integrado. La aplicación es utilizada para realizar proyectos de maquinado de piezas y herramientas usando operaciones torno, fresa, manufactura discreta, microfresado y electrodos en centros de maquinado.

          .tarjeta.color-custom--borde-1.p-3(x="78.5%" y="31.5%")
            .h5.mb-2 SurfCAM
            p Es una solución de <em>software</em> CAM para programar piezas por control numérico manufacturadas en centros de maquinado de 2 a 5 ejes, torno y EDMs. Con su tecnología patentada <em>“Truemill”,</em> maquinado de alta velocidad para 2 y 3 ejes, puede reducir el tiempo del ciclo de maquinado hasta en 80%, lo que quiere decir que un programa de 10 minutos puede bajar a tan solo 2 minutos.

          .tarjeta.color-custom--borde-2.p-3(x="67%" y="19%")
            .h5.mb-2 MasterCAM
            p Mastercam es un producto de CNC <em>Software</em> INC. Que proporciona soluciones de mecanizado para cualquier tipo de necesidad. Es el programa CAD/CAM más popular para manufactura en máquinas de control numérico y centros de maquinado CNC.
            | El programa abarca la programación de fresadoras, centros de maquinado, tornos, el módulo <em>Blade expert</em> para alabes, electroerosionadoras de corte por alambre, cortadoras por láser, oxicorte, routers y más.

          .tarjeta.color-custom--borde-1.p-3(x="33.8%" y="79%")
            .h5.mb-2 Rhinoceros
            p Basado en la geometría de <em>NURBS,</em> este <em>software</em> es normalmente utilizado para la arquitectura, el prototipado, la ingeniería y el diseño industrial, gráfico, naval y automotriz, entre otros. Su última versión, Rhino 6, surgió para eliminar los obstáculos que pudieran surgir a la hora de trabajar con el programa, además de incluir mejoras. Gracias a los miles de usuarios, el <em>software</em> se ha podido perfeccionar, y, por ello, ahora es la versión más estable y rápida que han creado.

          .tarjeta.color-custom--borde-2.p-3(x="22.4%" y="66.6%")
            .h5.mb-2 AutoCAD
            p Es un <em>software</em> de diseño asistido por computadora (CAD) de la compañía AutoDesk en el cual se apoyan tanto arquitectos como ingenieros y profesionales de la construcción para crear dibujos precisos en 2D y 3D. Crea, anota y edita geometría en 2D y modelos en 3D con sólidos, superficies y objetos de malla. Automatiza tareas como, por ejemplo, comparar dibujos, realizar un recuento, añadir bloques, crear tablas de planificación, entre otros.

          .tarjeta.color-custom--borde-1.p-3(x="18.5%" y="47.5%")
            .h5.mb-2 Solid edge
            p Junto con SolidWorks es uno de los softwares de diseño 3D más competitivos. Esta solución pertenece actualmente a la empresa <em>Siemens,</em> sin embargo, la idea fue presentada por primera vez en 1996 gracias a <em>Intergraph.</em> Hoy en día es conocido por ser uno de los <em>software</em> más utilizado por expertos en la industria de fabricación aditiva.

          .tarjeta.color-custom--borde-2.p-3(x="23.7%" y="29%")
            .h5.mb-2 Solidworks
            p Es uno de los mejores modeladores de sólidos 3D de gama media, pues permite modelar piezas y ensamblajes en 3D y planos en 2D. El <em>software</em> ofrece un abanico de soluciones para cubrir los aspectos implicados en el proceso de desarrollo del producto. Sus productos ofrecen la posibilidad de crear, diseñar, simular, fabricar, publicar y gestionar los datos del proceso de diseño.
            
          .tarjeta.color-custom--borde-1.p-3(x="35.8%" y="18.2%")
            .h5.mb-2 Catia
            p <em>Software</em> de diseño 3D de sólidos y superficies con una gran implementación en sectores importantes de la industria automotriz, aeronáutica, aeroespacial, entre otros.

    .tarjeta.text-white.p-3.mt-5.caja_flotante_azul.col-md-9.m-auto(data-aos="fade-up" style="background: linear-gradient(rgb(60 0 97), rgb(179 0 157))")
      .row.justify-content-around.align-items-center
        .col-4.col-sm-2.col-lg-2
          img.p-4.imagen_flotante_animada(src="@/assets/curso/temas/tema2/8.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              .h2.mb-0 Curso de AutoCAD
              p.mt-3 Para profundizar en el tema e iniciar en uno de los <em>software</em> más utilizados, se sugiere ver el siguiente video.
            .col-sm-auto
              a.boton.boton--b.color-acento-botones(:href="'https://www.youtube.com/watch?v=71vdtOJN4Sw'" target="_blank")
                span(style="color: #12263F !important;") Ver video


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">

.image_floating
   filter: drop-shadow(10px 5px 4px rgba(0,0,0,.1))
@keyframes float
  0%
    filter: drop-shadow(0 5px 15px rgba(0,0,0,0.2))
    transform: translatey(0px)
  50%
    filter: drop-shadow(26px 9px 1px rgba(0, 0, 0, 0.09))
    transform: translatey(-20px)
  100%
    filter: drop-shadow(0 5px 15px rgba(0,0,0,0.2))
    transform: translatey(0px)
.imagen_flotante_animada
  filter: drop-shadow(0 5px 15px rgba(0,0,0,0.2))
  transform: translatey(0px)
  animation: float 6s ease-in-out infinite
.caja_flotante
  -webkit-box-shadow: -11px 10px 0px -1px #f3f3f3
  -moz-box-shadow: -11px 10px 0px -1px #f3f3f3
  box-shadow: -11px 10px 0px -1px #f3f3f3
.caja_escalada_hover
  transition: transform 0.5s linear
  -o-transition: transform 0.5s linear
  -ms-transition: transform 0.5s linear
  -moz-transition: transform 0.5s linear
  -webkit-transition: transform 0.5s linear
.caja_escalada_hover:hover
  transition: transform .5s ease
  transform: scale(1.06)
.fade-in-image
  animation: fadeIn 3s
  -webkit-animation: fadeIn 3s
  -moz-animation: fadeIn 3s
  -o-animation: fadeIn 3s
  -ms-animation: fadeIn 3s
@keyframes fadeIn
  0%
    opacity: 0
  100%
    opacity: 1
.tarjeta--azul
  background-color: #DBFBFF !important
.tarjeta-avatar-b > img
  min-width: 16%
  max-width: 16%
  top: -9%
.caja_flotante_azul
  box-shadow: -11px 10px 0px -1px #f1fcfd
.caja_flotante_rosada
  box-shadow: -11px 10px 0px -1px #fff6f6
.cajon.color-acento-botones
  background-color: #FFE7C4
.bloque-texto-a.color-secundario
  background-color: #F3F9FF !important
.title__tab_1 .pre
  background-color: #FFCA28
  padding: 1rem 1.5rem 1rem 1.5rem
  border-radius: 50%
  color: inherit
  font-weight: bold
  font-size: 1.3rem
  position: relative
  left: calc(100% - 147%)
  top: 2.3rem
.title__tab_1 .title
 background-color: #4DD0E1
 padding: 1rem 1rem 1rem 2rem
 border-radius: 30px
.title__tab_1
  transition: transform 0.4s linear
  -o-transition: transform 0.4s linear
  -ms-transition: transform 0.4s linear
  -moz-transition: transform 0.4s linear
  -webkit-transition: transform 0.4s linear
.title__tab_1:hover
  transition: transform .4s ease
  transform: scale(1.1)
.nav-link
  border: none !important
.nav-link.active .title__tab_1 .pre

.nav-link.active .title__tab_1 .title
  color: white
  background-color: #1565C0
// .bloque-texto-a.color-primario
//   background: url("../assets/curso/tema5/1.svg")
.bloque-texto-a:before
  left: 44% !important
</style>
