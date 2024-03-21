import { RouterProvider } from "react-router-dom"

import { ChakraProvider, ColorModeScript } from "@chakra-ui/react"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import { isAuthError } from "@utils/isAuthError"

import { router } from "./routes"
import { theme } from "./styles/theme"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1000 * 60 * 3,
      staleTime: 1000 * 60,
      refetchOnWindowFocus: false,
      retry: 0,
      throwOnError: (error) => isAuthError(error),
    },
    mutations: {
      gcTime: 1000 * 60 * 3,
      retry: 0,
      throwOnError: (error) => isAuthError(error),
    },
  },
})

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode="light" />
        <RouterProvider router={router} />
      </ChakraProvider>
    </QueryClientProvider>
  )
}

export default App
