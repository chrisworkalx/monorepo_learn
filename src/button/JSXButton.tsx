import { defineComponent, h, onMounted } from "vue";

export default defineComponent({

  name: "JSXButton",
  setup() {
    onMounted(() => {
      console.log('good')
    })
  },
  render() {
    return <button>JSX Button</button>;
  },
  // mounted() {
  //   console.log('mounted')
  // }

});