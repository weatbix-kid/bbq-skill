import { Attribute } from './enums'

export interface Cell {
  node: Node,
  x: Number,
  y: Number,
}

export interface Node {
  type: NodeType,
  selected: Boolean,
}

export interface NodeType {}
export interface Junction extends NodeType {}
export interface Purchasable extends NodeType {
  cost: Number,
  value: Number
  type: Attribute,
  perk?: Perk,
}

export interface Perk extends Purchasable {
  id: Number,
}
