<template>
  <div class="col-md-3 my-2 col-6">
    <router-link :to="{name: 'VaultPage', params: {id: vault.id}}">
      <div class="card p-5 shadow ">
        <div class="card-img-overlay d-flex align-items-center justify-content-center">
          <h5 class="card-title vault-title">
            {{ vault.name }}
          </h5>
        </div>
      </div>
    </router-link>
  </div>
</template>
<script>
import { reactive, computed } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'VaultComponent',
  props: {
    vault: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const state = reactive({
      activeVault: computed(() => AppState.activeVault)
    })
    return {
      state
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
.small-image{
  height: 30px;
  width: 30px;
}
.vault-title{
  color: var(--primary);
  text-shadow: 1px black;
}
button{
  border:none;
}
</style>
