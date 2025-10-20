import { promises as fs } from 'fs'
import path from 'path'

export default defineEventHandler(async (event) => {
  // 요청 바디(JSON)
  const body = await readBody<{ title: string; done?: boolean }>(event)
  if (!body?.title) {
    throw createError({ statusCode: 400, statusMessage: 'title is required' })
  }

  // 저장할 파일 경로
  const filePath = path.resolve('local.todos.json')

  // 기존 데이터 읽기 (파일 없으면 빈 배열)
  let todos: any[] = []
  try {
    const json = await fs.readFile(filePath, 'utf-8')
    todos = JSON.parse(json)
  } catch (err) {
    // 파일 없으면 무시
  }

  // 새 todo 추가
  const newTodo = {
    id: Date.now(),
    title: body.title,
    done: body.done ?? false,
  }
  todos.push(newTodo)

  // 파일에 다시 쓰기
  await fs.writeFile(filePath, JSON.stringify(todos, null, 2), 'utf-8')

  return { ok: true, todo: newTodo }
})
