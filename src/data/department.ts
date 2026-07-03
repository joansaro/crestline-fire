import type { Lang } from '../i18n/ui';

export type Bilingual = Record<Lang, string>;

export const contact = {
  address: '1200 Crestline Avenue, Crestline, IL 61073',
  phone: '(815) 555-0123',
  emergency: '911',
  email: 'info@crestlinefire.example',
  social: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    twitter: 'https://twitter.com',
    youtube: 'https://youtube.com',
  },
};

export interface Station {
  id: string;
  number: number;
  name: Bilingual;
  address: string;
  phone: string;
  crew: number;
  apparatus: number;
  built: number;
  image: string;
}

export const stations: Station[] = [
  {
    id: 'station-1',
    number: 1,
    name: { es: 'Estación Central', en: 'Central Station' },
    address: '1200 Crestline Avenue, Crestline',
    phone: '(815) 555-0101',
    crew: 12,
    apparatus: 5,
    built: 1968,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Willits_Fire_Station_54_-_February_2023_-_Sarah_Stierch_03.jpg/1920px-Willits_Fire_Station_54_-_February_2023_-_Sarah_Stierch_03.jpg',
  },
  {
    id: 'station-2',
    number: 2,
    name: { es: 'Estación Riverbend', en: 'Riverbend Station' },
    address: '480 River Road, Riverbend',
    phone: '(815) 555-0102',
    crew: 8,
    apparatus: 3,
    built: 1985,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Willits_Fire_Station_54_-_February_2023_-_Sarah_Stierch_05.jpg/1920px-Willits_Fire_Station_54_-_February_2023_-_Sarah_Stierch_05.jpg',
  },
  {
    id: 'station-3',
    number: 3,
    name: { es: 'Estación Oak Hollow', en: 'Oak Hollow Station' },
    address: '77 Hollow Lane, Oak Hollow',
    phone: '(815) 555-0103',
    crew: 6,
    apparatus: 2,
    built: 2001,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Willits_Fire_Station_54_-_February_2023_-_Sarah_Stierch_04.jpg/1920px-Willits_Fire_Station_54_-_February_2023_-_Sarah_Stierch_04.jpg',
  },
  {
    id: 'station-4',
    number: 4,
    name: { es: 'Estación Norte', en: 'North Station' },
    address: '910 Summit Drive, Crestline',
    phone: '(815) 555-0104',
    crew: 7,
    apparatus: 3,
    built: 2014,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Lafd_ladder_truck.jpg/1920px-Lafd_ladder_truck.jpg',
  },
];

export interface Apparatus {
  id: string;
  unit: string;
  name: Bilingual;
  type: Bilingual;
  year: number;
  station: string;
  image: string;
}

