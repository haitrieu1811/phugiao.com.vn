import AccountItem from '~/components/AccountItem';

function SearchResult({ data }) {
    return data.map((result) => <AccountItem key={result.id} data={result} />);
}

export default SearchResult;
