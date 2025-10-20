// GET /api/search?q=nuxt&page=2
export default defineEventHandler((event) => {
  const query = getQuery(event) // { q: 'nuxt', page: '2' }
  const ua = getHeader(event, 'user-agent')
  return { query, ua }
})
