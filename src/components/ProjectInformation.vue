<template>
    <div class="content">
        <div v-for="(project, tag) in project" :key="tag">
            <div class="item" href="#">
                <div class="date" :style="{'background-image': 'url(' + layout.record_dateline_image + ')'}">
                    <span>{{project.date}}</span>
                </div>
                <span class="picBox">
                    <img class="pic center" :src="project.imageURL">
                </span>
                <span class="info">
                    <div class="proName parantcenter" :style="{'background-image': 'url(' + layout.record_name_image + ')'}">
                        <h4 class="pink center" style="text-align:center">{{project.projectName}}</h4>
                    </div>
                    <p class="txt">{{project.description}}</p>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import { db } from '../main'
export default {
  name: 'ProjectInformation',
  data () {
    return {
      project: [],
      layout: []
    }
  },
  firestore () {
    return {
        project: db.collection('project').orderBy('date'),
        layout: db.collection('layout').doc('ccf')
    //   test: db.collection('project').g
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
    position: relative;
    padding: 0px 30px 30px;
}
.item {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-bottom: 30px;
}
.item .pic {
    border-radius: 20px;
    overflow: hidden;
    margin: 5px;
    height: 200px;
    background: url(/src/assets/logo.png) no-repeat center/cover;
    background-image: url(/src/assets/logo.jpg), initial;
    background-position-x: center, initial;
    background-position-y: center, initial;
    background-size: cover, initial;
    background-attachment: initial, initial;
    background-origin: initial, initial;
    background-clip: initial, initial;
    -webkit-transition: all .3s ease;
    transition: all .3s ease;
}
.info {
    text-align: center;
}
.parantcenter {
    display: table;
}
.center {
    display: table-cell;
    vertical-align: middle;
}
.proName{
    width: 100%;
    height: 70px;
    background-image: url('https://drive.google.com/uc?export=download&id=1FVwMg-4PhhXGHFHWflafyidl6YSH0rbh');
    background-size: 100%;
    background-repeat: no-repeat;
    display: table;
}
/* .picBox {
    width: 295px;
    height: 210px;
    border: 1px dashed #cd2c5d;
    border-radius: 20px;
    overflow: hidden;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
} */
.date {
    color: #6d6d6d;
    font-size: 13px;
    font-size: 1 rem;
    height: 30px;
    width: 100%;
    background-image: url('https://drive.google.com/uc?export=download&id=10iEgeYSrn9FOP6-VoN4gnNxZr5wnEomm');
    background-size: cover;
    background-repeat: no-repeat;
    text-align: center;
}
.item .info {
    margin-left: 20px;
    width: 100%;
    letter-spacing: 1px;
}
.pink {
    color: #cd2c5d;
}
.tt, .txt, .article-content {
    text-align: justify;
    text-justify: inter-ideographic;
}
@media screen and (max-width: 960px) {
  .item {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
  }
}
</style>
