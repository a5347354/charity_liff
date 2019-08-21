<template>
    <div class="background" v-bind:style="{ 'height':+backgroundHeight +'px' } ">
        <div class="t-container" v-bind:style="{ 'height':+pContainerHeight +'px' } ">
            <!-- <img src="@/assets/badge_resize.png"> -->
            <b-row align-h="between" no-gutters>
                <b-col>
                    <b-img name="done" :src="require('../assets/done.png')" fluid alt="Responsive image" @click="onClick"></b-img>
                </b-col>
                <b-col>
                    <b-img name="ongoing" :src="require('../assets/ongoing.png')" fluid alt="Responsive image" @click="onClick"></b-img>
                </b-col>
                <b-col>
                    <b-img name="badge" :src="require('../assets/badge_resize.png')" fluid alt="Responsive image" @click="onClick"></b-img>
                </b-col>
            </b-row>
            <div class="p-container" v-if="currentTab == 'done'">
                <div>
                    <h4>已執行專案</h4>
                    <a>自己曾捐贈且已經募資完畢，正被執行的專案</a>
                </div>
                <vc-donut background="white" foreground="grey"
                :size='pieChartSize' unit="px" :thickness="30"
                has-legend legend-placement="bottom"
                :sections="sections" :total="100"
                :start-angle="0"
                @section-click="handleSectionClick">總專案數<br/>{{sections.length}}</vc-donut>
            </div>
            <div class="p-container" v-if="currentTab == 'ongoing'">
                <div>
                    <h4>募集中專案</h4>
                    <a>自己曾捐贈，但還在募集中，尚未執行的專案</a>
                </div>
                <vc-donut background="white" foreground="grey"
                :size='pieChartSize' unit="px" :thickness="30"
                has-legend legend-placement="bottom"
                :sections="sections" :total="100"
                :start-angle="0"
                @section-click="handleSectionClick">總專案數<br/>{{sections.length}}</vc-donut>
            </div>
            <div class="p-container" v-if="currentTab == 'badge'">
                <div>
                    <h4>已捐贈 12,342P</h4>
                    <a>參與20項已執行專案</a>
                </div>
                <b-row align-h="between" no-gutters>
                    <b-col>
                        <a>身障大使</a>
                        <b-img :src="require('../assets/badge_wheelchair.png')" fluid alt="Responsive image" ></b-img>
                        <a>10/10</a>
                    </b-col>
                    <b-col>
                        <a>LINE FRIENDS大使</a>
                        <b-img :src="require('../assets/badge_brown.png')" fluid alt="Responsive image" ></b-img>
                        <a>10/10</a>
                    </b-col>
                    <b-col>
                        <a>性別平權大使</a>
                        <b-img :src="require('../assets/badge_unknown.png')" fluid alt="Responsive image" ></b-img>
                        <a>10/10</a>
                    </b-col>
                </b-row>
                <b-row align-h="between" no-gutters>
                    <b-col>
                        <a>平窮大使</a>
                        <b-img :src="require('../assets/badge_unknown.png')" fluid alt="Responsive image" ></b-img>
                        <a>10/10</a>
                    </b-col>
                    <b-col>
                        <a>流浪大使</a>
                        <b-img :src="require('../assets/badge_unknown.png')" fluid alt="Responsive image" ></b-img>
                        <a>10/10</a>
                    </b-col>
                    <b-col>
                        <a>教育大使</a>
                        <b-img :src="require('../assets/badge_unknown.png')" fluid alt="Responsive image" ></b-img>
                        <a>10/10</a>
                    </b-col>
                </b-row>
            </div>
        </div>
        <div width="100%" v-if="currentTab == 'done'">
            <b-card @click="showProjects">
                <b-row align-h="center">
                    <span>
                        <b-button v-if="isVisible">-</b-button>
                        <b-button v-else>+</b-button>
                        已執行的專案
                    </span>
                </b-row>
            </b-card>
            <div>
                <b-collapse v-for="(item,index) in projectList" v-bind:key="index" :id="index" :visible="isVisible">
                    <b-card>
                        <b-row align-h="between">
                            <b-col cols="8">
                                <div class="text-center">
                                    {{ item }}
                                </div>
                            </b-col>
                            <b-col cols="4">
                                <b-img src="/assets/result.png" fluid alt="Responsive image"></b-img>
                            </b-col>
                        </b-row>
                    </b-card>
                </b-collapse>
            </div>
        </div>
        <div width="100%" v-if="currentTab == 'ongoing'">
            <b-card @click="showProjects">
                <b-row align-h="center">
                    <span>
                        <b-button v-if="isVisible">-</b-button>
                        <b-button v-else>+</b-button>
                        募集中的專案
                    </span>
                </b-row>
            </b-card>
            <div>
                <b-collapse v-for="(item,index) in projectList" v-bind:key="index" :id="index" :visible="isVisible">
                    <b-card>
                        <b-row align-h="between">
                            <b-col cols="8">
                                <div class="text-center">
                                    {{ item }}
                                </div>
                            </b-col>
                            <b-col cols="4">
                                <b-img src="/assets/result.png" fluid alt="Responsive image"></b-img>
                            </b-col>
                        </b-row>
                    </b-card>
                </b-collapse>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'App',
    components: {
    },
    data() {
      return {
        isProjectListShow: false,
        isVisible: false,
        projectList:[
            "伊甸基金會-專案1-捐贈100p",
            "兒福聯盟-專案1-捐贈200p",
        ],
        currentTab: "done",
        pContainerHeight: 500,
        backgroundHeight: 500,
        pieChartSize:200,
        sections: [
          { label: '伊甸基金會', value: 50, color: '#FF6384' },
          { label: '兒福聯盟', value: 20, color: '#36A2EB' },
          { label: '熊大專案', value: 30, color: '#FFCE56' }
        ],
      }
    },
    mounted() {
        this.pContainerHeight = Math.ceil((window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight) - 80)
        this.backgroundHeight = Math.ceil((window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight))
        this.pieChartSize = Math.ceil((window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) * 0.55)
        console.log(window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight)
        console.log(this.pContainerHeight)
    },
    computed: {

    },
    methods: {
      updatePieData() {
        this.$refs.pieChart.chart.data([
          ['Product A', 4755],
          ['Product B', 5205],
          ['Product C', 1504]
        ]);
        this.pieDataIsModified = true;
      },
      showProjects(){
          console.log("button click")
          this.isVisible = !this.isVisible
          
      },
      handleSectionClick(section) {
        console.log(`${section.label} clicked.`);
      },
      onClick(event) {
        this.currentTab = event.target.getAttribute("name")
        console.log(this.currentTab)
      }
    }
};
</script>

<style>
.center {
  margin: auto;
  width: 35%;
  /* padding: 10px; */
}
.chart {
    width: 100%;
    height: 400px;
    margin-bottom: 10px;
}
.chart-container {
    text-align: center;
    margin-top: 75px;
    margin-bottom: 15px;
}
.chart-list .chart-container:first-child {
    margin-top: 35px;
}
.nav-tabs > li > a {
    padding-top: 10%; 
    padding-bottom: 10%;
}

.background {
    background-image: url("../assets/background.png");
    background-size: 100% 100%;
}

.tabs{
    height: 100%
}

.tab-content {
    height:90%
}

.t-container {
    height: 500px;
    /* background-color: white; */
}

.p-container {
    text-align: center;
    /* padding-top: px; */
}

.p-container > div{
    padding-top: 20px;
}

.p-container > .row > .col {
    padding-top: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
}

.p-container > .row > .col > a {
    font-size: 20px;
    font-size: 3vw; 
}
</style>