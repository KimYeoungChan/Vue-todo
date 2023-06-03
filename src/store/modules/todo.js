import axios from "axios";

export default {
    namespaced: true,
    state: {
        todos: [ 
            {id:1, text:'buy a car',  checked :false },
            {id:2, text:'play game',  checked :false },
        ]
    },
    mutations: { 
        // users 값을 가지고 오는 것
        SET_USERS(state, users) {
            state.users = users;
        },
        // todo 추가하는 함수
        ADD_TODO(state, value) {
            state.todos.push({
                id: Math.random(), // id를 랜덤으로 돌림
                text: value, // text는 input의 값임0
                checked : false // checked는 flase값 고정
            });
        },
        // flase로 된 checkbox를 true로 바꾸기
        TOGGLE_TODO(state, {id,checked}) {    
            const index = state.todos.findIndex(todo => {
                return todo.id === id;
            });
            state.todos[index].checked = checked;
        },
        // todo 삭제 함수
        DELETE_TODO(state, todoId) {
            const index = state.todos.findIndex(todo => {
                    return todo.id === todoId;
                });
            state.todos.splice(index,1);
        }
    },
    actions: {
        // axios를 호출 하는 함수
        getUsers({commit}) {
                axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
                commit('SET_USERS',res.data);
            });
        },
        addTodo({commit}, value) {
            // 비동기 함수인 setTimeout으로 2초 후에 생성
            setTimeout( function(){
                commit('ADD_TODO', value); // commit 메소드 필요, ADD_TODO함수의 value사용
            },500)
        },
        toggleTodo({commit}, payload) {
            setTimeout( function(){
                commit('TOGGLE_TODO', payload); // commit 메소드 필요, ADD_TODO함수의 value사용
            },500)
        },
        deleteTodo({commit}, todoId){
            setTimeout( function(){
                commit('DELETE_TODO', todoId); // commit 메소드 필요, ADD_TODO함수의 value사용
            },500)
        },

    },
    getters: {
        // computed랑 같은 개념
        numberOfCompletedTodo : state => {
            return state.todos.filter(todo => todo.checked).length;
        }
    } 
}