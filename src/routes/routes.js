import config from '~/config';

// import { HeaderOnly } from '~/layouts';

import Home from '~/pages/Home';
import Product from '~/pages/Product';
import Post from '~/pages/Post';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.product, component: Product },
    { path: config.routes.post, component: Post },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
