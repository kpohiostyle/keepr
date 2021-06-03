<template>
  <div class="container-fluid" v-if="state.activeVault.id">
    <div class="row">
      <div class="col-12">
        <h2>{{ state.activeVault.name }}</h2>
      </div>
      <div class="col-12">
        <p>Keeps: INT</p>
      </div>
      <button class="btn-del" @click="deleteVault(state.activeVault)" v-if="state.activeVault.creatorId == state.account.id">
        <i class="far fa-trash-alt"></i>
      </button>
    </div>
    <div class="row">
      <!-- <div class="row">
    <KeepComponent v-for="keep in state.vaultKeeps" :key="keep.id" :keep="keep" /> -->
      <!-- </div> -->
    </div>
  </div>
</template>
<script>
import { computed, onMounted, reactive } from 'vue'
import { vaultsService } from '../services/VaultsService'
import { AppState } from '../AppState'
import { useRoute } from 'vue-router'
import Notification from '../utils/Notification'
export default {
  name: 'VaultPage',
  setup() {
    const route = useRoute()
    const state = reactive({
      account: computed(() => AppState.account),
      user: computed(() => AppState.user),
      activeProfile: computed(() => AppState.activeProfile),
      activeVault: computed(() => AppState.activeVault)

    })
    onMounted(async() => {
      try {
        // await keepsService.getKeepsByVault(vaultId)
        await vaultsService.getVaultById(route.params.id)
      } catch (error) {
        Notification.toast('Error: ' + error, 'error')
      }
    })
    return {
      state,
      async deleteVault(activeVault) {
        try {
          if (await Notification.confirmAction()) {
            await vaultsService.deleteVault(activeVault.id)
          }
        } catch (error) {
          Notification.toast('Error: ' + error, 'error')
        }
      }
    }
  }
}
</script>
<style>

 </style>
