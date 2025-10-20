// server/api/users/[id].get.ts
export default defineEventHandler((event) => {
  // 1) 전통적 방법
  const { id } = event.context.params as { id: string }

  // 2) 유틸 함수 (추천: 존재/타입 안전 체크 쉬움)
  // import { getRouterParam } from 'h3'  (Nuxt/Nitro 런타임에 포함)
  // const id = getRouterParam(event, 'id')

  return { id, message: `user ${id}` }
})
