import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AppFooter from './AppFooter.vue'

describe('AppFooter', () => {
  it('renders footer with correct background', () => {
    const wrapper = mount(AppFooter)

    expect(wrapper.classes()).toContain('bg-aura-navy')
    expect(wrapper.classes()).toContain('text-white')
    expect(wrapper.classes()).toContain('py-16')
  })

  it('displays company information', () => {
    const wrapper = mount(AppFooter)

    expect(wrapper.text()).toContain('Aura Recruit')
    expect(wrapper.text()).toContain('Boutique technology search business')
  })

  it('shows contact information', () => {
    const wrapper = mount(AppFooter)

    expect(wrapper.text()).toContain('+44 208 004 0066')
    expect(wrapper.text()).toContain('info@aurarecruit.com')
  })

  it('displays address information', () => {
    const wrapper = mount(AppFooter)

    expect(wrapper.text()).toContain('Aura Recruit Ltd')
    expect(wrapper.text()).toContain('Chelmsford, Essex')
    expect(wrapper.text()).toContain('CM1 7DJ')
  })

  it('includes social media links', () => {
    const wrapper = mount(AppFooter)

    const linkedinLink = wrapper.findAll('a').find(link =>
      link.attributes('href')?.includes('linkedin')
    )
    const instagramLink = wrapper.findAll('a').find(link =>
      link.attributes('href')?.includes('instagram')
    )

    expect(linkedinLink).toBeDefined()
    expect(instagramLink).toBeDefined()
  })

  it('renders LinkedIn icon', () => {
    const wrapper = mount(AppFooter)

    const linkedinIcon = wrapper.findAll('svg').find(svg =>
      svg.html().includes('M20.447')
    )
    expect(linkedinIcon).toBeDefined()
  })

  it('renders Instagram icon', () => {
    const wrapper = mount(AppFooter)

    const instagramIcon = wrapper.findAll('svg').find(svg =>
      svg.html().includes('M12 2.163')
    )
    expect(instagramIcon).toBeDefined()
  })

  it('displays copyright information', () => {
    const wrapper = mount(AppFooter)

    expect(wrapper.text()).toContain('© 2026 AURA RECRUIT')
  })

  it('has responsive grid layout', () => {
    const wrapper = mount(AppFooter)

    const grid = wrapper.find('.grid')
    expect(grid.classes()).toContain('grid-cols-1')
    expect(grid.classes()).toContain('md:grid-cols-3')
  })

  it('social icons have proper styling', () => {
    const wrapper = mount(AppFooter)

    const socialIcons = wrapper.findAll('.w-10.h-10')
    expect(socialIcons.length).toBeGreaterThan(0)

    socialIcons.forEach(icon => {
      expect(icon.classes()).toContain('bg-white/10')
      expect(icon.classes()).toContain('rounded-lg')
    })
  })

  it('footer sections have proper spacing', () => {
    const wrapper = mount(AppFooter)

    // Individual sections have space-y-6, not the root footer
    expect(wrapper.find('.space-y-6').exists()).toBe(true)
    expect(wrapper.find('.space-y-3').exists()).toBe(true)
  })

  it('includes proper aria-labels for accessibility', () => {
    const wrapper = mount(AppFooter)

    const linkedinLink = wrapper.findAll('a').find(link =>
      link.attributes('href')?.includes('linkedin')
    )
    const instagramLink = wrapper.findAll('a').find(link =>
      link.attributes('href')?.includes('instagram')
    )

    expect(linkedinLink?.attributes('aria-label')).toBe('LinkedIn')
    expect(instagramLink?.attributes('aria-label')).toBe('Instagram')
  })

  it('social links open in new tab', () => {
    const wrapper = mount(AppFooter)

    const socialLinks = wrapper.findAll('a').filter(link =>
      link.attributes('href')?.includes('linkedin') ||
      link.attributes('href')?.includes('instagram')
    )

    socialLinks.forEach(link => {
      expect(link.attributes('target')).toBe('_blank')
    })
  })
})
