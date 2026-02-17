export const clinic = {
  name: "Francisco Arenas Psicólogo Córdoba",
  logo: "/images/logo.png",
  tagline: "Psicología con humanidad y experiencia en Córdoba",
  description: "Francisco Arenas Psicólogo es un centro sanitario autorizado en Córdoba especializado en terapia cognitivo-conductual con más de 30 años de experiencia. Ofrecemos atención personalizada en ansiedad, depresión, terapia de pareja, psicología infantil y peritaje judicial. Centro de Psicología Ollerías cuenta con 4.8 estrellas en Google y reconocimientos nacionales por su excelencia profesional.",
  colors: {
    primary: "#9c8779",
    secondary: "#452a2b",
    accent: "#8b5b59",
    neutral: "#f7f5f4"
  },
  phone: "957 47 12 58",
  whatsapp: "+34957471258",
  whatsappMessage: "Hola, me gustaría solicitar información sobre vuestros servicios de psicología.",
  email: "",
  address: {
    street: "Av. de las Ollerías, 23, Centro, 14001 Córdoba, España",
    city: "Córdoba",
    province: "Álava",
    postalCode: "14001",
    country: "España"
  },
  googleMapsUrl: "https://maps.google.com/?cid=10898050720271148387&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
  googleMapsEmbed: "https://maps.google.com/maps?q=Francisco%20Arenas%20Psic%C3%B3logo%20C%C3%B3rdoba%20%4037.8922%2C-4.77341&z=16&output=embed",
  coordinates: {
    lat: 37.8922,
    lng: -4.77341
  },
  schedule: [
    {
      days: "lunes - viernes",
      hours: "9:00–22:00"
    },
    {
      days: "sábado - domingo",
      hours: "18:00–21:00"
    }
  ],
  social: {
    instagram: null,
    facebook: null,
    linkedin: null,
    tiktok: null
  },
  reviews: {
    rating: 4.8,
    count: 72,
    url: "https://maps.google.com/?cid=10898050720271148387&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
    featured: [
      {
        author: "Eva Campillo",
        rating: 5,
        text: "Desde la adolescencia he pasado por innumerables \"profesionales\" de la salud mental y había perdido la esperanza.\nEl destino me llevó a D. Francisco el año pasado, con 43 años. Encontrarlo me cambió la vida y, desde entonces, mantengo consultas asiduas porque se ha convertido en mi guía y referente.\nNo basta con tener estudios especializados y mil diplomas colgados, lo imprescindible es la capacidad de ver más allá para sentir y trasmitir la psicología real.\nD. Francisco tiene una mente privilegiada que le permite acceder al paciente de forma integral y comprender su situación verdadera para, así, ayudarlo de manera realista y efectiva.\nProfesionalidad, puntualidad, compromiso, eficacia, eficiencia, claridad, empatía, sinceridad, honradez, atención personalizada, interés real, escucha activa, ausencia de enjuiciamientos...\nY a Carmen, su secretaria, un diez en su labor, fundamental para complementar el gran equipo que forman.",
        date: "Hace 3 meses"
      },
      {
        author: "M GL",
        rating: 5,
        text: "En un primer momento, acudí a Don Francisco porque presentaba mucha ansiedad, y nada más al entrar en consulta desde el minuto uno, sabía que estaba en el sitio adecuado. Es un gran profesional con una gran humanidad y humildad, sabe escuchar y empatizar. Hace un tiempo me quedé embarazada y la ansiedad salió de nuevo a flote, me ayudó mucho en el proceso a sentirme segura y sin miedos en un momento tan vulnerable. También me gustaría destacar la gran amabilidad, apoyo y humanidad de Carmen, su secretaria, es estupenda. Solo tengo palabras de agradecimiento para ellos 😊😊",
        date: "Hace 4 meses"
      },
      {
        author: "Roberto Merino",
        rating: 5,
        text: "D. Francisco supo influir en mí en uno de los momentos más bajos de mi vida y consiguió sembrar un cambio en mí que siempre le agradeceré. Recomiendo recurrir a él y a su consulta en cualquier momento de necesidad de ayuda. Mención especial a Carmen por su atención con los pacientes siempre.",
        date: "Hace 4 meses"
      },
      {
        author: "Maria Cuesta",
        rating: 5,
        text: "Es un gran profesional,con mucha disposición para ayudarte y no solo un buen psicólogo sino un maravilloso perito judicial,con muchos recursos y experiencia.Y Carmen su administrativa es un encanto hace lo que sea por cuadrar la agenda,se agradece muchísimo,lo recomiendo 💯",
        date: "Hace 5 meses"
      },
      {
        author: "Rafa",
        rating: 5,
        text: "Don Francisco ha sido un punto de inflexión en un momento de muchos cambios en mi vida; sin duda, volvería a ponerme en sus manos. Mención especial para Carmen, siempre muy atenta.",
        date: "Hace 2 meses"
      }
    ]
  },
  services: [
    {
      id: "ansiedad",
      name: "Tratamiento de Ansiedad",
      description: "Especialistas en trastornos de ansiedad, ataques de pánico y agorafobia. Utilizamos técnicas cognitivo-conductuales avaladas científicamente para que recuperes el control de tu vida. Te ayudamos a identificar los desencadenantes y desarrollar herramientas efectivas para gestionar la ansiedad.",
      benefits: [
        "Reducción significativa de síntomas en pocas sesiones",
        "Técnicas prácticas para el día a día",
        "Seguimiento personalizado de tu evolución"
      ],
      icon: "Brain"
    },
    {
      id: "depresion",
      name: "Terapia para la Depresión",
      description: "Tratamiento especializado para superar la depresión y la distimia. Trabajamos desde la comprensión profunda de tu situación para ayudarte a recuperar la ilusión y el bienestar. Enfoque integral que aborda pensamientos, emociones y conductas.",
      benefits: [
        "Recuperación del bienestar emocional",
        "Herramientas para prevenir recaídas",
        "Atmósfera de comprensión sin juicios"
      ],
      icon: "Heart"
    },
    {
      id: "terapia-pareja",
      name: "Terapia de Pareja y Sexología",
      description: "Especialistas en trastornos sexuales y de pareja. Ayudamos a mejorar la comunicación, resolver conflictos y recuperar la conexión emocional. Atención confidencial en un espacio seguro donde ambos os sentiréis escuchados.",
      benefits: [
        "Mejora la comunicación y el entendimiento",
        "Resolución efectiva de conflictos",
        "Recuperación de la intimidad"
      ],
      icon: "Heart"
    },
    {
      id: "psicologia-infantil",
      name: "Psicología Infantil y Adolescentes",
      description: "Atención especializada para niños y adolescentes con dificultades emocionales, conductuales o de aprendizaje. Incluye reeducación psicopedagógica y atención a altas capacidades. Trabajamos en colaboración con las familias para lograr cambios duraderos.",
      benefits: [
        "Intervención temprana efectiva",
        "Orientación familiar incluida",
        "Ambiente adaptado a menores"
      ],
      icon: "Baby"
    },
    {
      id: "neuropsicologia",
      name: "Rehabilitación Neuropsicológica",
      description: "Evaluación y rehabilitación neuropsicológica para personas con daño cerebral, deterioro cognitivo o problemas de memoria y atención. Utilizamos pruebas psicométricas de máxima calidad y diseñamos programas personalizados de estimulación cognitiva.",
      benefits: [
        "Diagnóstico preciso con tests validados",
        "Programas individualizados de rehabilitación",
        "Seguimiento exhaustivo de la evolución"
      ],
      icon: "Brain"
    },
    {
      id: "psicologia-forense",
      name: "Psicología Forense y Peritaje Judicial",
      description: "Experto acreditado en psicología jurídica y forense a nivel nacional. Realizamos informes periciales para procesos judiciales con máximo rigor profesional. Miembro del Grupo de Trabajo de Psicología Jurídica del Colegio Oficial de Psicología.",
      benefits: [
        "Acreditación oficial como experto forense",
        "Informes con validez judicial",
        "Más de 30 años de experiencia"
      ],
      icon: "Target"
    },
    {
      id: "terapia-grupal",
      name: "Psicoterapia Grupal",
      description: "Grupos terapéuticos dirigidos por Francisco Arenas para trabajar problemáticas específicas en un entorno de apoyo mutuo. La experiencia compartida potencia el proceso de cambio y ofrece nuevas perspectivas.",
      benefits: [
        "Apoyo de personas en situaciones similares",
        "Coste más accesible que terapia individual",
        "Aprendizaje de experiencias compartidas"
      ],
      icon: "User"
    },
    {
      id: "terapia-online",
      name: "Videoconsulta Online",
      description: "Sesiones de psicoterapia por videollamada con la misma calidad y confidencialidad que la consulta presencial. Ideal si tienes dificultades de movilidad, horarios complicados o prefieres la comodidad de tu hogar.",
      benefits: [
        "Misma calidad que consulta presencial",
        "Flexibilidad horaria",
        "Máxima confidencialidad garantizada"
      ],
      icon: "Monitor"
    }
  ],
  process: [
    {
      step: 1,
      title: "Primer Contacto",
      description: "Llama al 957 47 12 58 o envía un mensaje. Carmen, nuestra secretaria, te atenderá con amabilidad y te ayudará a encontrar el mejor horario para tu primera consulta. Entendemos que pedir ayuda no es fácil."
    },
    {
      step: 2,
      title: "Primera Visita Psicológica",
      description: "En la primera sesión, Francisco realizará una evaluación completa de tu situación utilizando su experiencia de más de 30 años. Te sentirás escuchado, comprendido y sin juicios desde el primer minuto. Juntos estableceréis los objetivos terapéuticos."
    },
    {
      step: 3,
      title: "Tratamiento Personalizado",
      description: "Iniciarás un proceso terapéutico 100% adaptado a ti con terapia cognitivo-conductual, el enfoque más eficaz y rápido. Sesiones regulares donde trabajarás aspectos concretos y aprenderás herramientas prácticas para tu día a día."
    },
    {
      step: 4,
      title: "Recupera tu Bienestar",
      description: "Con compromiso y trabajo conjunto, lograrás los cambios que buscas. Francisco te acompañará hasta que recuperes tu equilibrio emocional y te sientas capaz de afrontar la vida con seguridad. Seguimiento para consolidar los avances."
    }
  ],
  whyUs: [
    {
      title: "Más de 30 Años de Experiencia",
      description: "Francisco Arenas cuenta con más de tres décadas de trayectoria profesional, miles de sesiones realizadas y cientos de grupos terapéuticos dirigidos. Su experiencia avalada como psicólogo sanitario, forense y perito judicial garantiza un tratamiento de máxima calidad y eficacia.",
      icon: "Target"
    },
    {
      title: "4.8 Estrellas en Google (72 Reseñas)",
      description: "Nuestros pacientes destacan la humanidad, empatía, profesionalidad y resultados reales. Las opiniones reflejan que aquí encontrarás escucha activa, ausencia de juicios, atención personalizada y un equipo comprometido con tu bienestar. Carmen, nuestra secretaria, también recibe reconocimientos constantes por su amabilidad.",
      icon: "Heart"
    },
    {
      title: "Centro Sanitario Autorizado",
      description: "Centro de Psicología Ollerías está autorizado por la Consejería de Salud de la Junta de Andalucía con Registro Sanitario NICA nº 40211. Utilizamos pruebas psicométricas de máxima calidad y estamos registrados en la Agencia Española de Protección de Datos. Tu seguridad y privacidad están garantizadas.",
      icon: "Target"
    },
    {
      title: "Reconocimiento Nacional",
      description: "Francisco Arenas ha sido nominado al Top-Ten de psicólogos clínicos más destacados de España en 2017, 2018 y 2022. Certificado de Excelencia Doctoralia durante 9 años consecutivos. Acreditado como Experto en Psicología Jurídica y Forense a nivel nacional. Coordinador del Grupo de Clínica y Psicopatología del COP Andalucía Occidental.",
      icon: "Brain"
    }
  ],
  team: [
    {
      name: "Francisco Arenas",
      role: "Psicólogo Sanitario y Forense",
      image: "/images/team/placeholder.jpg",
      bio: "Psicólogos comprometidos con el bienestar emocional. En Francisco Arenas Psicólogo Córdoba ofrecemos un espacio seguro donde trabajar hacia una vida más plena y satisfactoria."
    },
    {
      name: "Carmen",
      role: "Secretaria",
      image: "/images/team/placeholder.jpg",
      bio: "Psicólogos comprometidos con el bienestar emocional. En Francisco Arenas Psicólogo Córdoba ofrecemos un espacio seguro donde trabajar hacia una vida más plena y satisfactoria."
    }
  ],
  gallery: [
    {
      src: "/images/hero.webp",
      alt: "Francisco Arenas Psicólogo Córdoba - Imagen 1"
    },
    {
      src: "/images/gallery/2.webp",
      alt: "Francisco Arenas Psicólogo Córdoba - Imagen 2"
    }
  ],
  faq: [
    {
      question: "¿Cómo sé si necesito ayuda psicológica?",
      answer: "Si sientes que tus problemas emocionales interfieren en tu vida diaria, te impiden disfrutar o te generan malestar constante, es momento de buscar ayuda profesional. En Francisco Arenas Psicólogo atendemos ansiedad, depresión, problemas de pareja, dificultades en la crianza y muchas otras situaciones. Pedir ayuda es un acto de valentía, no de debilidad."
    },
    {
      question: "¿Qué enfoque terapéutico utilizáis?",
      answer: "Trabajamos principalmente con terapia cognitivo-conductual, el enfoque que ha demostrado mediante numerosos estudios científicos ser el más eficaz y rápido para la mayoría de trastornos psicológicos. También incorporamos técnicas de EMDR, mindfulness, inteligencia emocional y reestructuración cognitiva según las necesidades de cada paciente. Todo tratamiento es 100% personalizado."
    },
    {
      question: "¿Cuánto dura el tratamiento psicológico?",
      answer: "La duración varía según cada persona y su problemática. Algunos pacientes notan mejoras significativas en pocas sesiones, mientras que otros procesos requieren más tiempo. En Francisco Arenas Psicólogo trabajamos con eficiencia para que logres tus objetivos en el menor tiempo posible, siempre respetando tu ritmo personal y garantizando cambios duraderos."
    },
    {
      question: "¿Atendéis a niños y adolescentes?",
      answer: "Sí, Francisco Arenas es psicólogo infantil especializado en trastornos en niños y adolescentes. Tratamos problemas de conducta, dificultades emocionales, trastornos del aprendizaje y atención a altas capacidades. También ofrecemos reeducación familiar y psicopedagógica. Trabajamos siempre en colaboración con las familias para lograr los mejores resultados."
    },
    {
      question: "¿Realizáis informes periciales para juicios?",
      answer: "Sí, Francisco Arenas está acreditado como Experto en Psicología Jurídica y Forense a nivel nacional por el Consejo General de la Psicología de España. Realizamos peritajes judiciales con máximo rigor profesional y validez legal. Somos miembro del Grupo de Trabajo de Psicología Jurídica del Colegio Oficial de Psicología de Andalucía Occidental."
    },
    {
      question: "¿Ofrecéis terapia online?",
      answer: "Sí, disponemos de videoconsulta online con la misma calidad y confidencialidad que las sesiones presenciales. Es una excelente opción si tienes dificultades de movilidad, horarios complicados o simplemente prefieres la comodidad de conectar desde casa. La tecnología nos permite mantener la misma cercanía y efectividad terapéutica."
    },
    {
      question: "¿Cómo se garantiza la confidencialidad?",
      answer: "En Centro de Psicología Ollerías trabajamos bajo estrictos protocolos de confidencialidad. Estamos registrados en la Agencia Española de Protección de Datos (LOPD) y somos un centro sanitario autorizado con Registro Sanitario NICA nº 40211. Todo lo que compartas en consulta está protegido por el secreto profesional. Tu privacidad es sagrada."
    },
    {
      question: "¿Qué valoración tenéis de vuestros pacientes?",
      answer: "Francisco Arenas Psicólogo cuenta con 4.8 estrellas sobre 5 en Google, basadas en 72 reseñas reales de pacientes. Además, hemos recibido el Certificado de Excelencia de Doctoralia durante 9 años consecutivos y fuimos nominados al Top-Ten de psicólogos más destacados de España en 2017, 2018 y 2022. Nuestros resultados hablan por sí solos."
    }
  ],
  seo: {
    titleTemplate: "%s | Francisco Arenas Psicólogo Córdoba",
    defaultTitle: "Francisco Arenas Psicólogo Córdoba | Centro Psicología",
    defaultDescription: "Psicólogo en Córdoba con +30 años de experiencia. Ansiedad, depresión, terapia de pareja, psicología infantil y peritaje judicial. Centro autorizado. 4.8★ en Google. Llama al 957 47 12 58",
    keywords: [
      "psicólogo Córdoba",
      "Francisco Arenas psicólogo",
      "psicología Córdoba",
      "terapia ansiedad Córdoba",
      "psicólogo infantil Córdoba",
      "terapia de pareja Córdoba",
      "perito psicólogo Córdoba",
      "psicología forense Córdoba",
      "Centro Psicología Ollerías",
      "neuropsicología Córdoba",
      "psicólogo Álava",
      "tratamiento depresión Córdoba"
    ],
    ogImage: "/og-image.jpg"
  },
  legal: {
    companyName: "Francisco Arenas Psicólogo Córdoba",
    cif: "",
    registeredAddress: "Av. de las Ollerías, 23, Centro, 14001 Córdoba, España, Córdoba, Álava"
  },
  heroHeadline: [
    "Tu Centro de",
    "Psicología",
    "en Córdoba"
  ],
  heroDescription: "En Centro de Psicología Ollerías encontrarás un espacio seguro donde sentirte comprendido sin juicios. Francisco Arenas, psicólogo sanitario y forense colegiado, ofrece tratamiento personalizado con terapia cognitivo-conductual, el enfoque más eficaz para recuperar tu bienestar emocional.",
  specialty: "Psicología Clínica y Forense",
  ctaLabel: "Tu Bienestar",
  ctaHeadline: "¿Necesitas apoyo profesional en un momento difícil?",
  ctaDescription: "Dar el paso para pedir ayuda es una decisión valiente. Contacta con nosotros y te acompañaremos en tu proceso de cambio con profesionalidad, empatía y máxima confidencialidad.",
  statsLabel: "Pacientes",
  schemaType: "PsychologicalTreatment",
  sectionCopy: {
    servicesLabel: "Nuestros Servicios",
    servicesTitle: "Tratamientos especializados",
    servicesDescription: "Soluciones profesionales adaptadas a tus necesidades de salud.",
    processLabel: "Cómo Trabajamos",
    processTitle: "Tu camino hacia la recuperación en 4 pasos",
    processDescription: "Un proceso simple y transparente diseñado para tu comodidad.",
    whyUsLabel: "Por Qué Elegirnos",
    whyUsTitle: "Tu salud, nuestra prioridad",
    whyUsDescription: "Combinamos experiencia, las mejores técnicas y un trato personalizado para cuidar de tu salud.",
    reviewsLabel: "Opiniones",
    reviewsTitle: "Lo que dicen nuestros pacientes",
    galleryLabel: "Instalaciones",
    galleryTitle: "Conoce nuestra clínica",
    galleryDescription: "Un espacio diseñado para tu bienestar y recuperación",
    faqLabel: "FAQ",
    faqTitle: "Preguntas frecuentes",
    faqDescription: "Resolvemos las dudas más comunes de nuestros pacientes.",
    locationLabel: "Ubicación",
    locationTitle: "Cómo llegar",
    teamLabel: "Nuestro Equipo",
    teamTitle: "Profesionales especializados",
    teamDescription: "Experiencia y dedicación al servicio de tu salud"
  }
}

export type Clinic = typeof clinic
