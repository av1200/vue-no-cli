<template>
  <div>
    This is about vue
    <!-- <ul>
      <li v-for="(item,index) in items" :key="index">
        <img :src="item.imgsrc">{{index}}{{item.imgsrc}}
        </li>
    </ul>-->
    <div v-for="(item,index) in items" :key="index" class="a">
      <img :src="item.imgsrc" />
      {{index}}{{item.imgsrc}}
    </div>

    <P>
      <button v-on:click="getImg"  >getImg</button>
    </P>
  </div>
</template>

<script>
export default {
  name: "about",
  data() {
    return {
      items: [
        // { title: "图A", imgsrc: require("@/assets/img/timg1.png") },
        // { title: "图B", imgsrc: require("@/assets/img/timg2.png") },
        // { title: "图B", imgsrc: require("@/assets/img/timg3.png") }
      ]
    };
  },
  methods: {
    getImg() {
       console.log("porcess getImg");
        var x1=1
        var x2=2 
        var x3=3;
        this.items = [
           { title: "图A", imgsrc: require("@/assets/img/timg"+x1+".png") },
           { title: "图B", imgsrc: require("@/assets/img/timg"+x2+".png") },
           { title: "图B", imgsrc: require("@/assets/img/timg"+x3+".png") }
        ];
     
    }
  }
};
</script>

<style scoped>
.a {
  display: block;
}
</style>
