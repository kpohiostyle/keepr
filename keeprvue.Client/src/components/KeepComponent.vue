<template>
  <div class="col-md-3 my-2 col-6">
    <div class="card shadow ">
      <img src="//placehold.it/200x200" class="card-img">
      <div class="card-img-overlay d-flex align-items-end inline">
        <h5 class="card-title">
          Title
        </h5>
        <img src="//placehold.it/30x30" class="rounded-circle small-image profile" alt="">
      </div>
    </div>
  </div>
  <div class="col-md-3 my-2 col-6">
    <div class="card shadow ">
      <img src="//placehold.it/200x200" class="card-img">
      <div class="card-img-overlay d-flex align-items-end inline">
        <h5 class="card-title">
          Title
        </h5>
        <img src="//placehold.it/30x30" class="rounded-circle small-image profile" alt="">
      </div>
    </div>
  </div>
  <div class="col-md-3 my-2 col-6">
    <div class="card shadow ">
      <img src="//placehold.it/200x200" class="card-img">
      <div class="card-img-overlay d-flex align-items-end inline">
        <h5 class="card-title">
          Title
        </h5>
        <img src="//placehold.it/30x30" class="rounded-circle small-image profile" alt="">
      </div>
    </div>
  </div>
  <div class="col-md-3 my-2 col-6">
    <div class="card shadow ">
      <img src="//placehold.it/200x200" class="card-img">
      <div class="card-img-overlay d-flex align-items-end inline">
        <h5 class="card-title">
          Title
        </h5>
        <img src="//placehold.it/30x30" class="rounded-circle small-image profile" alt="">
      </div>
    </div>
  </div>
  <div class="col-md-3 my-2 col-6">
    <div class="card shadow ">
      <img src="//placehold.it/200x200" class="card-img">
      <div class="card-img-overlay d-flex align-items-end inline">
        <h5 class="card-title">
          Title
        </h5>
        <img src="//placehold.it/30x30" class="rounded-circle small-image profile" alt="">
      </div>
    </div>
  </div>
  <div class="col-md-3 my-2 col-6">
    <div class="card shadow ">
      <img src="//placehold.it/200x200" class="card-img">
      <div class="card-img-overlay d-flex align-items-end inline">
        <h5 class="card-title">
          Title
        </h5>
        <img src="//placehold.it/30x30" class="rounded-circle small-image profile" alt="">
      </div>
    </div>
  </div>
  <div class="col-md-3 my-2 col-6">
    <div class="card shadow ">
      <img src="//placehold.it/200x200" class="card-img">
      <div class="card-img-overlay d-flex align-items-end inline">
        <h5 class="card-title">
          Title
        </h5>
        <img src="//placehold.it/30x30" class="rounded-circle small-image profile" alt="">
      </div>
    </div>
  </div>
  <div class="col-md-3 my-2 col-6">
    <div class="card shadow ">
      <img src="//placehold.it/200x200" class="card-img">
      <div class="card-img-overlay d-flex align-items-end inline">
        <h5 class="card-title">
          Title
        </h5>
        <img src="//placehold.it/30x30" class="rounded-circle small-image profile" alt="">
      </div>
    </div>
    <KeepModal />
  </div>
</template>
<script>
import { reactive, computed } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'KeepComponent',
  props: {
    keep: {
      type: Object,
      required: true
    }
  },
  setup() {
    const state = reactive({
      keeps: computed(() => AppState.keeps)
    })

    return {
      state

    }
  },
  components: {

  }

}
</script>
<style scoped>
.profile{
    position: absolute;
    right: 0;
    bottom: 0;
    border: 2px solid black;
}

</style>
