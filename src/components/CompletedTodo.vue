<template>
    <div>
        Completed Todo: {{ numberOfCompletedTodo }}
    </div>
</template>

<script>
export default {
    // todo를 checked하면 그 갯수를 보여주는 것
    computed: {
        // todos 값을 store의 state의 값을 찾으면 된다.
        // todos() {
        //     return this.$store.state.todos;
        // },
        numberOfCompletedTodo() {
            return this.$store.getters['todo/numberOfCompletedTodo'];
        }
    }
}
</script>

<style>

</style>