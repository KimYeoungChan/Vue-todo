<template>
    <div>
        <div v-for="user in users" :key="user.id">
            {{ user.name }}
        </div>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex';
    export default {
        created() {
            this.getUsers();
        },
        computed: {
            // ...mapState({
            //     users: state => state.user.users
            // })

            // mapState 함수는 computed 내부에서 스프레드 연산자와 함께 사용합니다.
            // Ex- ...mapState('네임스페이스 이름', ['사용할 상태명']);   
            ...mapState('user', ['users'])
            // ...mapState('user', {
            //     users: state => state.users
            // })
            // ...mapState({people: 'users'})
            // users() {
            //     return this.$store.state.users;
            // },
            // todos() {
            //     return this.$store.state.todos;
            // }
        },
        methods: {

            // mapActions 함수는 methods 내부에서 스프레드 연산자와 함께 사용합니다.
            // Ex- ...mapActions('네임스페이스 이름', ['사용할 상태명']);   
            ...mapActions('user', ['getUsers'])
            // getUsers() {
            //     this.$store.dispatch('getUsers');
            // }
        }
    }
</script>