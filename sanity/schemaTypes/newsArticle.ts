import {defineField, defineType} from "sanity"

export const NewsArticle = defineType({
    name: "newsArticle",
    title: "News Article",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "excerpt",
            title: "Excerpt",
            type: "text",
            rows: 3,
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'body',
            title: 'Body',
            type: 'array',
            of: [
                {
                    type: 'block',
                },
                {
                    type: 'image',
                    options: {
                        hotspot: true,
                    },
                },
            ],
          }),
      
          defineField({
            name: 'seoTitle',
            title: 'SEO title',
            type: 'string',
          }),
      
          defineField({
            name: 'seoDescription',
            title: 'SEO description',
            type: 'text',
            rows: 2,
          }),
    ],
    preview: {
        select: {
          title: 'title',
          subtitle: 'publishedAt',
          media: 'mainImage',
        },
    },
})