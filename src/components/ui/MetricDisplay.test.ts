import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import MetricDisplay from './MetricDisplay.vue'

describe('MetricDisplay', () => {
  it('renders with required props', () => {
    const wrapper = mount(MetricDisplay, {
      props: {
        label: 'Test Suite',
        value: 146
      }
    })

    expect(wrapper.text()).toContain('Test Suite')
  })

  it('displays suffix when provided', () => {
    const wrapper = mount(MetricDisplay, {
      props: {
        label: 'Test Suite',
        value: 146,
        suffix: 'tests'
      }
    })

    expect(wrapper.text()).toContain('tests')
  })

  it('displays custom icon when provided', () => {
    const wrapper = mount(MetricDisplay, {
      props: {
        label: 'Test Suite',
        value: 146,
        icon: '🧪'
      }
    })

    expect(wrapper.text()).toContain('🧪')
  })

  it('displays default icon when not provided', () => {
    const wrapper = mount(MetricDisplay, {
      props: {
        label: 'Test Suite',
        value: 146
      }
    })

    expect(wrapper.text()).toContain('📊')
  })

  it('shows progress bar when showProgress is true', () => {
    const wrapper = mount(MetricDisplay, {
      props: {
        label: 'Pass Rate',
        value: 86,
        showProgress: true,
        maxValue: 100
      }
    })

    expect(wrapper.find('.bg-white\\/10').exists()).toBe(true)
  })

  it('does not show progress bar when showProgress is false', () => {
    const wrapper = mount(MetricDisplay, {
      props: {
        label: 'Test Suite',
        value: 146,
        showProgress: false
      }
    })

    expect(wrapper.find('.bg-white\\/10').exists()).toBe(false)
  })

  it('applies correct color classes', () => {
    const colors = ['purple', 'cyan', 'pink', 'green'] as const

    colors.forEach(color => {
      const wrapper = mount(MetricDisplay, {
        props: {
          label: 'Test',
          value: 100,
          color
        }
      })

      const valueElement = wrapper.find('.text-5xl')
      expect(valueElement.exists()).toBe(true)
    })
  })

  it('has hover transition classes', () => {
    const wrapper = mount(MetricDisplay, {
      props: {
        label: 'Test Suite',
        value: 146
      }
    })

    expect(wrapper.html()).toContain('transition-all')
    expect(wrapper.html()).toContain('hover:border-white/20')
  })

  it('animates value on mount', async () => {
    vi.useFakeTimers()

    const wrapper = mount(MetricDisplay, {
      props: {
        label: 'Test Suite',
        value: 146
      }
    })

    // Initially should be 0
    expect(wrapper.vm.displayValue).toBe(0)

    // Fast forward time
    await vi.advanceTimersByTimeAsync(2100)

    // Should animate to final value
    expect(wrapper.vm.displayValue).toBe(146)

    vi.useRealTimers()
  })
})
