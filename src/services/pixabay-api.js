const KEY = '22441039-e3c3a22ef42346706974d6393';
const PER_PAGE = 12;

const fetchImages = (query, page = 1) => {
  const baseUrl = 'https://pixabay.com/api/';
  const searchParams = new URLSearchParams({
    q: query,
    page,
    key: KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: PER_PAGE,
  });

  return fetch(`${baseUrl}?${searchParams.toString()}`).then(response => {
    if (!response.ok) {
      return Promise.rejected(new Error('Oops, something went wrong!'));
    }
    return response.json();
  });
};

export default fetchImages;
