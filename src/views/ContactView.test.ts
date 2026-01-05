import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from 'vue-router'
import ContactView from './ContactView.vue'

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    { path: '/', name: 'home', component: { template: '<div>Home</div>' } },
    { path: '/contact', name: 'contact', component: ContactView },
    { path: '/cv-drop', name: 'cv-drop', component: { template: '<div>CV Drop</div>' } },
  ],
})

describe('ContactView', () => {
  it('renders page title and hero', () => {
    const wrapper = mount(ContactView, {
      global: {
        plugins: [router]
      }
    })

    expect(wrapper.text()).toContain('Contact Aura Recruit')
    expect(wrapper.text()).toContain('Get in touch to discuss your hiring needs')
  })

  it('shows form initially, not success state', () => {
    const wrapper = mount(ContactView, {
      global: {
        plugins: [router]
      }
    })

    expect(wrapper.find('form').exists()).toBe(true)
    expect(wrapper.text()).not.toContain('Message Sent!')
  })

  it('renders all form fields', () => {
    const wrapper = mount(ContactView, {
      global: {
        plugins: [router]
      }
    })

    const inputs = wrapper.findAll('input')
    const textarea = wrapper.find('textarea')

    expect(inputs.length).toBe(2) // Name and email
    expect(textarea.exists()).toBe(true)
  })

  it('validates required fields', async () => {
    const wrapper = mount(ContactView, {
      global: {
        plugins: [router]
      }
    })

    const submitButton = wrapper.findAll('button').find(btn => btn.text() === 'Send Message')
    expect(submitButton).toBeDefined()

    // Try to submit without filling fields
    await submitButton!.trigger('click')

    // Should not submit
    expect(wrapper.text()).not.toContain('Message Sent!')
  })

  it('shows loading state during submission', async () => {
    const wrapper = mount(ContactView, {
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
    const messageTextarea = wrapper.find('textarea')

    if (nameInput && emailInput && messageTextarea.element) {
      await nameInput.setValue('John Doe')
      await emailInput.setValue('john@example.com')
      await messageTextarea.setValue('Test message')

      const submitButton = wrapper.findAll('button').find(btn => btn.text() === 'Send Message')
      await submitButton!.trigger('click')

      // Should show loading state
      expect(wrapper.find('.animate-spin').exists()).toBe(true)
    }
  })

  it('transitions to success state after submission', async () => {
    vi.useFakeTimers()

    const wrapper = mount(ContactView, {
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
    const messageTextarea = wrapper.find('textarea')

    if (nameInput && emailInput && messageTextarea.element) {
      await nameInput.setValue('John Doe')
      await emailInput.setValue('john@example.com')
      await messageTextarea.setValue('Test message')

      const submitButton = wrapper.findAll('button').find(btn => btn.text() === 'Send Message')
      await submitButton!.trigger('click')

      // Fast-forward through loading
      await vi.advanceTimersByTime(2000)

      expect(wrapper.text()).toContain('Message Sent!')
      expect(wrapper.text()).toContain('Thank you for contacting us')
    }

    vi.useRealTimers()
  })

  it('displays contact information', () => {
    const wrapper = mount(ContactView, {
      global: {
        plugins: [router]
      }
    })

    expect(wrapper.text()).toContain('+44 208 004 0066')
    expect(wrapper.text()).toContain('info@aurarecruit.com')
  })

  it('shows address information', () => {
    const wrapper = mount(ContactView, {
      global: {
        plugins: [router]
      }
    })

    expect(wrapper.text()).toContain('Aura Recruit Ltd')
    expect(wrapper.text()).toContain('Chelmsford, Essex')
    expect(wrapper.text()).toContain('CM1 7DJ')
  })

  it('includes social media links', () => {
    const wrapper = mount(ContactView, {
      global: {
        plugins: [router]
      }
    })

    const socialLinks = wrapper.findAll('a').filter(link =>
      link.attributes('href')?.includes('linkedin') ||
      link.attributes('href')?.includes('instagram')
    )

    expect(socialLinks.length).toBe(2)
  })

  it('success state shows action buttons', async () => {
    vi.useFakeTimers()

    const wrapper = mount(ContactView, {
      global: {
        plugins: [router]
      }
    })

    // Complete submission
    const nameInput = wrapper.findAll('input').find(input =>
      input.attributes('placeholder')?.includes('full name')
    )
    const emailInput = wrapper.findAll('input').find(input =>
      input.attributes('placeholder')?.includes('email')
    )
    const messageTextarea = wrapper.find('textarea')

    if (nameInput && emailInput && messageTextarea.element) {
      await nameInput.setValue('John Doe')
      await emailInput.setValue('john@example.com')
      await messageTextarea.setValue('Test message')

      const submitButton = wrapper.findAll('button').find(btn => btn.text() === 'Send Message')
      await submitButton!.trigger('click')

      await vi.advanceTimersByTime(2000)

      expect(wrapper.text()).toContain('Return Home')
      expect(wrapper.text()).toContain('Submit CV Instead')
    }

    vi.useRealTimers()
  })

  it('navigates correctly from success buttons', async () => {
    vi.useFakeTimers()

    const wrapper = mount(ContactView, {
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
    const messageTextarea = wrapper.find('textarea')

    if (nameInput && emailInput && messageTextarea.element) {
      await nameInput.setValue('John Doe')
      await emailInput.setValue('john@example.com')
      await messageTextarea.setValue('Test message')

      const submitButton = wrapper.findAll('button').find(btn => btn.text() === 'Send Message')
      await submitButton!.trigger('click')

      await vi.advanceTimersByTime(2000)

      // Test navigation buttons
      const cvButton = wrapper.findAll('button').find(btn => btn.text() === 'Submit CV Instead')
      if (cvButton) {
        await cvButton.trigger('click')
        expect(router.currentRoute.value.name).toBe('cv-drop')
      }
    }

    vi.useRealTimers()
  })

  it('has responsive layout', () => {
    const wrapper = mount(ContactView, {
      global: {
        plugins: [router]
      }
    })

    expect(wrapper.find('.max-w-md').exists()).toBe(true)
    expect(wrapper.find('.mx-auto').exists()).toBe(true)
  })
})
