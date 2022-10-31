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

export interface Session {
  id: number,
  artist: string,
  title: string,
  type: string,
  art: string
}