import { mount } from '@vue/test-utils'
import Header from '@/components/Header.vue'

describe('Header', () => {
  test('header is a Vue instance', () => {
    const wrapper = mount(Header, {
      propsData: {
        message: ''
      }
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('i can pass a props an see the value', () => {
    const wrapper = mount(Header, {
      propsData: {
        message: 'Hello Vue World!'
      }
    })

    expect(wrapper.props('message')).toBe('Hello Vue World!')
  })
})
