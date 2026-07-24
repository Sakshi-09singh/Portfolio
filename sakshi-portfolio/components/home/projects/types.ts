export type ProjectCategory =
  | 'All'
  | 'Full Stack'
  | 'Frontend'
  | 'Backend'

export interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  github: string
  live: string
  category: Exclude<ProjectCategory, 'All'>
  badge: string
}