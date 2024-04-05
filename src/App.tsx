import { Suspense } from "react"
import { HelmetProvider } from "react-helmet-async"
import { RouterProvider } from "react-router-dom"

import { ChakraProvider, ColorModeScript } from "@chakra-ui/react"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import ErrorBoundaries from "@components/ErrorBoundary/ErrorBoundaries"
import FullScreenSpinner from "@components/LoadingComponents/FullScreenSpinner"

import { isAuthError } from "@utils/isAuthError"

import { router } from "./routes"
import { theme } from "./styles/theme"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0,
      throwOnError: (error) => isAuthError(error),
    },
    mutations: {
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
        <ErrorBoundaries>
          <Suspense fallback={<FullScreenSpinner />}>
            <HelmetProvider>
              <RouterProvider router={router} />
            </HelmetProvider>
          </Suspense>
        </ErrorBoundaries>
      </ChakraProvider>
    </QueryClientProvider>
  )
}

export default App
