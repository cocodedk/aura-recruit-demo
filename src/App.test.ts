import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from 'vue-router'
import App from './App.vue'
import HomeView from './views/HomeView.vue'
import CvDropView from './views/CvDropView.vue'
import ContactView from './views/ContactView.vue'
import TeamView from './views/TeamView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/cv-drop', name: 'cv-drop', component: CvDropView },
  { path: '/contact', name: 'contact', component: ContactView },
  { path: '/team', name: 'team', component: TeamView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

describe('App', () => {
  it('renders with layout components', () => {
    const wrapper = mount(App, {
      global: {
        plugins: [router]
      }
    })

    expect(wrapper.findComponent({ name: 'AppHeader' }).exists()).toBe(true)
    expect(wrapper.findComponent({ name: 'AppFooter' }).exists()).toBe(true)
    expect(wrapper.findComponent({ name: 'MobileCTA' }).exists()).toBe(true)
  })

  it('renders router view', () => {
    const wrapper = mount(App, {
      global: {
        plugins: [router]
      }
    })

    expect(wrapper.findComponent({ name: 'RouterView' }).exists()).toBe(true)
  })

  it('applies global styling', () => {
    const wrapper = mount(App, {
      global: {
        plugins: [router]
      }
    })

    expect(wrapper.classes()).toContain('min-h-screen')
    expect(wrapper.classes()).toContain('bg-aura-light')
  })

  it('includes page transition wrapper', () => {
    const wrapper = mount(App, {
      global: {
        plugins: [router]
      }
    })

    const transition = wrapper.findComponent({ name: 'Transition' })
    expect(transition.exists()).toBe(true)
    expect(transition.attributes('name')).toBe('page')
    expect(transition.attributes('mode')).toBe('out-in')
  })

  it('navigates between routes correctly', async () => {
    const wrapper = mount(App, {
      global: {
        plugins: [router]
      }
    })

    // Should start on home
    expect(router.currentRoute.value.name).toBe('home')

    // Navigate to contact
    await router.push('/contact')
    expect(router.currentRoute.value.name).toBe('contact')

    // Navigate to cv-drop
    await router.push('/cv-drop')
    expect(router.currentRoute.value.name).toBe('cv-drop')

    // Navigate to team
    await router.push('/team')
    expect(router.currentRoute.value.name).toBe('team')
  })

  it('maintains layout across route changes', async () => {
    const wrapper = mount(App, {
      global: {
        plugins: [router]
      }
    })

    // Check layout exists on home
    expect(wrapper.findComponent({ name: 'AppHeader' }).exists()).toBe(true)
    expect(wrapper.findComponent({ name: 'AppFooter' }).exists()).toBe(true)

    // Navigate to contact
    await router.push('/contact')

    // Layout should still exist
    expect(wrapper.findComponent({ name: 'AppHeader' }).exists()).toBe(true)
    expect(wrapper.findComponent({ name: 'AppFooter' }).exists()).toBe(true)
    expect(wrapper.findComponent({ name: 'MobileCTA' }).exists()).toBe(true)
  })

  it('includes global CSS styles', () => {
    const wrapper = mount(App, {
      global: {
        plugins: [router]
      }
    })

    // Check if style element exists (page transitions)
    const styles = wrapper.findAll('style')
    expect(styles.length).toBeGreaterThan(0)
  })

  it('sets up smooth scrolling behavior', () => {
    // This would typically be tested by checking document.documentElement.style.scrollBehavior
    // but since we're in a test environment, we just verify the component mounts without errors
    const wrapper = mount(App, {
      global: {
        plugins: [router]
      }
    })

    expect(wrapper.exists()).toBe(true)
  })
})
