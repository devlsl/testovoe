export type AttributeName = 'strength' | 'agility' | 'intelligence' | 'charisma'

export type SkillName =
  | 'attack'
  | 'stealth'
  | 'archery'
  | 'learnability'
  | 'survival'
  | 'healing'
  | 'intimidation'
  | 'insight'
  | 'appearance'
  | 'manipulation'

export type PointsName = 'health' | 'dodge' | 'energy'

export enum SkillLevel {
  untrained,
  beginner,
  student,
  adept,
  expert,
  master
}

export type SkillLevelName = keyof typeof SkillLevel

export type Look = 1 | 2 | 3 | 4 | 5 | 6

export type Attributes = Record<AttributeName, number>

export type Points = Record<PointsName, number>

export type SkillValue = {
  level: SkillLevel
  attribute: AttributeName
}
export type Skills = Record<SkillName, SkillValue>

export interface Character {
  name: string
  look: Look
  score: number
  attributes: Attributes
  points: Points
  skills: Skills
}
