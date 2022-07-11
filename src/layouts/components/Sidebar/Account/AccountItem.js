import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import styles from './Account.module.scss';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function AccountItem({ to, data }) {
    return (
        <Link to={to} className={cx('account-item')}>
            <Image src={data.avatar} alt={data.nickname} className={cx('avatar')} />
            <div className={cx('info')}>
                <h4 className={cx('username')}>
                    {data.nickname} <span>{<FontAwesomeIcon icon={faCheckCircle} className={cx('tick')} />}</span>
                </h4>
                <span className={cx('fullname')}>{data.full_name}</span>
            </div>
        </Link>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
    to: PropTypes.string.isRequired,
};

export default AccountItem;
