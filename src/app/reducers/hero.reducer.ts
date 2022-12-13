import { Action, createReducer, on } from '@ngrx/store';
import * as heroAction from '../actions/hero.action';
import { Hero } from '../hero';

export const initialState: Hero[] = [
    { id: 12, name: 'Dr. Nice' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr. IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ];;

export const heroReducer = createReducer(
    initialState,
    on(heroAction.getHero, (state, {id}) => ({ ...state.filter(hero => hero.id === id) })),
    on(heroAction.getHeroes, state => ({ ...state })),
    on(heroAction.searchHeroes, state => ({ home: 0, away: 0 })),
    on(heroAction.addHero, (state, { hero }) => ({ ...state, hero })),
    on(heroAction.deleteHero, (state, { id }) => ({ ...state.filter(hero => hero.id !== id)  })),
    on(heroAction.updateHero, (state, { hero }) => ({ ...state.map(oldHero => {
        if(oldHero === hero) return {...oldHero, name: hero.name};
        return hero
    })}))
  );