export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    // create user 
    console.log(body)
    return { ok: true }
  } catch (err) {
    // 명시적으로 전달하고 싶을 때
    sendError(event, createError({
      statusCode: 400,
      statusMessage: (err as Error).message || 'Bad Request'
    }))
  }
})
