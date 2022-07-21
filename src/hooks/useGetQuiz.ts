import { useQuery } from 'react-query'
import { getOpenQuizAPi } from 'services/quiz'

const useQueryQuiz = () => {
  const { data, refetch } = useQuery(
    ['getOpenQuizAPi'],
    () =>
      getOpenQuizAPi().then((res: any) => {
        // eslint-disable-next-line no-console
        console.count('react-query API 호출')
        return res.data.results
      }),
    {
      enabled: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      cacheTime: Infinity,
      suspense: true,
      retry: 2,
    }
  )

  return { data, refetch }
}

export default useQueryQuiz
