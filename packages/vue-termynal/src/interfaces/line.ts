export interface Line {
  element: HTMLElement
  show: () => Promise<void>
  hide: () => void
}
