export interface Language {
  code: 'bn' | 'en';
  name: string;
  nativeName: string;
}

export interface Translation {
  [key: string]: string;
}

export interface Translations {
  bn: Translation;
  en: Translation;
}

export interface Report {
  id: string;
  name?: string;
  anonymous: boolean;
  incidentType: string;
  location: string;
  time: string;
  description: string;
  photo?: File;
  audio?: File;
  timestamp: Date;
}

export interface Volunteer {
  id: string;
  name: string;
  email: string;
  phone: string;
  experience: string;
  availability: string;
  location: string;
  badges: string[];
  joinDate: Date;
}

export interface Pandal {
  id: string;
  name: string;
  location: string;
  coordinates: [number, number];
  crowdLevel: 'low' | 'medium' | 'high';
  safetyRating: number;
  facilities: string[];
  description: string;
}

export interface EmergencyContact {
  id: string;
  name: string;
  number: string;
  type: 'police' | 'medical' | 'fire' | 'women' | 'child';
  available24x7: boolean;
}