import s from './welcome.module.scss';
export const Forth = () => (
  <div class={s.card}>
    <svg>
      <use xlinkHref='#cloud'></use>
    </svg>
    <h2>云备份<br />不丢失每一笔账单</h2>
  </div>
)

Forth.displayName = 'Forth'