<template>
  <div>
    <h1 ref="myref">Hook Tutorial</h1>
    <p>My name is {{ name }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Erik",
    };
  },
  beforeCreate() {
    console.log("not accessable", this.name);
  },
  created() {
    // Call mostly initial data from created
    console.log("data and other function is available but not html", this.name);
  },
  mounted() {
    console.log(this.$refs.myref);
  },
  beforeMounted() {},
};
</script>