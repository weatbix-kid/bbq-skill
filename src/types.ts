import { PerkType } from './enums'

export interface Cell {
  x: Number,
  y: Number,
  pos: Number,
  node?: Node,
}

export interface Node {
  selected: Boolean,
  type: Attribute | Perk | Path,
}

// Is automatically selected if one direction, otherwise its a junction and needs user input
export interface Path {}

// Assume cost/value always costs or is valued at one
export interface Attribute {}

// Always costs 3
// can yeild a different value (strictly for type) depending on the level of perk
export interface Perk {
  id: Number,
  type: PerkType,
  name: String,
  descriptions: String[],
  level: Number,
}
