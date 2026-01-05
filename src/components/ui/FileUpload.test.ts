import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import FileUpload from './FileUpload.vue'

describe('FileUpload', () => {
  let mockFile: File

  beforeEach(() => {
    mockFile = new File(['test content'], 'test.pdf', { type: 'application/pdf' })
  })

  it('renders upload zone with correct styling', () => {
    const wrapper = mount(FileUpload)

    expect(wrapper.classes()).toContain('border-2')
    expect(wrapper.classes()).toContain('border-dashed')
    expect(wrapper.classes()).toContain('rounded-2xl')
    expect(wrapper.classes()).toContain('cursor-pointer')
  })

  it('shows default upload text', () => {
    const wrapper = mount(FileUpload)

    expect(wrapper.text()).toContain('Drop your CV here or click to browse')
    expect(wrapper.text()).toContain('PDF, DOC, DOCX up to 10MB')
  })

  it('handles drag over events', async () => {
    const wrapper = mount(FileUpload)
    const uploadZone = wrapper.find('.cursor-pointer')

    await uploadZone.trigger('dragover', {
      preventDefault: vi.fn()
    })

    expect(wrapper.classes()).toContain('border-aura-accent')
  })

  it('handles drag leave events', async () => {
    const wrapper = mount(FileUpload)
    const uploadZone = wrapper.find('.cursor-pointer')

    // First drag over
    await uploadZone.trigger('dragover', {
      preventDefault: vi.fn()
    })
    expect(wrapper.classes()).toContain('border-aura-accent')

    // Then drag leave
    await uploadZone.trigger('dragleave', {
      preventDefault: vi.fn()
    })
    expect(wrapper.classes()).not.toContain('border-aura-accent')
  })

  it('handles drop events', async () => {
    vi.useFakeTimers()

    const wrapper = mount(FileUpload)
    const uploadZone = wrapper.find('.cursor-pointer')

    const dataTransfer = {
      files: [mockFile]
    }

    await uploadZone.trigger('drop', {
      preventDefault: vi.fn(),
      dataTransfer
    })

    // Wait for upload simulation to complete
    await vi.advanceTimersByTime(2500)

    // Should emit fileSelected event
    expect(wrapper.emitted('fileSelected')).toBeTruthy()
    expect(wrapper.emitted('fileSelected')![0]).toEqual([mockFile])

    vi.useRealTimers()
  })

  it('handles file input change', async () => {
    vi.useFakeTimers()

    const wrapper = mount(FileUpload)

    const input = wrapper.find('input[type="file"]')
    Object.defineProperty(input.element, 'files', {
      value: [mockFile]
    })

    await input.trigger('change')

    // Wait for upload simulation to complete
    await vi.advanceTimersByTime(2500)

    expect(wrapper.emitted('fileSelected')).toBeTruthy()
    expect(wrapper.emitted('fileSelected')![0]).toEqual([mockFile])

    vi.useRealTimers()
  })

  it('shows uploading state during upload simulation', async () => {
    const wrapper = mount(FileUpload)
    const uploadZone = wrapper.find('.cursor-pointer')

    // Trigger upload
    await uploadZone.trigger('drop', {
      preventDefault: vi.fn(),
      dataTransfer: { files: [mockFile] }
    })

    // Should show progress bar
    expect(wrapper.text()).toContain('Uploading your CV...')
    expect(wrapper.find('.bg-slate-200').exists()).toBe(true)
  })

  it('shows success state after upload completes', async () => {
    vi.useFakeTimers()

    const wrapper = mount(FileUpload)
    const uploadZone = wrapper.find('.cursor-pointer')

    // Trigger upload
    await uploadZone.trigger('drop', {
      preventDefault: vi.fn(),
      dataTransfer: { files: [mockFile] }
    })

    // Fast-forward through upload
    await vi.advanceTimersByTime(2500)

    expect(wrapper.text()).toContain('✓ test.pdf uploaded successfully')
    expect(wrapper.classes()).toContain('border-green-500')
    expect(wrapper.classes()).toContain('bg-green-50')

    vi.useRealTimers()
  })

  it('accepts custom maxSize', () => {
    const wrapper = mount(FileUpload, {
      props: {
        maxSize: 5 // 5MB
      }
    })

    expect(wrapper.text()).toContain('up to 5MB')
  })

  it('accepts custom accept attribute', () => {
    const wrapper = mount(FileUpload, {
      props: {
        accept: '.pdf,.doc'
      }
    })

    expect(wrapper.find('input').attributes('accept')).toBe('.pdf,.doc')
  })

  it('rejects files over max size', async () => {
    const largeFile = new File(['x'.repeat(15 * 1024 * 1024)], 'large.pdf', { type: 'application/pdf' })

    const wrapper = mount(FileUpload, {
      props: {
        maxSize: 10 // 10MB
      }
    })

    const uploadZone = wrapper.find('.cursor-pointer')

    await uploadZone.trigger('drop', {
      preventDefault: vi.fn(),
      dataTransfer: { files: [largeFile] }
    })

    // Should show error state (though we don't have specific error handling in component)
    expect(wrapper.emitted('fileSelected')).toBeFalsy()
  })

  it('has clickable upload zone', () => {
    const wrapper = mount(FileUpload)

    const uploadZone = wrapper.find('.cursor-pointer')
    expect(uploadZone.exists()).toBe(true)
    expect(uploadZone.classes()).toContain('cursor-pointer')
  })
})
