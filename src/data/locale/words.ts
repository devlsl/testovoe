import {
  AttributeName,
  PointsName,
  SkillLevelName,
  SkillName
} from '../character'

type CharacterWords = AttributeName | SkillName | PointsName | SkillLevelName

type AnotherWords = 'score' | 'up' | 'down' | 'name' | 'change'

export type Words = CharacterWords | AnotherWords
