import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';
import s from './Welcome.module.scss'
import logo from '../assets/icons/sakura-festival.svg'
export const Welcome = defineComponent({
  setup: (props, context) => {
    return () => <div class={s.wrapper}>
      <header>
        <img src={logo} />
        <h1>+BOKEP+</h1>
      </header>
      <main class={s.main}><RouterView /></main>
    </div>
  }
})