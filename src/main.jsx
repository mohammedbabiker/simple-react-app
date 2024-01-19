import React from 'react'
import ReactDOM from 'react-dom/client'
import { extendTheme, ChakraProvider } from "@chakra-ui/react"
import App from './App.jsx'
// import './index.css'

const theme = extendTheme({
  colors: {
    brand: {
      100: "#f7fafc",
      // ...
      900: "#1a202c",
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
    <App />
    </ChakraProvider>
  </React.StrictMode>,
)
