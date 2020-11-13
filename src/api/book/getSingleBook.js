import Prismic from 'prismic-javascript';

const apiEndpoint = 'https://virtual-library.cdn.prismic.io/api/v2';

export const getSingleBook = async (id) => {
  try {
    const api = await Prismic.getApi(apiEndpoint);
    const book = await api.getByID(id);
    console.log('Documents: ', book);
    return book;
  } catch (err) {
    console.error('Something went wrong: ', err);
  }
}
