import React from "react"
import ReactDOM from "react-dom/client"

import App from "./App"
import { initMsw } from "./mocks"

const root = ReactDOM.createRoot(document.getElementById("root")!)

if (import.meta.env.MODE === "development") {
  await initMsw()
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
