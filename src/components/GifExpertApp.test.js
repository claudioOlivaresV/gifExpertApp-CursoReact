import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import { GifExpertApp } from './GifExpertApp'
describe('Test Gif ExpertApp', () => {
    const wrapper = shallow (<GifExpertApp />)
    test('Probar snapshot', async () => {
        expect(wrapper).toMatchSnapshot();
    })
})
