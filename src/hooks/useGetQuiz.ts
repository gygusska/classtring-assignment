import { useQuery } from 'react-query'
import { getOpenDiseaseAPi } from 'services/quiz'

const useQueryQuiz = () => {
  const { data } = useQuery(
    'key',
    () =>
      getOpenDiseaseAPi().then((res: any) => {
        // eslint-disable-next-line no-console
        console.count('react-query API 호출')
        return res.data.results
      }),
    {
      staleTime: 2 * 60 * 1000,
      cacheTime: Infinity,
      suspense: true,
      retry: 2,
    }
  )

  return { data }
}

export default useQueryQuiz
