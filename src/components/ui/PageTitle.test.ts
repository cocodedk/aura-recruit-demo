import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import PageTitle from './PageTitle.vue'

describe('PageTitle', () => {
  it('renders h1 element with correct styling', () => {
    const wrapper = mount(PageTitle, {
      slots: {
        default: 'Test Page Title'
      }
    })

    const h1 = wrapper.find('h1')
    expect(h1.exists()).toBe(true)
    expect(h1.text()).toBe('Test Page Title')
  })

  it('applies correct CSS classes', () => {
    const wrapper = mount(PageTitle, {
      slots: {
        default: 'Styled Title'
      }
    })

    const h1 = wrapper.find('h1')
    expect(h1.classes()).toContain('text-3xl')
    expect(h1.classes()).toContain('font-semibold')
    expect(h1.classes()).toContain('tracking-tight')
    expect(h1.classes()).toContain('mb-4')
  })

  it('renders slot content correctly', () => {
    const wrapper = mount(PageTitle, {
      slots: {
        default: '<span>Complex</span> Title <em>Content</em>'
      }
    })

    expect(wrapper.find('span').text()).toBe('Complex')
    expect(wrapper.text()).toContain('Title')
    expect(wrapper.find('em').text()).toBe('Content')
  })

  it('renders multiline content', () => {
    const wrapper = mount(PageTitle, {
      slots: {
        default: `Multi
        Line
        Title`
      }
    })

    expect(wrapper.text()).toContain('Multi')
    expect(wrapper.text()).toContain('Line')
    expect(wrapper.text()).toContain('Title')
  })

  it('maintains semantic structure', () => {
    const wrapper = mount(PageTitle, {
      slots: {
        default: 'Semantic Test'
      }
    })

    expect(wrapper.element.tagName).toBe('H1')
    // Classes are applied to the h1 element, not the wrapper
    expect(wrapper.find('h1').classes()).toContain('text-3xl')
  })
})
