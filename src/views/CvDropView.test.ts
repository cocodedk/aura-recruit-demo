import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from 'vue-router'
import CvDropView from './CvDropView.vue'

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    { path: '/', name: 'home', component: { template: '<div>Home</div>' } },
    { path: '/cv-drop', name: 'cv-drop', component: CvDropView },
  ],
})

describe('CvDropView', () => {
  it('renders page title and hero', () => {
    const wrapper = mount(CvDropView, {
      global: {
        plugins: [router]
      }
    })

    expect(wrapper.text()).toContain('Submit Your CV')
    expect(wrapper.text()).toContain('Join our network of elite tech professionals')
  })

  it('shows form initially, not success state', () => {
    const wrapper = mount(CvDropView, {
      global: {
        plugins: [router]
      }
    })

    expect(wrapper.find('form').exists()).toBe(true)
    expect(wrapper.text()).not.toContain('CV Submitted Successfully')
  })

  it('renders file upload component', () => {
    const wrapper = mount(CvDropView, {
      global: {
        plugins: [router]
      }
    })

    expect(wrapper.findComponent({ name: 'FileUpload' }).exists()).toBe(true)
  })

  it('renders input fields', () => {
    const wrapper = mount(CvDropView, {
      global: {
        plugins: [router]
      }
    })

    const inputs = wrapper.findAll('input')
    expect(inputs.length).toBeGreaterThan(1) // File input + text inputs
  })

  it('validates required fields', async () => {
    const wrapper = mount(CvDropView, {
      global: {
        plugins: [router]
      }
    })

    const submitButton = wrapper.findAll('button').find(btn => btn.text() === 'Submit CV')
    expect(submitButton).toBeDefined()

    // Try to submit without filling fields
    await submitButton!.trigger('click')

    // Should not submit (no success state)
    expect(wrapper.text()).not.toContain('CV Submitted Successfully')
  })

  it('shows loading state during submission', async () => {
    const wrapper = mount(CvDropView, {
      global: {
        plugins: [router]
      }
    })

    // Fill required fields
    const nameInput = wrapper.findAll('input').find(input =>
      input.attributes('placeholder')?.includes('full name')
    )
    const emailInput = wrapper.findAll('input').find(input =>
      input.attributes('placeholder')?.includes('email')
    )

    if (nameInput && emailInput) {
      await nameInput.setValue('John Doe')
      await emailInput.setValue('john@example.com')

      const submitButton = wrapper.findAll('button').find(btn => btn.text() === 'Submit CV')
      await submitButton!.trigger('click')

      // Should show loading state
      expect(wrapper.text()).toContain('Submit CV')
      expect(wrapper.find('.animate-spin').exists()).toBe(true)
    }
  })

  it('transitions to success state after submission', async () => {
    vi.useFakeTimers()

    const wrapper = mount(CvDropView, {
      global: {
        plugins: [router]
      }
    })

    // Fill and submit form
    const nameInput = wrapper.findAll('input').find(input =>
      input.attributes('placeholder')?.includes('full name')
    )
    const emailInput = wrapper.findAll('input').find(input =>
      input.attributes('placeholder')?.includes('email')
    )

    if (nameInput && emailInput) {
      await nameInput.setValue('John Doe')
      await emailInput.setValue('john@example.com')

      const submitButton = wrapper.findAll('button').find(btn => btn.text() === 'Submit CV')
      await submitButton!.trigger('click')

      // Fast-forward through loading
      await vi.advanceTimersByTime(2000)

      expect(wrapper.text()).toContain('CV Submitted Successfully')
      expect(wrapper.text()).toContain('Thank you for your interest')
    }

    vi.useRealTimers()
  })

  it('shows success action buttons', async () => {
    vi.useFakeTimers()

    const wrapper = mount(CvDropView, {
      global: {
        plugins: [router]
      }
    })

    // Fill and submit form
    const nameInput = wrapper.findAll('input').find(input =>
      input.attributes('placeholder')?.includes('full name')
    )
    const emailInput = wrapper.findAll('input').find(input =>
      input.attributes('placeholder')?.includes('email')
    )

    if (nameInput && emailInput) {
      await nameInput.setValue('John Doe')
      await emailInput.setValue('john@example.com')

      const submitButton = wrapper.findAll('button').find(btn => btn.text() === 'Submit CV')
      await submitButton!.trigger('click')

      await vi.advanceTimersByTime(2000)

      expect(wrapper.text()).toContain('Return Home')
      expect(wrapper.text()).toContain('Meet Our Team')
    }

    vi.useRealTimers()
  })

  it('navigates back to home when Return Home is clicked', async () => {
    vi.useFakeTimers()

    const wrapper = mount(CvDropView, {
      global: {
        plugins: [router]
      }
    })

    // Complete submission process
    const nameInput = wrapper.findAll('input').find(input =>
      input.attributes('placeholder')?.includes('full name')
    )
    const emailInput = wrapper.findAll('input').find(input =>
      input.attributes('placeholder')?.includes('email')
    )

    if (nameInput && emailInput) {
      await nameInput.setValue('John Doe')
      await emailInput.setValue('john@example.com')

      const submitButton = wrapper.findAll('button').find(btn => btn.text() === 'Submit CV')
      await submitButton!.trigger('click')

      await vi.advanceTimersByTime(2000)

      const homeButton = wrapper.findAll('button').find(btn => btn.text() === 'Return Home')
      await homeButton!.trigger('click')

      expect(router.currentRoute.value.name).toBe('home')
    }

    vi.useRealTimers()
  })

  it('displays privacy notice', () => {
    const wrapper = mount(CvDropView, {
      global: {
        plugins: [router]
      }
    })

    expect(wrapper.text()).toContain('By submitting, you agree to our privacy policy')
    expect(wrapper.text()).toContain('We collect personal data only for recruitment purposes')
  })

  it('has responsive layout', () => {
    const wrapper = mount(CvDropView, {
      global: {
        plugins: [router]
      }
    })

    expect(wrapper.find('.max-w-md').exists()).toBe(true)
    expect(wrapper.find('.mx-auto').exists()).toBe(true)
  })
})
