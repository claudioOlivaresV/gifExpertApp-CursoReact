import TextField from '@material-ui/core/TextField';
import '@testing-library/jest-dom'
const { shallow } = require("enzyme");
const { AddCategory } = require("./AddCategory");

describe('Testing in AddCategory', () => {
    const setCategories = jest.fn();

    let wrapper = shallow(<AddCategory setCategories = {setCategories } /> )

    beforeEach ( () => {

        // limpiamos el wrapper xq tenia el inputValue en el primer caso
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories = {setCategories } /> )

    })

    test('should see Snapshot', async () => {
        expect(wrapper).toMatchSnapshot(); 
    });

    test('should  to change textbox Hola Mundo', async () => {
        const value = 'Hola'
        const input = wrapper.find(TextField)
        input.props().onChange( {target : { value }});
        const text = wrapper.find('p').text().trim();

        expect(text).toBe(value)
    });

    test('no debe de posterar la informacion con submit', async () => {

        wrapper.find('form').simulate('submit', {preventDefault(){}})
        expect ( setCategories ).not.toHaveBeenCalled()
        
    });

    test('llamar el setCategories y limpiar la caja de texto ', async () => {

        const value = 'Hola'
        const input = wrapper.find(TextField)
        input.props().onChange( {target : { value }});

        wrapper.find('form').simulate('submit', {preventDefault(){}})

        
        // evalua que la funcion se ejecute con una funcion =  setCategories(category => [inputValue, ...category, ]);

        expect ( setCategories ).toHaveBeenCalledWith( expect.any(Function))
        expect(input.props().value).toBe('') 
        
    });
});