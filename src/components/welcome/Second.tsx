import s from './welcome.module.scss';
import { FunctionalComponent } from 'vue';

export const Second: FunctionalComponent = () => {
  return <div class={s.card}>
    <svg>
      <use xlinkHref='#clock'></use>
    </svg>
    <h2>每日提醒<br />养成记账好习惯</h2>
  </div>
}

Second.displayName = 'Second'