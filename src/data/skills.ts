export interface SkillCategory {
  name: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    name: 'Generative AI & LLMs',
    items: ['Llama-3', 'Phi-3 (Quantization)', 'RAG Architectures', 'AI Agents (LangGraph)', 'Neuro-Symbolic AI', 'Vector DBs'],
  },
  {
    name: 'Cloud & Engineering',
    items: ['AWS (EC2/S3)', 'Azure', 'Docker', 'CI/CD', 'FastAPI', 'SQL', 'TCP/IPC Sockets', 'Bash Scripting', 'Linux', 'Git', 'Cursor', 'GitHub Copilot'],
  },
  {
    name: 'Data Science & ML',
    items: ['XGBoost', 'GCNs', 'Pandas', 'NumPy', 'Scikit-learn', 'OpenCV', 'Regex Parsing'],
  },
];
