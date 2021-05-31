<template>
  <div class="modal fade" id="addkeepmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            Create A New Keep
          </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="createKeep">
            <div class="form-group">
              <label for="title">Title</label>
              <input type="text"
                     class="form-control"
                     id="title"
                     aria-describedby="title"
                     placeholder="Keep Title"
                     v-model="state.newKeep.title"
                     required
              >
            </div>
            <div class="form-group">
              <label for="comment">Img Url:</label>
              <input type="text"
                     class="form-control"
                     id="comment"
                     aria-describedby="comment"
                     placeholder="Img Url:"
                     v-model="state.newkeep.img"
                     required
              >
            </div>
            <div class="form-group">
              <label for="comment">Comment</label>
              <input type="text"
                     class="form-control"
                     id="comment"
                     aria-describedby="comment"
                     placeholder="Bug Comment"
                     v-model="state.newkeep.description"
                     required
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
import { keepsService } from '../service/KeepsService'
import { useRoute } from 'vue-router'
import Notification from '../utils/Notification'
export default {
  name: 'AddKeepModal',
  setup() {
    const route = useRoute()
    const state = reactive({
      newNote: {},
      account: computed(() => AppState.account),
      user: computed(() => AppState.user)
    })
    return {
      state,
      async createKeep() {
        try {
          state.newKeep = route.params.id
          await keepsService.createKeep(state.newKeep, route.params.id)
        } catch (error) {
          Notification.toast('Successfully Created', 'success')
        }
      }
    }
  }
}
</script>
<style>

</style>
