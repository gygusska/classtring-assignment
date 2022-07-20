import useQueryQuiz from 'hooks/useGetQuiz'
import { MouseEvent, useCallback, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import { IQuizItems } from 'types/quiz'
import shuffle from 'utill/shuffle'
import AnswerCheckModal from './AnswerCheckModal'
import AnswerItem from './AnswerItem'

const appearAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const ApperBox = styled.div`
  position: relative;
  animation: ${appearAnimation} 700ms;
  min-height: 400px;
`

const Question = styled.p`
  font-size: 36px;
  margin-bottom: 60px;
  text-align: center;
`
const AnswerList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`
const NextButton = styled.button`
  width: 400px;
  height: 60px;
  line-height: 60px;
  background: #bf6741;
  border: none;
  border-radius: 50px;
  font-size: 26px;
  cursor: pointer;
  color: #fff;
  margin-top: 20px;
`

const ResultButton = styled(NavLink)`
  display: inline-block;
  width: 200px;
  height: 60px;
  line-height: 60px;
  background: #bf6741;
  font-size: 20px;
  border-radius: 10px;
  color: #fff;
  animation: ${appearAnimation} 700ms;
  margin-top: 20px;
  text-decoration: none;
`

const Quiz = () => {
  const { data } = useQueryQuiz()

  const [currentQuiz, setCurrentQuiz] = useState(0)
  const [score, setScore] = useState(0)
  const [showResults, setShowResults] = useState(false)
  const [showNext, setShowNext] = useState(false)
  const [check, setCheck] = useState('')
  const [checkModal, setCheckModal] = useState(false)
  const [isAnswerClick, setIsAnswerClick] = useState(true)

  // shuffle
  const { question, correct_answer, incorrect_answers } = data[currentQuiz]
  const answerList = shuffle([correct_answer, ...incorrect_answers])

  // eslint-disable-next-line consistent-return
  const handleAnswerButtonClick = useCallback(
    (answer: string) => {
      if (isAnswerClick) setIsAnswerClick(false) // 클릭했다면 이벤트 막기

      if (answer === correct_answer) {
        setCheck('Correct!')
        setScore(score + 1)
      } else {
        setCheck('Incorrect')
      }
      setCheckModal(true)

      if (currentQuiz + 1 < data.length) {
        setShowNext(true)
      } else {
        setShowResults(true)
      }
    },
    [correct_answer, currentQuiz, data.length, isAnswerClick, score]
  )

  const handleNextQuiz = useCallback(() => {
    const nextQuiz = currentQuiz + 1
    if (nextQuiz <= data.length) setCurrentQuiz(nextQuiz)

    setShowNext(false)
    setIsAnswerClick(true)
  }, [currentQuiz, data.length])

  return (
    <ApperBox>
      <h2>{currentQuiz}</h2>
      <Question>{decodeURIComponent(question)}</Question>
      <AnswerList>
        {answerList.map((item) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <AnswerItem answerList={item} onClick={isAnswerClick ? () => handleAnswerButtonClick(item) : undefined} />
          )
        })}
      </AnswerList>

      {showNext && (
        <NextButton type='button' onClick={handleNextQuiz}>
          다음 문항
        </NextButton>
      )}

      {checkModal && <AnswerCheckModal check={check} setCheckModal={setCheckModal} />}
      {/* <h2>정답 : {correct_answer}</h2> */}
      <h3>정답개수 {score}</h3>
      <h3>오답갯수 {data.length - score}</h3>
      {showResults && <ResultButton to='/result'>결과 확인하기</ResultButton>}
    </ApperBox>
  )
}

export default Quiz
