import Layout from 'components/Layout'
import useQueryQuiz from 'hooks/useGetQuiz'
import { Routes, Route } from 'react-router-dom'
import QuizResult from './QuizResult'
import QuizStart from './QuizStart'

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<QuizStart />} />
        <Route path='/result' element={<QuizResult />} />
      </Route>
    </Routes>
  )
}

export default App
