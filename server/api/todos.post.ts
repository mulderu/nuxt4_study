// server/api/todos.post.ts   -> POST /api/todos
type TodoInput = { title: string; done?: boolean }

export default defineEventHandler(async (event) => {
  const body = await readBody<TodoInput>(event) // { title, done }
  if (!body?.title) {
    throw createError({ statusCode: 400, statusMessage: 'title is required' })
  }
  return { ok: true, todo: { id: 1, ...body } }
})
