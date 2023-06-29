export default {
  global: {
    componenteFormativo: 'Modelado y herramientas de diseño',
    descripcionCurso:
      'Dentro de los aspectos contemplados en el desarrollo de productos electrónicos se encuentra el modelamiento mecánico, el cual permite materializar el concepto del producto inicial, para darle un acabo físico y estético que sea funcional y a la vez visualmente atractivo. Por tal razón se requiere de una elevada precisión y una notable optimización del tiempo y los recursos invertidos en el proceso.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Modelado de prototipos de productos electrónicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Dibujo técnico e instrumentos de modelado',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Métodos de interpretación de planos',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Herramientas de diseño mecánico',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Gestión documental',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_11_224204.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Dibujo para diseño de ingeniería',
      referencia:
        'Lieu, D. K., y Sorby, S. (2018). Dibujo para diseño de ingeniería. Cengage Learning.',
      tipo: 'Libro',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=6903',
    },
    {
      tema: 'Dibujo y diseño en ingeniería',
      referencia:
        'Jensen, C. H., Helsel, J. D., y Short, D. R. (2012). Dibujo y diseño en ingeniería. McGraw-Hill.',
      tipo: 'Libro',
      descarga: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=289',
    },
    {
      tema: 'Diseño y desarrollo de productos',
      referencia:
        'Ulrich, K. T., y Eppinger, S. D. (2013). Diseño y desarrollo de productos. McGraw-Hil.',
      tipo: 'Libro',
      descarga: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=281',
    },
  ],
  glosario: [
    {
      termino: 'Compás',
      significado:
        'Instrumento para dibujar circunferencias y arcos de gran precisión en el dibujo técnico. Está conformado por dos brazos que pueden estar articulados o no.',
    },
    {
      termino: 'Escala',
      significado:
        'Relación que existe entre las dimensiones del dibujo de un objeto y las dimensiones reales del mismo. La escala se define por dos números que determinan la relación entre el dibujo y la realidad.',
    },
    {
      termino: 'Modelado sólido',
      significado:
        'Modelado tridimensional de partes y montajes originalmente desarrollado para emplearse en la ingeniería mecánica, pero que actualmente se utiliza en todas las disciplinas de la ingeniería.',
    },
    {
      termino: 'Modelado tridimensional (3-D)',
      significado:
        'Modelado matemático en donde se crean las propiedades de apariencia, volumétricas, e inerciales de partes, montajes, o estructuras con la asistencia de computadoras y dispositivos de visualización.',
    },
    {
      termino: 'Simetría',
      significado:
        'Característica de un objeto en la que una mitad del mismo es una imagen de espejo de la otra mitad.',
    },
  ],
  referencias: [
    {
      referencia:
        'Biguri, I. (2016). <em>Instrumentos de dibujo.</em> Dibujo Técnico.',
      link: 'https://ibiguridt.wordpress.com/temas/materiales/',
    },
    {
      referencia: '3DMX. (s.f.). <em>¿Qué es el modelado 3D?</em>',
      link:
        'https://www.3d-mx.com/single-post/2019/09/08/-qu%C3%A9-es-el-modelado-mec%C3%A1nico?lang=es',
    },
    {
      referencia:
        'Jensen, C. H., Helsel, J. D., y Short, D. R. (2004). <em>Dibujo y diseño en ingeniería.</em> McGraw-Hill',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=289',
    },
    {
      referencia:
        'Lieu, D. K., y Sorby, S. (2018). <em>Dibujo para diseño de ingeniería.</em> Cengage Learning',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=6903',
    },
    {
      referencia:
        'Ulrich, K. T., y Eppinger, S. D. (2013). <em>Diseño y desarrollo de productos.</em> McGraw-Hill',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=281',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Ángela Rocío Sánchez Ruiz',
          cargo: 'Experto Temático',
          centro: 'Centro de Electricidad, Electrónica y Telecomunicaciones',
        },
        {
          nombre: 'Miroslava González H.',
          cargo: 'Diseñador y Evaluador Instruccional',
          centro: 'Centro de Gestión Industrial',
        },
        {
          nombre: 'Juan Gilberto Giraldo Cortés',
          cargo: 'Diseñador Instruccional',
          centro: '',
        },
        {
          nombre: 'Álix Cecilia Chinchilla Rueda',
          cargo: 'Evaluadora Instruccional',
          centro: 'Centro de Gestión Industrial',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñones',
          cargo: 'Asesora Metodológica',
          centro: 'Centro de Comercio y Servicios',
        },
        {
          nombre: 'Rafael Neftalí Lizcano',
          cargo: 'Asesor Pedagógico',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Darío González',
          cargo: 'Revisión y Corrección de Estilo',
          centro: 'Regional Tolima - Centro Agropecuario La Granja',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'José Jaime Luis Tang',
          cargo: 'Diseñador Web',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard e Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y Producción Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Sebastián Trujillo Afanador',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validación y Vinculación en Plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de Contenidos Accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
