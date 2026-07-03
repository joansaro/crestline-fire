export const languages = {
  es: 'ES',
  en: 'EN',
} as const;

export const defaultLang = 'es';
export type Lang = keyof typeof languages;

export const ui = {
  es: {
    // Brand
    'brand.name': 'Crestline',
    'brand.full': 'Departamento de Bomberos y Rescate de Crestline',
    'brand.short': 'Bomberos y Rescate de Crestline',
    'brand.tagline': 'Al servicio de nuestra comunidad desde 1953',

    // Emergency bar
    'emergency.label': 'Emergencias',
    'emergency.call': 'Llame al 9-1-1',
    'emergency.nonEmergency': 'No emergencias: (815) 555-0123',

    // Nav
    'nav.home': 'Inicio',
    'nav.about': 'Nosotros',
    'nav.apparatus': 'Vehículos',
    'nav.stations': 'Estaciones',
    'nav.personnel': 'Personal',
    'nav.news': 'Noticias',
    'nav.prevention': 'Prevención',
    'nav.join': 'Únete',
    'nav.contact': 'Contacto',
    'nav.menu': 'Menú',
    'nav.lang': 'Idioma',

    // Hero
    'hero.kicker': 'Departamento de Bomberos y Rescate',
    'hero.title': 'Listos para responder. Comprometidos contigo.',
    'hero.subtitle':
      'Brindamos servicios de emergencia, rescate y prevención las 24 horas, los 365 días del año, para mantener segura a la comunidad de Crestline.',
    'hero.cta.join': 'Únete al cuerpo',
    'hero.cta.contact': 'Contáctanos',

    // Stats
    'stats.title': 'En cifras',
    'stats.calls.value': '6,842',
    'stats.calls.label': 'Llamadas atendidas en 2025',
    'stats.firefighters.value': '78',
    'stats.firefighters.label': 'Bomberos y paramédicos',
    'stats.stations.value': '4',
    'stats.stations.label': 'Estaciones operativas',
    'stats.area.value': '92 km²',
    'stats.area.label': 'Área de cobertura',
    'stats.residents.value': '41,000',
    'stats.residents.label': 'Residentes protegidos',
    'stats.years.value': '72',
    'stats.years.label': 'Años de servicio',

    // Chief message
    'chief.kicker': 'Mensaje del Jefe',
    'chief.name': 'Jefe Marcus Delgado',
    'chief.role': 'Jefe de Bomberos',
    'chief.quote':
      '«En Crestline creemos que cada segundo cuenta. Nuestro equipo se entrena cada día para responder con rapidez, profesionalismo y compasión. Servir a esta comunidad es el mayor honor de nuestras carreras.»',
    'chief.cta': 'Conoce al departamento',

    // Call dashboard
    'dashboard.title': 'Estadísticas de llamadas',
    'dashboard.subtitle': 'Distribución de llamadas atendidas durante 2025.',
    'dashboard.fire': 'Incendios',
    'dashboard.ems': 'Emergencias médicas',
    'dashboard.rescue': 'Rescate',
    'dashboard.hazmat': 'Materiales peligrosos',
    'dashboard.service': 'Servicio público',
    'dashboard.monthly': 'Llamadas por mes',
    'dashboard.total': 'Total anual',

    // Stations preview
    'stations.kicker': 'Nuestras estaciones',
    'stations.title': 'Cuatro estaciones, una sola misión',
    'stations.subtitle':
      'Distribuidas estratégicamente para garantizar tiempos de respuesta menores a 6 minutos en todo el distrito.',
    'stations.viewAll': 'Ver todas las estaciones',
    'stations.crew': 'Dotación',
    'stations.apparatus': 'Vehículos',
    'stations.builtIn': 'Inaugurada en',

    // News preview
    'news.kicker': 'Últimas noticias',
    'news.title': 'Novedades del departamento',
    'news.viewAll': 'Ver todas las noticias',
    'news.readMore': 'Leer más',
    'news.subtitle': 'Comunicados, reconocimientos y actividades comunitarias.',

    // Join CTA
    'join.kicker': 'Únete a nosotros',
    'join.title': '¿Tienes vocación de servicio?',
    'join.subtitle':
      'Buscamos personas comprometidas para sumarse como bomberos, paramédicos y voluntarios. Te damos la formación; tú pones el corazón.',
    'join.cta': 'Postúlate hoy',
    'join.req.title': 'Requisitos básicos',
    'join.req1': 'Ser mayor de 18 años',
    'join.req2': 'Licencia de conducir vigente',
    'join.req3': 'Aprobar examen físico y médico',
    'join.req4': 'Disponibilidad para capacitación',
    'join.bullet.training': 'Formación pagada y certificada',
    'join.bullet.benefits': 'Beneficios y seguro médico',
    'join.bullet.team': 'Un equipo que es como familia',

    // Join page
    'join.page.title': 'Únete a Crestline',
    'join.page.intro':
      'Convertirte en bombero o paramédico es una de las decisiones más significativas de tu vida. Aquí encontrarás todo lo que necesitas para dar el primer paso.',
    'join.roles.title': 'Posiciones disponibles',
    'join.role.ff': 'Bombero / Paramédico',
    'join.role.ff.desc':
      'Posición de tiempo completo. Respuesta a emergencias, rescate y atención médica prehospitalaria.',
    'join.role.emt': 'Técnico en Emergencias Médicas (EMT)',
    'join.role.emt.desc':
      'Atención médica de emergencia y traslado de pacientes en nuestras ambulancias.',
    'join.role.volunteer': 'Bombero Voluntario',
    'join.role.volunteer.desc':
      'Apoya a la comunidad en tu tiempo libre con formación completa a cargo del departamento.',
    'join.role.cadet': 'Programa de Cadetes (16-18 años)',
    'join.role.cadet.desc':
      'Introducción al servicio de bomberos para jóvenes interesados en una carrera de servicio.',
    'join.form.title': 'Formulario de interés',
    'join.form.name': 'Nombre completo',
    'join.form.email': 'Correo electrónico',
    'join.form.phone': 'Teléfono',
    'join.form.position': 'Posición de interés',
    'join.form.message': 'Cuéntanos sobre ti',
    'join.form.submit': 'Enviar postulación',
    'join.form.note': 'Demostración — el formulario no envía datos reales.',

    // About page
    'about.title': 'Sobre el departamento',
    'about.mission.title': 'Nuestra misión',
    'about.mission.text':
      'Proteger vidas, propiedades y el medio ambiente de la comunidad de Crestline mediante la prevención, la educación, la preparación y una respuesta de emergencia rápida y profesional.',
    'about.vision.title': 'Nuestra visión',
    'about.vision.text':
      'Ser un departamento de bomberos modelo, reconocido por su excelencia operativa, su compromiso con la comunidad y el bienestar de su personal.',
    'about.values.title': 'Nuestros valores',
    'about.value1': 'Integridad',
    'about.value2': 'Servicio',
    'about.value3': 'Trabajo en equipo',
    'about.value4': 'Profesionalismo',
    'about.value5': 'Respeto',
    'about.value6': 'Valentía',
    'about.history.title': 'Nuestra historia',
    'about.history.p1':
      'El Departamento de Bomberos de Crestline fue fundado en 1953 por un grupo de 12 voluntarios que respondían con un único camión cisterna a las emergencias del pueblo.',
    'about.history.p2':
      'A lo largo de siete décadas hemos crecido hasta convertirnos en un cuerpo profesional con cuatro estaciones, una flota moderna y un equipo de 78 bomberos y paramédicos dedicados.',
    'about.history.p3':
      'Hoy atendemos cerca de 7,000 llamadas al año y servimos a más de 41,000 residentes en un área de 92 kilómetros cuadrados, manteniendo siempre el espíritu de servicio de nuestros fundadores.',
    'about.area.title': 'Área de servicio',
    'about.area.text':
      'Cubrimos el distrito de Crestline y las comunidades aledañas de Riverbend y Oak Hollow, con tiempos de respuesta promedio inferiores a 6 minutos.',

    // Apparatus page
    'apparatus.title': 'Nuestros vehículos',
    'apparatus.subtitle':
      'Una flota moderna y bien mantenida, lista para responder a cualquier tipo de emergencia.',
    'apparatus.assigned': 'Asignado a',
    'apparatus.year': 'Año',
    'apparatus.type': 'Tipo',

    // Stations page
    'stations.page.title': 'Estaciones',
    'stations.page.subtitle':
      'Cada estación está estratégicamente ubicada para servir a su sector de la comunidad.',
    'stations.address': 'Dirección',
    'stations.phone': 'Teléfono',
    'stations.crewSize': 'Personal por turno',

    // Personnel page
    'personnel.title': 'Personal y liderazgo',
    'personnel.subtitle':
      'Conoce al equipo que dirige y opera el Departamento de Bomberos de Crestline.',
    'personnel.command': 'Mando',
    'personnel.administration': 'Administración',
    'personnel.operations': 'Operaciones',
    'personnel.org.title': 'Organización',
    'personnel.org.text':
      'Nuestro departamento opera bajo una estructura de mando clara que garantiza coordinación efectiva en cada emergencia.',

    // News page
    'news.page.title': 'Noticias y eventos',
    'news.page.subtitle':
      'Mantente al día con las novedades, reconocimientos y actividades del departamento.',

    // Prevention page
    'prevention.title': 'Prevención y seguridad',
    'prevention.subtitle':
      'La mejor emergencia es la que nunca ocurre. Aprende a proteger tu hogar y tu familia.',
    'prevention.tips.title': 'Consejos de seguridad',
    'prevention.tip1.title': 'Detectores de humo',
    'prevention.tip1.text':
      'Instala detectores de humo en cada planta y dormitorio. Prueba las baterías cada mes y reemplázalas una vez al año.',
    'prevention.tip2.title': 'Plan de escape',
    'prevention.tip2.text':
      'Diseña y practica con tu familia un plan de escape con dos salidas por habitación y un punto de encuentro exterior.',
    'prevention.tip3.title': 'Cocina segura',
    'prevention.tip3.text':
      'Nunca dejes la cocina desatendida mientras cocinas. Mantén objetos inflamables lejos de la estufa.',
    'prevention.tip4.title': 'Extintores',
    'prevention.tip4.text':
      'Ten al menos un extintor en casa, conoce cómo usarlo y revisa su carga periódicamente.',
    'prevention.tip5.title': 'Monóxido de carbono',
    'prevention.tip5.text':
      'Instala detectores de monóxido de carbono cerca de las habitaciones. Es un gas inodoro y mortal.',
    'prevention.tip6.title': 'Electricidad',
    'prevention.tip6.text':
      'No sobrecargues los enchufes y reemplaza cables dañados. Desconecta aparatos que no uses.',
    'prevention.programs.title': 'Programas comunitarios',
    'prevention.program1': 'Inspecciones de seguridad gratuitas a domicilio',
    'prevention.program2': 'Charlas de prevención en escuelas',
    'prevention.program3': 'Instalación gratuita de detectores de humo',
    'prevention.program4': 'Jornadas de puertas abiertas',

    // Contact page
    'contact.title': 'Contáctanos',
    'contact.subtitle':
      'Para emergencias llama siempre al 9-1-1. Para consultas generales, utiliza los siguientes medios.',
    'contact.hq': 'Cuartel general',
    'contact.address': 'Dirección',
    'contact.phone': 'Teléfono (no emergencias)',
    'contact.email': 'Correo electrónico',
    'contact.hours': 'Horario de oficina',
    'contact.hours.value': 'Lunes a viernes, 8:00 a.m. – 5:00 p.m.',
    'contact.form.title': 'Envíanos un mensaje',
    'contact.form.name': 'Tu nombre',
    'contact.form.email': 'Tu correo',
    'contact.form.subject': 'Asunto',
    'contact.form.message': 'Tu mensaje',
    'contact.form.submit': 'Enviar mensaje',
    'contact.form.note': 'Demostración — el formulario no envía datos reales.',
    'contact.follow': 'Síguenos',

    // Footer
    'footer.quickLinks': 'Enlaces rápidos',
    'footer.contact': 'Contacto',
    'footer.follow': 'Síguenos',
    'footer.emergency': 'En caso de emergencia llame al 9-1-1',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.disclaimer':
      'Sitio web ficticio creado con fines de demostración. Crestline Fire & Rescue no es una entidad real.',

    // Misc
    'cta.learnMore': 'Saber más',
    'page.home': 'Inicio',
  },
  en: {
    // Brand
    'brand.name': 'Crestline',
    'brand.full': 'Crestline Fire & Rescue Department',
    'brand.short': 'Crestline Fire & Rescue',
    'brand.tagline': 'Serving our community since 1953',

    // Emergency bar
    'emergency.label': 'Emergency',
    'emergency.call': 'Call 9-1-1',
    'emergency.nonEmergency': 'Non-emergency: (815) 555-0123',

    // Nav
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.apparatus': 'Apparatus',
    'nav.stations': 'Stations',
    'nav.personnel': 'Personnel',
    'nav.news': 'News',
    'nav.prevention': 'Prevention',
    'nav.join': 'Join Us',
    'nav.contact': 'Contact',
    'nav.menu': 'Menu',
    'nav.lang': 'Language',

    // Hero
    'hero.kicker': 'Fire & Rescue Department',
    'hero.title': 'Ready to respond. Committed to you.',
    'hero.subtitle':
      'We provide emergency, rescue and prevention services 24 hours a day, 365 days a year, to keep the Crestline community safe.',
    'hero.cta.join': 'Join the department',
    'hero.cta.contact': 'Contact us',

    // Stats
    'stats.title': 'By the numbers',
    'stats.calls.value': '6,842',
    'stats.calls.label': 'Calls answered in 2025',
    'stats.firefighters.value': '78',
    'stats.firefighters.label': 'Firefighters & paramedics',
    'stats.stations.value': '4',
    'stats.stations.label': 'Operational stations',
    'stats.area.value': '36 sq mi',
    'stats.area.label': 'Coverage area',
    'stats.residents.value': '41,000',
    'stats.residents.label': 'Residents protected',
    'stats.years.value': '72',
    'stats.years.label': 'Years of service',

    // Chief message
    'chief.kicker': "Chief's Message",
    'chief.name': 'Chief Marcus Delgado',
    'chief.role': 'Fire Chief',
    'chief.quote':
      '"At Crestline we believe every second counts. Our team trains every day to respond with speed, professionalism and compassion. Serving this community is the greatest honor of our careers."',
    'chief.cta': 'Meet the department',

    // Call dashboard
    'dashboard.title': 'Call statistics',
    'dashboard.subtitle': 'Breakdown of calls answered during 2025.',
    'dashboard.fire': 'Fire',
    'dashboard.ems': 'Medical emergencies',
    'dashboard.rescue': 'Rescue',
    'dashboard.hazmat': 'Hazmat',
    'dashboard.service': 'Public service',
    'dashboard.monthly': 'Calls per month',
    'dashboard.total': 'Annual total',

    // Stations preview
    'stations.kicker': 'Our stations',
    'stations.title': 'Four stations, one mission',
    'stations.subtitle':
      'Strategically located to guarantee response times under 6 minutes across the entire district.',
    'stations.viewAll': 'View all stations',
    'stations.crew': 'Crew',
    'stations.apparatus': 'Apparatus',
    'stations.builtIn': 'Opened in',

    // News preview
    'news.kicker': 'Latest news',
    'news.title': 'Department updates',
    'news.viewAll': 'View all news',
    'news.readMore': 'Read more',
    'news.subtitle': 'Press releases, recognitions and community activities.',

    // Join CTA
    'join.kicker': 'Join us',
    'join.title': 'Do you have a calling to serve?',
    'join.subtitle':
      "We're looking for committed people to join us as firefighters, paramedics and volunteers. We provide the training; you bring the heart.",
    'join.cta': 'Apply today',
    'join.req.title': 'Basic requirements',
    'join.req1': 'Be at least 18 years old',
    'join.req2': 'Valid driver license',
    'join.req3': 'Pass physical and medical exam',
    'join.req4': 'Availability for training',
    'join.bullet.training': 'Paid, certified training',
    'join.bullet.benefits': 'Benefits and health insurance',
    'join.bullet.team': 'A team that feels like family',

    // Join page
    'join.page.title': 'Join Crestline',
    'join.page.intro':
      'Becoming a firefighter or paramedic is one of the most meaningful decisions of your life. Here you will find everything you need to take the first step.',
    'join.roles.title': 'Open positions',
    'join.role.ff': 'Firefighter / Paramedic',
    'join.role.ff.desc':
      'Full-time position. Emergency response, rescue and prehospital medical care.',
    'join.role.emt': 'Emergency Medical Technician (EMT)',
    'join.role.emt.desc':
      'Emergency medical care and patient transport aboard our ambulances.',
    'join.role.volunteer': 'Volunteer Firefighter',
    'join.role.volunteer.desc':
      'Support the community in your free time with full training provided by the department.',
    'join.role.cadet': 'Cadet Program (ages 16-18)',
    'join.role.cadet.desc':
      'Introduction to the fire service for young people interested in a career of service.',
    'join.form.title': 'Interest form',
    'join.form.name': 'Full name',
    'join.form.email': 'Email address',
    'join.form.phone': 'Phone',
    'join.form.position': 'Position of interest',
    'join.form.message': 'Tell us about yourself',
    'join.form.submit': 'Submit application',
    'join.form.note': 'Demo — the form does not send real data.',

    // About page
    'about.title': 'About the department',
    'about.mission.title': 'Our mission',
    'about.mission.text':
      'To protect the lives, property and environment of the Crestline community through prevention, education, preparedness and a fast, professional emergency response.',
    'about.vision.title': 'Our vision',
    'about.vision.text':
      'To be a model fire department, recognized for operational excellence, commitment to the community and the wellbeing of its personnel.',
    'about.values.title': 'Our values',
    'about.value1': 'Integrity',
    'about.value2': 'Service',
    'about.value3': 'Teamwork',
    'about.value4': 'Professionalism',
    'about.value5': 'Respect',
    'about.value6': 'Courage',
    'about.history.title': 'Our history',
    'about.history.p1':
      'The Crestline Fire Department was founded in 1953 by a group of 12 volunteers who responded to the town’s emergencies with a single tanker truck.',
    'about.history.p2':
      'Over seven decades we have grown into a professional department with four stations, a modern fleet and a team of 78 dedicated firefighters and paramedics.',
    'about.history.p3':
      'Today we answer nearly 7,000 calls a year and serve more than 41,000 residents across a 36 square mile area, always keeping the spirit of service of our founders.',
    'about.area.title': 'Service area',
    'about.area.text':
      'We cover the Crestline district and the neighboring communities of Riverbend and Oak Hollow, with average response times under 6 minutes.',

    // Apparatus page
    'apparatus.title': 'Our apparatus',
    'apparatus.subtitle':
      'A modern, well-maintained fleet ready to respond to any kind of emergency.',
    'apparatus.assigned': 'Assigned to',
    'apparatus.year': 'Year',
    'apparatus.type': 'Type',

    // Stations page
    'stations.page.title': 'Stations',
    'stations.page.subtitle':
      'Each station is strategically located to serve its sector of the community.',
    'stations.address': 'Address',
    'stations.phone': 'Phone',
    'stations.crewSize': 'Crew per shift',

    // Personnel page
    'personnel.title': 'Personnel & leadership',
    'personnel.subtitle':
      'Meet the team that leads and operates the Crestline Fire Department.',
    'personnel.command': 'Command staff',
    'personnel.administration': 'Administration',
    'personnel.operations': 'Operations',
    'personnel.org.title': 'Organization',
    'personnel.org.text':
      'Our department operates under a clear chain of command that ensures effective coordination on every emergency.',

    // News page
    'news.page.title': 'News & events',
    'news.page.subtitle':
      'Stay up to date with department news, recognitions and activities.',

    // Prevention page
    'prevention.title': 'Prevention & safety',
    'prevention.subtitle':
      'The best emergency is the one that never happens. Learn how to protect your home and family.',
    'prevention.tips.title': 'Safety tips',
    'prevention.tip1.title': 'Smoke detectors',
    'prevention.tip1.text':
      'Install smoke detectors on every floor and bedroom. Test the batteries every month and replace them once a year.',
    'prevention.tip2.title': 'Escape plan',
    'prevention.tip2.text':
      'Design and practice a family escape plan with two exits per room and an outdoor meeting point.',
    'prevention.tip3.title': 'Kitchen safety',
    'prevention.tip3.text':
      'Never leave the kitchen unattended while cooking. Keep flammable items away from the stove.',
    'prevention.tip4.title': 'Fire extinguishers',
    'prevention.tip4.text':
      'Keep at least one extinguisher at home, know how to use it and check its charge regularly.',
    'prevention.tip5.title': 'Carbon monoxide',
    'prevention.tip5.text':
      'Install carbon monoxide detectors near bedrooms. It is an odorless and deadly gas.',
    'prevention.tip6.title': 'Electrical safety',
    'prevention.tip6.text':
      'Do not overload outlets and replace damaged cords. Unplug appliances you are not using.',
    'prevention.programs.title': 'Community programs',
    'prevention.program1': 'Free home safety inspections',
    'prevention.program2': 'Fire prevention talks at schools',
    'prevention.program3': 'Free smoke detector installation',
    'prevention.program4': 'Open house days',

    // Contact page
    'contact.title': 'Contact us',
    'contact.subtitle':
      'For emergencies always call 9-1-1. For general inquiries, use the channels below.',
    'contact.hq': 'Headquarters',
    'contact.address': 'Address',
    'contact.phone': 'Phone (non-emergency)',
    'contact.email': 'Email',
    'contact.hours': 'Office hours',
    'contact.hours.value': 'Monday to Friday, 8:00 a.m. – 5:00 p.m.',
    'contact.form.title': 'Send us a message',
    'contact.form.name': 'Your name',
    'contact.form.email': 'Your email',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Your message',
    'contact.form.submit': 'Send message',
    'contact.form.note': 'Demo — the form does not send real data.',
    'contact.follow': 'Follow us',

    // Footer
    'footer.quickLinks': 'Quick links',
    'footer.contact': 'Contact',
    'footer.follow': 'Follow us',
    'footer.emergency': 'In case of emergency call 9-1-1',
    'footer.rights': 'All rights reserved.',
    'footer.disclaimer':
      'Fictional website created for demonstration purposes. Crestline Fire & Rescue is not a real entity.',

    // Misc
    'cta.learnMore': 'Learn more',
    'page.home': 'Home',
  },
} as const;
