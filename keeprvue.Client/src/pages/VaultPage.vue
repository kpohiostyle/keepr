<template>
  <div class="row">
    <KeepComponent v-for="keep in state.vaultKeeps" :key="keep.id" :keep="keep" />
  </div>
  <div class="row">
    <button class="btn-del" @click="deleteVault(state.activeVault)" v-if="state.activeKeep.creatorId == state.account.id">
      <i class="far fa-trash-alt"></i>
    </button>
  </div>
</template>
<script>
// import { computed, onMounted, reactive } from 'vue'
// import { keepsService } from '../services/KeepsService'
// import { vaultsService } from '../services/VaultsService'
// import { accountService } from '../services/AccountService'
// import { AppState } from '../AppState'
// import { useRoute } from 'vue-router'
// import Notification from '../utils/Notification'
// export default {
//   name: 'VaultPage',
//   setup() {
//     const route = useRoute()
//     const state = reactive({
//       account: computed(() => AppState.account),
//       user: computed(() => AppState.user),
//       activeProfile: computed(() => AppState.activeProfile),
//       vaultKeeps: computed(() => AppState.vaultKeeps)

//     })
//     onMounted(async() => {
//       try {
//         await keepsService.getKeepsByVault(vaultId)
//       } catch (error) {
//         Notification.toast('Error: ' + error, 'error')
//       }
//     })
//     return {
//       state
//     }
//   }
// }
// </script>
// <style>

 </style>
