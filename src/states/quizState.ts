import { atom } from 'recoil'
import { IQuizItems } from 'types/quiz'

export const quizListState = atom<IQuizItems[]>({
  key: '#quizListState',
  default: [],
})
