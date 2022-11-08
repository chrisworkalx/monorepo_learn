<template>
  <div>
    <SButton color="blue" round plain icon="search"></SButton>
    <SButton color="green" round plain icon="edit"></SButton>
    <SButton color="gray" round plain icon="check"></SButton>
    <SButton color="yellow" round plain icon="message"></SButton>
    <SButton color="red" round plain icon="delete"></SButton>
    <TestClassCom></TestClassCom>
    <my-select></my-select>
    <hr />
    <my-button></my-button>
    <hr />
    <MyButton />
  </div>
</template>

<script>
// import { select } from 'tryuirollup';

export default {
  components: {
    // MySelect: select
  },
  setup() {
    return {};
  }
};
</script>

<style lang="scss" scoped></style>
