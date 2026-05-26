// src/lib/cms/queries.ts
// GraphQL queries for NepaliSaga content types
// Deploy schema first: npx sanity graphql deploy

export const ALL_ARTICLES_QUERY = `
  query GetAllArticles {
    allArticle(sort: [{ publishedAt: DESC }]) {
      _id
      slug { current }
      cat
      section
      title
      author {
        name
        desk
      }
      publishedAt
      readTime
      reads
      icon
      gradient
      bullets
      body
      timeline {
        date
        event
      }
      tags
      featured
    }
  }
`

export const ARTICLE_BY_SLUG_QUERY = `
  query GetArticleBySlug($slug: String!) {
    allArticle(where: { slug: { current: { eq: $slug } } }) {
      _id
      slug { current }
      cat
      section
      title
      author {
        name
        desk
      }
      publishedAt
      readTime
      reads
      icon
      gradient
      bullets
      body
      timeline {
        date
        event
      }
      tags
      featured
    }
  }
`

export const ARTICLES_BY_SECTION_QUERY = `
  query GetArticlesBySection($section: String!) {
    allArticle(
      where: { section: { eq: $section } }
      sort: [{ publishedAt: DESC }]
    ) {
      _id
      slug { current }
      cat
      section
      title
      author {
        name
      }
      publishedAt
      readTime
      reads
      icon
      gradient
      bullets
      tags
      featured
    }
  }
`

export const ALL_SLUGS_QUERY = `
  query GetAllSlugs {
    allArticle {
      slug { current }
    }
  }
`
