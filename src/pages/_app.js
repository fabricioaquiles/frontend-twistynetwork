import { queryClient } from '@/services/queryClient'
import { QueryClientProvider } from 'react-query'

function MyApp({ Component, pageProps }) {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  )
}

export default MyApp
