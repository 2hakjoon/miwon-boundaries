import React from 'react'
import {
  MiwonAsyncBoundary,
  MiwonErrorBoundary,
  MiwonSuspense,
  MiwonLazyLender
} from 'miwon-boundaries'
function App() {
  return (
    <>
      MY APP
      <MiwonAsyncBoundary />
      <MiwonErrorBoundary />
      <MiwonSuspense />
      <MiwonLazyLender />
    </>
  )
}

export default App
