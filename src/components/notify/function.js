import vue from 'vue'
// import component from './func-notify'
import component from './notify.vue'
const NotificationConstructor = vue.extend(component)

const notify = (options) => {
    const instance = new NotificationConstructor({
        propsData: {
          
        },
        data() {
            return {
                style:{
                    borderRadius:"50%"
                }
            }
        }
      })
      instance.vm = instance.$mount('#hehe')
      //document.body.appendChild(instance.vm.$el)
      return instance.vm
}

export default notify