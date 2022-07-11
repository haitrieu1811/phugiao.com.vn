import config from '~/config';

// import { HeaderOnly } from '~/layouts';

import Home from '~/pages/Home';
import Product from '~/pages/Product';
import Post from '~/pages/Post';
import Search from '~/pages/Search';
import Profile from '~/pages/Profile';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.product, component: Product },
    { path: config.routes.post, component: Post },
    { path: config.routes.search, component: Search },
    { path: config.routes.profile, component: Profile },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
