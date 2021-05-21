import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { of } from 'rxjs'
import './exts/rx'

of(1, 2, 3).doOnSubscribe(() => {
  console.log('OnSubscribe')
}).subscribe(
  (x: number) => console.log(x),
  // eslint-disable-next-line
  (error: any) => console.log(error),
  () => console.log("complete")
)

createApp(App).use(router).mount('#app')
