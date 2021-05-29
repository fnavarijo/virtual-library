import Prismic from 'prismic-javascript';

const apiEndpoint = 'https://virtual-library.cdn.prismic.io/api/v2';

export const getBooksByName = async (name) => {
  try {
    const api = await Prismic.getApi(apiEndpoint);
    const books = await api.query([
      Prismic.Predicates.fulltext('my.book.book-title', name)
    ]);
    return books;
  } catch (err) {
    console.error('Something went wrong: ', err);
  }
}
