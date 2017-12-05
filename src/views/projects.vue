<template lang="html">
  <div>
    <ul class="project">
      <li>
        <a href="#">
          <h3>Zhaoxing's Blog</h3>
          <h4>Description：Based on Vue.js、Node.js</h4>
        </a>
      </li>
      <li>
        <a href="#">
          <h3>A simple application like Yelp</h3>
          <h4>Description： A pure front end demo using React. Redux</h4>
        </a>
      </li>
      <li>
        <router-link to='/projects/movingdots'>
          <h3>Loiter Dots</h3>
          <h4>Description： A plugin based on native js, achieve a background with moving dots</h4>
        </router-link>
      </li>
      <li>
        <router-link to='/projects/typeeffect'>
          <h3>Type effect</h3>
          <h4>Description： A plugin simulating typing effect</h4>
        </router-link>
      </li>
      
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {},
  mounted () {},
  methods: {},
  components: {}
}
</script>

<style lang="css" scoped>
ul.project {
  width: 7.5rem;
  margin: 0 auto;
  padding: 0.4rem 0.8rem;
  list-style: none;
}
ul.project h3 {
  color: #555;
}
ul.project h4 {
  font-size: 12px;
  color: #bbb;
}
ul.project > li {
  position: relative;
  border-bottom: 1px dashed #ccc;
}
ul.project > li > a {
  display: block;
  width: 100%;
  height: 100%;
}
ul.project > li > p {
  font-size: 12px;
  color: #666;
  /*margin-top: 6px;*/
}
ul.project > li > p.click {
  position: absolute;
  right: 0;
  bottom: 0;
  font-size: 14px;
  cursor: pointer;
  text-decoration: underline;
}
</style>
