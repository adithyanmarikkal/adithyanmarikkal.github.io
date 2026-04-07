import skillsyncImg  from '../assets/projects/skillsync.png'
import pdfImg  from '../assets/projects/pdfquery.png'
import certiqImg       from '../assets/projects/certiq.png'

const projects = [
  {
    id: 1,
    title: 'SkillSync AI',
    description:
      'An AI-powered resume analyser and career roadmap generator that provides personalised skill gap analysis using RAG pipelines.',
    image: skillsyncImg,
    tags: ['React', 'FastAPI', 'RAG', 'LLM'],
    github: 'https://github.com/adithyanmarikkal/skillsyncai',
    live: '',
    featured: true,
  },
  {
    id: 2,
    title: 'PDFQuery',
    description: 'A powerful RAG (Retrieval-Augmented Generation) application that allows you to upload PDF documents and ask questions about their content using AI.',
    tags: ['Gemini', 'Streamlit', 'Langchain'],
    image: pdfImg,
    github: 'https://github.com/adithyanmarikkal/PDF_Query_Application',
    live: '',
    featured: true,
  },
  {
    id: 3,
    title: 'CertiQ',
    description:
      'CertiQ is a decentralized certificate issuance and verification system leveraging the technology of blockchain. CertiQ aims to address key challenges faced in the digital certificate domain, such as forgery and duplication.',
    image: certiqImg,
    tags: ['Solidity', 'Polygon', 'React'],
    github: 'https://github.com/adithyanmarikkal/CertiQ',
    live: 'https://certiq-demos-projects-48a9dfad.vercel.app/',
    featured: true,
  },
]

export default projects
