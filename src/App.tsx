import { RouterProvider } from "react-router-dom"

import { ChakraProvider, ColorModeScript } from "@chakra-ui/react"
import { isAxiosError } from "axios"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import { router } from "./routes"
import { theme } from "./styles/theme"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1000 * 60 * 3,
      staleTime: 1000 * 60,
      refetchOnWindowFocus: false,
      throwOnError: (error) =>
        isAxiosError(error) && error.response?.status === 401,
      retry: 0,
    },
    mutations: {
      gcTime: 1000 * 60 * 3,
      throwOnError: (error) =>
        isAxiosError(error) && error.response?.status === 401,
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
