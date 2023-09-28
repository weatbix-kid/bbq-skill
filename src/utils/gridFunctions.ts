const getCellPos = (x: number, y: number) : number => {
  const columns = 22
  const rows = 20
  return columns * (rows - (y as number)) - (columns - (x as number)) + columns;
}

export { getCellPos }
