import { mount } from '@vue/test-utils'
import BaseLogo from './BaseLogo.vue'

describe('<BaseLogo />', () => {
  it('should contain MoviesApp text', () => {
    const msg = 'MoviesApp'
    const wrapper = mount(BaseLogo)

    expect(wrapper.text()).toEqual(msg)
  })
})