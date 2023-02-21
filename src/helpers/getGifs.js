export const getGifs = async (cat) => {
    const url= `http://api.giphy.com/v1/gifs/search?api_key=xqI7D7Syg9G8oSlQ8wdSDzKqwP2pBKnH&q=${cat}&limit=10`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map (img=> ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }));
    return gifs;
}

