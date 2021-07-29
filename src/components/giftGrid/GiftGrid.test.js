const { shallow } = require("enzyme");
const { GiftGrid } = require("./GiftGrid");

describe('Testing GifGrid', () => {
    const category = 'Goku'
    const wrapper = shallow(<GiftGrid category={category} />)
    test('should ', async () => {
        
        expect(wrapper).toMatchSnapshot()
    });
    
});