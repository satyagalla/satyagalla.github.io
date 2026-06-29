export interface SkillCategory {
  name: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    name: 'Daily use',
    items: ['Python', 'TypeScript', 'LangGraph', 'Claude API', 'vLLM', 'RAG Architectures', 'Docker', 'Git', 'Cursor', 'Claude Code'],
  },
  {
    name: 'Projects & research',
    items: ['Llama-3', 'Phi-3 (Quantization)', 'AWQ / NF4', 'Modal', 'Pinecone', 'AWS (EC2/S3)', 'Azure', 'FastAPI', 'GCNs', 'PyTorch', 'OpenCV'],
  },
];
