import Image from 'next/image'
import {notFound} from 'next/navigation'
//import {PortableText} from '@portabletext/react'
import {client} from '@/sanity/lib/client'
import {
  NEWS_ARTICLE_QUERY,
  NEWS_ARTICLES_QUERY,
} from '@/sanity/lib/queries'
import {urlFor} from '@/sanity/lib/image'

type PageProps = {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const articles = await client.fetch(NEWS_ARTICLES_QUERY)

  return articles.map((article: any) => ({
    slug: article.slug.current,
  }))
}

export async function generateMetadata({params}: PageProps) {
  const {slug} = await params

  const article = await client.fetch(NEWS_ARTICLE_QUERY, {
    slug,
  })

  if (!article) {
    return {}
  }

  return {
    title: article.seoTitle || article.title,
    description: article.seoDescription || article.excerpt,
  }
}

export default async function NewsArticlePage({params}: PageProps) {
  const {slug} = await params

  const article = await client.fetch(NEWS_ARTICLE_QUERY, {
    slug,
  })

  if (!article) {
    notFound()
  }

  return (
    <main>
      <article>
        {article.mainImage && (
          <Image
            src={urlFor(article.mainImage).width(1200).height(630).url()}
            alt={article.title}
            width={1200}
            height={630}
            priority
          />
        )}

        <h1>{article.title}</h1>

        {article.publishedAt && (
          <time dateTime={article.publishedAt}>
            {new Date(article.publishedAt).toLocaleDateString('en-GB')}
          </time>
        )}

        {article.excerpt && <p>{article.excerpt}</p>}

        {/* {article.body && <PortableText value={article.body} />} */}
      </article>
    </main>
  )
}