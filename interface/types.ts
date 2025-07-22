
import React from 'react';

// --- TIPOS PARA OS DADOS DO CURRÍCULO ---
export interface ExperienceData {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface ProjectData {
  title: string;
  description: string;
  proggrammingLanguage: string;
}

export interface ResumeData {
  name: string;
  about: string;
  title: string,
  location: string,
  email: string,
  github: string,
  linkedin: string,
  experience: ExperienceData[];
  skills: string[];
  projects: ProjectData[];
}

// --- TIPOS PARA A LÓGICA DO JOGO ---
export interface Upgrade {
  id: number;
  category: any[];
  name: string;
  originalCostReal: number;
  originalCostDevPoints: number;
  originalCostDollar: number;
  originalCostRealPerSecond: number;
  originalCostDollarPerSecond: number;
  devPointsCost: number;
  realCostPerSecond: number;
  realCostUnique: number;
  dollarCostPerSecond: number;
  dollarCostUnique: number;
  pps: number;
  owned: number;
  requirements: any[]; // Defina um tipo mais específico se necessário
  effects: any[]; // Defina um tipo mais específico se necessário
  activeEffects: any[]; // Defina um tipo mais específico se necessário
  productivity:number;
   clickpower: number;
}
export interface SpecialUpgrade {
  id: number;
  name: string;
  type: 'clickpower' | 'pps';
  value: number;
  cost: number;
  image: string;
}
export interface Section {
  title: string;
  cost: number;
  unlocked: boolean;
  Component: React.ComponentType<any>;
}

export interface Sections {
  [key: string]: Section;
}

export interface PlayerStatus {
  devPointsOwned: number;
  clickpower: number;
  clickedTimes: number;
  pointsPerSecond: number;
  realPerSecond: number;
  dollarPerSecond: number;
  ownedItens: any[];
  ownedUpgrades: any[];
  realPerSecondCost: number;
  dollarPerSecondCost: number;
  demand:number;
}