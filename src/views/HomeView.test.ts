import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from 'vue-router'
import HomeView from './HomeView.vue'

// Create mock router
const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/contact', name: 'contact', component: { template: '<div>Contact</div>' } },
    { path: '/cv-drop', name: 'cv-drop', component: { template: '<div>CV Drop</div>' } },
  ],
})

describe('HomeView', () => {
  it('renders all main sections', () => {
    const wrapper = mount(HomeView, {
      global: {
        plugins: [router]
      }
    })

    expect(wrapper.text()).toContain('Elite Tech Recruitment')
    expect(wrapper.text()).toContain('What We Recruit For')
    expect(wrapper.text()).toContain('How We Work')
    expect(wrapper.text()).toContain('Where We Operate')
    expect(wrapper.text()).toContain('Ready to get started?')
  })

  it('renders hero section with correct content', () => {
    const wrapper = mount(HomeView, {
      global: {
        plugins: [router]
      }
    })

    const heroTitle = wrapper.find('h1')
    expect(heroTitle.text()).toContain('Elite Tech Recruitment')
    expect(heroTitle.text()).toContain('Across Europe & the US')
  })

  it('displays credibility cards', () => {
    const wrapper = mount(HomeView, {
      global: {
        plugins: [router]
      }
    })

    expect(wrapper.text()).toContain('Founded 2016')
    expect(wrapper.text()).toContain('Boutique Tech Specialists')
    expect(wrapper.text()).toContain('Europe + United States')
  })

  it('renders services accordion', () => {
    const wrapper = mount(HomeView, {
      global: {
        plugins: [router]
      }
    })

    expect(wrapper.text()).toContain('Software Engineering')
    expect(wrapper.text()).toContain('Cloud & DevOps')
    expect(wrapper.text()).toContain('Data & Machine Learning')
    expect(wrapper.text()).toContain('Product & Design')
  })

  it('displays process steps', () => {
    const wrapper = mount(HomeView, {
      global: {
        plugins: [router]
      }
    })

    expect(wrapper.text()).toContain('1. Deep technical screening')
    expect(wrapper.text()).toContain('2. Hand-picked shortlists')
    expect(wrapper.text()).toContain('3. Long-term placements')
  })

  it('shows testimonial section', () => {
    const wrapper = mount(HomeView, {
      global: {
        plugins: [router]
      }
    })

    expect(wrapper.text()).toContain('Aura understood exactly')
    expect(wrapper.text()).toContain('People Director')
    expect(wrapper.text()).toContain('FinTech, Denmark')
  })

  it('displays geography information', () => {
    const wrapper = mount(HomeView, {
      global: {
        plugins: [router]
      }
    })

    expect(wrapper.text()).toContain('United Kingdom')
    expect(wrapper.text()).toContain('Nordics')
    expect(wrapper.text()).toContain('Europe')
    expect(wrapper.text()).toContain('United States')
  })

  it('renders call-to-action buttons', () => {
    const wrapper = mount(HomeView, {
      global: {
        plugins: [router]
      }
    })

    const buttons = wrapper.findAll('button')
    expect(buttons.some(btn => btn.text() === 'Hire Talent')).toBe(true)
    expect(buttons.some(btn => btn.text() === 'Submit CV')).toBe(true)
  })

  it('buttons navigate to correct routes', async () => {
    const wrapper = mount(HomeView, {
      global: {
        plugins: [router]
      }
    })

    const hireButton = wrapper.findAll('button').find(btn => btn.text() === 'Hire Talent')
    const cvButton = wrapper.findAll('button').find(btn => btn.text() === 'Submit CV')

    if (hireButton) {
      await hireButton.trigger('click')
      expect(router.currentRoute.value.name).toBe('contact')
    }

    if (cvButton) {
      await cvButton.trigger('click')
      expect(router.currentRoute.value.name).toBe('cv-drop')
    }
  })

  it('applies correct background colors', () => {
    const wrapper = mount(HomeView, {
      global: {
        plugins: [router]
      }
    })

    const sections = wrapper.findAll('section')
    expect(sections.some(section => section.classes().includes('bg-aura-navy'))).toBe(true)
    expect(sections.some(section => section.classes().includes('bg-aura-light'))).toBe(true)
  })

  it('includes proper semantic HTML structure', () => {
    const wrapper = mount(HomeView, {
      global: {
        plugins: [router]
      }
    })

    expect(wrapper.find('h1').exists()).toBe(true)
    expect(wrapper.findAll('h2').length).toBeGreaterThan(0)
    expect(wrapper.findAll('section').length).toBeGreaterThan(0)
  })

  it('has responsive layout classes', () => {
    const wrapper = mount(HomeView, {
      global: {
        plugins: [router]
      }
    })

    expect(wrapper.find('.max-w-xl').exists()).toBe(true)
    expect(wrapper.find('.mx-auto').exists()).toBe(true)
    expect(wrapper.find('.px-6').exists()).toBe(true)
  })
})
