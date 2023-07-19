import Vue from "vue";
import Router from "vue-router";

import FirstCompjnent from "@/components/FirstCompjnent.vue";
import BlogPage from "@/components/BlogPage.vue";
import BlogDetails from "@/components/BlogDetails";
import ProjectsComponent from "@/components/ProjectsComponent";
import ProjectDetails from "@/components/ProjectDetails";
import NotFound from "@/components/NotFound"

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/FirstCompjnent",
            name: "FirstCompjnent",
            component: FirstCompjnent,
        },
        {
            path: "/BlogPage",
            name: "BlogPage",
            component: BlogPage,
        },
        {
            path: "/BlogDetails",
            name: "BlogDetails",
            component: BlogDetails,
        },
        {
            path: "/ProjectsComponent",
            name: "ProjectsComponent",
            component: ProjectsComponent,
        },
        {
            path: "/ProjectDetails",
            name: "ProjectDetails",
            component: ProjectDetails,
        },
        {
            path: "/NotFound",
            name: "NotFound",
            component: NotFound,
        },
        {
            path: '*',
            redirect: '/NotFound'
        }
        // < />
        // <BlogDetails />
        // <ProjectsComponent />
        // <ProjectDetails />
    ],
    mode: "history",
});
