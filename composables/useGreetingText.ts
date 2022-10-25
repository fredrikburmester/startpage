// A function that returns Good morning!, Godd Evening! or Good Night!
export const useGreetingText = (): string => {
  const time = new Date().getHours() 
  if (time < 12) return 'Good morning'
  if (time < 18) return 'Good afternoon'
  return 'Good evening'
}
