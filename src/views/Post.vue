<template>
  <div class="wrapper">
    <h1>{{ post.title }}</h1>
    <p>{{ post.body }}</p>
    <div class="post-data">
      <span>Post id - {{ post.id }}</span>
      <span>User is - {{ post.userId }}</span>
    </div>

    <div class="post-link-wrapper">
      <router-link :to="{name: 'Home'}" class="post-link">Home</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Post",
  data()
  {
    return {
      post: {}
    }
  },
  mounted()
  {
    this.postData()
  },
  methods: {
    postData()
    {
      axios.get(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`).then(r => this.post = r.data)
    }
  }
}
</script>

<style scoped>
.wrapper {
  max-width: 1140px;
  margin: 3rem auto;
}

h1 {
  text-align: center;
  margin-bottom: 3rem;
}

.post-link-wrapper {
  margin-top: 2rem;
  justify-content: center;
  display: flex;
}

.post-link {
  border: 1px solid cornflowerblue;
  padding: .3rem .8rem;
  border-radius: 3px;
  text-decoration: none;
  color: cornflowerblue;
  transition: all .5s ease;
}

.post-link:hover {
  border-color: #0c45a0;
  color: #0c45a0;
}

.post-data {
  margin-top: 2rem;
  text-transform: lowercase;
}

span {
  color: #42b983;
}

.post-data span:first-of-type {
  margin-right: 1rem;
  color: red;
}
</style>