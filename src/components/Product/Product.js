import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

import styles from './Product.module.scss';
import ProductItem from './ProductItem';

const cx = classNames.bind(styles);

function Product({ data }) {
    return <div className={cx('wrapper')}></div>;
}

Product.propTypes = {
    data: PropTypes.array.isRequired,
};

export default Product;
