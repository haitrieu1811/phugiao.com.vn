import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Header from '~/layouts/components/Header';
import Sidebar from '~/layouts/components/Sidebar';
import Footer from '~/layouts/components/Footer';
// import Sidebar from '~/layouts/components/Sidebar';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar className={cx('sidebar')} />
                <div className={cx('content')}>{children}</div>
            </div>
            <Footer className={cx('footer')} />
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
