<template>
  <div class="col-md-12">
    <div class="card shadow flex-grow-1 ">
      <button title="Open Keep Details"
              type="button"
              class=""
              data-toggle="modal"
              data-target="#keepDetailsModal"
              @click="keepDetails()"
      >
        <img :src="keep.img" class="card-img">
        <div class="card-img-overlay d-flex align-items-end inline">
          <h5 class="card-title">
            {{ keep.name }}
          </h5>
        </div>
      </button>
      <router-link :to="{name: 'ProfilePage', params: {id: keep.creatorId}}">
        <img :src="keep.creator.picture" class="rounded-circle small-image profile" alt="">
      </router-link>
    </div>
    <KeepModal :keep="keep" />
  </div>
</template>
<script>
import { reactive, computed } from 'vue'
import { AppState } from '../AppState'
import { keepsService } from '../services/KeepsService'
export default {
  name: 'KeepComponent',
  props: {
    keep: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const state = reactive({
      activeKeep: computed(() => AppState.activeKeep)
    })
    return {
      state,
      keepDetails() {
        AppState.activeKeep = props.keep
        keepsService.getKeepById(AppState.activeKeep.id)
      }
    }
  },
  components: {}

}
</script>
<style scoped>
.profile{
    position: absolute;
    right: 0;
    bottom: 0;

}
.card {
  transition: all .2s ease-out;
}
.card:hover{
  transform: scale(1.1);
}
.small-image{
  height: 30px;
  width: 30px;
}
button{
  border:none;
}
</style>
