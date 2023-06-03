<template>
    <div>
        <TodoComponent 
            v-for="todo in todos" 
            :key="todo.id" 
            :todo="todo"
            @toggle-checkbox="toggleCheckbox"
            @click-delete="deleteTodo"
        />
    </div>
</template>

<script>
import TodoComponent from '@/components/TodoComponent.vue';
export default {
    components: {
        TodoComponent
    },
    computed: {
        todos() {
            // 모듈의 todo를 불러온다.
            return this.$store.state.todo.todos;
        }
    },
    methods: {
        // 체크박스 토글 함수
        toggleCheckbox(value) {
            this.$emit('toggle-checkbox', value)
        },
        // todo 지우는 함수
        deleteTodo(todoId) {
            this.$emit('click-delete', todoId);
        }
    }
}
    </script>

<style>

</style>