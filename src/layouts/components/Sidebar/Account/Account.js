import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import AccountItem from './AccountItem';
import styles from './Account.module.scss';

const cx = classNames.bind(styles);

function Account({ heading, data, footer, loading }) {
    return (
        <div className={cx('wrapper')}>
            <h4 className={cx('heading')}>{heading}</h4>
            {loading && <FontAwesomeIcon icon={faSpinner} className={cx('loading')} />}
            {data.map((account) => (
                <AccountItem to={`/@${account.nickname}`} key={account.id} data={account} />
            ))}
            {footer && !loading && (
                <Link to="/" className={cx('footer')}>
                    {footer}
                </Link>
            )}
        </div>
    );
}

Account.propTypes = {
    data: PropTypes.array.isRequired,
    heading: PropTypes.string,
    footer: PropTypes.string,
    loading: PropTypes.bool,
};

export default Account;
