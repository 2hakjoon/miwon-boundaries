import React, { ReactNode } from 'react'
import { MiwonErrorBoundary, MiwonSuspense } from '..'

interface MiwonAsyncBoundaryProps {
  errorFallback: ReactNode
  suspenseFallback: ReactNode
  children: ReactNode
}

const MiwonAsyncBoundary = ({
  errorFallback,
  suspenseFallback,
  children
}: MiwonAsyncBoundaryProps) => {
  return (
    <MiwonErrorBoundary fallback={errorFallback}>
      <MiwonSuspense fallback={suspenseFallback}>{children}</MiwonSuspense>
    </MiwonErrorBoundary>
  )
}

export default MiwonAsyncBoundary
