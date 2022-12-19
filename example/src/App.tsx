import React from 'react'
import {
  MiwonAsyncBoundary,
  MiwonErrorBoundary,
  MiwonSuspense,
  MiwonLazyLender
} from 'miwon-boundaries'
import { ErrorComponent } from './components/ErrorComponent'

function App() {
  return (
    <>
      MY APP
      <MiwonAsyncBoundary />
      <MiwonErrorBoundary>
        <ErrorComponent></ErrorComponent>
      </MiwonErrorBoundary>
      <MiwonSuspense />
      <MiwonLazyLender />
    </>
  )
}

export default App
