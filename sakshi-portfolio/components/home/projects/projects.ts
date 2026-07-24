import { Project } from './types'

export const projects: Project[] = [
  {
    id: 1,
    title: 'Project Management System',
    description:
      'A comprehensive platform to manage projects, teams, milestones and workflows with a modern dashboard.',
    image: '/projects/pms.png',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    github: '',
    live: '',
    category: 'Full Stack',
    badge: 'In Progress',
  },
  {
    id: 2,
    title: 'CafeDelight',
    description:
      'A modern café website featuring menu browsing, authentication, and responsive UI.',
    image: '/projects/cafe.png',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com/Sakshi-09singh/CafeDelight',
    live: 'https://cafe-delight-6t197cjrs-sakshi-s-projects-c3f08f07.vercel.app/',
    category: 'Full Stack',
    badge: 'Full Stack',
  },
  {
    id: 3,
    title: 'NextAmazon',
    description:
      'An e-commerce application with authentication, product management and shopping cart.',
    image: '/projects/amazon.png',
    technologies: ['Next.js', 'MongoDB', 'Stripe', 'Clerk', 'Tailwind CSS'],
    github: 'https://github.com/Sakshi-09singh/nextjs-amazona',
    live: 'https://nextjs-amazana-git-master-sakshi-s-projects-c3f08f07.vercel.app/',
    category: 'Full Stack',
    badge: 'Full Stack',
  },
  {
    id: 4,
    title: 'Personal Portfolio',
    description:
      'My personal portfolio showcasing projects, skills and experience with modern UI animations.',
    image: '/projects/portfolio.png',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    github: '',
    live: '',
    category: 'Frontend',
    badge: 'Frontend',
  },
]
