const app = Vue.createApp({
    data() {
        return { count: 1 }
    },
    created() {
        // `this` points to the vm instance
        console.log('count is: ' + this.count) // => "count is: 1"
    }
})

const vm = app.mount('#app')

console.log(vm.count)
