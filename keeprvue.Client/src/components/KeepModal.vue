<template>
  <div class="container-fluid" v-if="state.activeKeep">
    <div class="modal" id="keepDetailsModal" tabindex="-1" aria-labelledby="#keepDetailsModal" aria-hidden="true">
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="row">
            <div class="col-lg-6">
              <img :src="state.activeKeep.img" alt="" class="w-100 h-100 p-2">
            </div>
            <div class="col-lg-6 p-3 d-flex flex-column align-items-center">
              <div class="d-flex flex-inline justify-content-around">
                <span class="p-3 mb-2"><i class="far fa-eye">{{ state.activeKeep.views }}</i></span>
                <span class="p-3 mb-2"><i class="fab fa-korvue">{{ state.activeKeep.keeps }}</i></span>
                <span class="p-3 mb-2"><i class="fas fa-share-alt">{{ state.activeKeep.shares }}</i></span>
                <button type="button" class="close btn-close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <h3 class="p-3 mb-2">
                {{ state.activeKeep.name }}
              </h3>
              <p class=" pb-5 pl-3 mr-5 mr-ml-1 b-border">
                {{ state.activeKeep.description }}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, facere maiores, ad sint cum nam eos non repudiandae officiis laudantium aut, minima atque aspernatur facilis quod inventore est magni dolores.
              </p>
              <div class="row">
                <div class="col-12 m-2 d-flex flex-inline justify-content-around align-items-end">
                  <div class="dropdown text-dark">
                    <button class="btn btn-add dropdown-toggle text-dark"
                            type="button"
                            id="dropdownMenuButton"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                    >
                      Add To Vault
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <!-- <a class="dropdown-item" href="#">Action</a> -->
                      <a class="dropdown-item text-dark" v-for="userVault in state.userVaults" :key="userVault.id">
                        <p @click="addKeep(userVault.id)">{{ userVault.name }}</p>
                      </a>
                    </div>
                  </div>

                  <button class="btn-del" @click="removeKeep()" v-if="$route.name=='VaultPage' && state.activeVault.creatorId == state.account.id && keep.vaultKeepId">
                    Remove
                  </button>
                  <button class="btn-del" @click="deleteKeep(state.activeKeep)" v-else-if="state.activeKeep.creatorId == state.account.id">
                    <i class="far fa-trash-alt"></i>
                  </button>

                  <router-link v-if="state.activeKeep.creator" :to="{name: 'ProfilePage', params: {id: state.activeKeep.creatorId}}">
                    <small>{{ state.activeKeep.creator.name }}</small>
                    <img :src="state.activeKeep.creator.picture" class="rounded-circle small-image profile" alt="">
                  </router-link>
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
import { keepsService } from '../services/KeepsService'
import Notification from '../utils/Notification'
import $ from 'jquery'
import { vaultsService } from '../services/VaultsService'
export default {
  name: 'KeepModal',
  props: {
    keep: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const state = reactive({
      activeKeep: computed(() => AppState.activeKeep),
      activeProfile: computed(() => AppState.activeProfile),
      activeVault: computed(() => AppState.activeVault),
      keeps: computed(() => AppState.keeps),
      user: computed(() => AppState.user),
      userVaults: computed(() => AppState.userVaults),
      account: computed(() => AppState.account)
    })
    return {
      state,
      async deleteKeep(activeKeep) {
        try {
          if (await Notification.confirmAction()) {
            await keepsService.deleteKeep(activeKeep.id)
          }
          $('#keepDetailsModal').modal('hide')
        } catch (error) {
          Notification.toast('Error: ' + error, 'error')
        }
      },
      async removeKeep() {
        try {
          if (await Notification.confirmAction()) {
            await keepsService.removeKeep(props.keep.vaultKeepId)
          }
          $('#keepDetailsModal').modal('hide')
        } catch (error) {
          Notification.toast('Error: ' + error, 'error')
        }
      },
      async addKeep(id) {
        try {
          await vaultsService.addKeep(id, state.activeKeep.id)
          $('#keepDetailsModal').modal('hide')
          Notification.toast('Added To Vault', 'success')
        } catch (error) {
          Notification.toast('Error:' + error, 'error')
        }
      }
    }
  }

}
</script>
<style scoped>
.b-border{
  border-bottom: 1px solid var(--primary);
}
.btn-del{
  color: var(--primary);
}
.btn-del:hover{
  background-color: var(--dark);
  color: white;
}
.btn-add{
  color: var(--secondary);
  background-color:white;
  border-color: var(--secondary);
  font-size: 12px;

}
.btn-add:hover{
  background-color: #0C7C59;
  color: white;
}
.btn-close{
  position: absolute;
  top: 0;
  right: 1rem;
  color: var(--primary);

}
.small-image{
  height: 30px;
  width: 30px;
}
</style>
