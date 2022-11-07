const itunesSearch = async (term) => {
  const url = new URL("https://itunes.apple.com/search");
  const params = {
    term,
    limit: 8,
    media: "podcast",
  };
  try {
    url.search = new URLSearchParams(params);
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

const rssFetch = async (url) => {
  const url_ = new URL(url);
  try {
    url_.search = new URLSearchParams({});
    const response = await fetch(url_)
      .then((response) => response.text())
      .then((str) =>
        new window.DOMParser().parseFromString(str, "application/xml")
      )
      .then((data) => {
        console.log(data);
        return data;
      });
    return response;
  } catch (error) {
    console.error(error);
  }
};
export default {
  itunesSearch,
  rssFetch,
};
