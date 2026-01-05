import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Card from './Card.vue'

describe('Card', () => {
  it('renders default card with correct styling', () => {
    const wrapper = mount(Card, {
      slots: {
        default: 'Card content'
      }
    })

    expect(wrapper.text()).toBe('Card content')
    expect(wrapper.classes()).toContain('bg-white')
    expect(wrapper.classes()).toContain('text-slate-800')
    expect(wrapper.classes()).toContain('border-slate-200')
    expect(wrapper.classes()).toContain('rounded-2xl')
    expect(wrapper.classes()).toContain('p-6')
  })

  it('renders dark card variant', () => {
    const wrapper = mount(Card, {
      props: {
        dark: true
      },
      slots: {
        default: 'Dark card content'
      }
    })

    expect(wrapper.classes()).toContain('bg-aura-navy')
    expect(wrapper.classes()).toContain('text-white')
    expect(wrapper.classes()).toContain('border-white/10')
  })

  it('applies interactive styling when interactive prop is true', () => {
    const wrapper = mount(Card, {
      props: {
        interactive: true
      },
      slots: {
        default: 'Interactive content'
      }
    })

    expect(wrapper.classes()).toContain('hover:shadow-soft')
    expect(wrapper.classes()).toContain('hover:scale-[1.02]')
    expect(wrapper.classes()).toContain('transition-all')
  })

  it('applies different padding sizes', () => {
    const wrapper = mount(Card, {
      props: {
        padding: 'lg'
      },
      slots: {
        default: 'Large padding content'
      }
    })

    expect(wrapper.classes()).toContain('p-8')
  })

  it('applies small padding when specified', () => {
    const wrapper = mount(Card, {
      props: {
        padding: 'sm'
      },
      slots: {
        default: 'Small padding content'
      }
    })

    expect(wrapper.classes()).toContain('p-4')
  })

  it('renders slot content correctly', () => {
    const wrapper = mount(Card, {
      slots: {
        default: '<h1>Test Title</h1><p>Test paragraph</p>'
      }
    })

    expect(wrapper.find('h1').text()).toBe('Test Title')
    expect(wrapper.find('p').text()).toBe('Test paragraph')
  })
})
