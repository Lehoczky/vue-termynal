export const wait = time => new Promise(resolve => setTimeout(resolve, time))

export function scrollToPosition(currentLine) {
  const innerShell = currentLine.parentElement
  if (
    currentLine.offsetTop - currentLine.offsetHeight >
    innerShell.offsetHeight
  ) {
    innerShell.scrollTo({
      top:
        currentLine.offsetTop -
        currentLine.offsetHeight -
        innerShell.offsetHeight,
      behavior: "smooth",
    })
  }
}
