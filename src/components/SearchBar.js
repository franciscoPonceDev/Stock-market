import PropTypes from 'prop-types';

const SearchBar = (
  {
    searchHandler,
  },
) => {
  const handleChange = (e) => {
    searchHandler(e.target.value);
  };

  return (
    <input type="text" onChange={handleChange} placeholder="Search by company name" className="input" />
  );
};

SearchBar.propTypes = {
  searchHandler: PropTypes.func.isRequired,
};

export default SearchBar;
