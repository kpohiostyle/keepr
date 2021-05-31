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
          <form @submit.prevent="createVault">
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
                     id="comment"
                     aria-describedby="comment"
                     placeholder="Vault Description"
                     v-model="state.newVault.description"
                     required
              >
            </div>
            <div class="form-group">
              <label for="comment">Description</label>
              <input type="checkbox"
                     class="form-control"
                     id="comment"
                     aria-describedby="comment"
                     placeholder="Vault Description"
                     v-model="state.newVault.description"
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
export default {

}
</script>
<style>

</style>
