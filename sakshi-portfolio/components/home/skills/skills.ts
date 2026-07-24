import {
  FaJava,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from 'react-icons/fa'

import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiExpress,
  SiMongodb,
  SiPostman,
} from 'react-icons/si'
import { SiCss } from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'
import { TbSql } from 'react-icons/tb'
import { Code2, MonitorSmartphone, Database, Wrench } from 'lucide-react'

export const skillCategories = [
  {
    title: 'Core Languages',
    icon: Code2,
    skills: [
      { name: 'Java', icon: FaJava },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'SQL', icon: TbSql },
    ],
  },

  {
    title: 'Frontend',
    icon: MonitorSmartphone,
    skills: [
      { name: 'React.js', icon: FaReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'HTML5', icon: SiHtml5 },
      { name: 'CSS3', icon: SiCss },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
    ],
  },

  {
    title: 'Backend & Database',
    icon: Database,
    skills: [
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'Express.js', icon: SiExpress },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'REST APIs', icon: Database },
    ],
  },

  {
    title: 'Tools',
    icon: Wrench,
    skills: [
      { name: 'Git', icon: FaGitAlt },
      { name: 'GitHub', icon: FaGithub },
      { name: 'VS Code', icon: VscVscode },
      { name: 'Postman', icon: SiPostman },
    ],
  },
]