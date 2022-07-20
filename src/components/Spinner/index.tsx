import styled, { keyframes } from 'styled-components'

const skChaseDot = keyframes`
  80%,
  100% {
    transform: rotate(360deg);
  }
`

const skChaseDot_before = keyframes`
  50% {
    transform: scale(0.4);
  }

  100%,
  0% {
    transform: scale(1);
  }
`

const SpinnerWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 220px;
`

const SpinnerSize = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  animation: skChaseDots infinite linear both;

  .skChaseDot {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    animation: ${skChaseDot} 2s infinite ease-in-out both;
  }

  .skChaseDot::before {
    display: block;
    width: 25%;
    height: 25%;
    content: '';
    background-color: #1c7367;
    border-radius: 100%;
    animation: ${skChaseDot_before} 2s infinite ease-in-out both;
  }

  .skChaseDot:nth-child(1) {
    animation-delay: -1.1s;
  }

  .skChaseDot:nth-child(2) {
    animation-delay: -1s;
  }

  .skChaseDot:nth-child(3) {
    animation-delay: -0.9s;
  }

  .skChaseDot:nth-child(4) {
    animation-delay: -0.8s;
  }

  .skChaseDot:nth-child(5) {
    animation-delay: -0.7s;
  }

  .skChaseDot:nth-child(6) {
    animation-delay: -0.6s;
  }

  .skChaseDot:nth-child(1)::before {
    animation-delay: -1.1s;
  }

  .skChaseDot:nth-child(2)::before {
    animation-delay: -1s;
  }

  .skChaseDot:nth-child(3)::before {
    animation-delay: -0.9s;
  }

  .skChaseDot:nth-child(4)::before {
    animation-delay: -0.8s;
  }

  .skChaseDot:nth-child(5)::before {
    animation-delay: -0.7s;
  }

  .skChaseDot:nth-child(6)::before {
    animation-delay: -0.6s;
  }
`

const Spinner = () => {
  return (
    <SpinnerWrap>
      <SpinnerSize>
        <div className='skChaseDot' />
        <div className='skChaseDot' />
        <div className='skChaseDot' />
        <div className='skChaseDot' />
        <div className='skChaseDot' />
        <div className='skChaseDot' />
      </SpinnerSize>
    </SpinnerWrap>
  )
}

export default Spinner
