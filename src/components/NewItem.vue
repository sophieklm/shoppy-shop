<template>
  <form>
    <h3>Add new item:</h3>
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" id="name" v-model="newItem.name" />
    </div>
    <div class="form-group">
      <label for="description">Description</label>
      <textarea type="text" id="description" v-model="newItem.description"></textarea>
    </div>
    <div class="form-group">
      <label for="price">Price</label>
      <input type="text" id="price" v-model="newItem.price" />
    </div>
    <button type="button" class="shop_btn" @click="add">Add</button>
  </form>
</template>

<script>
export default {
  name: "addNewItem",
  data() {
    return {
      newItem: {
        name: "Unicorn",
        description: "Authentic magic unicorn",
        price: 29
      }
    };
  },
  methods: {
    add() {
      alert("Item added");
    }
  }
};
</script>

<style scoped>
.form-group {
  margin: 10px 0;
}

label {
  display: block;
  margin: 0 0 10px 0;
}

input,
textarea {
  width: 50%;
  padding: 5px;
  box-sizing: border-box;
  background: white;
  border: solid 1px black;
}

button {
  padding: 5px 15px;
  border-radius: 3px;
}
</style>