import s from './welcome.module.scss';
import { FunctionalComponent } from 'vue';
export const First: FunctionalComponent = () => {
  return (
    <div class={s.card}>
      <svg>
        <use xlinkHref='#pig'></use>
      </svg>
      <h2>省一笔<br />就是赚一笔</h2>
    </div>
  )
}

First.displayName = 'First'