// server/api/users/[id]/todos.post.ts  -> POST /api/users/123/todos
type TodoInput = { title: string, done: boolean }

export default defineEventHandler(async (event) => {
  const userId = getRouterParam(event, 'id') // 또는 event.context.params?.id
  const body = await readBody<TodoInput>(event)

  if (!userId) throw createError({ statusCode: 400, statusMessage: 'Missing user id' })
  if (!body?.title) throw createError({ statusCode: 400, statusMessage: 'Missing title' })

  return { ok: true, userId, todo: { id: 42, title: body.title } }
})
