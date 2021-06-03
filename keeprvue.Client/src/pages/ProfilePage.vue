<template>
  <div class="container-fluid" v-if="state.activeProfile">
    <div class="row my-4 px-4">
      <div class="col-3 px-4">
        <img :src="state.activeProfile.picture" alt="Profile Image">
      </div>
      <div class="col-f6 px-4">
        <h2>{{ state.activeProfile.name }}</h2>
        <h5>Vaults: {{ state.userVaults.length }}</h5>
        <h5>Keeps: {{ state.userKeeps.length }}</h5>
      </div>
    </div>
    <div class="row mt-5 px-4">
      <div class="col-12">
        <h3>Vaults</h3>
        <button title="Open Create Vault Form"
                type="button"
                class="btn"
                data-toggle="modal"
                data-target="#addvaultmodal"
                v-if="state.user.isAuthenticated"
        >
          <i class="far fa-plus-square"></i>
        </button>
      </div>
      <div class="row mb-5 px-4" v-if="state.user.id === $route.params.id">
        <VaultComponent v-for="vault in state.userVaults" :key="vault.id" :vault="vault" />
      </div>
      <div class="row mb-5 px-4" v-else>
        <VaultComponent v-for="vault in state.vaults" :key="vault.id" :vault="vault" />
      </div>
    </div>
    <div class="row mb-2 px-4">
      <div class="col-12">
        <h3>Keeps</h3>
        <button title="Open Create Keep Form"
                type="button"
                class="btn"
                data-toggle="modal"
                data-target="#addkeepmodal"
                v-if="state.user.isAuthenticated"
        >
          <i class="far fa-plus-square"></i>
        </button>
      </div>
      <div class="row" v-if="state.account.id == $route.params.id">
        <KeepComponent v-for="keep in state.userKeeps" :key="keep.id" :keep="keep" />
      </div>
      <div class="row" v-else>
        <KeepComponent v-for="keep in state.profileKeeps" :key="keep.id" :keep="keep" />
      </div>
    </div>
    <AddKeepModal />
    <AddVaultModal />
  </div>
</template>
<script>
import { computed, onMounted, reactive } from 'vue'
import { keepsService } from '../services/KeepsService'
import { vaultsService } from '../services/VaultsService'
import { accountService } from '../services/AccountService'
import { AppState } from '../AppState'
import { useRoute } from 'vue-router'
import Notification from '../utils/Notification'
export default {
  name: 'ProfilePage',
  setup() {
    const route = useRoute()
    const state = reactive({
      account: computed(() => AppState.account),
      user: computed(() => AppState.user),
      activeProfile: computed(() => AppState.activeProfile),
      profileKeeps: computed(() => AppState.profileKeeps),
      vaults: computed(() => AppState.vaults),
      userVaults: computed(() => AppState.userVaults),
      userKeeps: computed(() => AppState.userKeeps)

    })
    onMounted(async() => {
      try {
        await accountService.getProfile(route.params.id)
        await keepsService.getKeepsByProfile(route.params.id)
        await vaultsService.getVaults(route.params.id)
        await vaultsService.getUserVaults(route.params.id)
        await keepsService.getUserKeeps(route.params.id)
      } catch (error) {
        Notification.toast('Error: ' + error, 'error')
      }
    })
    return {
      state
    }
  }
}
</script>
<style>
.btn{
    padding: none;
}

</style>
