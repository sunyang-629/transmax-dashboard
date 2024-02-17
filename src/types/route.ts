export type Route = {
  id: string
  road: {
    name: string
    from: string
    to: string
  }
  alert_level: number
  distance: number
  duration: number
}
