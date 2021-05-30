<template>
  <div class="home flex-grow-1 d-flex flex-column">
    <div class="row px-md-5 px-3">
      <KeepComponent />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped lang="scss">
.home{
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
</style>
