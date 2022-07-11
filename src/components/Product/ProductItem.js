import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

import styles from './Product.module.scss';
import Image from '../Image';

const cx = classNames.bind(styles);

function ProductItem({ datas }) {
    return (
        <div className={cx('product-item')}>
            <Image />
            <div className={cx('info')}>
                <Link to=""></Link>
            </div>
        </div>
    );
}

ProductItem.propTypes = {
    datas: PropTypes.object.isRequired,
};

export default ProductItem;
