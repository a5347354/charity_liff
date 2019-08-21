<template>
<div class="button d-flex flex-row justify-content-evenly">
    <!-- <a class="" href="#/nutrition/all/1"><span class="icon"><img alt="" :src="layout.button_projectIntro"/></span><span></span></a>
    <a class="router-link-exact-active router-link-active active" href="#/all/all/1"><span class="icon"><img alt="" :src="layout.button_organization"/></span> <span></span></a> -->
</div>
</template>

<script>
import { db } from '../main'
export default {
  name: 'ProjectInformationTab',
  data () {
    return {
    //   project: [],
      layout: []
    }
  },
  firestore () {
    return {
        layout: db.collection('layout').doc('ccf')
    }
  }
}
</script>

<style scoped>
.button {
    padding: 25% 20px;
}
/* .icon {
    height: 20px;
} */
</style>
