import { isServer } from "@tanstack/react-query"

export const initMsw = async () => {
  if (isServer) {
    const { server } = await import("./server")
    server.listen()
  } else {
    const { worker } = await import("./browser")
    worker.start()
  }
}
