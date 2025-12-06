export interface Company {
  rank: number;
  name: string;
  country: string;
  technology: string;
  qbiStage: string;
  ticker: string | null;
  exchange: string | null;
  qtumPercentage: number | null;
  processor: string;
  description: string;
  color: string;
}

export interface Technology {
  name: string;
  description: string;
  requiresCooling: boolean;
}

export interface TechnologyGroup {
  groupName: string;
  technologies: Technology[];
}
