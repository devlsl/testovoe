export type AttributeKeys = 'Strength' | 'Agility' | 'Intelligence' | 'Charisma'
type Attributes = Record<AttributeKeys, number>

export type PointKeys = 'Жизненная сила' | 'Уклонение' | 'Энергичность'
type Points = Record<PointKeys, number>

enum SkillLevels {
  Нетренированный = 0,
  Новичок = 1,
  Ученик = 2,
  Адепт = 3,
  Эксперт = 4
}

const aa: Points = {
  'Жизненная сила': 2,
  Уклонение: 3,
  Энергичность: 3
}
aa['Энергичность']

// export type Skills =
// export type SkillsDep = Record<AttributeKeys, Skills>

export interface Character {
  name: string
  attributes: Attributes
  points: Points
  // skills:
}
