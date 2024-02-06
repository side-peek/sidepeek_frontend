import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import GlobalStyles from "./styles/GlobalStyles.tsx"
import { ThemeProvider } from "styled-components"
import { theme } from "./styles/theme.ts"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1000 * 60 * 3,
      staleTime: 1000 * 60,
    },
    mutations: {
      gcTime: 1000 * 60 * 3,
    },
  },
})

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
