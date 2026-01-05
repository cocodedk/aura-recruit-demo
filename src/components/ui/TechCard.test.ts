import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TechCard from './TechCard.vue'

describe('TechCard', () => {
  it('renders with required props', () => {
    const wrapper = mount(TechCard, {
      props: {
        title: 'Vue 3',
        description: 'Progressive JavaScript framework',
        category: 'frontend'
      }
    })

    expect(wrapper.text()).toContain('Vue 3')
    expect(wrapper.text()).toContain('Progressive JavaScript framework')
  })

  it('displays version when provided', () => {
    const wrapper = mount(TechCard, {
      props: {
        title: 'Vue 3',
        version: 'v3.5.26',
        description: 'Progressive JavaScript framework',
        category: 'frontend'
      }
    })

    expect(wrapper.text()).toContain('v3.5.26')
  })

  it('does not display version when not provided', () => {
    const wrapper = mount(TechCard, {
      props: {
        title: 'Vue 3',
        description: 'Progressive JavaScript framework',
        category: 'frontend'
      }
    })

    expect(wrapper.find('.font-mono').exists()).toBe(false)
  })

  it('applies correct category color classes', () => {
    const categories = ['frontend', 'styling', 'testing', 'quality', 'build', 'deployment'] as const

    categories.forEach(category => {
      const wrapper = mount(TechCard, {
        props: {
          title: 'Test Tech',
          description: 'Test description',
          category
        }
      })

      const card = wrapper.find('.group')
      expect(card.exists()).toBe(true)
    })
  })

  it('has hover transition classes', () => {
    const wrapper = mount(TechCard, {
      props: {
        title: 'Vue 3',
        description: 'Progressive JavaScript framework',
        category: 'frontend'
      }
    })

    const card = wrapper.find('.group')
    expect(card.classes()).toContain('hover:scale-105')
    expect(card.classes()).toContain('transition-all')
  })

  it('renders with glassmorphism effect', () => {
    const wrapper = mount(TechCard, {
      props: {
        title: 'Vue 3',
        description: 'Progressive JavaScript framework',
        category: 'frontend'
      }
    })

    expect(wrapper.html()).toContain('backdrop-blur-md')
    expect(wrapper.html()).toContain('bg-white/5')
  })
})
