export interface CaseStudyData {
  id: string;
  title: string;
  tagline: string;
  role: string;
  timeline?: string;
  summary: string;
  quote?: string;
  sections: {
    title: string;
    placeholderKey: string;
    description?: string;
    deliverables?: string[];
  }[];
}

export interface PhaseItem {
  id: string;
  label: string;
  context: string;
  placeholderText: string;
  imagePlaceholder: string;
}
