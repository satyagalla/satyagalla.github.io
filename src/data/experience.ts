export interface Experience {
  title: string;
  company: string;
  date: string;
  subtitle?: string;
  bullets: string[];
  highlight?: boolean;
}

export const experiences: Experience[] = [
  {
    title: 'Graduate Teaching Assistant',
    company: 'Boston University',
    date: 'Sep 2025 – Jan 2026',
    subtitle: 'CS 365: Foundations of Data Science',
    bullets: [
      'Led technical labs on Python optimization and statistical modeling, mentoring <strong>50+ students</strong> in data science fundamentals including Pandas, NumPy, and algorithmic best practices.',
      'Facilitated weekly code reviews to enforce production-standard coding styles and debugging techniques.',
    ],
  },
  {
    title: 'Machine Learning Engineer',
    company: 'ISRO (Indian Space Research Organization)',
    date: 'Dec 2022 – May 2023',
    highlight: true,
    bullets: [
      'Boosted hyperspectral classification accuracy on the Chandrayaan-1 dataset by <strong>13.5%</strong> compared to CNN baselines by engineering a Graph Convolutional Network (GCN) utilizing Latent Space projections.',
      'Devised a Spectral-Spatial Non-Linearity graph formulation to handle irregular lunar topography, achieving <strong>91% accuracy</strong> on Chandrayaan-2 data — validated via IEEE WHISPERS 2023 publication.',
    ],
  },
  {
    title: 'Machine Learning Engineer',
    company: 'Aaizel International Tech',
    date: 'Feb 2024 – May 2024',
    subtitle: 'Internship',
    bullets: [
      'Architected a multimodal fusion pipeline (IFCNN) merging IR+RGB satellite imagery and constructed the domain\'s first remote sensing scene graph dataset.',
      'Fine-tuned a RelTR Transformer for geospatial relationship extraction and deployed the inference engine to Microsoft Azure, enabling real-time semantic visualization.',
    ],
  },
  {
    title: 'Computer Vision Engineer',
    company: 'Terrafic Inc',
    date: 'Jun 2023 – Nov 2023',
    subtitle: 'Internship',
    bullets: [
      'Integrated the Segment Anything Model (SAM) and OpenCV to automate maritime feature extraction; delivered a production-ready MVP that secured initial client pilots.',
      'Implemented Super-Resolution (SR) algorithms (4x/6x) to enhance object detection performance on low-resolution defense mapping data.',
    ],
  },
];
