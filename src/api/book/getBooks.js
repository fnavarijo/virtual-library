import Prismic from 'prismic-javascript';

const apiEndpoint = 'https://virtual-library.cdn.prismic.io/api/v2';

export const getBooks = async () => {
  try {
    const api = await Prismic.getApi(apiEndpoint);
    const { results } = await api.query('');
    return results;
  } catch (err) {
    console.error('Something went wrong: ', err);
  }
}
