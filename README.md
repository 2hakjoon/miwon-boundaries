# Miwon Boundaries

Miwon Boundaries include useful state components for React app
This library is made up for react-miwon but can be adopted to any React project

# Installation

```
npm install miwon-boundaries

yarn add miwon-boundaries
```

# Usage

## MiwonLazyRenderer

MiwonLazyRenderer is a wrapping component for lazy-rendering component

```javascript
import { MiwonLazyRenderer } from 'miwon-boundaries'

export const SomeComponent = () => {
  return (
    <>
      <MiwonLazyLender delay={5000} fallback={<FallbackComponent/>} offset={500} >
        <ANY_LAZY_RENDERING_COMPONENT />
      <MiwonLazyLender />
    </>
  )
}
```

`fallback` : fallback component during lazy-rendering
`delay` : component will be rendered after delay (default : undefined )
`offset` : component will be rendered when it get in browser viewport with offset (default : 0 )

## MiwonSuspense

MiwonSuspense is a wrapping component of async component

> > MiwonSuspense catches thrown Promise.  
> > Not tested yet with other major libraries. ex) Tanstack Query, SWR

```javascript
import { MiwonSuspense } from 'miwon-boundaries'

export const SomeComponent = () => {
  return (
    <>
      <MiwonSuspense suspenseFallback={<SuspenseFallback />} >
        <ANY_ASYNC_COMPONENT />
      <MiwonSuspense />
    </>
  )
}
```

## MiwonErrorBoundary

MiwonErrorBoundary is a wrapping component of might occur error component

```javascript
import { MiwonErrorBoundary } from 'miwon-boundaries'

export const SomeComponent = () => {
  return (
    <>
      <MiwonErrorBoundary errorFallback={<ErrorFallback />} >
        <ANY_MIGHT_OCCUR_ERROR_COMPONENT />
      <MiwonErrorBoundary />
    </>
  )
}
```

## MiwonAsyncBoundary

MiwonAsyncBoundary is a wrapping component of fetching component

```javascript
import { MiwonAsyncBoundary } from 'miwon-boundaries'

export const SomeComponent = () => {
  return (
    <>
      <MiwonAsyncBoundary
        errorFallback={<ErrorFallback />}
        suspenseFallback={<SuspenseFallback />}
      >
        <ANY_FETCHING_COMPONENT />
      <MiwonLazyLender />
    </>
  )
}
```
