<template>
    <div class="mb-2 d-flex">
        <div>
            <input type="checkbox" :checked="todo.checked" @change="toggleCheckbox">
        </div>
        <!-- todo.checked클래스가 true 이면 text-muted 실행 아니면 '' -->
        <!-- todo.checked클래스가 true 이면 text-decoration : line-throug 실행 아니면 '' -->
        <span class="ml-3 flex-grow-1"
            :class="todo.checked ? 'text-muted' : ''" 
            :style="todo.checked ? 'text-decoration : line-through' : ''"
        >
            {{ todo.text }}
        </span>
            <button
            class="btn btn-danger btn-sm "
            @click="clickDelete"
            >Delete</button>
    </div>
</template>

<script>
export default { 
    // props로 부모 컨테이너 값 가지고 옴.
    props: {
        todo: {
            type: Object, // type object
            required:true // 무조건 값이 필요
        }
    },
    computed : {
        numberOfCompletedTodo() {
            return this.$store.getters['todo/numberOfCompletedTodo'];
        }
    },
    methods: {
        // checkbox 함수
        toggleCheckbox(e) {
            this.$store.dispatch('todo/toggleTodo', {
                id: this.todo.id,
                checked: e.target.checked
            })
            // this.$store.commit('TOGGLE_TODO', {
            //     id: this.todo.id,
            //     checked: e.target.checked
            // })
            // 자손 함수를 부모가 씀.
            // this.$emit('toggle-checkbox', {
            //     id: this.todo.id, // todo.id 보냄
            //     checked: e.target.checked  // e.target의 checked 여부
            // });
        },
        // 클릭하면 지우는 함수
        clickDelete() {
            this.$store.dispatch('deleteTodo', this.todo.id)
            // this.$store.commit('DELETE_TODO', this.todo.id);
            // this.$emit('click-delete', this.todo.id);
        }
    }
}
</script>

<style>

</style>