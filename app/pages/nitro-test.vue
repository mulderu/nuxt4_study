<script setup lang="ts">

const { data: me } = await useFetch('/api/me')
const { data: post } = await useFetch('/api/post')
const { data: user } = await useFetch('/api/users/11')
const { data: blog } = await useFetch('/api/blog/2025/test')
const { data: todos } = await useFetch('/api/todo')

const newTodo = ref('')
const result = ref(null)

async function addTodo() {
  const { data, error } = await useFetch('/api/todos', {
    method: 'POST',
    body: { title: newTodo.value, done: false },
  })

  if (error.value) {
    console.error('Error:', error.value)
  } else {
    result.value = data.value
  }
}


async function addTodoEx() {
  const { data, error } = await useFetch('/api/todo', {
    method: 'POST',
    body: { title: newTodo.value, done: false },
  })

  if (error.value) {
    console.error('Error:', error.value)
  } else {
    result.value = data.value
    todos.value.push(data.value.todo)
  }
}

</script>

<template>
  <div>
    <pre>{{ me }}</pre>
    <hr/>
    <pre>{{ post }}</pre>
    <hr/>
    <pre>{{ user }}</pre>
    <hr/>
    <pre>{{ todos }}</pre>
    <hr/>
    <pre>{{ blog }}</pre>
    <hr/>
    <div>
      <input v-model="newTodo" placeholder="할 일 입력..." />
      <button @click="addTodoEx">추가</button>
      <pre>{{ result }}</pre>
    </div>
  </div>
</template>

