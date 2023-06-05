import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { AttributeName, SkillLevel, SkillName } from '../../../data/character'
import { characterInitialState } from './characterInitialState'
import { numberPayload } from './types'

const characterSlice = createSlice({
  name: 'character',
  initialState: characterInitialState,
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
      state.attributes[action.payload] += 1
    },
    levelUpSkill(state, action: PayloadAction<SkillName>) {
      if (state.score <= 0) return
      const skill = state.skills[action.payload]
      if (state.attributes[skill.attribute] >= skill.level) return
      if (skill.level === SkillLevel.master) return
      skill.level += 1
    },
    upScore(state, action: numberPayload) {
      state.score += action.payload
    }
  }
})

export const { reducer: characterReducer, actions: characterActions } =
  characterSlice
