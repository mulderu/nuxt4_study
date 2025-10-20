// server/api/blog/[year]/[slug].get.ts
export default defineEventHandler((event) => {
  const { year, slug } = event.context.params as { year: string; slug: string }
  return { year: Number(year), slug }
})
