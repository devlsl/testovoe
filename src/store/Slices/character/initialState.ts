import { Character, SkillLevel } from 'data/character'

export const characterInitialState: Character = {
  name: '',
  look: 1,
  score: 4,
  attributes: {
    strength: 0,
    agility: 0,
    intelligence: 0,
    charisma: 0
  },
  points: {
    health: 3,
    dodge: 10,
    energy: 0
  },
  skills: {
    attack: {
      level: SkillLevel.untrained,
      attribute: 'strength'
    },
    stealth: {
      level: SkillLevel.untrained,
      attribute: 'agility'
    },
    archery: {
      level: SkillLevel.untrained,
      attribute: 'agility'
    },
    learnability: {
      level: SkillLevel.untrained,
      attribute: 'intelligence'
    },
    survival: {
      level: SkillLevel.untrained,
      attribute: 'intelligence'
    },
    healing: {
      level: SkillLevel.untrained,
      attribute: 'intelligence'
    },
    intimidation: {
      level: SkillLevel.untrained,
      attribute: 'charisma'
    },
    insight: {
      level: SkillLevel.untrained,
      attribute: 'charisma'
    },
    appearance: {
      level: SkillLevel.untrained,
      attribute: 'charisma'
    },
    manipulation: {
      level: SkillLevel.untrained,
      attribute: 'charisma'
    }
  }
}
