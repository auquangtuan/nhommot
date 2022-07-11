import Admin from "~/templates/Admin/Admin";
import HomePage from "~/pages/HomePage/HomePage";
import Login from "~/pages/Login/Login";
import register from "~/pages/register/register";
import TemplateFull from "~/templates/TemplateFull/TemplateFull"; // template không bao gồm footer và header

const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/login', component: Login},
    { path: '/register', component: register},
    {path : '/admin', component : Admin, layout: TemplateFull}
];

const privateRoutes = [
];

export { publicRoutes, privateRoutes };