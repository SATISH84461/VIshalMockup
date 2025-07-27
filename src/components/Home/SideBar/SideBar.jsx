import { Card, CardActions, CardContent, Button } from '@mui/material';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import Divider from '@mui/material/Divider';

import SearchBar from './SearchBar.jsx';
import FilterSection from './FilterSection.jsx';

export default function SideBar(props) {
  const { selectedCategory, setSelectedCategory } = props;
  return (
    <Card sx={{margin: "0", padding: "5%", position: "sticky", top: "5vh", bottom: "5vh", height: "90vh"}}>
      <CardContent sx={{margin: "0", padding: "0"}}>
        <p className="text-lg font-semibold">
          Explore Places
        </p>
        <SearchBar />
        <Button variant="contained" color="primary" sx={{ width: '100%' }}> <MyLocationIcon /> &nbsp;&nbsp; Find Hidden Places</Button>
        <Divider sx={{ my: 3, opacity: 1, backgroundColor: 'black' }} />
        <FilterSection selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      </CardContent>
      <Divider sx={{ my: 1, opacity: 1, backgroundColor: 'black' }} />
      <CardActions sx={{ justifyContent: 'center' }}>
        <Button variant="contained" color="primary" sx={{ width: '100%' }}>Search</Button>
      </CardActions>
      <Divider sx={{ my: 1, opacity: 1, backgroundColor: 'black' }} />
      <CardActions sx={{ justifyContent: 'center' }}>
        <Button variant="contained" color="primary" sx={{ width: '100%' }}>Find Hidden Places</Button>
      </CardActions>
    </Card>
  );
}

import PropTypes from 'prop-types';

SideBar.propTypes = {
  selectedCategory: PropTypes.any,
  setSelectedCategory: PropTypes.func,
};