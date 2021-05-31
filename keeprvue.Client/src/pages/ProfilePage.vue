<template>
  <div class="container-fluid">
    <div class="row my-4 px-4">
      <div class="col-3 px-4">
        <img src="//placehold.it/200x200" alt="">
      </div>
      <div class="col-f6 px-4">
        <h2>Profile Name</h2>
        <h5>Vaults: Int</h5>
        <h5>Keeps: Int</h5>
      </div>
    </div>
    <div class="row mt-5 px-4">
      <div class="col-12">
        <h3>Vaults</h3>
        <!-- <button title="Open Create Vault Form"
                type="button"
                class="btn"
                data-toggle="modal"
                data-target="#"
                v-if="state.user.isAuthenticated"
        >
          <i class="fas fa-plus" aria-hidden="true">Bug</i>
        </button> -->
      </div>
      <div class="row">
        <VaultComponent />
      </div>
    </div>
    <div class="row mb-2 px-4">
      <div class="col-12">
        <h3>Keeps</h3>
        <!-- <button title="Open Create Keep Form"
                type="button"
                class="btn"
                data-toggle="modal"
                data-target="#new-bug-form"
                v-if="state.user.isAuthenticated"
        >
          <i class="fas fa-plus" aria-hidden="true">Bug</i>
        </button> -->
      </div>
      <div class="row">
        <KeepComponent />
      </div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style>
.btn{
    padding: none;
}

</style>
