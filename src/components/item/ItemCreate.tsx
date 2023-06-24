import { defineComponent, ref } from "vue";
import s from "./ItemCreate.module.scss";
import { MainLayout } from "../../layouts/MainLayout";
import { Icon } from "../../shared/Icon";
import { Tab, Tabs } from "../../shared/Tabs";
import { InputPad } from "./InputPad";
export const ItemCreate = defineComponent({
  setup: (props, context) => {
    const refkind = ref("支出");
    return () => (
      <MainLayout>
        {{
          title: () => "记一笔",
          icon: () => <Icon name="left" class={s.navIcon} />,
          default: () => <>
              <Tabs v-model:selected={refkind.value}>
                <Tab name="支出">icon 列表</Tab>
                <Tab name="收入">icon 列表2</Tab>
              </Tabs>
              <div class={s.inputPad_wrapper}>
                <InputPad/>
              </div>
          </>
        }}
      </MainLayout>
    );
  },
});
