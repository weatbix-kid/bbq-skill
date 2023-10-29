import { PerkType } from './enums'

export interface Cell {
  x: number,
  y: number,
  pos: number,
  node?: Node,
}

export interface Node {
  selected: boolean,
  type: Attribute | Perk | Path,
}

// Is automatically selected if one direction, otherwise its a junction and needs user input
export interface Path {}

// Assume cost/value always costs or is valued at one
export interface Attribute {}

// Always costs 3
// can yeild a different value (strictly for type) depending on the level of perk
export interface Perk {
  id: number,
  type: PerkType,
  name: string,
  descriptions: string[],
  level: number,
}
