import { SkipFeatures } from '../../shared/SkipFeatures';
import s from './welcome.module.scss';
import { RouterLink } from 'vue-router';
export const ForthActions = () => (
  <div class={s.actions}>
    <SkipFeatures class={s.fake} />
    <RouterLink to="/items" >完成</RouterLink>
    <SkipFeatures />
  </div>
)

ForthActions.displayName = 'ForthActions'