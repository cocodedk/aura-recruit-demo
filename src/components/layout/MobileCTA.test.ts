import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from 'vue-router'
import MobileCTA from './MobileCTA.vue'

// Create mock routes
const routes = [
  { path: '/', name: 'home', component: { template: '<div>Home</div>' } },
  { path: '/cv-drop', name: 'cv-drop', component: { template: '<div>CV Drop</div>' } },
  { path: '/contact', name: 'contact', component: { template: '<div>Contact</div>' } },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

describe('MobileCTA', () => {
  it('renders two buttons', () => {
    const wrapper = mount(MobileCTA, {
      global: {
        plugins: [router]
      }
    })

    const buttons = wrapper.findAll('button')
    expect(buttons).toHaveLength(2)
    expect(buttons[0].text()).toBe('Hire Talent')
    expect(buttons[1].text()).toBe('Submit CV')
  })

  it('is hidden on desktop (md and up)', () => {
    const wrapper = mount(MobileCTA, {
      global: {
        plugins: [router]
      }
    })

    expect(wrapper.classes()).toContain('md:hidden')
  })

  it('has sticky positioning', () => {
    const wrapper = mount(MobileCTA, {
      global: {
        plugins: [router]
      }
    })

    expect(wrapper.classes()).toContain('fixed')
    expect(wrapper.classes()).toContain('bottom-0')
    expect(wrapper.classes()).toContain('inset-x-0')
  })

  it('applies correct styling', () => {
    const wrapper = mount(MobileCTA, {
      global: {
        plugins: [router]
      }
    })

    expect(wrapper.classes()).toContain('bg-aura-navy')
    expect(wrapper.classes()).toContain('border-t')
    expect(wrapper.classes()).toContain('border-white/10')
    expect(wrapper.classes()).toContain('px-4')
    expect(wrapper.classes()).toContain('py-3')
  })

  it('uses RouterLink components', () => {
    const wrapper = mount(MobileCTA, {
      global: {
        plugins: [router]
      }
    })

    const routerLinks = wrapper.findAllComponents({ name: 'RouterLink' })
    expect(routerLinks).toHaveLength(2)
  })

  it('navigates to contact page when Hire Talent is clicked', async () => {
    const wrapper = mount(MobileCTA, {
      global: {
        plugins: [router]
      }
    })

    const hireButton = wrapper.findAll('button')[0]
    await hireButton.trigger('click')

    expect(router.currentRoute.value.name).toBe('contact')
  })

  it('navigates to cv-drop page when Submit CV is clicked', async () => {
    const wrapper = mount(MobileCTA, {
      global: {
        plugins: [router]
      }
    })

    const submitButton = wrapper.findAll('button')[1]
    await submitButton.trigger('click')

    expect(router.currentRoute.value.name).toBe('cv-drop')
  })

  it('includes safe area padding for iOS', () => {
    const wrapper = mount(MobileCTA, {
      global: {
        plugins: [router]
      }
    })

    // Check that the style attribute includes safe-area-inset-bottom
    expect(wrapper.attributes('style')).toContain('env(safe-area-inset-bottom)')
  })

  it('buttons are arranged in a flex layout', () => {
    const wrapper = mount(MobileCTA, {
      global: {
        plugins: [router]
      }
    })

    const container = wrapper.find('.flex')
    expect(container.classes()).toContain('gap-3')
  })

  it('buttons have full width styling', () => {
    const wrapper = mount(MobileCTA, {
      global: {
        plugins: [router]
      }
    })

    const buttons = wrapper.findAll('button')
    buttons.forEach(button => {
      expect(button.classes()).toContain('w-full')
    })
  })
})