export const apparatus: Apparatus[] = [
  {
    id: 'engine-1',
    unit: 'Engine 1',
    name: { es: 'Autobomba 1', en: 'Engine 1' },
    type: { es: 'Camión de bomba', en: 'Pumper engine' },
    year: 2022,
    station: 'Station 1',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/CH_Fire_engine_Berne.jpg/1920px-CH_Fire_engine_Berne.jpg',
  },
  {
    id: 'ladder-1',
    unit: 'Ladder 1',
    name: { es: 'Escalera 1', en: 'Ladder 1' },
    type: { es: 'Camión escalera aérea (30 m)', en: 'Aerial ladder (100 ft)' },
    year: 2020,
    station: 'Station 1',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/59/Aerial_Ladder_Platform_fire_truck_%28London%2C_UK_-_2007%29.jpg',
  },
  {
    id: 'rescue-2',
    unit: 'Rescue 2',
    name: { es: 'Rescate 2', en: 'Rescue 2' },
    type: { es: 'Unidad de rescate pesado', en: 'Heavy rescue squad' },
    year: 2021,
    station: 'Station 2',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Mack_heavy_rescue_squad_Maugansville_FD_MD1.jpg/1920px-Mack_heavy_rescue_squad_Maugansville_FD_MD1.jpg',
  },
  {
    id: 'medic-1',
    unit: 'Medic 1',
    name: { es: 'Ambulancia 1', en: 'Medic 1' },
    type: { es: 'Ambulancia de soporte vital avanzado', en: 'Advanced life support ambulance' },
    year: 2023,
    station: 'Station 1',
    image: 'https://images.unsplash.com/photo-1587745416684-47953f16f02f?auto=format&fit=crop&w=1200&q=70',
  },
  {
    id: 'tanker-3',
    unit: 'Tanker 3',
    name: { es: 'Cisterna 3', en: 'Tanker 3' },
    type: { es: 'Camión cisterna (11,000 L)', en: 'Water tanker (3,000 gal)' },
    year: 2019,
    station: 'Station 3',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Water_Tanker_Truck_20%2C_US_Air_Force.jpg/1920px-Water_Tanker_Truck_20%2C_US_Air_Force.jpg',
  },
  {
    id: 'brush-4',
    unit: 'Brush 4',
    name: { es: 'Forestal 4', en: 'Brush 4' },
    type: { es: 'Unidad forestal todoterreno', en: 'Off-road wildland unit' },
    year: 2022,
    station: 'Station 4',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Major_Fire_in_Florida%2C_Merrit_Island_National_Wildlife_Refuge_fire_truck.jpg/1920px-Major_Fire_in_Florida%2C_Merrit_Island_National_Wildlife_Refuge_fire_truck.jpg',
  },
];

export interface Person {
  name: string;
  rank: Bilingual;
  group: 'command' | 'administration' | 'operations';
  initials: string;
}

export const personnel: Person[] = [
  { name: 'Marcus Delgado', rank: { es: 'Jefe de Bomberos', en: 'Fire Chief' }, group: 'command', initials: 'MD' },
  { name: 'Sandra Whitfield', rank: { es: 'Jefa Adjunta', en: 'Deputy Chief' }, group: 'command', initials: 'SW' },
  { name: 'Robert Kane', rank: { es: 'Jefe de Batallón', en: 'Battalion Chief' }, group: 'command', initials: 'RK' },
  { name: 'Elena Ruiz', rank: { es: 'Jefa de Operaciones', en: 'Operations Chief' }, group: 'command', initials: 'ER' },
  { name: 'James Porter', rank: { es: 'Oficial de Prevención', en: 'Fire Marshal' }, group: 'administration', initials: 'JP' },
  { name: 'Aisha Bello', rank: { es: 'Coordinadora Administrativa', en: 'Administrative Coordinator' }, group: 'administration', initials: 'AB' },
  { name: 'Tom Halbert', rank: { es: 'Jefe de Mantenimiento', en: 'Maintenance Chief' }, group: 'administration', initials: 'TH' },
  { name: 'Carla Méndez', rank: { es: 'Capitana — Turno A', en: 'Captain — A Shift' }, group: 'operations', initials: 'CM' },
  { name: 'Derek Olsson', rank: { es: 'Capitán — Turno B', en: 'Captain — B Shift' }, group: 'operations', initials: 'DO' },
  { name: 'Nina Faraday', rank: { es: 'Teniente — Rescate', en: 'Lieutenant — Rescue' }, group: 'operations', initials: 'NF' },
  { name: 'Victor Greene', rank: { es: 'Paramédico Jefe', en: 'Lead Paramedic' }, group: 'operations', initials: 'VG' },
  { name: 'Sofía Lara', rank: { es: 'Instructora de Entrenamiento', en: 'Training Officer' }, group: 'operations', initials: 'SL' },
];

export interface NewsItem {
  id: string;
  date: string;
  title: Bilingual;
  excerpt: Bilingual;
  image: string;
  tag: Bilingual;
}

