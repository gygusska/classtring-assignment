import React, { MouseEventHandler } from 'react'
import styled from 'styled-components'

const AnswerItemList = styled.li`
  flex-basis: 48%;
  margin-bottom: 20px;
`

const AnswerButton = styled.button`
  width: 100%;
  font-size: 24px;
  background: rgba(95, 212, 197, 0.8);
  border: none;
  border-radius: 30px;
  padding: 15px 0;
  transition: all 0.3s;
  &:hover {
    background: rgba(95, 212, 197, 1);
  }
`

interface Props {
  answerList: string
  onClick?: MouseEventHandler
}

const AnswerItem = ({ answerList, onClick }: Props) => {
  return (
    <AnswerItemList>
      <AnswerButton type='button' onClick={onClick}>
        {answerList}
      </AnswerButton>
    </AnswerItemList>
  )
}

export default AnswerItem
