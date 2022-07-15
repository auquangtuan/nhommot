import HomePage from "~/pages/HomePage/HomePage";
import TemplateFull from "~/templates/TemplateFull/TemplateFull"; // template không bao gồm footer và header
import Product from "~/pages/Product/Product";

const publicRoutes = [
    { path: '/', component: HomePage },
    {path : '/product', component : Product},
    
];

const privateRoutes = [
];

export { publicRoutes, privateRoutes };