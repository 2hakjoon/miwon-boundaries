import React, { ReactNode } from 'react'

interface SuspenseProps {
  fallback?: ReactNode
  children: ReactNode
}
interface SuspenseState {
  promise: Promise<unknown> | null
}

class MiwonSuspense extends React.Component<SuspenseProps, SuspenseState> {
  state: SuspenseState
  constructor(props: SuspenseProps) {
    super(props)
    this.state = {
      promise: null
    }
  }

  componentDidCatch(e: unknown) {
    if (e instanceof Error) {
      throw e
    }

    if (e instanceof Promise) {
      this.setState(
        {
          promise: e
        },
        () => {
          e.then(() => {
            this.setState({ promise: null })
          })
        }
      )
    } else {
      throw e
    }
  }

  render() {
    if (this.state.promise) {
      return this.props.fallback ? this.props.fallback : <></>
    }
    return this.props.children
  }
}

export default MiwonSuspense
