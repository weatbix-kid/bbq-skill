import { Attribute } from './enums'

export interface Cell {
  x: Number,
  y: Number,
  pos: Number,
  node: Node,
}

export interface Node {
  type: NodeType,
  selected: Boolean,
}

export interface NodeType {}
export interface Junction extends NodeType {}       // maybe junction is a attribute type with 0 cost and value
export interface Purchasable extends NodeType {
  cost: Number,
  value: Number
  type: Attribute,
  perk?: Perk,
}

export interface Perk extends Purchasable {
  id: Number,
}
