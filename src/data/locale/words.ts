import {
  AttributeName,
  PointsName,
  SkillLevelName,
  SkillName
} from 'data/character'

type CharacterWords = AttributeName | SkillName | PointsName | SkillLevelName

type AnotherWords =
  | 'score'
  | 'up'
  | 'down'
  | 'name'
  | 'change'
  | 'up score'
  | 'attributes'
  | 'fight'
  | 'skills'
  | 'error'

export type Words = CharacterWords | AnotherWords
