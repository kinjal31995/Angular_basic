import { createAction, props } from '@ngrx/store';
import { Hero } from '../hero';

export const getHero = createAction(
  '[hero-detail Component] get hero',
  props<{ id: number }>()
);
export const getHeroes = createAction('[heroes Component] get heroes');
export const searchHeroes = createAction(
  '[hero-search Component] search heroes',
  props<{ term: string }>()
);
export const addHero = createAction(
  '[heroes Component] add hero',
  props<{ hero: Hero }>()
);
export const deleteHero = createAction(
  '[heroes Component] delete hero',
  props<{ id: number }>()
);
export const updateHero = createAction(
  '[hero-detail Component] update hero',
  props<{ hero: Hero }>()
);
