<template>
    <div>
        <div id="fixed">
            <div style="height: 30px"/>
            <h2 id="title" align="center">專案詳情</h2>
        </div>
        <projectInformationTab />
        <projectInformation />
    </div>
</template>

<script>
import projectInformationTab from '@/components/ProjectInformationTab'
import projectInformation from '@/components/ProjectInformation'

export default {
    components: {
        projectInformation,
        projectInformationTab
    }
}
</script>

<style>
    #fixed {
        z-index: 1;
        margin: 0px auto;
        position: fixed;
        width: 100%;
        height: 17%;
        background-color: white;
        background-image: url('https://drive.google.com/uc?export=download&id=1jWBYP0jXt4W2Qbc88B-5r8F2R4SWY7W2');
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }
</style>
