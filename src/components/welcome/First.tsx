import s from './welcome.module.scss';
import pig from '../../assets/icons/pig.svg';
import { FunctionalComponent } from 'vue';
export const First: FunctionalComponent = () => {
  return <div class={s.card}>
    <img src={pig}/>
    <h2>省一笔<br />就是赚一笔</h2>
  </div>
}

First.displayName = 'First'