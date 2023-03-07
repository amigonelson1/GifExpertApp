import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('pruebas en <GifItem />', () => {
    const title = 'Saitama';
    const url = 'https://saitama.com/';

    test('debe hacer match con snapshot', () => {
        const { container } = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    });

    test('deben ser iguales titulo y url', () => {
        render(<GifItem title={title} url={url} />);
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test('debe mostrar el titulo', () => {
        render(<GifItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();
    })
})