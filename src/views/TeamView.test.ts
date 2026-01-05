import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TeamView from './TeamView.vue'

describe('TeamView', () => {
  it('renders page title and hero', () => {
    const wrapper = mount(TeamView)

    expect(wrapper.text()).toContain('Meet the Team')
    expect(wrapper.text()).toContain('Trust and honest relationships')
  })

  it('displays team members', () => {
    const wrapper = mount(TeamView)

    expect(wrapper.text()).toContain('Matt')
    expect(wrapper.text()).toContain('Julian')
    expect(wrapper.text()).toContain('Co-Founder')
  })

  it('renders team member images', () => {
    const wrapper = mount(TeamView)

    const images = wrapper.findAll('img')
    expect(images.length).toBe(2) // Two team members
  })

  it('displays correct image sources', () => {
    const wrapper = mount(TeamView)

    const images = wrapper.findAll('img')
    expect(images[0].attributes('src')).toContain('Matt')
    expect(images[1].attributes('src')).toContain('Julian')
  })

  it('includes LinkedIn links for team members', () => {
    const wrapper = mount(TeamView)

    const linkedinLinks = wrapper.findAll('a').filter(link =>
      link.attributes('href')?.includes('linkedin')
    )

    expect(linkedinLinks.length).toBe(2)
  })

  it('LinkedIn links open in new tab', () => {
    const wrapper = mount(TeamView)

    const linkedinLinks = wrapper.findAll('a').filter(link =>
      link.attributes('href')?.includes('linkedin')
    )

    linkedinLinks.forEach(link => {
      expect(link.attributes('target')).toBe('_blank')
    })
  })

  it('displays company description', () => {
    const wrapper = mount(TeamView)

    expect(wrapper.text()).toContain('Why Choose Aura Recruit?')
    expect(wrapper.text()).toContain('over 8 years of experience')
    expect(wrapper.text()).toContain('boutique approach')
  })

  it('has responsive grid layout for team members', () => {
    const wrapper = mount(TeamView)

    const grid = wrapper.find('.grid')
    expect(grid.classes()).toContain('grid-cols-1')
    expect(grid.classes()).toContain('md:grid-cols-2')
  })

  it('includes proper image styling', () => {
    const wrapper = mount(TeamView)

    const images = wrapper.findAll('img')
    images.forEach(img => {
      expect(img.classes()).toContain('w-full')
      expect(img.classes()).toContain('aspect-square')
      expect(img.classes()).toContain('object-cover')
      expect(img.classes()).toContain('rounded-2xl')
    })
  })

  it('includes hover effects on images', () => {
    const wrapper = mount(TeamView)

    const images = wrapper.findAll('img')
    images.forEach(img => {
      expect(img.classes()).toContain('transition-transform')
      expect(img.classes()).toContain('duration-300')
      expect(img.classes()).toContain('hover:scale-105')
    })
  })

  it('displays team member roles correctly', () => {
    const wrapper = mount(TeamView)

    const roles = wrapper.findAll('.text-slate-600')
    expect(roles.some(role => role.text() === 'Co-Founder')).toBe(true)
  })

  it('has proper semantic structure', () => {
    const wrapper = mount(TeamView)

    expect(wrapper.find('h1').exists()).toBe(true)
    expect(wrapper.findAll('h2').length).toBeGreaterThan(0)
    expect(wrapper.findAll('h3').length).toBe(2) // Two team members
  })

  it('includes social media icons', () => {
    const wrapper = mount(TeamView)

    const linkedinIcons = wrapper.findAll('svg')
    expect(linkedinIcons.length).toBeGreaterThan(0)
  })

  it('has proper spacing and layout', () => {
    const wrapper = mount(TeamView)

    expect(wrapper.find('.space-y-4').exists()).toBe(true)
    expect(wrapper.find('.max-w-4xl').exists()).toBe(true)
    expect(wrapper.find('.mx-auto').exists()).toBe(true)
  })

  it('includes accessibility attributes', () => {
    const wrapper = mount(TeamView)

    const linkedinButtons = wrapper.findAll('a[aria-label]')
    expect(linkedinButtons.length).toBe(2)
    expect(linkedinButtons.every(btn => btn.attributes('aria-label') === 'LinkedIn')).toBe(true)
  })

  it('applies correct styling to LinkedIn buttons', () => {
    const wrapper = mount(TeamView)

    const linkedinButtons = wrapper.findAll('.w-10.h-10')
    linkedinButtons.forEach(button => {
      expect(button.classes()).toContain('bg-slate-100')
      expect(button.classes()).toContain('rounded-lg')
      expect(button.classes()).toContain('hover:bg-slate-200')
      expect(button.classes()).toContain('transition-colors')
    })
  })
})
