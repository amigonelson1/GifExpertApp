import { useFetchGifs } from '../hooks/useFetchGifs';
import GifItem from './GifItem';

function GifGrid({ category }) {

    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            <div className='card-grid'>
                {images.map((images) =>
                    <GifItem key={images.id} {...images} />
                )}
            </div>
        </>
    )
}

export default GifGrid