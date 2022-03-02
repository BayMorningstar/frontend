// mixins/aos.js
import AOS from 'aos'
import 'aos/dist/aos.css'

export default ({ app }, inject) => {
  // Inject $hello(msg) in Vue, context and store.
  app.AOS = new AOS.init();
};