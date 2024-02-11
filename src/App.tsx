import { ColorModeScript } from "@chakra-ui/react"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1000 * 60 * 3,
      staleTime: 1000 * 60,
      refetchOnWindowFocus: false,
    },
    mutations: {
      gcTime: 1000 * 60 * 3,
    },
  },
})

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ColorModeScript initialColorMode="light" />
    </QueryClientProvider>
  )
}

export default App
