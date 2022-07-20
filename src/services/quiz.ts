import axios from 'axios'
import { IQuizAPIRep } from 'types/quiz'

// const PROXY = window.location.hostname === 'localhost' ? '/api' : '/proxy'

const url = `https://opentdb.com/api.php`

export const getOpenQuizAPi = () =>
  axios.get<IQuizAPIRep>(url, {
    params: {
      amount: 5,
      type: 'multiple',
    },
  })
