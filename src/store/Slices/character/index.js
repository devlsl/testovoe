import { createSlice } from '@reduxjs/toolkit';
import { SkillLevel } from 'data/character';
import { characterInitialState } from 'store/slices/character/initialState';
const characterSlice = createSlice({
    name: 'character',
    initialState: characterInitialState,
    reducers: {
        changeName(state, action) {
            state.name = action.payload;
        },
        changeStrength(state, action) {
            if (action.payload <= 0)
                return;
            if (action.payload > state.score)
                return;
            state.attributes.strength = action.payload;
            state.points.health += state.attributes.strength - action.payload;
        },
        changeAgility(state, action) {
            if (action.payload <= 0)
                return;
            if (action.payload > state.score)
                return;
            state.attributes.agility = action.payload;
            state.points.dodge += state.attributes.agility - action.payload;
            state.points.energy += state.attributes.agility - action.payload;
        },
        changeIntelligence(state, action) {
            if (action.payload <= 0)
                return;
            if (action.payload > state.score)
                return;
            state.attributes.intelligence = action.payload;
            state.points.energy += state.attributes.intelligence - action.payload;
        },
        takeDamage(state) {
            if (state.points.health <= 1)
                return;
            state.points.health -= 1;
        },
        levelUpAttribute(state, action) {
            if (state.score <= 0)
                return;
            switch (action.payload) {
                case 'strength':
                    state.points.health += 1;
                    break;
                case 'agility':
                    state.points.dodge += 1;
                    state.points.energy += 1;
                    break;
                case 'intelligence':
                    state.points.energy += 1;
                    break;
                default:
                    break;
            }
            state.attributes[action.payload] += 1;
            state.score -= 1;
        },
        levelUpSkill(state, action) {
            if (state.score <= 0)
                return;
            const skill = state.skills[action.payload];
            if (state.attributes[skill.attribute] <= skill.level)
                return;
            if (skill.level === SkillLevel.master)
                return;
            skill.level += 1;
            state.score -= 1;
        },
        upScore(state, action) {
            state.score += action.payload;
        },
        setPrevLook(state) {
            state.look = (state.look === 1 ? 6 : state.look - 1);
        },
        setNextLook(state) {
            state.look = (state.look === 6 ? 1 : state.look + 1);
        },
        setNewCharacter(_state, action) {
            return action.payload;
        }
    }
});
export const { reducer: characterReducer, actions: characterActions } = characterSlice;
