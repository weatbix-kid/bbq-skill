import { Attribute } from "@/enums"

export default () => {
  return {
    x: 1,
    y: 1,
    pos: 1,
    node: {
      type: {
        cost: 1,
        value: 1,
        type: Attribute.Generic,
      },
      selected: false,
    }
  }
}
