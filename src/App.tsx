import { Outlet } from "react-router-dom"
import GlobalStyles from "./styles/GlobalStyles.tsx"
import { ThemeProvider } from "styled-components"
import { theme } from "./styles/theme.ts"
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

function App() {
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
