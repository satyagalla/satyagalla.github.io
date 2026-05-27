export interface Project {
  title: string;
  slug: string;
  description: string;
  tags: string[];
  bullets: string[];
  metrics?: string;
  github?: string;
  demo?: string;
  demoType?: 'iframe' | 'link';
  screenshot?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: 'Serverless Clinical AWQ Llama Engine (SCALE)',
    slug: 'scale',
    description: 'Serverless medical LLM with hybrid RAG architecture for clinical decision support — deployed on Modal with vLLM inference.',
    tags: ['Llama-3.1', 'Modal', 'vLLM', 'Pinecone', 'HuggingFace'],
    bullets: [
      '0.529s time-to-first-token on A10G — sub-2s end-to-end latency',
      '60s cold start on serverless GPU; ~60 tok/s throughput on A10G',
    ],
    metrics: '0.529s TTFT · sub-2s latency · ~60 tok/s on A10G',
    github: 'https://github.com/satyagalla/Minimizing-Hallucination-in-Medical-LLMs',
    demo: 'https://huggingface.co/spaces/foobar41/llama3-8b_lora_medical_inference',
    demoType: 'link',
    featured: true,
  },
  {
    title: 'CoCo: Neuro-Symbolic Desktop Companion',
    slug: 'coco',
    description: 'Bio-mimetic AI agent with dual-layer architecture — fast reactive loop plus slow deliberate reasoning, living on your desktop.',
    tags: ['Phi-3', 'PyTorch', 'TCP/IPC', 'Agentic AI'],
    bullets: [
      '<16ms UI latency with a 60Hz reactive loop — imperceptibly fast',
      'Runs fully on-device; zero data leaves the machine',
    ],
    metrics: '<16ms UI latency · 60Hz reactive loop',
    github: 'https://github.com/satyagalla/CozyCompanion',
  },
  {
    title: 'Multimodal Skin Cancer Detection',
    slug: 'skin-cancer',
    description: 'Voting ensemble combining vision models and gradient boosting to handle extreme class imbalance in dermoscopic images.',
    tags: ['PyTorch', 'XGBoost', 'SMOTE', 'Scikit-learn'],
    bullets: [
      '0.96 ROC-AUC on a dataset with extreme 0.1% class imbalance',
      '+15 percentage points over single-model baseline',
    ],
    metrics: '0.96 ROC-AUC · +15pt vs baseline',
    github: 'https://github.com/satyagalla/Skin-Cancer-Detection',
  },
  {
    title: 'Generative Audio: Transformer vs. Diffusion',
    slug: 'alpha-beat',
    description: 'Comparative analysis of 8 hybrid architectures for text-to-music generation — benchmarked on CLAP similarity and FAD.',
    tags: ['AudioLDM', 'Transformers'],
    bullets: [
      'CLAP 0.35 semantic alignment · FAD 6.55 perceptual quality across 8 architectures',
      'Best hybrid outperformed pure-diffusion baseline on both metrics',
    ],
    metrics: 'CLAP 0.35 · FAD 6.55',
    github: 'https://github.com/satyagalla/AlphaBeat/tree/main',
  },
];
