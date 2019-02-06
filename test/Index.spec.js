import { mount } from '@vue/test-utils'
import index from '@/pages/index.vue'

describe('Index', () => {
  test('index is a vue instance', () => {
    const wrapper = mount(index)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  test('renders counter that is 0, increments, and resets the counter', () => {
    const wrapper = mount(index)
    expect(wrapper.vm.counter).toBe(0)
    wrapper.find('button#incBtn').trigger('click')
    expect(wrapper.vm.counter).toBe(wrapper.vm.counter++)
    wrapper.find('button#resBtn').trigger('click')
    expect(wrapper.vm.counter).toBe(0)
  })
})
