import axios from 'axios'

export const fetchArticles = async (page: number) => {
  try {
    const response = await axios.get(
      `${process.env.ARTICLES_ENDPOINT}?search=*&page=${page}`,
      {
        headers: {
          'x-functions-key': process.env.ARTICLES_KEY as string,
        },
      }
    )
    if (response.status === 200) {
      const articles = response.data
      return articles
    }
  } catch (error) {
    console.log('error', error)
    return []
  }
}
