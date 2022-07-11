import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import 'tippy.js/dist/tippy.css';

import { faBookmark, faHeart } from '@fortawesome/free-regular-svg-icons';
import config from '~/config';
import styles from './Header.module.scss';
import Search from '../Search';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home}>
                    <img
                        src="https://phugiao.com.vn/public/images/icons/phugiao-logo.png"
                        alt="Logo"
                        className={cx('logo')}
                    />
                </Link>

                <Search />

                <div className={cx('actions')}>
                    <Tippy content="Yêu thích">
                        <button className={cx('favorite')}>
                            <FontAwesomeIcon icon={faHeart} />
                            <span className={cx('badge')}>9</span>
                        </button>
                    </Tippy>
                    <Tippy content="Bài viết đã lưu">
                        <button className={cx('book-mark')}>
                            <FontAwesomeIcon icon={faBookmark} />
                            <span className={cx('badge')}>28</span>
                        </button>
                    </Tippy>
                </div>
            </div>
        </header>
    );
}

export default Header;
