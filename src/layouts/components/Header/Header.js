import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import styles from './Header.module.scss';
import { faSearch, faSpinner, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faBookmark, faHeart } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img
                    src="https://phugiao.com.vn/public/images/icons/phugiao-logo.png"
                    alt="Logo"
                    className={cx('logo')}
                />

                <div className={cx('search')}>
                    <input type="text" placeholder="Tìm kiếm" />
                    <FontAwesomeIcon icon={faSpinner} className={cx('loading')} />
                    <FontAwesomeIcon icon={faTimesCircle} className={cx('clear')} />
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>

                <div className={cx('actions')}>
                    <Tippy content="Yêu thích">
                        <button className={cx('favorite')}>
                            <FontAwesomeIcon icon={faHeart} />
                        </button>
                    </Tippy>
                    <Tippy content="Bài viết đã lưu">
                        <button className={cx('book-mark')}>
                            <FontAwesomeIcon icon={faBookmark} />
                        </button>
                    </Tippy>
                </div>
            </div>
        </header>
    );
}

export default Header;
