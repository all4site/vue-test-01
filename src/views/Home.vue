<template>
  <div class="wrapper">
    <div v-for="post in posts" :key="post.id" class="post">
      <h2>{{ post.title | cutTitle | firstToUpperCase }}</h2>
      <p>{{ post.body }}</p>
      <div class="post-data">
        <span>Post id - {{ post.id }}</span>
        <span>User is - {{ post.userId }}</span>
      </div>
      <div class="post-link-wrapper">
        <router-link :to="{path: `/post/${post.id}`}" class="post-link">PostMore</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'Home',
  data()
  {
    return {
      posts: {}
    }
  },
  mounted()
  {
    this.uploadPosts()
  },
  methods: {
    uploadPosts()
    {
      axios.get('https://jsonplaceholder.typicode.com/posts').then(response => this.posts = response.data)
    }
  },
  filters: {
    cutTitle(value)
    {
      let title = value.slice(0, 10) + '...'
      return title
    },
    firstToUpperCase(value){
      if (!value) return value;

      return value[0].toUpperCase() + value.slice(1);
    }
  }
}
</script>

<style scoped>
h2 {
  text-align: center;
  margin-bottom: 2rem;
}

.wrapper {
  max-width: 1140px;
  margin: 3rem auto;
}

.post {
  box-shadow: 1px 0 20px 0 #00000030;
  padding: 2rem;
  margin-bottom: 2rem;
}

.post-data {
  display: flex;
  flex-direction: row;
  text-transform: lowercase;
  color: #37909f;
  margin-bottom: 2rem;
}

.post-data span:first-of-type {
  padding-right: .5rem;

}

.post-link-wrapper {
  display: flex;
  justify-content: flex-end;
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

</style>
