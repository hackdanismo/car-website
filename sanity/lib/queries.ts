import {defineQuery} from "next-sanity"

export const NEWS_ARTICLES_QUERY = defineQuery(`
  *[_type == "newsArticle" && defined(slug.current)]
  | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    mainImage
  }
`)

export const NEWS_ARTICLE_QUERY = defineQuery(`
  *[_type == "newsArticle" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    mainImage,
    body,
    seoTitle,
    seoDescription
  }
`)