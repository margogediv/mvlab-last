import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _f830b382 = () => interopDefault(import('..\\pages\\Chart.vue' /* webpackChunkName: "pages/Chart" */))
const _068e7a78 = () => interopDefault(import('..\\pages\\Charts.vue' /* webpackChunkName: "pages/Charts" */))
const _81a5ff6c = () => interopDefault(import('..\\pages\\Login.vue' /* webpackChunkName: "pages/Login" */))
const _8bd65b10 = () => interopDefault(import('..\\pages\\profiler.vue' /* webpackChunkName: "pages/profiler" */))
const _9a083aae = () => interopDefault(import('..\\pages\\Projects.vue' /* webpackChunkName: "pages/Projects" */))
const _06eb4666 = () => interopDefault(import('..\\pages\\recorder.vue' /* webpackChunkName: "pages/recorder" */))
const _ccbe5272 = () => interopDefault(import('..\\pages\\repairs.vue' /* webpackChunkName: "pages/repairs" */))
const _a1f4c87e = () => interopDefault(import('..\\pages\\settingspage.vue' /* webpackChunkName: "pages/settingspage" */))
const _abea93e6 = () => interopDefault(import('..\\pages\\vibro.vue' /* webpackChunkName: "pages/vibro" */))
const _7e133d53 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Chart",
    component: _f830b382,
    name: "Chart"
  }, {
    path: "/Charts",
    component: _068e7a78,
    name: "Charts"
  }, {
    path: "/Login",
    component: _81a5ff6c,
    name: "Login"
  }, {
    path: "/profiler",
    component: _8bd65b10,
    name: "profiler"
  }, {
    path: "/Projects",
    component: _9a083aae,
    name: "Projects"
  }, {
    path: "/recorder",
    component: _06eb4666,
    name: "recorder"
  }, {
    path: "/repairs",
    component: _ccbe5272,
    name: "repairs"
  }, {
    path: "/settingspage",
    component: _a1f4c87e,
    name: "settingspage"
  }, {
    path: "/vibro",
    component: _abea93e6,
    name: "vibro"
  }, {
    path: "/",
    component: _7e133d53,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
