import useQueryQuiz from 'hooks/useGetQuiz'
import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { Link, useNavigate } from 'react-router-dom'
import { useRecoilState, useSetRecoilState } from 'recoil'
import QuizGame from 'routes/QuizStart/QuizGame'
import { getOpenQuizAPi } from 'services/quiz'
import { quizListState } from 'states/quizState'
import styled from 'styled-components'
import store from 'storejs'
import { IQuizItems } from 'types/quiz'

const StartButton = styled.button`
  display: inline-block;
  font-size: 40px;
  background: rgba(255, 255, 255, 1);
  color: #1c7367;
  width: 300px;
  height: 300px;
  line-height: 300px;
  text-decoration: none;
  border-radius: 50px;
  text-align: center;
  transition: all ease 0.5s;
  &:hover {
    background: rgba(255, 255, 255, 0.8);
  }
`

const QuizStart = () => {
  const navigate = useNavigate()
  // const [quizList, setQuizListState] = useRecoilState(quizListState)
  const [showquiz, setShowQuiz] = useState(false)

  const { data, refetch } = useQueryQuiz()

  const handleQuizStart = () => {
    refetch()
    setShowQuiz(true)
  }

  useEffect(() => {
    store.remove('currentQuizList')
  }, [])

  useEffect(() => {
    // setQuizListState(data ?? [])
    store.set('currentQuizList', data)
  }, [data])

  return (
    <div>
      {showquiz ? (
        <QuizGame data={data} />
      ) : (
        <StartButton type='button' onClick={handleQuizStart}>
          퀴즈 풀기
        </StartButton>
      )}
    </div>
  )
}

export default QuizStart
