import { PropType, defineComponent } from "vue";
import s from "./SkipFeatures.module.scss";
import { RouterLink } from "vue-router";
export const SkipFeatures = defineComponent({
  props: {
    name: {
      type: String as PropType<string>,
    },
  },
  setup: (props, context) => {
    const onClick = () => {
        localStorage.setItem('skipFeatures', 'yes')
    }
    return () => (
        <span onClick={onClick}>
            <RouterLink to="/items">跳过</RouterLink>
        </span>
    );
  },
});
