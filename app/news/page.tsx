import Link from 'next/link'
import Image from 'next/image'
import {client} from '@/sanity/lib/client'
import {NEWS_ARTICLES_QUERY} from '@/sanity/lib/queries'
import {urlFor} from '@/sanity/lib/image'

export default async function NewsPage() {
  const articles = await client.fetch(NEWS_ARTICLES_QUERY)

  return (
    <main>
      <h1>News</h1>

      <div>
        {articles.map((article: any) => (
          <article key={article._id}>
            {article.mainImage && (
              <Image
                src={urlFor(article.mainImage).width(800).height(450).url()}
                alt={article.title}
                width={800}
                height={450}
              />
            )}

            <h2>
              <Link href={`/news/${article.slug.current}`}>
                {article.title}
              </Link>
            </h2>

            {article.excerpt && <p>{article.excerpt}</p>}

            {article.publishedAt && (
              <time dateTime={article.publishedAt}>
                {new Date(article.publishedAt).toLocaleDateString('en-GB')}
              </time>
            )}
          </article>
        ))}
      </div>
    </main>
  )
}