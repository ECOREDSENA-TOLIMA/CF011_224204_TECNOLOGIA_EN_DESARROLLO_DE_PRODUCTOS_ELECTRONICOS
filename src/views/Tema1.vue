<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Modelado de prototipos de productos electrónicos
    p.mt-3(data-aos="fade-left") El desarrollo de cualquier producto involucra un equipo de trabajo interdisciplinario organizado de tal forma que participen en las diferentes etapas de concepción, diseño, fabricación y producción. Así, para cada sistema o subsistema eléctrico, electrónico, mecánico, neumático, entre otros, que conforman el producto final y terminado, se requiere de cada una de las etapas anteriormente nombradas para su correcta elaboración. Por tal razón, durante el proceso de modelamiento mecánico se debe comprender los elementos que, desde el dibujo técnico, se utilizan para la materialización de las piezas necesarias para el producto.

    .row
      .titulo-sexto.color-acento-contenido.mb-0.offset-lg-1(data-aos="fade-left")
        p.titulo.pb-0.mb-0 <b>Figura 2.</b> <i>Plano sistema de coordenadas Cartesiano tridimensional de la Geometría del espacio</i>
        
    .row
      .col.lg-12.col-lg-12.mt-3
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/1.svg')})`}"
          )
          .bloque-texto-g__texto.p-4.mt-3
            p.mb-0(data-aos="fade-left") El modelamiento de estas partes mecánicas es la aplicación del dibujo técnico para la representación matemática de un objeto hecho a mano o con herramientas de software especializado en tres dimensiones: X, Y, Z (largo, ancho,  alto).
    br
    figcaption Nota. Tomado de freepng.es

    p.mt-3(data-aos="fade-left") Esta representación, como se aprecia a continuación, puede estar hecha en sólidos y superficies o en mallas poligonales (Quispe, 2021).

    .tarjeta.tarjeta.color-primario.p-4.mb-5(data-aos="zoom-out-up")
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-up
          .col-md-4.mb-4.mb-md-0
            h4 Ejemplo de un modelado hecho en sólidos y superficies.
          .col-md-8
            figure
              img(src='@/assets/curso/temas/tema1/2.svg', alt='')

        .row.justify-content-center.align-items-up
          .col-md-4.mb-4.mb-md-0
            h4 Ejemplo de un modelado en mallas poligonales. Nota. Tomado de Morronal (2009).
          .col-md-8
            figure
              img(src='@/assets/curso/temas/tema1/3.svg', alt='')

    p.mt-3(data-aos="fade-left") Adicionalmente, el dibujo o modelamiento mecánico se basa en formas geométricas regulares o irregulares elaboradas a partir de rectas y curvas, cálculos matemáticos y mediciones; siendo las mediciones y su correcta aplicación las que determinarán los niveles de presión y el detalle de la pieza mecánica a fabricar. 

    separador 
    #t_1_1.titulo-segundo.mt-2.color-acento-contenido(data-aos="zoom-out-left")
      h2 1.1 Dibujo técnico e instrumentos de modelado

    p.mt-2(data-aos="fade-left") El dibujo técnico es la base del modelamiento gráfico y mecánico, por ello, en el siguiente video se puede observar de manera introductoria, en qué consiste este concepto.
    
    figure
    .video
      iframe(width="560" height="315" src="https://www.youtube.com/embed/ixBuFHSPcUQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.mt-3(data-aos="fade-left") Los instrumentos empleados para dibujo técnico se clasifican en tres grupos importantes: de trazado, de medida y anexos o complementarios. 
    
    AcordionA.mb-5(data-aos="zoom-out-up")(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      .row(titulo="Instrumentos de trazado (lápices)")
        .col-md-5.justify-content-center.align-items-center.mt-3
          .titulo-sexto.color-acento-contenido.mb-0
            p.titulo.pb-0.mb-0 <b>Figura 3.</b> <i>Trazos de diferentes lápices empleados en el dibujo técnico</i>
          .col.justify-content-center.align-items-center.mt-5
            figure
             img(src='@/assets/curso/temas/tema1/4.svg', alt='Texto que describa la imagen')        
          
        .col-md-6.offset-lg-1
          p Son los diferentes lápices que  vienen rotulados para identificar el tipo de escritura a realizar.
          p •  Los lápices HB son de dureza media, lo que hace que su trazo sea suave y, por lo general, se utilizan dentro del dibujo para marcar acotaciones y datos.
          p •  Los lápices H son de punta más dura y, por lo tanto, su trazo es mucho más suave que los HB dejando un trazo menos visible en función de lo que se quiera representar dentro del dibujo que, casi siempre, son trazos iniciales de diseño; este tipo de lápices se encuentran desde la H, 2H y hasta el 6H siendo este último el más duro y de trazo más sutil.
          p •  Los lápices tipo B, de punta más suave y de trazado más marcado, se utilizan para definir detalles finales en el dibujo; los hay desde el B, 2B y hasta el 8B siendo el 8B el que tiene el trazo más oscuro.
          p En la figura 2 se puede observar la relación de trazado del lápiz de acuerdo con su rotulado (Biguri, 2016).
      
      .row.justify-content-center.align-items-center.my-lg-4(titulo="Instrumentos de trazado (escuadras)")
        .col-md-5.justify-content-center.align-items-center
          .titulo-sexto.color-acento-contenido.mb-0
            p.titulo.pb-0.mb-0 <b>Figura 4.</b> <i>Escuadra y cartabón</i>
          .col.justify-content-center.align-items-center.mt-5
            figure
             img(src='@/assets/curso/temas/tema1/5.svg', alt='Texto que describa la imagen')        
        .col-md-6.offset-lg-1.mb-4.mb-md-0
          p Dentro de los instrumentos de trazado se destacan el juego de escuadras que incluye el cartabón los cuales se emplean para trazar líneas rectas a lo largo de los diferentes planos y vistas del dibujo; además del compás que permite la creación de figuras y trazos con geometría curva. En la figura 3 se observa el juego de escuadras empleado en dibujo (Biguri, 2016).

      .row.justify-content-center.align-items-center.my-lg-4(titulo="Instrumentos de medida ")
        .col-md-5.justify-content-center.align-items-center
          .titulo-sexto.color-acento-contenido.mb-0
            p.titulo.pb-0.mb-0 <b>Figura 5.</b> <i>Instrumentos de medida</i>
          .col.justify-content-center.align-items-center.mt-5
            figure
             img(src='@/assets/curso/temas/tema1/6.svg', alt='Texto que describa la imagen')        
        .col-md-6.offset-lg-1.mb-4.mb-md-0
          p Por otra parte, dentro de los instrumentos de medida se destacan las diferentes reglas milimetradas, los escalímetros para medición y elaboración de escalas y el transportador de ángulos (figura 4).

      .row.justify-content-center.align-items-center.my-lg-4(titulo="Instrumentos anexos o complementarios")
        .col-md-5.justify-content-center.align-items-center
          .titulo-sexto.color-acento-contenido.mb-0
            p.titulo.pb-0.mb-0 <b>Figura 6.</b> <i> Curvígrafos para dibujo técnico</i>
          .col.justify-content-center.align-items-center.mt-5
            figure
             img(src='@/assets/curso/temas/tema1/7.svg', alt='Texto que describa la imagen')        
        .col-md-6.offset-lg-1.mb-4.mb-md-0
          p Se utilizan para facilitar el proceso de diseño del dibujo y brindar mejores acabados; se destacan portaminas, borradores, tajalápices, curvígrafos o plantillas Burmester (figura 5).
    
    ul.lista-ul.mb-3
      li 
        i.lista-ul__vineta
        | #[strong Cotas]

    p.mt-3(data-aos="fade-left") Las cotas, o la acotación, en dibujo técnico es el proceso de anotar, mediante líneas, cifras, signos y símbolos, las medidas de un objeto, teniendo en cuenta una serie de reglas y convencionalismos, establecidos a través de normas.
    
    .row.justify-content-center.align-items-center.mb-3.mt-3
      .col-sm-12.col-lg-12.mb-4.mb-md-0(data-aos="fade-up")
        .cajon.color-primario.pt-4.px-4.pb-3.caja_flotante_azul
          .row.justify-content-center.align-items-center.py-0
            .col-sm-12.col-lg-2.px-5
              figure
                img(src='@/assets/curso/temas/tema1/8.svg', alt='')
            .col-sm-12.col-lg-10
              p.px-3.pt-1.pb-2(data-aos="fade-up") Las normas que rigen las características de las acotaciones son: UNE 1-133-75 e ISO 2595-1973.

    p.mt-3(data-aos="fade-left") La acotación es el trabajo más complejo del dibujo técnico, ya que para un correcto uso es necesario conocer, no solo sus normas, sino también las características del plano o dibujo a acotar. No se puede proceder de cualquier manera, por ello, la información que se representa en el acotado debe disponerse de tal modo que su lectura sea fácil y rápida.
    p.mt-3(data-aos="fade-left") Para realizar un adecuado proceso de acotación es importante tener claros los principios que la rigen, tal como se expone en la siguiente figura.

    .titulo-sexto.color-acento-contenido.mb-0.offset-lg-1
      p.titulo.pb-0.mb-0 <b>Figura 7.</b> <i>Principios de acotación</i>
    .col.justify-content-center.align-items-center.mt-5
      figure
        img(src='@/assets/curso/temas/tema1/9.svg', alt='Texto que describa la imagen') 

    ul.lista-ul.mb-3
      li 
        i.lista-ul__vineta
        | #[strong Manejo de formatos]
    p.mt-3(data-aos="fade-left") En el dibujo técnico elaborado a mano se utilizan diferentes tipos de papel como medio de soporte para la realización del mismo. Uno de los más utilizados es el papel opaco blanco de diferentes tamaños que se encuentran normalizados por formatos y cada formato de hoja representa un tamaño que proporciona el espacio o la plantilla para la elaboración del dibujo mecánico.
    
    .titulo-sexto.color-acento-contenido.mb-0.offset-lg-1
      p.titulo.pb-0.mb-0 <b>Figura 8.</b> <i>Mujer ingeniero arquitecto que trabaja en el moderno programa de CAD.</i>
    .col.lg-12.col-lg-12.mt-3
      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(style="margin-bottom:0px")(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/10.svg')})`}"
        )
        .bloque-texto-g__texto.p-4.mt-3.justify-content-center.align-items-center
          p.mt-3 Es importante aclarar que cuando el diseño mecánico se realiza a través de un software asistido de computador no se emplea una hoja física, pero sí una plantilla que representará digitalmente el formato empleado de plantilla para una eventual impresión.
    
    .row.justify-content-center.align-items-center.mb-3.mt-3
      .col-sm-12.col-lg-12.mb-4.mb-md-0(data-aos="fade-up")
        .cajon.color-primario.pt-4.px-4.pb-3.caja_flotante_azul
          .row.justify-content-center.align-items-center.py-0
            .col-sm-12.col-lg-2.px-5
              figure
                img(src='@/assets/curso/temas/tema1/11.svg', alt='')
            .col-sm-12.col-lg-10
              p.px-3.pt-1.pb-2(data-aos="fade-up") Por tal razón, la normalización de los formatos empleados en los tamaños de las hojas de dibujo se aplica de igual manera en el software de diseño mecánico de su preferencia.
             
    p.mt-3(data-aos="fade-left") La serie A es uno de los formatos más extendidos en el tamaño del papel y en las plantillas de diseño e impresión utilizadas en la mayoría de software CAD. Este estándar de formato inicia en el A0 y va hasta el A8, cada formato de mayor orden representa la mitad del tamaño del formato inmediatamente anterior; es decir, el formato A8 es la mitad del tamaño del formato A7. En la siguiente tabla se puede observar las dimensiones en milímetros de cada formato y en la figura se puede observar la relación en tamaño de cada uno.

    .titulo-sexto.color-acento-contenido.mb-3.offset-lg-1
        p.titulo.pb-0.mb-0 <b>Tabla 1.</b> <i>Dimensiones en milímetros de los diferentes formatos de la serie A</i>

    .tabla-a.color-acento-contenido.mb-5.col-lg-10.offset-lg-1.mt-5
      table
        thead
          tr
            th Tamaño
            th Largo (mm)
            th Ancho (mm)
        tbody
          tr
            th A0
            th 1189
            th 841
          tr
            th A1
            th 841
            th 594,5
          tr
            th A2
            th 420,5
            th 841
          tr
            th A3
            th 420,5
            th 297
          tr
            th A4
            th 297
            th 210
          tr
            th A5
            th 210
            th 148

    .titulo-sexto.color-acento-contenido.mb-0.offset-lg-1
      p.titulo.pb-0.mb-0 <b>Figura 9.</b> <i>Relación de tamaños de los diferentes formatos de la serie A</i>
    .col.justify-content-center.align-items-center.mt-5
      figure
        img(src='@/assets/curso/temas/tema1/12.svg', alt='Texto que describa la imagen')

    ul.lista-ul.mb-3.mt-5
      li 
        i.lista-ul__vineta
        | #[strong Unidades de medida e instrumentos básicos ]
    p.mt-3(data-aos="fade-left") El empleo del sistema internacional de unidades métrico, y en algunas ocasiones el sistema inglés, permite que la interpretación y lectura del dibujo mecánico sea universal. Para las unidades de longitud en el sistema internacional de unidades se emplea el metro junto con sus prefijos expresados en potencias de 10 (tabla 2), mientras que, en el sistema inglés, otro sistema muy comúnmente empleado sobre todo para expresar diámetros, la unidad que se emplea es la pulgada (in); una pulgada equivale a 2,5 centímetros.

    .titulo-sexto.color-acento-contenido.mb-3.offset-lg-1(data-aos="fade-up")
      p.titulo.pb-0.mb-0 <b>Tabla 2.</b> <i>Dimensiones en milímetros de los diferentes formatos de la serie A</i>
    .col.justify-content-center.align-items-center.mt-5
      figure
        img(src='@/assets/curso/temas/tema1/13.svg', alt='Texto que describa la imagen') 
            
    .col.justify-content-center.align-items-center.mt-5(data-aos="fade-up")
      figure
        img(src='@/assets/curso/temas/tema1/14.svg', alt='Texto que describa la imagen')

    p.mt-5(data-aos="fade-left") Para ejemplificar se puede tomar la siguiente situación: se requiere que el chasis de un equipo tenga postes de sujeción para las tarjetas electrónicas espaciados entre sí 4,5 cm formando un cuadrado perfecto entre los postes, durante el proceso de fabricación, en la comprobación de las medidas, arrojó como resultado que los postes quedaron con un espaciado de 5 cm imposibilitando un correcto ensamble de las tarjetas electrónicas en los postes ubicados dentro del chasis del equipo. 

    .titulo-sexto.color-acento-contenido.mb-0.offset-lg-1.mt-5(data-aos="fade-left")
      p.titulo.pb-0.mb-0 <b>Figura 11.</b> <i>Diseño de mecánico establecido</i>
    .col.justify-content-center.align-items-center.mt-5(data-aos="fade-left")
      figure
        img(src='@/assets/curso/temas/tema1/15.png', alt='Texto que describa la imagen') 

    p.mt-5 Una falla, aunque milimétrica, en la interpretación de la medida puede ocasionar que una pieza diseñada a través del dibujo mecánico no sea funcional lo que ocasiona reprocesos y pérdidas económicas dentro de un sistema de producción. 
    | Dentro de los instrumentos más utilizados se encuentra la regla milimetrada, el escalímetro y el transportador. 

    AcordionA.mb-5.mt-5(data-aos="zoom-out-up")(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      .row(titulo="Regla milimetrada")
        .col-md-5.justify-content-center.align-items-center.mt-3
          .titulo-sexto.color-acento-contenido.mb-0
            p.titulo.pb-0.mb-0 <b>Figura 12.</b> <i>Regla milimetrada</i>
          .col.justify-content-center.align-items-center.mt-5
            figure
             img(src='@/assets/curso/temas/tema1/16.svg', alt='Texto que describa la imagen')        
          
        .col-md-6.offset-lg-1
          p La regla milimetrada se emplea para efectuar mediciones de longitud. Se caracteriza por estar fabricada en plástico, metal o madera o materiales generalmente rígidos, es alargada y su tamaño varía en función de las necesidades de medición.
          p Por una de las caras de la regla se tiene un patrón de rayas largas numeradas consecutivamente (0, 1, 2, 3, 4 …) que representan los centímetros, mientras que los milímetros se representan con un patrón de rayas cortas ubicadas en cantidades de 10 entre las rayas más largas o los centímetros (figura 8).

      .row.justify-content-center.align-items-center.my-lg-4(titulo="Escalímetro")
        .col-md-5.justify-content-center.align-items-center
          .titulo-sexto.color-acento-contenido.mb-0
            p.titulo.pb-0.mb-0 <b>Figura 13.</b> <i>Escalas de un dibujo</i>
          .col.justify-content-center.align-items-center.mt-5
            figure
             img(src='@/assets/curso/temas/tema1/17.svg', alt='Texto que describa la imagen')        
        .col-md-6.offset-lg-1.mb-4.mb-md-0
          p Otro de los instrumentos empleados para la medición es el escalímetro: es una regla de forma triangular en la que por cada una de sus caras se visualiza una escala; las escalas permiten representar objetos muy grandes (un edificio de 15 metros de altura) en plantillas y formatos de papel reducidos.
          p La forma adecuada en la que se utiliza un escalímetro es la siguiente: siempre en la cara de la escala que se desea utilizar se lee de izquierda a derecha, el número 0 (extremo izquierdo) indica el comienzo y el último número el final (extremo derecho), la escala representa la ampliación o reducción del objeto o estructura medida o creada con el escalímetro; por ejemplo, una escala 1:100 indica que 1 centímetro de trazo representa 100 centímetros en tamaño real, en otras palabras es una escala de reducción. Mientras que una escala 50:1 indica que 50 cm de trazo representan 1 centímetro en tamaño real es decir una que es una escala de aumento.

      .row.justify-content-center.align-items-center.my-lg-4(titulo="Transportador")
        .col-md-5.justify-content-center.align-items-center
          .col.justify-content-center.align-items-center.mt-5
            figure
             img(src='@/assets/curso/temas/tema1/18.png', alt='Texto que describa la imagen')        
        .col-md-6.offset-lg-1.mb-4.mb-md-0
          p El transportador de ángulos es un instrumento empleado en la medición y creación de ángulos en el dibujo. Se caracteriza por estar fabricado en plástico transparente, metal o madera en forma de círculo (360 grados) o semicírculo (180 grados).

    #t_1_1.titulo-segundo.mt-2.color-acento-contenido(data-aos="zoom-out-left")
      h2 1.2  Bocetos y métodos de interpretación de planos

    p.mt-2(data-aos="fade-left") Los bocetos, también conocidos como bosquejos, son las fases preliminares para el diseño y la creación de un dibujo, el cual por lo general se realiza a mano sin la necesidad de un instrumento de medida.

    .col.justify-content-center.align-items-center.mt-5(data-aos="fade-up")
      figure
        img(src='@/assets/curso/temas/tema1/19.svg', alt='Texto que describa la imagen')

    p.mt-5(data-aos="fade-left") En el dibujo técnico se destacan tres tipos de boceto, tal como se presentan a continuación.

    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      SlyderB.mb-2(:datos="datosSlyder")
    
    p(data-aos="fade-left") Ahora bien, previamente a un boceto, se han interpretado determinados planos que permitirán ser la base o el fundamento para el diseño mecánico de una pieza específica. Por lo tanto, se puede decir que los planos son documentos elaborados para representar una idea u objeto mediante técnicas de dibujo técnico. De ahí, la importancia de entender la forma en la que se presenta ese dibujo teniendo en cuenta sus detalles, representaciones gráficas, datos y cualquier otro elemento propio de su diseño.



</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    datosSlyder: [
      {
        titulo: 'El boceto burdo',
        texto:
          'Se caracteriza por ser, de los tres, el que menos detalle tiene y el más impreciso a la hora de su realización.​',
        imagen: require('@/assets/curso/temas/tema1/20.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'El boceto comprensivo',
        texto:
          'Elabora un diseño preliminar del dibujo respetando algunos detalles que no se tuvieron en cuenta en el anterior.​',
        imagen: require('@/assets/curso/temas/tema1/21.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'El boceto dummy',
        texto:
          'Se acerca más a la idea real del diseño final, se caracteriza por ser el más detallado y con un alto grado de precisión en los detalles.​',
        imagen: require('@/assets/curso/temas/tema1/22.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
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

<style lang="sass"></style>
