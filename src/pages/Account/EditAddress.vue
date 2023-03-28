<template>
  <div class="eddit_address">
    <div class="heading">
      <h4>Edit Address</h4>
      <p>You can edit your address here</p>
    </div>
    <!-- heading -->
    <form>
     <div class="edit_address_form">
      <h5> edit address</h5>
      <div>
          <select class="form-select" aria-label="Default select example">
            <option value="1">{{ $t("placeholder.Saudi") }}</option>
            <option value="1">{{ $t("placeholder.egypt") }}</option>
          </select>
        </div>
        <div class="col-lg-6">
          <label for="name"> first name</label>
          <input
            type="text"
            id="firstname"
            placeholder="Enter first name "
          />
        </div>

     </div>
     <div class="edit_Contact_details">

    </div>
    </form>
  </div>
</template>

<!-- <script>
export default {};
</script> -->

<style lang="scss">
.eddit_address {
  padding: 20px 0;
  form{
    background-color: white;
    border-radius: 15px;
    padding: 15px;

  }
}
</style>
