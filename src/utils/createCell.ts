import { Attribute } from "@/enums"

export default () => {
  return {
    node: {
      type: {
        cost: 1,
        value: 1,
        type: Attribute.Generic,
      },
      selected: false,
    },
    x: 1,
    y: 1
  }
}
