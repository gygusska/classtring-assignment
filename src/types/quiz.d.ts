export interface IQuizAPIRep {
  response_code: number
  results: IQuizItems[]
}

export interface IQuizItems {
  category: string
  type: string
  difficulty: string
  question: string
  correct_answer: string
  incorrect_answers: string[]
}
