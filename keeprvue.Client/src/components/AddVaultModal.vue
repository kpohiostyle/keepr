<template>
  <div class="modal fade" id="addvaultmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            Create A Vault
          </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="createVault" v-if="state.account.id === state.activeProfile.id">
            <div class="form-group">
              <label for="title">Vault Name</label>
              <input type="text"
                     class="form-control"
                     id="title"
                     aria-describedby="title"
                     placeholder="Vault Name"
                     v-model="state.newVault.name"
                     required
              >
            </div>
            <div class="form-group">
              <label for="comment">Description</label>
              <input type="text"
                     class="form-control"
                     id="vaultDescription"
                     aria-describedby="comment"
                     placeholder="Vault Description"
                     v-model="state.newVault.description"
                     required
              >
            </div>
            <div class="form-group">
              <label for="comment">Private</label>
              <input type="checkbox"
                     class="form-control"
                     id="isPrivate"
                     aria-describedby="comment"
                     placeholder=""
                     v-model="state.newVault.isPrivate"
              >
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">
                Close
              </button>

              <button type="submit" class="btn btn-primary">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
import { vaultsService } from '../services/VaultsService'
// import { useRoute } from 'vue-router'
import Notification from '../utils/Notification'
export default {
  name: 'AddVaultModal',
  setup() {
    // const route = useRoute()
    const state = reactive({
      newVault: {},
      account: computed(() => AppState.account),
      activeProfile: computed(() => AppState.activeProfile),
      user: computed(() => AppState.user)
    })
    return {
      state,
      async createVault() {
        try {
        //   state.newVault = route.params.id
          await vaultsService.createVault(state.newVault)
          Notification.toast('Successfully Created', 'success')
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
