import React, { ReactNode, useEffect, useState } from 'react'

interface LazyRendererProps {
  children: ReactNode
  delay?: number
  className?: string
  fallback?: ReactNode
  offset?: number
}

const MiwonLazyRenderer = ({
  children,
  delay,
  className,
  fallback,
  offset
}: LazyRendererProps) => {
  const [inView, setInView] = useState(false)
  const [isTimeout, setIsTimeout] = useState(false)
  const [renderState, setRenderState] = useState(false)
  const [target, setTarget] = useState(null)

  useEffect(() => {
    if (delay) {
      setTimeout(() => {
        setIsTimeout(true)
      }, delay)
    }
  }, [])

  useEffect(() => {
    if (inView || isTimeout) {
      setRenderState(true)
    }
  }, [inView, isTimeout])

  const onIntersect = async (
    [entry]: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => {
    setInView(entry.isIntersecting)
  }

  useEffect(() => {
    let observer: IntersectionObserver
    if (target) {
      observer = new IntersectionObserver(onIntersect, {
        threshold: 0
      })
      observer.observe(target)
    }
    return () => observer && observer.disconnect()
  }, [target])

  return (
    <div className="relative">
      {renderState ? (
        <>{children}</>
      ) : (
        <div
          ref={setTarget as any}
          className={className}
          style={{ top: offset && -offset }}
        >
          {fallback && <>{fallback}</>}
        </div>
      )}
    </div>
  )
}

export default MiwonLazyRenderer