export const news: NewsItem[] = [
  {
    id: 'medal-of-valor',
    date: '2026-05-18',
    title: {
      es: 'Dos bomberos reciben la Medalla al Valor',
      en: 'Two firefighters receive the Medal of Valor',
    },
    excerpt: {
      es: 'Los bomberos Nina Faraday y Victor Greene fueron reconocidos por su heroica actuación en el rescate de una familia atrapada.',
      en: 'Firefighters Nina Faraday and Victor Greene were recognized for their heroic actions rescuing a trapped family.',
    },
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Lejeune_firefighter%2C_EMT_awarded_medical_service_professional_of_year_141210-M-JF010-305.jpg/1920px-Lejeune_firefighter%2C_EMT_awarded_medical_service_professional_of_year_141210-M-JF010-305.jpg',
    tag: { es: 'Reconocimiento', en: 'Recognition' },
  },
  {
    id: 'new-engine',
    date: '2026-04-02',
    title: {
      es: 'Nueva autobomba entra en servicio',
      en: 'New fire engine enters service',
    },
    excerpt: {
      es: 'La Estación Central incorpora la Autobomba 1, un vehículo de última generación con capacidad para 4,500 litros de agua.',
      en: 'Central Station adds Engine 1, a state-of-the-art apparatus with a 1,200-gallon water tank.',
    },
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/U_S_Army_Garrison_Rheinland-Pfalz_Firefighter_Awards_Presentation_%286550987%29.jpg/1920px-U_S_Army_Garrison_Rheinland-Pfalz_Firefighter_Awards_Presentation_%286550987%29.jpg',
    tag: { es: 'Equipamiento', en: 'Equipment' },
  },
  {
    id: 'open-house',
    date: '2026-03-15',
    title: {
      es: 'Jornada de puertas abiertas el próximo mes',
      en: 'Open house day coming next month',
    },
    excerpt: {
      es: 'Invitamos a toda la comunidad a conocer nuestras estaciones, vehículos y el trabajo diario de nuestros bomberos.',
      en: 'We invite the whole community to get to know our stations, apparatus and the daily work of our firefighters.',
    },
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/PMG-1_fire_engine_based_on_GAZ-AA.jpg/1920px-PMG-1_fire_engine_based_on_GAZ-AA.jpg',
    tag: { es: 'Comunidad', en: 'Community' },
  },
  {
    id: 'recruitment',
    date: '2026-02-20',
    title: {
      es: 'Abierta la convocatoria de reclutamiento 2026',
      en: '2026 recruitment drive now open',
    },
    excerpt: {
      es: 'Buscamos nuevos bomberos y paramédicos. Conoce los requisitos y postúlate antes del 30 de junio.',
      en: 'We are looking for new firefighters and paramedics. Check the requirements and apply before June 30.',
    },
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Willits_Fire_Station_54_-_February_2023_-_Sarah_Stierch_03.jpg/1920px-Willits_Fire_Station_54_-_February_2023_-_Sarah_Stierch_03.jpg',
    tag: { es: 'Reclutamiento', en: 'Recruitment' },
  },
  {
    id: 'school-program',
    date: '2026-01-28',
    title: {
      es: 'Programa de prevención llega a las escuelas',
      en: 'Prevention program reaches local schools',
    },
    excerpt: {
      es: 'Más de 1,200 estudiantes participaron en nuestras charlas de seguridad contra incendios este trimestre.',
      en: 'More than 1,200 students took part in our fire safety talks this quarter.',
    },
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/French_and_US_Join_Forces_for_Firefighter_Training_Exercise_%288209478%29.jpg/1920px-French_and_US_Join_Forces_for_Firefighter_Training_Exercise_%288209478%29.jpg',
    tag: { es: 'Prevención', en: 'Prevention' },
  },
];

// Call statistics for the dashboard (2025)
export const callStats = {
  byType: [
    { key: 'ems', value: 4180, color: '#dc2626' },
    { key: 'fire', value: 980, color: '#ea580c' },
    { key: 'rescue', value: 760, color: '#d97706' },
    { key: 'service', value: 642, color: '#525252' },
    { key: 'hazmat', value: 280, color: '#737373' },
  ],
  monthly: [480, 510, 540, 575, 610, 640, 690, 705, 612, 560, 510, 410],
  total: 6842,
};

export const months = {
  es: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
};
