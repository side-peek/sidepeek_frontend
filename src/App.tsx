import { Outlet } from "react-router-dom"

import { ChakraProvider, ColorModeScript } from "@chakra-ui/react"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import { theme } from "@styles/theme"

import GlobalStyles from "./styles/GlobalStyles"

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
      <ChakraProvider theme={theme}>
        <GlobalStyles />
        <ColorModeScript initialColorMode="light" />
        <Outlet />
      </ChakraProvider>
    </QueryClientProvider>
  )
}

export default App
