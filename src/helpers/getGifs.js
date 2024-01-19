export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=lGyqmd4F6dBUSL8pPo7rlYK24BW4oydM&q=${category}&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  return gifs;
};