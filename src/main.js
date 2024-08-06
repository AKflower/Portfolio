import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import tooltip from './directives/tooltip';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Import các icon bạn muốn sử dụng
import { fas } from '@fortawesome/free-solid-svg-icons'

// Thêm tất cả các icon vào library (bạn có thể chọn lọc các icon cần thiết)
library.add(fas)

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon)

app.directive('tooltip', tooltip);
app.use(router).mount('#app')
