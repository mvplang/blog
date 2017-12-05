<template lang="html">
    <div>
        <div class="about">
            <h1>About Me</h1>
            <p class="text">
                I'm a full-stack web developer focusing on using modern JavaScript frameworks to deliver modular, robust web applications. I graduated from the University of Pittsburgh with a Master of Science in Information Science & Technology, and I have spent a year providing solutions in industry. In addition to solid programming backgrounds, I'm passionate about learning and implementing latest web development techniques. Comfortable and capable of working either collaboratively or individually on projects involving back-end, deployment or design requirements.
            </p>
            <ul class="list">
                <li><a class="icon-gmail" href="mailto:mvplang@gmail.com" target="_blank">Gmail</a></li>
                <li><a class="icon-git" href="https://github.com/mvplang" target="_blank">Gitbub</a></li>
            </ul>
        </div>
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
  div.about {
    width: 7.5rem;
    margin: 0 auto;
    padding: 0.4rem 0.8rem 0;
  }
  div.about > h1 {
    margin-bottom: 0.4rem;
  }
  div.about > h2 {
    margin-bottom: 0.3rem;
  }
  div.about > h3 {
    margin: 0.1rem;
  }
  div.about > p.text {
    margin-bottom: 0.4rem;
    line-height: 200%;
    text-indent: 40px;
    color: #555;
    text-align: justify;
  }
  ul{
    list-style: none;
    padding:0;
  }
  li{
    width:50%;
    float:left;
    text-align: center;
    text-decoration: none;
  }
  a{
    color: #BBB;
    font-size: 12px;
    position: relative;
  }
  a:before{
    position:relative;
    content: "";
    display: inline-block;
    width: 20px;
    height: 20px;
    right: 4px;
    top: 4px;
  }
  a:hover{
    text-decoration: underline;
    color: #000;
  }
  a.icon-gmail:before{
    background: url('../assets/email-icon.png') no-repeat;
  }
  a.icon-git:before{
    background: url('../assets/icon-github-black.svg') no-repeat;
  }
</style>
