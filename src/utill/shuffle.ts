const shuffle = (array: string[]) => {
  const shuffleIndex = () => Math.random() - 0.5
  const shuffleArray = [...array]

  return shuffleArray.sort(shuffleIndex)
}

export default shuffle
