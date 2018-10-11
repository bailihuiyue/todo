import Notification from './notify.vue'
import notify from './function'

export default (vue) => {
    //vue.component(Notification.name, Notification)
    vue.prototype.$notify = notify
}