import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('prueba a <GifGrid />', () => {
    const category = 'One punch';
    test('Debe mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        })

        render(<GifGrid category={category} />);
        expect(screen.getByText('Loading...'));
        expect(screen.getByText(category));
    });

    test('Debe mostrar los items cuando se cargan las imagenes', () => {

        const gifs = [{
            id: 'ABC',
            title: 'Saitama',
            url: 'https://saitama.com/',
        }]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        })

        render(<GifGrid category={category} />);
        expect(screen.getAllByRole('img').length).toBe(1);
    });

})