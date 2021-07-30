import Spinner from '../spinner/Spinner';
import '@testing-library/jest-dom';
const { shallow } = require("enzyme");
const { useFetchGifs } = require("../hooks/useFetchGifts");
const { GiftGrid } = require("./GiftGrid");
jest.mock('../hooks/useFetchGifts')



describe('Testing GifGrid', () => {
    const category = 'Goku'
    test('Probar que en snapshot sea igual al grid', async () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })
        const wrapper = shallow(<GiftGrid category={category} />)
        expect(wrapper).toMatchSnapshot()
    });

    test('Debe de mostrar items cuando se imagenes useFetchGifs', () => {

        const gifs = [{
            id: 'ABC',
            title: 'Cualquier Cosa',
            url: 'https://localhost/cualquiercosa.jpg'
        }
        ];
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        })
        const wrapper = shallow(<GiftGrid category={category} />)

        expect(wrapper.find(<Spinner /> ).exists()).toBe(false)
        expect(wrapper.find('GiftGridItem').length).toBe(gifs.length)



    });



});