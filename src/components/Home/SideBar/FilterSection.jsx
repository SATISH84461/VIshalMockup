import { Button } from '@mui/material';
import PropTypes from 'prop-types';

const style = {
    button: {
        margin: '2% 1%',
    }
}

const filterOptions = ['All', 'Cafes', 'Restaurants', 'Parks'];

export default function FilterSection(props) {
  const { selectedCategory, setSelectedCategory } = props;
  const handleFilterClick = (category) => {
    setSelectedCategory(category);
    console.log(`Selected Category: ${category}`);
  };
  return (
    <div>
        <p className="text-lg font-semibold">Filter Options</p>
        {filterOptions.map(option => (
            <div key={option}>
              <Button key={option} variant="outlined" sx={{ ...style.button, background: selectedCategory === option ? 'blue' : 'none', color: selectedCategory === option ? 'white' : 'black' }} onClick={() => handleFilterClick(option)}>{option}</Button>
            </div>
        ))}
    </div>
  );
}

FilterSection.propTypes = {
  selectedCategory: PropTypes.string.isRequired,
  setSelectedCategory: PropTypes.func.isRequired,
};