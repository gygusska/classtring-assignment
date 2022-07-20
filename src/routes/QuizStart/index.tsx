import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
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
  return <StyledLink to='/game'>퀴즈 풀기</StyledLink>
}

export default QuizStart
