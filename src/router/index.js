import Vue from 'vue'
import Router from 'vue-router'
import Project from '@/pages/Project'
import ProjectDetail from '@/components/ProjectDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Project',
      component: Project
    },
    {
      path: '/detail',
      name: 'ProjectDetail',
      component: ProjectDetail
    }

  ]
})
