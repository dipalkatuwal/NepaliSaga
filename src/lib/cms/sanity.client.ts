// src/lib/cms/sanity.client.ts
// Sanity GraphQL client — reads env vars; safe to import on both server and client.
// Set the following in .env.local:
//   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
//   NEXT_PUBLIC_SANITY_DATASET=production
//   SANITY_API_TOKEN=your_read_token   ← server only, for draft previews
//
// Deploy GraphQL schema before use:
//   npx sanity graphql deploy

export const SANITY_PROJECT_ID  = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? ''
export const SANITY_DATASET     = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production'
export const SANITY_API_VERSION = '2025-01-01'

/** Base GraphQL endpoint */
export const GRAPHQL_ENDPOINT = `https://${SANITY_PROJECT_ID}.api.sanity.io/v1/graphql/${SANITY_DATASET}/default`

/** True when Sanity is configured; falls back to static data when false */
export const isSanityConfigured = Boolean(SANITY_PROJECT_ID)

/** Execute a GraphQL query against Sanity */
export async function sanityGraphQL<T = unknown>(
  query: string,
  variables?: Record<string, unknown>,
  options?: { draft?: boolean; revalidate?: number }
): Promise<T> {
  const token = options?.draft ? process.env.SANITY_API_TOKEN : undefined

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  }
  if (token) {
    headers['Authorization'] = `Bearer ${token}`
  }

  const res = await fetch(GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers,
    body: JSON.stringify({ query, variables }),
    // Next.js ISR revalidation
    next: { revalidate: options?.revalidate ?? 60 },
  } as RequestInit)

  if (!res.ok) {
    throw new Error(`Sanity GraphQL error: ${res.status} ${res.statusText}`)
  }

  const json = await res.json()

  if (json.errors?.length) {
    throw new Error(`GraphQL errors: ${JSON.stringify(json.errors)}`)
  }

  return json.data as T
}
