import { Outlet } from 'react-router-dom'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { ThemeProvider } from 'styled-components'

import GlobalStyles from '@/styles/GlobalStyles'

import { theme } from '@styles/theme'

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
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Outlet />
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
