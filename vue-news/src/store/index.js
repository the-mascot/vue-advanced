import { createStore } from "vuex";
import mutations from "@/store/mutations";
import actions from "@/store/actions";

const store = createStore({
    state () {
        return {
            news: [],
            ask: [],
            jobs: [],
            user: {},
            item: [],
        }
    },
    getters: {
        fetchedNews(state) {
            return state.news;
        },
        fetchedAsk(state) {
            return state.ask;
        },
        fetchedItem(state) {
            return state.item;
        }
    },
    mutations,
    actions
});

export default store;