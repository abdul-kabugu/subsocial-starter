import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { SubsocialContextProvider } from './subsocial/provider'
import {ApolloProvider} from '@apollo/client'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <SubsocialContextProvider>
      <App />
    </SubsocialContextProvider>
  </React.StrictMode>
)
