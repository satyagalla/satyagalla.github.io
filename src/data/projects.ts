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
  demoLabel?: string;
  screenshot?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: 'Morning OS',
    slug: 'morning-os',
    description: 'Productivity plugin with 200 active daily users — generates a personalized AI briefing each morning from your notes, tasks, and goals.',
    tags: ['TypeScript', 'Obsidian API', 'LLM APIs'],
    bullets: [
      '200 active daily users; iterated on features through a live Discord community',
      'Multi-provider LLM support with graceful degradation and full mobile compatibility',
    ],
    metrics: '200 active daily users',
    github: 'https://github.com/satyagalla/Morning-OS-obsidian',
    demo: 'https://community.obsidian.md/plugins/morning-os',
    demoType: 'link',
    demoLabel: 'Obsidian Plugin →',
    featured: true,
  },
  {
    title: 'Deep Research Agent',
    slug: 'deep-research',
    description: 'Autonomous agent that searches, reads, cross-references, and synthesizes any topic end-to-end without human input — shipped in 5 days.',
    tags: ['Python', 'Claude API', 'MCP'],
    bullets: [
      '51 tools across 10 namespaces with subagent orchestration and an LLM-based eval harness',
      'Composable tool chains validated across 20+ tool call sequences; shipped from scratch in 5 days',
    ],
    metrics: '51 tools · 10 namespaces · 5 days',
    github: 'https://github.com/satyagalla/auto-agent',
    featured: true,
  },
  {
    title: 'Serverless Clinical AWQ Llama Engine (SCALE)',
    slug: 'scale',
    description: 'Medical AI assistant that answers clinical questions from 10,000 documents in under 0.5 seconds — deployed on serverless A10G GPUs.',
    tags: ['Llama-3.1', 'Modal', 'vLLM', 'Pinecone', 'HuggingFace'],
    bullets: [
      '0.529s TTFT and ~60 tok/s on A10G — fast enough for real clinical use',
      '14% USMLE accuracy gain from AWQ fused kernels over NF4 baseline',
    ],
    metrics: '0.529s TTFT · ~60 tok/s · 14% accuracy gain',
    github: 'https://github.com/satyagalla/Minimizing-Hallucination-in-Medical-LLMs',
    demo: 'https://huggingface.co/spaces/foobar41/llama3-8b_lora_medical_inference',
    demoType: 'link',
    featured: true,
  },
  {
    title: 'Lunar GCN — ISRO / IEEE WHISPERS 2023',
    slug: 'isro-gcn',
    description: 'Graph Convolutional Network that classified lunar surface types from Chandrayaan hyperspectral data, beating CNN baselines by 13.5%.',
    tags: ['GCN', 'PyTorch', 'Hyperspectral Imaging', 'NASA Chandrayaan'],
    bullets: [
      '+13.5% accuracy over CNN baseline on Chandrayaan-1; 91% accuracy on Chandrayaan-2 data',
      'Published at IEEE WHISPERS 2023 and presented as a NASA NESF 2023 poster',
    ],
    metrics: '+13.5% vs CNN · 91% accuracy · IEEE published',
    demo: 'https://scholar.google.com/citations?user=gLqht5wAAAAJ&hl=en',
    demoType: 'link',
    demoLabel: 'Read paper →',
  },
  {
    title: 'CoCo: Neuro-Symbolic Desktop Companion',
    slug: 'coco',
    description: 'Desktop AI agent that watches your activity in real time and adapts to your emotional state — fast reactive layer and slow reasoning running in parallel.',
    tags: ['Phi-3', 'PyTorch', 'TCP/IPC', 'Agentic AI'],
    bullets: [
      '<16ms UI latency at 60Hz — imperceptibly fast reactive loop',
      'Runs fully on-device; zero data leaves the machine',
    ],
    metrics: '<16ms UI latency · 60Hz reactive loop',
    github: 'https://github.com/satyagalla/CozyCompanion',
  },
];
