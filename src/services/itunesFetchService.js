

const index = async (term) => {
  const url = new URL('https://itunes.apple.com/search');
  const params = {
    term,
    media: 'podcast',
  }
  try {
    url.search = new URLSearchParams(params);
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
export default {
  index,
}