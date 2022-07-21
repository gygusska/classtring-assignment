import React from 'react'
import { useRecoilValue } from 'recoil'
import { quizListState } from 'states/quizState'
import store from 'storejs'

const QuizResult = () => {
  const result = store.get('finalInfo')
  return (
    <div>
      <p>정답개수 {result.scoreInfo}</p>
      <p>오답개수 {result.selectedAnswer.length - result.scoreInfo}</p>
    </div>
  )
}

export default QuizResult
