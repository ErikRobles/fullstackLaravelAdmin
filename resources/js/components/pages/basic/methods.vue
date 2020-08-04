<template>
  <div>
    <h1 ref="myref">Methods Tutorial</h1>
    <h2>The number is: {{ views }}</h2>
    <button @click="updateCounter(1)">Increase</button>
    <button @click="updateCounter(-1)">Decrease</button>
    <br />
    <br />
    <br />
    <div v-if="blogs.length">
      <div v-for="(blog, i) in blogs" :key="i">
        <h1>{{blog.title}}</h1>
        <h3>{{blog.post}}</h3>
      </div>
    </div>
    <br />
    <br />
    <br />

    <div>
      <h1 v-if="showItem">Show this item if "show item" is true</h1>
      <h1 v-else>Show this item if "show item" is false</h1>
    </div>
    <button @click="changeShowItem">Change show Item</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      views: 0,
      blogs: [],
      showItem: false,
    };
  },
  methods: {
    updateCounter(number) {
      this.views += number;
    },
    changeShowItem() {
      this.showItem = !this.showItem;
    },
  },
  created() {
    // Call server to get number of view for this post.
    this.views = 100;
    //Get the blog posts
    let posts = [
      {
        title: "this is the blog title 1",
        post: "this is the blog post 1",
        id: 1,
      },
      {
        title: "this is the blog title 2",
        post: "this is the blog post 2",
        id: 2,
      },
      {
        title: "this is the blog title 3",
        post: "this is the blog post 3",
        id: 3,
      },
      {
        title: "this is the blog title 4",
        post: "this is the blog post 4",
        id: 4,
      },
      {
        title: "this is the blog title 5",
        post: "this is the blog post 5",
        id: 5,
      },
      {
        title: "this is the blog title 6",
        post: "this is the blog post 6",
        id: 6,
      },
    ];
    this.blogs = posts;
  },
};
</script>