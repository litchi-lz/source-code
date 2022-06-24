import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";
/* Layout */
import Layout from '@/layout'

const constantRoutes = [
  {
    path: "/",
    name: "aa",
    // redirect: '/login',
    component:()=>import("@/views/index.vue"),

  },
  // {
  //   path: '/',
  //   hidden: true,
  //   children: [
  //     {
  //       path: '/blog',
  //       component: () => import('@/views/blog.vue'),
  //       // name: 'Index',
  //       // meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
  //     }
  //   ]
  // },
  {
    path: '/',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/blog',
        component: () => import('@/views/webBlog/blogs.vue'),
        // name: 'Index',
        // meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
      },
      {
        path: '/substance',
        component: () => import('@/views/webBlog/substance.vue'),
        // name: 'Index',
        // meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
      },
    ]
  },
  {
    path: "/",
    name: "Index",
    component:()=>import("@/views/index.vue"),

  },

  {
    path: "/login",
    name: "Login",
    component:()=>import("@/views/admin/login.vue"),

  },
  {
    path: "/manager",
    name: "Manager",
    meta: {
      login: true,
    },
    component:()=>import("@/views/admin/manager.vue"),

    children: [
      {
        path: "/dashboard",
        component:()=>import("@/views/admin/dashboard.vue"),
 
        meta: {
          login: true,
        },
      },
      {
        path: "/article",
        component:()=>import("@/views/admin/article.vue"),

        meta: {
          login: true,
        },
      },
      {
        path: "/setting",
        name: "Setting",
        component:()=>import("@/views/admin/setting.vue")
   
      },
      {
        path: "/write",
        component:()=>import("@/views/admin/write.vue"),
        meta: {
          login: true,
        },
      },
      {
        path: "/browseRecord",
        component:()=>import("@/views/admin/browseRecord.vue"),
  
        meta: {
          login: true,
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes: constantRoutes,
});
router.beforeEach((to, from, next) => {
  if (to.meta.login) {
    if (sessionStorage.getItem("login")) {
      next();
    } else {
      next({ path: "/login" });
    }
  } else {
    next();
  }
});
export default router;