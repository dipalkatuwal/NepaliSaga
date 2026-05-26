// sanity/schemas/article.ts
// Run `npx sanity@latest init` in the project root to set up your Sanity studio.
// Then add these schemas to your sanity.config.ts.

export const articleSchema = {
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Headline',
      type: 'string',
      validation: (Rule: { required: () => { max: (n: number) => unknown } }) =>
        Rule.required().max(200),
    },
    {
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'author' }],
    },
    {
      name: 'desk',
      title: 'Desk / Dateline',
      type: 'string',
      description: 'e.g. "NepaliSaga Political Desk · May 25, 2026"',
    },
    {
      name: 'publishedAt',
      title: 'Published Date',
      type: 'string',
      description: 'Human-readable e.g. "May 25, 2026"',
    },
    {
      name: 'cat',
      title: 'Category Label',
      type: 'string',
      description: 'e.g. "Politics · Energy"',
    },
    {
      name: 'section',
      title: 'Section',
      type: 'string',
      options: {
        list: [
          'Politics', 'Economy', 'Markets', 'Climate',
          'Technology', 'Culture', 'World', 'Opinion',
        ],
      },
    },
    {
      name: 'readTime',
      title: 'Read Time',
      type: 'string',
      description: 'e.g. "5 min read"',
    },
    {
      name: 'reads',
      title: 'Read Count Display',
      type: 'string',
      description: 'e.g. "33.2k"',
    },
    {
      name: 'icon',
      title: 'Emoji Icon',
      type: 'string',
      description: 'Single emoji used as hero illustration placeholder',
    },
    {
      name: 'gradient',
      title: 'Hero Gradient CSS',
      type: 'string',
      description: 'CSS gradient string e.g. "linear-gradient(135deg,#1A0A30,#0A051A)"',
    },
    {
      name: 'bullets',
      title: 'TL;DR Bullets',
      type: 'array',
      of: [{ type: 'string' }],
      description: '3–5 key takeaways shown in the TL;DR box',
    },
    {
      name: 'body',
      title: 'Article Body',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Each string is one paragraph',
    },
    {
      name: 'timeline',
      title: 'Story Timeline',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'date',  type: 'string', title: 'Date' },
            { name: 'event', type: 'string', title: 'Event' },
          ],
        },
      ],
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'featured',
      title: 'Featured / Hero Story',
      type: 'boolean',
    },
  ],
  preview: {
    select: { title: 'title', subtitle: 'publishedAt' },
  },
}

export const authorSchema = {
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    { name: 'name',  title: 'Full Name',  type: 'string' },
    { name: 'desk',  title: 'Desk',       type: 'string' },
    { name: 'bio',   title: 'Short Bio',  type: 'text' },
    { name: 'image', title: 'Photo',      type: 'image' },
  ],
}
