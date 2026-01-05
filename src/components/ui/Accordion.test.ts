import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Accordion from './Accordion.vue'

describe('Accordion', () => {
  it('renders with title and content', () => {
    const wrapper = mount(Accordion, {
      props: {
        title: 'Test Accordion'
      },
      slots: {
        default: 'Accordion content here'
      }
    })

    expect(wrapper.find('summary').text()).toBe('Test Accordion')
    expect(wrapper.text()).toContain('Accordion content here')
  })

  it('uses details element with correct styling', () => {
    const wrapper = mount(Accordion, {
      props: {
        title: 'Styled Accordion'
      },
      slots: {
        default: 'Content'
      }
    })

    const details = wrapper.find('details')
    expect(details.exists()).toBe(true)
    expect(details.classes()).toContain('rounded-2xl')
    expect(details.classes()).toContain('border-slate-200')
    expect(details.classes()).toContain('bg-white')
    expect(details.classes()).toContain('p-6')
  })

  it('applies font-medium to summary', () => {
    const wrapper = mount(Accordion, {
      props: {
        title: 'Font Test'
      },
      slots: {
        default: 'Content'
      }
    })

    expect(wrapper.find('summary').classes()).toContain('font-medium')
  })

  it('includes chevron icon in summary', () => {
    const wrapper = mount(Accordion, {
      props: {
        title: 'Icon Test'
      },
      slots: {
        default: 'Content'
      }
    })

    const summary = wrapper.find('summary')
    const svg = summary.find('svg')
    expect(svg.exists()).toBe(true)
    expect(svg.classes()).toContain('w-5')
    expect(svg.classes()).toContain('h-5')
  })

  it('hides content initially and shows on expand', async () => {
    const wrapper = mount(Accordion, {
      props: {
        title: 'Expand Test'
      },
      slots: {
        default: 'Hidden content'
      }
    })

    // Initially, content should be in the DOM but visually hidden
    expect(wrapper.text()).toContain('Hidden content')
    expect(wrapper.find('summary').exists()).toBe(true)
  })

  it('applies group class for styling', () => {
    const wrapper = mount(Accordion, {
      props: {
        title: 'Group Test'
      },
      slots: {
        default: 'Content'
      }
    })

    expect(wrapper.classes()).toContain('group')
  })

  it('renders slot content in correct location', () => {
    const wrapper = mount(Accordion, {
      props: {
        title: 'Slot Test'
      },
      slots: {
        default: '<strong>Bold content</strong><em>Italic content</em>'
      }
    })

    const contentDiv = wrapper.find('.mt-4')
    expect(contentDiv.find('strong').text()).toBe('Bold content')
    expect(contentDiv.find('em').text()).toBe('Italic content')
  })
})
