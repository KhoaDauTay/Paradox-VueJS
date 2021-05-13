const app = Vue.createApp({
    data() {
        return { count: 4 }
    }
})

const vm = app.mount('#app')

console.log(vm.count) // => 4