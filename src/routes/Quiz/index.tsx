import useQueryQuiz from 'hooks/useGetQuiz'
import React from 'react'

const Quiz = () => {
  const { data } = useQueryQuiz()
  console.log(data)
  return <div>data</div>
}

export default Quiz
