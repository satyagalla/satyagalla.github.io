export interface Publication {
  title: string;
  venue: string;
  year: number;
  description: string;
  link?: string;
}

export const publications: Publication[] = [
  {
    title: 'Efficient Graph Formulation and Latent Space Integration for Lunar Hyperspectral Image Classification',
    venue: 'IEEE WHISPERS 2023',
    year: 2023,
    description: 'GCN-based pipeline for Chandrayaan-1 hyperspectral data, achieving 90.1% accuracy on lunar surface classification via adaptive graph construction and spectral-spatial fusion.',
  },
  {
    title: 'Enhancing Hyperspectral Classification through GCNs with Adaptive Graph Construction',
    venue: 'NASA NESF 2023 (Poster)',
    year: 2023,
    description: 'Adaptive graph construction method for Chandrayaan-2 IIRS hyperspectral data, reducing false positive rates by 13.5% through improved spectral neighbor modeling.',
  },
];
