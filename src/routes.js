import SearchBox from './components/SearchBox.vue';
import Repositories from './components/Repositories.vue';
import Readme from './components/Readme.vue';

const routes = [
    { path: '/', component: SearchBox },
    { path: '/repositories/:username', component: Repositories },
    { path: '/repositories/:username/:repo', component: Readme },
];

export default routes