export interface ProgramAnnualTarget {
  year: number;
  targetValue: number;
  realizationValue?: number;
  status: 'completed' | 'in_progress' | 'projected';
  milestone: string;
  notes?: string;
  growthYoY?: string;
}

export interface FlagshipProgram {
  id: string;
  code: string;
  title: string;
  category: string;
  leadAgency: string;
  unit: string;
  baseline2024: number;
  totalFiveYearTarget: number;
  cagrRate: string;
  accentColor: 'indigo' | 'emerald' | 'amber' | 'rose' | 'violet';
  description: string;
  strategicOutcomes: string[];
  budgetEstimate: string;
  targets: ProgramAnnualTarget[];
  iconName: 'digital' | 'ecology' | 'research' | 'species' | 'community';
}
