import { beforeAll } from 'vitest'

// Global test setup
beforeAll(() => {
  // Mock window.matchMedia
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => {},
    }),
  })

  // Mock IntersectionObserver

  globalThis.IntersectionObserver = class IntersectionObserver {
    root: Element | null = null
    rootMargin: string = ''
    thresholds: ReadonlyArray<number> = []

    constructor() {}
    disconnect() {}
    observe() {}
    unobserve() {}
    takeRecords(): IntersectionObserverEntry[] {
      return []
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any
})
