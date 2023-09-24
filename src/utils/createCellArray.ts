import createCell from "./createCell"

export default (columns: number, rows: number) => {
  const cells = []
  for (let rowIndex = 1; rowIndex <= rows; rowIndex++) {        // 20 rows
    for (let colIndex = 1; colIndex <= columns; colIndex++) {      // 22 columns
      const newCell = createCell()
      newCell.x = colIndex
      newCell.y = rowIndex
      cells.push(newCell)
    }
  }
  return cells
}
