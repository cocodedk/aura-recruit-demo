import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AboutDemoView from './AboutDemoView.vue'
import TechCard from '@/components/ui/TechCard.vue'
import MetricDisplay from '@/components/ui/MetricDisplay.vue'

describe('AboutDemoView', () => {
  it('renders the main heading', () => {
    const wrapper = mount(AboutDemoView)
    expect(wrapper.text()).toContain('Built with Passion')
    expect(wrapper.text()).toContain('Crafted with Precision')
  })

  it('displays developer name', () => {
    const wrapper = mount(AboutDemoView)
    expect(wrapper.text()).toContain('Babak Bandpey')
  })

  it('renders GitHub link', () => {
    const wrapper = mount(AboutDemoView)
    const githubLink = wrapper.find('a[href="https://github.com/cocodedk"]')
    expect(githubLink.exists()).toBe(true)
    expect(githubLink.text()).toContain('GitHub')
  })

  it('renders live demo link', () => {
    const wrapper = mount(AboutDemoView)
    const demoLink = wrapper.find('a[href="https://cocodedk.github.io/aura-recruit-demo/"]')
    expect(demoLink.exists()).toBe(true)
  })

  it('renders MetricDisplay components', () => {
    const wrapper = mount(AboutDemoView)
    const metrics = wrapper.findAllComponents(MetricDisplay)
    expect(metrics.length).toBeGreaterThan(0)
  })

  it('displays key metrics', () => {
    const wrapper = mount(AboutDemoView)
    expect(wrapper.text()).toContain('The Numbers')
  })

  it('renders TechCard components', () => {
    const wrapper = mount(AboutDemoView)
    const techCards = wrapper.findAllComponents(TechCard)
    expect(techCards.length).toBeGreaterThan(0)
  })

  it('displays technology stack section', () => {
    const wrapper = mount(AboutDemoView)
    expect(wrapper.text()).toContain('Technology Stack')
    expect(wrapper.text()).toContain('Frontend Framework')
    expect(wrapper.text()).toContain('Testing & Quality Assurance')
  })

  it('displays architecture highlights', () => {
    const wrapper = mount(AboutDemoView)
    expect(wrapper.text()).toContain('Architecture Highlights')
    expect(wrapper.text()).toContain('Component Architecture')
    expect(wrapper.text()).toContain('Design System')
  })

  it('displays developer notes section', () => {
    const wrapper = mount(AboutDemoView)
    expect(wrapper.text()).toContain("Developer's Notes")
    expect(wrapper.text()).toContain('Why This Stack?')
    expect(wrapper.text()).toContain('Challenges Overcome')
    expect(wrapper.text()).toContain('What I Learned')
    expect(wrapper.text()).toContain('Passion for the Craft')
  })

  it('displays key technologies', () => {
    const wrapper = mount(AboutDemoView)
    expect(wrapper.text()).toContain('Vue 3')
    expect(wrapper.text()).toContain('TypeScript')
    expect(wrapper.text()).toContain('Tailwind CSS')
    expect(wrapper.text()).toContain('Vitest')
  })

  it('has gradient background', () => {
    const wrapper = mount(AboutDemoView)
    const main = wrapper.find('main')
    expect(main.classes()).toContain('bg-gradient-to-br')
  })

  it('renders final CTA section', () => {
    const wrapper = mount(AboutDemoView)
    expect(wrapper.text()).toContain("Let's Build Something Amazing")
  })

  it('has source code link', () => {
    const wrapper = mount(AboutDemoView)
    const sourceLink = wrapper.find('a[href="https://github.com/cocodedk/aura-recruit-demo"]')
    expect(sourceLink.exists()).toBe(true)
    expect(sourceLink.text()).toContain('View Source Code')
  })

  it('has back to main site link', () => {
    const wrapper = mount(AboutDemoView)
    const backLink = wrapper.find('a[href="/"]')
    expect(backLink.exists()).toBe(true)
    expect(backLink.text()).toContain('Back to Main Site')
  })

  it('displays philosophy points', () => {
    const wrapper = mount(AboutDemoView)
    expect(wrapper.text()).toContain('Code as communication')
    expect(wrapper.text()).toContain('Continuous improvement')
    expect(wrapper.text()).toContain('Quality over speed')
  })

  it('has animated background elements', () => {
    const wrapper = mount(AboutDemoView)
    expect(wrapper.html()).toContain('animate-pulse')
  })
})
