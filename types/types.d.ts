export interface Link {
  name: string
  url: string
  color: string
  group: string
}
export interface ContextAction {
  name: string
  fn: () => void
}