<template>
  <div class="container-fluid">
    <div class="modal" id="keepDetailsModal" tabindex="-1" aria-labelledby="#keepDetailsModal" aria-hidden="true">
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="row">
            <div class="col -md-6">
              <img :src="state.activeKeep.img" alt="" class="w-100 h-100 p-2">
            </div>
            <div class="col-md-6 p-3 d-flex flex-column align-items-center">
              <small class="p-3 mb-2">views | keeps | shares</small>
              <h3 class="p-3 mb-2">
                {{ state.activeKeep.name }}
              </h3>
              <p class=" pb-5 mr-5 b-border">
                {{ state.activeKeep.description }}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, facere maiores, ad sint cum nam eos non repudiandae officiis laudantium aut, minima atque aspernatur facilis quod inventore est magni dolores.
              </p>
              <div class="row d-flex justify-content-between">
                <div class="col-3">
                  <button>
                    ADD TO VAULT
                  </button>
                </div>
                <div class="col-3">
                  <button>
                    DELETE
                  </button>
                </div>
                <div class="col-3">
                  Picture | Name
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
// import Notification from '../utils/Notification'
// import $ from 'jquery'
export default {
  name: 'KeepModal',
  props: {
    keep: {
      type: Object,
      required: true
    }
  },
  setup() {
    const state = reactive({
      activeKeep: computed(() => AppState.activeKeep)
      // user: computed(() => AppState.user),
      // account: computed(() => AppState.account)
    })
    return {
      state
    }
  }

}
</script>
<style scoped>
.b-border{
  border-bottom: 1px solid var(--primary);
}
</style>
