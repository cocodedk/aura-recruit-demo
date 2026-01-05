import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import InputField from './InputField.vue'

describe('InputField', () => {
  it('renders with label and input', () => {
    const wrapper = mount(InputField, {
      props: {
        label: 'Test Label'
      }
    })

    expect(wrapper.find('label').exists()).toBe(true)
    expect(wrapper.find('span').text()).toBe('Test Label')
    expect(wrapper.find('input').exists()).toBe(true)
  })

  it('generates unique id for input', () => {
    const wrapper1 = mount(InputField, {
      props: { label: 'Label 1' }
    })
    const wrapper2 = mount(InputField, {
      props: { label: 'Label 2' }
    })

    const id1 = wrapper1.find('input').attributes('id')
    const id2 = wrapper2.find('input').attributes('id')

    expect(id1).not.toBe(id2)
    expect(wrapper1.find('label').attributes('for')).toBe(id1)
    expect(wrapper2.find('label').attributes('for')).toBe(id2)
  })

  it('applies correct input styling', () => {
    const wrapper = mount(InputField, {
      props: {
        label: 'Styled Input'
      }
    })

    const input = wrapper.find('input')
    expect(input.classes()).toContain('rounded-xl')
    expect(input.classes()).toContain('border-slate-300')
    expect(input.classes()).toContain('px-4')
    expect(input.classes()).toContain('py-3')
    expect(input.classes()).toContain('text-base')
  })

  it('shows required indicator when required prop is true', () => {
    const wrapper = mount(InputField, {
      props: {
        label: 'Required Field',
        required: true
      }
    })

    expect(wrapper.find('span').text()).toContain('*')
  })

  it('sets input type correctly', () => {
    const wrapper = mount(InputField, {
      props: {
        label: 'Email Field',
        type: 'email'
      }
    })

    expect(wrapper.find('input').attributes('type')).toBe('email')
  })

  it('defaults to text type when no type specified', () => {
    const wrapper = mount(InputField, {
      props: {
        label: 'Text Field'
      }
    })

    expect(wrapper.find('input').attributes('type')).toBe('text')
  })

  it('sets placeholder when provided', () => {
    const wrapper = mount(InputField, {
      props: {
        label: 'Placeholder Test',
        placeholder: 'Enter value here'
      }
    })

    expect(wrapper.find('input').attributes('placeholder')).toBe('Enter value here')
  })

  it('applies required attribute when required prop is true', () => {
    const wrapper = mount(InputField, {
      props: {
        label: 'Required Test',
        required: true
      }
    })

    expect(wrapper.find('input').attributes('required')).toBeDefined()
  })

  it('emits update:modelValue on input', async () => {
    const wrapper = mount(InputField, {
      props: {
        label: 'Update Test',
        modelValue: ''
      }
    })

    const input = wrapper.find('input')
    await input.setValue('new value')

    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')![0]).toEqual(['new value'])
  })

  it('binds modelValue to input value', () => {
    const wrapper = mount(InputField, {
      props: {
        label: 'Model Test',
        modelValue: 'initial value'
      }
    })

    expect(wrapper.find('input').element.value).toBe('initial value')
  })

  it('has focus styling classes', () => {
    const wrapper = mount(InputField, {
      props: {
        label: 'Focus Test'
      }
    })

    const input = wrapper.find('input')

    // Should have focus-related classes
    expect(input.classes()).toContain('focus:outline-none')
    expect(input.classes()).toContain('focus:ring-2')
    expect(input.classes()).toContain('focus:ring-aura-accent')
    expect(input.classes()).toContain('focus:border-transparent')
  })
})
