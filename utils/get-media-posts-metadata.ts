import { MediaPostType, PostType, Post } from '_types/CMS/nodes/components/UKPN'
import getMetaData, { MetaData } from 'metadata-scraper'
import { Metadata } from '@azure/storage-blob'
import { Link } from '_types/CMS'
interface MetaDataExtended extends Metadata {
  id: string
}

export const getMediaPostsMetadata = async (posts: Post[]) => {
  const mediaPosts = posts.filter(
    (post) => post.__typename === PostType.MEDIA_POST && !!post.link
  ) as MediaPostType[]

  const postMetaData = mediaPosts.map(async (post) => {
    const metadata = await getMetaData((post.link as Link).url)
    return {
      ...metadata,
      id: post.id,
    }
  }) as Promise<MetaDataExtended>[]

  const scraperResults = await Promise.all(postMetaData)

  return posts.map((post) => {
    if (post.__typename === PostType.STAKE_HOLDER_POST) return post
    const matchedPost = scraperResults.find((metPst) => metPst.id === post.id)
    if (matchedPost) {
      return {
        ...post,
        ...(!post.summary && { summary: matchedPost.description }),
        ...(!post.title && { title: matchedPost.title }),
        ...(!post.image && {
          image: { url: matchedPost.image, name: matchedPost.title },
        }),
      }
    } else {
      return post
    }
  })
}
