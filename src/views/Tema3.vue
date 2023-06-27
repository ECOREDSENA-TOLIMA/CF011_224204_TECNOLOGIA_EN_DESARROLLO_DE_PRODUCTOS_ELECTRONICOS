<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Gestión documental

    p.mt-3(data-aos="fade-left") En el diseño mecánico, al igual que en todo proceso, se generan documentos que forman parte de la gestión del proyecto y que se deben presentar de forma clara y organizada evitando posibles errores de interpretación. La mayoría de la documentación presentada en el dibujo mecánico está asociada con los artes de la pieza, y lo complejo que pueda llegar a ser dependerá estrictamente del objeto realizado.
    p Por tal razón, la masificación en el uso de herramientas de software asistido por computador ha permitido que desde el mismo programa se pueda realizar la gestión de dicha documentación teniendo controles de versiones y cambios realizados a un proyecto en curso.
    p Dentro de la gestión documental están los informes y en ellos se encuentran los siguientes documentos.

    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      SlyderB.mb-2(:datos="datosSlyder")

    p(data-aos="fade-left") A los informes finales, presentados una vez culminada la etapa del dibujo mecánico, se anexan los documentos técnicos de la pieza diseñada, como, por ejemplo, la documentación gráfica necesaria para la fabricación de las piezas mecánicas en máquinas de control numérico y centros de mecanizado.

    .row.mt-5
      .titulo-sexto.color-acento-contenido.mb-0.offset-lg-1(data-aos="fade-left")
        p.titulo.pb-0.mb-0 <b>Figura 19.</b> <i>Planos</i>

    .col.justify-content-center.align-items-center.mt-5(data-aos="fade-up")
      figure
        img(src='@/assets/curso/temas/tema3/3.svg', alt='Texto que describa la imagen')
    br
    figcaption Nota. Tomado de pxfuel.com



</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Las órdenes de trabajo',
        texto:
          'Se pueden dividir en dos o más dependiendo del número de etapas o dependencias que estén involucradas en el proceso de diseño mecánico; las órdenes de trabajo de diseño mecánico contendrán toda la información de los requerimientos y especificaciones de la pieza u objeto a diseñar.​​',
        imagen: require('@/assets/curso/temas/tema3/1.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Informe final',
        texto:
          'Finalizada la etapa de diseño se realiza un informe con los resultados obtenidos y la documentación técnica para la fabricación y ensamble de la pieza mecánica. Este informe deberá contener las consideraciones y observaciones especiales que se requieran para un correcto proceso de fabricación.​',
        imagen: require('@/assets/curso/temas/tema3/2.png'),
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
