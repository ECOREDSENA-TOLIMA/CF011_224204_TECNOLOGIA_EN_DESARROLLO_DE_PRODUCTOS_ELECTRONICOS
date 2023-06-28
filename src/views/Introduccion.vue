<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row   
      .col-sm-12.mb-3.col-lg-12.mt-3(data-aos="zoom-in-up")
        figure
          img(src='@/assets/curso/introduccion/1.svg', alt='')
    
    p.mt-3(data-aos="fade-left") El dibujo históricamente ha sido una forma de comunicación importante para la humanidad, ya que le ha permitido expresar ideas, describir su entorno, narrar historias, graficar objetos inanimados y animados, entre otros. Por tal razón, el dibujo ha estado presente de la mano de la evolución del ser humano.  
    p.mt-3(data-aos="fade-left") Además, se encuentra presente en diferentes ramas de la ingeniería y las ciencias y es posible representar dibujos o bosquejos de una casa, en arquitectura, o realizar los planos eléctricos de la misma. En electrónica se emplea el dibujo para realizar esquemas y planos electrónicos, tal como se aprecia en la siguiente figura.

    .row
      .titulo-sexto.color-acento-contenido.mb-0.offset-lg-1(data-aos="fade-left")
        p.titulo.pb-0.mb-0 <b>Figura 1.</b> <i>Ejemplo de dibujos empleados en diferentes áreas</i>
    .col-sm-12.mb-3.col-lg-12.mt-3(data-aos="zoom-in-up")
        figure
          img(src='@/assets/curso/introduccion/2.svg', alt='')

    p.mt-3(data-aos="fade-left") El dibujo técnico, que es la base para la mayoría de las representaciones gráficas empleadas en las diferentes áreas de las ciencias, utiliza nomenclatura estandarizada que facilita su lectura e interpretación en cualquier parte del mundo.
    
    .row.justify-content-center.align-items-center.mb-3.mt-3
      .col-sm-12.col-lg-12.mb-4.mb-md-0(data-aos="fade-up")
        .cajon.color-primario.pt-4.px-4.pb-3.caja_flotante_azul
          .row.justify-content-center.align-items-center.py-0
            .col-sm-12.col-lg-2.px-5
              figure
                img(src='@/assets/curso/introduccion/3.svg', alt='')
            .col-sm-12.col-lg-10
              p.px-1.pt-1.pb-2(data-aos="fade-up") La ISO y la ANSI, instituciones encargadas de redactar normas, diseñaron las más empleadas en el dibujo técnico (Jensen, Helsel y Short, 2012, p. 3 ).

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
