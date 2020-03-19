export const selectClassname = (classes, active) =>
  `${classes.root} ${selectItemStatus(active, classes)}`

export const selectItemStatus = (active, classes) =>
  active
    ? classes.selected
    : classes.unselected
