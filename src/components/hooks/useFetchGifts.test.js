import { useFetchGifs } from "./useFetchGifts"
import { renderHook } from '@testing-library/react-hooks'

describe('Pruebas sobre useFech Gifts', () => {
    test('debe retornar el estado incial', async () => {
       const { result, waitForNextUpdate} = renderHook( () => useFetchGifs('One'))
       console.log(result);   
       
       const { data, loading} = result.current;
       await waitForNextUpdate();

       console.log(data , loading);
       expect( data).toEqual([])
       expect(loading).toBeTruthy();
    })
    test('debe retornar un arreglo de imagenes y loading false', async () => {
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('One'))
        await waitForNextUpdate();
        const { data, loading} = result.current;

    })
    

})
