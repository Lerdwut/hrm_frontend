import router from './router/index'
import stores from './stores/index'
import vuetify from './vuetify/index'
import { type App } from 'vue'

export const registerPlugins = (app: App) => {
  app.use(router)
  app.use(stores)
  app.use(vuetify)
}
