import { promises as fs } from 'fs'
import path from 'path'

export default defineEventHandler(async () => {
  const filePath = path.resolve('local.todos.json')

  try {
    const json = await fs.readFile(filePath, 'utf-8')
    const todos = JSON.parse(json)
    return todos
  } catch (err) {
    // 파일이 아직 없으면 빈 배열 반환
    return []
  }
})
