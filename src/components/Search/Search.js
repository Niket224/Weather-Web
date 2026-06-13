import React, { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { fetchCities } from '../../api/OpenWeatherService';

const Search = ({ onSearchChange }) => {
  const [searchValue, setSearchValue] = useState(null);

  const loadOptions = async (inputValue) => {
    if (!inputValue || inputValue.length < 2) {
      return { options: [] };
    }

    try {
      const citiesList = await fetchCities(inputValue);
      
      if (!citiesList || !citiesList.data) {
        return { options: [] };
      }

      return {
        options: citiesList.data.map((city) => {
          return {
            value: `${city.latitude} ${city.longitude}`,
            label: `${city.city}, ${city.country}`,
          };
        }),
      };
    } catch (error) {
      console.error('Search error:', error);
      return { options: [] };
    }
  };

  const onChangeHandler = (enteredData) => {
    setSearchValue(enteredData);
    onSearchChange(enteredData);
  };

  return (
    <AsyncPaginate
      placeholder="Search for cities"
      debounceTimeout={600}
      value={searchValue}
      onChange={onChangeHandler}
      loadOptions={loadOptions}
    />
  );
};

export default Search;