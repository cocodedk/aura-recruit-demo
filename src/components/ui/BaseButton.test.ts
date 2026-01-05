import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BaseButton from './BaseButton.vue'

describe('BaseButton', () => {
  it('renders with default variant', () => {
    const wrapper = mount(BaseButton, {
      slots: {
        default: 'Click me'
      }
    })

    expect(wrapper.text()).toBe('Click me')
    expect(wrapper.classes()).toContain('bg-aura-accent')
    expect(wrapper.classes()).toContain('text-white')
  })

  it('renders with secondary variant', () => {
    const wrapper = mount(BaseButton, {
      props: {
        variant: 'secondary'
      },
      slots: {
        default: 'Secondary'
      }
    })

    expect(wrapper.classes()).toContain('bg-white')
    expect(wrapper.classes()).toContain('text-aura-navy')
    expect(wrapper.classes()).toContain('border-slate-200')
  })

  it('renders with ghost variant', () => {
    const wrapper = mount(BaseButton, {
      props: {
        variant: 'ghost'
      },
      slots: {
        default: 'Ghost'
      }
    })

    expect(wrapper.classes()).toContain('border-white/30')
    expect(wrapper.classes()).toContain('text-white')
  })

  it('applies full width when full prop is true', () => {
    const wrapper = mount(BaseButton, {
      props: {
        full: true
      },
      slots: {
        default: 'Full width'
      }
    })

    expect(wrapper.classes()).toContain('w-full')
  })

  it('shows loading state with spinner', () => {
    const wrapper = mount(BaseButton, {
      props: {
        loading: true
      },
      slots: {
        default: 'Loading...'
      }
    })

    expect(wrapper.find('svg').exists()).toBe(true)
    expect(wrapper.classes()).toContain('cursor-wait')
    expect(wrapper.attributes('disabled')).toBeDefined()
  })

  it('is disabled when disabled prop is true', () => {
    const wrapper = mount(BaseButton, {
      props: {
        disabled: true
      },
      slots: {
        default: 'Disabled'
      }
    })

    expect(wrapper.classes()).toContain('opacity-50')
    expect(wrapper.classes()).toContain('cursor-not-allowed')
  })

  it('applies different sizes correctly', () => {
    const wrapper = mount(BaseButton, {
      props: {
        size: 'sm'
      },
      slots: {
        default: 'Small'
      }
    })

    expect(wrapper.classes()).toContain('px-4')
    expect(wrapper.classes()).toContain('py-2')
    expect(wrapper.classes()).toContain('text-sm')
  })

  it('supports RouterLink as component', () => {
    const wrapper = mount(BaseButton, {
      props: {
        as: 'router-link'
      },
      slots: {
        default: 'Router Link'
      }
    })

    expect(wrapper.element.tagName.toLowerCase()).toBe('router-link')
  })
})
