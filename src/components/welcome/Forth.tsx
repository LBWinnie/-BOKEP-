import s from './WelcomeLayout.module.scss';
import cloud from '../../assets/icons/cloud.svg';
import { RouterLink } from 'vue-router';
import { WelcomeLayout } from './WelcomeLayout';
export const Forth = () => (
  <WelcomeLayout>
    {{
      icon: () => <img class={s.icon} src={cloud} />,
      title: () => <h2>云备份<br />不丢失每一笔账单</h2>,
      buttons: () => <>
        <RouterLink class={s.fake} to="/start" >跳过</RouterLink>
        <RouterLink to="/start" >完成</RouterLink>
        <RouterLink class={s.fake} to="/start" >跳过</RouterLink>
      </>

    }}
  </WelcomeLayout>
)

Forth.displayName = 'Forth'