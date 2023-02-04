import { createWebHashHistory, createRouter } from "vue-router";


// 公共路由
export const constantRoutes = [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/index",
  },
  {
    path: "/index",
    component: () => import("@/views/index.vue"),
    name: "Index",
    meta: { title: "首页" }
  },
  {
    path: "/home",
    component: () => import("@/views/home.vue"),
    name: "Home",
    meta: { title: "主页" }
  },
  {
    path: "/project",
    component: () => import("@/views/project.vue"),
    name: "Project",
    meta: { title: "项目发布情况" }
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});

export default router;
