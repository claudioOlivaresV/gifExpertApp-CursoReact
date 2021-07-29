const { getGifs } = require("./getGits");

describe('Testing getGift', () => {
    test('should bring 6 items', async () => {

        const large = 6

        const gifs = await getGifs('hola')

        expect(gifs.length).toBe(large)
        
    });

    test('it should bring an empty array, if the length of the string is zero', async () => {

        const large = 0

        const gifs = await getGifs('')
        expect(gifs.length).toBe(large)

        console.log(gifs);
        
    });
});