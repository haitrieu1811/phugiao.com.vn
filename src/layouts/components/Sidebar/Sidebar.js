import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Menu from './Menu';
import styles from './Sidebar.module.scss';
import Account from './Account';

const cx = classNames.bind(styles);

function Sidebar() {
    const [loading, setLoading] = useState(false);
    const [featuredAccounts, setFeaturedAccounts] = useState([]);

    useEffect(() => {
        setLoading(true);
        axios
            .get('https://tiktok.fullstack.edu.vn/api/users/search', {
                params: {
                    q: 'n',
                    type: 'less',
                },
            })
            .then((res) => setFeaturedAccounts(res.data.data))
            .then(() => setLoading(false));
    }, []);

    return (
        <aside className={cx('wrapper')}>
            <Menu />
            <Account heading="Tài khoản nổi bật" data={featuredAccounts} footer="Nhiều hơn" loading={loading} />
            <Account heading="Tài khoản đề xuất" data={featuredAccounts} footer="Nhiều hơn" loading={loading} />
        </aside>
    );
}

export default Sidebar;
