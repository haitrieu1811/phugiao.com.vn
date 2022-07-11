import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faTags, faNewspaper } from '@fortawesome/free-solid-svg-icons';

import styles from './Menu.module.scss';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

function Menu() {
    return (
        <nav className={cx('wrapper')}>
            <MenuItem icon={<FontAwesomeIcon icon={faHome} />} title="Trang chủ" to="/" />
            <MenuItem icon={<FontAwesomeIcon icon={faTags} />} title="Sản phẩm" to="/product" />
            <MenuItem icon={<FontAwesomeIcon icon={faNewspaper} />} title="Tin tức" to="/post" />
        </nav>
    );
}

Menu.propTypes = {
    data: PropTypes.array,
};

export default Menu;
