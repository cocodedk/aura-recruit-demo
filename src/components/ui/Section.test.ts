import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import Section from './Section.vue'

// Create a proper mock class for IntersectionObserver
const createMockIntersectionObserver = (observeFn: ReturnType<typeof vi.fn>, disconnectFn: ReturnType<typeof vi.fn>) => {
  return class MockIntersectionObserver {
    observe = observeFn
    disconnect = disconnectFn
    unobserve = vi.fn()
    constructor(public callback: IntersectionObserverCallback) {}
  }
}

describe('Section', () => {
  let mockObserve: ReturnType<typeof vi.fn>
  let mockDisconnect: ReturnType<typeof vi.fn>
  let MockIO: ReturnType<typeof createMockIntersectionObserver>

    beforeEach(() => {
      mockObserve = vi.fn()
      mockDisconnect = vi.fn()
      MockIO = createMockIntersectionObserver(mockObserve, mockDisconnect)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      globalThis.IntersectionObserver = MockIO as any
    })

  it('renders with default styling', () => {
    const wrapper = mount(Section, {
      slots: {
        default: 'Section content'
      }
    })

    expect(wrapper.text()).toBe('Section content')
    expect(wrapper.classes()).toContain('py-16')
    expect(wrapper.classes()).toContain('bg-aura-light')
    expect(wrapper.find('.max-w-7xl').exists()).toBe(true)
  })

  it('renders dark section variant', () => {
    const wrapper = mount(Section, {
      props: {
        dark: true
      },
      slots: {
        default: 'Dark section content'
      }
    })

    expect(wrapper.classes()).toContain('bg-aura-navy')
    expect(wrapper.classes()).toContain('text-white')
  })

  it('centers content when center prop is true', () => {
    const wrapper = mount(Section, {
      props: {
        center: true
      },
      slots: {
        default: 'Centered content'
      }
    })

    expect(wrapper.find('.text-center').exists()).toBe(true)
  })

  it('sets up intersection observer when reveal is true', async () => {
    const wrapper = mount(Section, {
      props: {
        reveal: true
      },
      slots: {
        default: 'Reveal content'
      }
    })

    await wrapper.vm.$nextTick()

    // IntersectionObserver should have been instantiated
    expect(mockObserve).toHaveBeenCalled()
  })

  it('applies reveal animation classes when visible', async () => {
    let observerCallback: IntersectionObserverCallback | undefined

    // Create a capturing mock class
    class CapturingMockIO {
      observe = mockObserve
      disconnect = mockDisconnect
      unobserve = vi.fn()
      constructor(callback: IntersectionObserverCallback) {
        observerCallback = callback
      }
      takeRecords() { return [] }
      root = null
      rootMargin = ''
      thresholds = []
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    globalThis.IntersectionObserver = CapturingMockIO as any

    const wrapper = mount(Section, {
      props: {
        reveal: true
      },
      slots: {
        default: 'Reveal content'
      }
    })

    await wrapper.vm.$nextTick()

    // Initially not visible
    expect(wrapper.classes()).toContain('opacity-0')
    expect(wrapper.classes()).toContain('translate-y-8')

    // Simulate intersection
    observerCallback?.([{ isIntersecting: true } as IntersectionObserverEntry], {} as IntersectionObserver)

    await wrapper.vm.$nextTick()

    // After intersection, should be visible
    expect(wrapper.classes()).toContain('opacity-100')
    expect(wrapper.classes()).toContain('translate-y-0')
  })

  it('does not set up intersection observer when reveal is false', () => {
    mount(Section, {
      props: {
        reveal: false
      },
      slots: {
        default: 'No reveal content'
      }
    })

    // IntersectionObserver should not have been instantiated
    expect(mockObserve).not.toHaveBeenCalled()
  })
})
