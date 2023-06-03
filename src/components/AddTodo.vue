    <template>
        <input 
            v-model="todoText"
            type="text" 
            class="w-100 p-2" 
            placeholder="Type todo"
            @keyup.enter="addTodo"
        >
    </template>

    <script>
    export default {
        data() {
            return {
                todoText: '',
            }
        },
        methods: {
            // todo 추가 함수
            addTodo(e) {
                // dispatch를 이용을 한다.
                this.$store.dispatch('todo/addTodo', e.target.value);
                this.todoText = ''; // input값 빈 값
            }
        }
    }
    </script>

    <style>

    </style>