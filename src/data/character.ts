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

export type Words = AttributeName | SkillName | PointsName | SkillLevelName

export interface NumberParam {
  value: number
}

export interface Attribute extends NumberParam {
  name: AttributeName
}

export interface Points extends NumberParam {
  name: PointsName
}

export interface Skill {
  name: SkillName
  attribute: AttributeName
  level: SkillLevel
}

export type Look = '1' | '2' | '3' | '4' | '5' | '6'

export interface Character {
  name: string
  look: Look
  attributes: Attribute[]
  points: Points[]
  skills: Skill[]
}
