import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import 'tippy.js/dist/tippy.css';
import axios from 'axios';

import { faSearch, faSpinner, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Search.module.scss';
import { useDebounce } from '~/hooks';
import Button from '~/components/Button';
import SearchResult from './SearchResult';

const cx = classNames.bind(styles);

function Search() {
    const searchRef = useRef();

    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);

    const debounceValue = useDebounce(searchValue, 500);

    useEffect(() => {
        if (!debounceValue.trim()) {
            setSearchResult([]);
            return;
        }

        setLoading(true);
        axios
            .get('https://tiktok.fullstack.edu.vn/api/users/search', {
                params: {
                    q: debounceValue,
                    type: 'less',
                },
            })
            .then((res) => setSearchResult(res.data.data))
            .then(() => setLoading(false));
    }, [debounceValue]);

    const handleChange = (e) => {
        const searchValue = e.target.value;

        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    const handleClearInput = () => {
        setSearchValue('');
        setSearchResult([]);
        searchRef.current.focus();
    };

    return (
        <div>
            <HeadlessTippy
                visible={searchResult.length > 0 && showResult}
                interactive={true}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-heading')}>Tài khoản</h4>
                            <SearchResult data={searchResult} />
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={() => setShowResult(false)}
            >
                <div className={cx('search')}>
                    <input
                        ref={searchRef}
                        type="text"
                        placeholder="Tìm kiếm"
                        value={searchValue}
                        onChange={handleChange}
                        onFocus={() => setShowResult(true)}
                    />
                    <button onClick={handleClearInput}>
                        {searchValue && !loading && <FontAwesomeIcon icon={faTimesCircle} className={cx('clear')} />}
                    </button>
                    {loading && <FontAwesomeIcon icon={faSpinner} className={cx('loading')} />}
                    <Button className={cx('search-btn')} to="/search">
                        <FontAwesomeIcon icon={faSearch} />
                    </Button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
