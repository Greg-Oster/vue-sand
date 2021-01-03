import { createApp } from 'vue';
//import VueRouter from 'vue-router';
import {createRouter} from 'vue-router';

import App from './App.vue';
import vWrapper from './styling/v-wrapper.vue';
import BaseCard from './projects/first-project/UI/BaseCard.vue';
import BaseButton from './projects/first-project/UI/BaseButton.vue';
import customWrapper from './styling/customWrapper.vue';
import TheRadioBtn from './UI/TheRadioBtn.vue';
import TheInput from './UI/TheInput.vue';

import list from './projects/routing/components/list.vue';
import item from './projects/routing/components/item.vue';

const app = createApp(App);


const routes = [
    { path: '/list', component: list },
    { path: '/item', component: item }
];

const router = createRouter({
    routes
});

app.component('vWrapper', vWrapper);
app.component('BaseCard', BaseCard);
app.component('BaseButton', BaseButton);
app.component('customWrapper', customWrapper);
app.component('TheRadioBtn', TheRadioBtn);
app.component('TheInput', TheInput);

app.config.devtools = false;

app.use(router);
app.mount('#app');
