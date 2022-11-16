import { createApp } from 'vue'
import App from './App.vue'
import components from '@/components/UI/index'
import router from '@/router/router'
import VIntersection from './directives/VIntersection'
import directives from '@/directives/index'
import store from '@/store/index'

const app = createApp(App)

components.forEach(component => app.component(component.name, component))

directives.forEach(directive => app.directive(directive.name, directive))

app.directive('intersection', VIntersection)

app.use(router).use(store).mount('#app')
