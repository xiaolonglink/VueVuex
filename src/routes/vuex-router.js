import { sync } from 'vuex-router-sync'
import store from '../vuex/index' // vuex store instance
import router from './router' // vue-router instance

const unsync = sync(store, router, { moduleName: 'RouteModule' }) // done. Returns an unsync callback fn

export default unsync;