import { createRouter, createWebHashHistory } from "vue-router";
import NewsView from '../views/NewsView';
import AskView from "@/views/AskView";
import JobsView from "@/views/JobsView";
import ItemView from "@/views/ItemView";
import UserView from "@/views/UserView";
import IndexView from "@/views/IndexView";

const routes = [
    {
        path: '/',
        component: IndexView
    },
    {
        // path 주소
        path: '/news',
        name: 'news',
        // component: url 주소로 갔을때 표시될 컴포넌트
        component: NewsView
    },
    {
        path: '/ask',
        name: 'ask',
        component: AskView
    },
    {
        path: '/jobs',
        name: 'jobs',
        component: JobsView
    },
    {
        path: '/item/:id',
        component: ItemView
    },
    {
        path: '/user/:id',
        component: UserView
    },
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})
