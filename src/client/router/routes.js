//Components
import Home from '../components/Home.vue';
import About from '../components/About.vue';
import Test from '../components/Test.vue';

const routes = [
    { path: '/', component: Test },
    { path: '/about', component: About },
    { path: '/test', component: Test },
]

export default routes;