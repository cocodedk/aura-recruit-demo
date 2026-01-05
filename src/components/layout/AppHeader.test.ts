import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from 'vue-router'
import AppHeader from './AppHeader.vue'

// Create mock routes
const routes = [
  { path: '/', name: 'home', component: { template: '<div>Home</div>' } },
  { path: '/cv-drop', name: 'cv-drop', component: { template: '<div>CV Drop</div>' } },
  { path: '/contact', name: 'contact', component: { template: '<div>Contact</div>' } },
  { path: '/team', name: 'team', component: { template: '<div>Team</div>' } },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

describe('AppHeader', () => {
  it('renders logo and navigation', () => {
    const wrapper = mount(AppHeader, {
      global: {
        plugins: [router]
      }
    })

    expect(wrapper.text()).toContain('AURA RECRUIT')
    expect(wrapper.find('.sticky').exists()).toBe(true)
  })

  it('shows desktop navigation on large screens', () => {
    const wrapper = mount(AppHeader, {
      global: {
        plugins: [router]
      }
    })

    const desktopNav = wrapper.find('.hidden.md\\:flex')
    expect(desktopNav.exists()).toBe(true)
    expect(desktopNav.text()).toContain('Home')
    expect(desktopNav.text()).toContain('Hire Talent')
    expect(desktopNav.text()).toContain('Submit CV')
  })

  it('shows mobile menu button on small screens', () => {
    const wrapper = mount(AppHeader, {
      global: {
        plugins: [router]
      }
    })

    const mobileButton = wrapper.find('.md\\:hidden')
    expect(mobileButton.exists()).toBe(true)
    expect(mobileButton.find('svg').exists()).toBe(true)
  })

  it('toggles mobile menu when hamburger is clicked', async () => {
    const wrapper = mount(AppHeader, {
      global: {
        plugins: [router]
      }
    })

    const mobileButton = wrapper.find('.md\\:hidden')

    // Initially menu should not be visible
    expect(wrapper.find('.fixed.inset-0.top-16').exists()).toBe(false)

    // Click to open
    await mobileButton.trigger('click')
    expect(wrapper.find('.fixed.inset-0.top-16').exists()).toBe(true)

    // Click to close
    await mobileButton.trigger('click')
    expect(wrapper.find('.fixed.inset-0.top-16').exists()).toBe(false)
  })

  it('closes mobile menu when clicking overlay', async () => {
    const wrapper = mount(AppHeader, {
      global: {
        plugins: [router]
      }
    })

    const mobileButton = wrapper.find('.md\\:hidden')

    // Open menu
    await mobileButton.trigger('click')
    expect(wrapper.find('.fixed.inset-0.top-16').exists()).toBe(true)

    // Click overlay to close
    const overlay = wrapper.find('.fixed.inset-0.top-16')
    await overlay.trigger('click')
    expect(wrapper.find('.fixed.inset-0.top-16').exists()).toBe(false)
  })

  it('applies active class to current route', async () => {
    await router.push('/contact')

    const wrapper = mount(AppHeader, {
      global: {
        plugins: [router]
      }
    })

    const activeLink = wrapper.find('.text-aura-accent')
    expect(activeLink.text()).toBe('Hire Talent')
  })

  it('navigates when links are clicked', async () => {
    const wrapper = mount(AppHeader, {
      global: {
        plugins: [router]
      }
    })

    const contactLink = wrapper.findAll('a').find(link => link.text() === 'Hire Talent')
    expect(contactLink).toBeDefined()

    await contactLink!.trigger('click')
    expect(router.currentRoute.value.name).toBe('contact')
  })

  it('has correct styling classes', () => {
    const wrapper = mount(AppHeader, {
      global: {
        plugins: [router]
      }
    })

    expect(wrapper.classes()).toContain('sticky')
    expect(wrapper.classes()).toContain('top-0')
    expect(wrapper.classes()).toContain('bg-aura-navy')
    expect(wrapper.classes()).toContain('text-white')
  })

  it('closes mobile menu when navigation link is clicked', async () => {
    const wrapper = mount(AppHeader, {
      global: {
        plugins: [router]
      }
    })

    const mobileButton = wrapper.find('.md\\:hidden')

    // Open menu
    await mobileButton.trigger('click')
    expect(wrapper.find('.fixed.inset-0.top-16').exists()).toBe(true)

    // Click a navigation link
    const homeLink = wrapper.find('.fixed.inset-0.top-16 a')
    await homeLink.trigger('click')

    // Menu should close
    expect(wrapper.find('.fixed.inset-0.top-16').exists()).toBe(false)
  })
})
