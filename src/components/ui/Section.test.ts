import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import Section from './Section.vue'

describe('Section', () => {
  let mockObserve: vi.MockedFunction<any>
  let mockDisconnect: vi.MockedFunction<any>

  beforeEach(() => {
    mockObserve = vi.fn()
    mockDisconnect = vi.fn()

    // Mock IntersectionObserver
    const mockIntersectionObserver = vi.fn()
    mockIntersectionObserver.mockReturnValue({
      observe: mockObserve,
      disconnect: mockDisconnect,
      unobserve: vi.fn(),
    })

    global.IntersectionObserver = mockIntersectionObserver
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
    expect(wrapper.find('.max-w-xl').exists()).toBe(true)
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

    expect(global.IntersectionObserver).toHaveBeenCalled()
    expect(mockObserve).toHaveBeenCalled()
  })

  it('applies reveal animation classes when visible', async () => {
    let observerCallback: (entries: any[]) => void

    const mockIntersectionObserver = vi.fn()
    mockIntersectionObserver.mockImplementation((callback) => {
      observerCallback = callback
      return {
        observe: mockObserve,
        disconnect: mockDisconnect,
        unobserve: vi.fn(),
      }
    })

    global.IntersectionObserver = mockIntersectionObserver

    const wrapper = mount(Section, {
      props: {
        reveal: true
      },
      slots: {
        default: 'Reveal content'
      }
    })

    // Initially not visible
    expect(wrapper.classes()).toContain('opacity-0')
    expect(wrapper.classes()).toContain('translate-y-8')

    // Simulate intersection
    observerCallback!([{ isIntersecting: true }])

    await wrapper.vm.$nextTick()

    expect(wrapper.classes()).toContain('opacity-100')
    expect(wrapper.classes()).toContain('translate-y-0')
  })

  it('does not set up intersection observer when reveal is false', () => {
    const wrapper = mount(Section, {
      props: {
        reveal: false
      },
      slots: {
        default: 'No reveal content'
      }
    })

    expect(global.IntersectionObserver).not.toHaveBeenCalled()
  })
})
