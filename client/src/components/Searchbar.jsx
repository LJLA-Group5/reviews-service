import React, { useState } from 'react';
import {
  SearchBarContainer,
  MagnifyIcon,
  Svg,
  SearchBarItself,
  ReviewsSearchInput,
  SearchInputHouse,
  SearchField,
} from './SearchBarStyling';

const Searchbar = ({ data, filteredReviews, setFilteredReviews, setSearchTerm }) => {
  const [localSearch, setLocalSearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(localSearch);
    setFilteredReviews([]);
    setFilteredReviews(data.filter((singleReview) => (
      singleReview.review.text.toLowerCase().includes(localSearch.toLowerCase())
    )));
  };

  return (
    <div>
      <SearchBarContainer>
        <SearchBarItself>
          <MagnifyIcon>
            <Svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false">
              <g fill="none">
                <path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9" />
              </g>
            </Svg>
          </MagnifyIcon>
          <ReviewsSearchInput
            onSubmit={handleSubmit}
            onChange={(e) => setLocalSearch(e.target.value)}
          >
            <SearchInputHouse>
              <SearchField
                placeholder="Search reviews"
                value={localSearch}
              />
            </SearchInputHouse>
          </ReviewsSearchInput>
        </SearchBarItself>
      </SearchBarContainer>
    </div>
  );
};

export default Searchbar;
