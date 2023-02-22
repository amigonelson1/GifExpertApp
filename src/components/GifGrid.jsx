import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';

export function GifGrid({ category }) {

    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {isLoading && (<h2>Loading...</h2>)}
            {
                images.length === 0 && (
                    <h4>Lo sentimos, no se encontraron resultados</h4>
                )
            }
            <div className='card-grid'>
                {images.map((images) =>
                    <GifItem key={images.id} {...images} />
                )}
            </div>
        </>
    )
};