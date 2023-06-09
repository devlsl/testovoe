import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import {
  AttributeName,
  Character,
  Look,
  SkillLevel,
  SkillName
} from 'data/character'

type numberPayload = PayloadAction<number>

const characterSlice = createSlice({
  name: 'character',
  initialState: {
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
  } as Character,
  reducers: {
    changeName(state, action: PayloadAction<string>) {
      state.name = action.payload
    },
    changeStrength(state, action: numberPayload) {
      if (action.payload <= 0) return
      if (action.payload > state.score) return
      state.attributes.strength = action.payload
      state.points.health += state.attributes.strength - action.payload
    },
    changeAgility(state, action: numberPayload) {
      if (action.payload <= 0) return
      if (action.payload > state.score) return
      state.attributes.agility = action.payload
      state.points.dodge += state.attributes.agility - action.payload
      state.points.energy += state.attributes.agility - action.payload
    },
    changeIntelligence(state, action: numberPayload) {
      if (action.payload <= 0) return
      if (action.payload > state.score) return
      state.attributes.intelligence = action.payload
      state.points.energy += state.attributes.intelligence - action.payload
    },
    takeDamage(state) {
      if (state.points.health <= 1) return
      state.points.health -= 1
    },
    levelUpAttribute(state, action: PayloadAction<AttributeName>) {
      if (state.score <= 0) return

      switch (action.payload) {
        case 'strength':
          state.points.health += 1
          break
        case 'agility':
          state.points.dodge += 1
          state.points.energy += 1
          break
        case 'intelligence':
          state.points.energy += 1
          break
        default:
          break
      }
      state.attributes[action.payload] += 1
      state.score -= 1
    },
    levelUpSkill(state, action: PayloadAction<SkillName>) {
      if (state.score <= 0) return
      const skill = state.skills[action.payload]
      if (state.attributes[skill.attribute] <= skill.level) return
      if (skill.level === SkillLevel.master) return
      skill.level += 1
      state.score -= 1
    },
    upScore(state, action: numberPayload) {
      state.score += action.payload
    },
    setPrevLook(state) {
      state.look = (state.look === 1 ? 6 : state.look - 1) as Look
    },
    setNextLook(state) {
      state.look = (state.look === 6 ? 1 : state.look + 1) as Look
    },
    setNewCharacter(_state, action: PayloadAction<Character>) {
      return action.payload
    }
  }
})

export const { reducer: characterReducer, actions: characterActions } =
  characterSlice
