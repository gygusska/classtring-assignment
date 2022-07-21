import React from 'react'
import useCounter from 'hooks/useCouter'
import store from 'storejs'
import { useUnmount } from 'react-use'

const Counter = () => {
  const count = useCounter()
  const finalInfo = store.get('finalInfo')
  // console.log(typeof finalInfo)
  // useUnmount(() => {
  //   store.get('finalInfo')
  // })

  return (
    <div>
      <h2>{count}</h2>
    </div>
  )
}

export default Counter
