import React, { Dispatch, SetStateAction, useRef } from 'react'
import { useClickAway } from 'react-use'

import ModalPortal from 'components/Modal/modalPortal'
import styled from 'styled-components'

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 80%);
  backdrop-filter: blur(2px);
`
const CheckModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  flex-direction: column;
  font-size: 30px;
  padding: 30px 40px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px 0 #595959;
`

interface IProps {
  check: string
  setCheckModal: Dispatch<SetStateAction<boolean>>
}

const AnswerCheckModal = ({ check, setCheckModal }: IProps) => {
  const modalRef = useRef(null)

  const handleHideModal = () => {
    setCheckModal(false)
  }
  useClickAway(modalRef, handleHideModal)

  return (
    <ModalPortal>
      <ModalBackground>
        <CheckModal ref={modalRef}>{check}</CheckModal>
      </ModalBackground>
    </ModalPortal>
  )
}

export default AnswerCheckModal
