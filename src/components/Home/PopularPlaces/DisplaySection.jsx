import Places from "./Places";
import { getData } from "../../../apis/loaddata.jsx";

const filterData = (data, option) => {
  let placeData = []
  data.map((place) => {
    if (Array.isArray(place.type) && place.type.map(type => type.toLowerCase()).includes(option.value.toLowerCase())) {
      placeData.push({...place, category: option.value});
    }
  });
  return placeData; // Return all if "All" is selected
};


export default function DisplaySection(props) {
  const { selectedCategory } = props;

  const options = [
    { value: "Cafes", label: "Cafes", data: filterData(getData(), { value: "cafe"}) },
    { value: "Parks", label: "Parks", data: filterData(getData(), { value: "parks"}) },
    { value: "Restaurants", label: "Restaurants", data: filterData(getData(), { value: "restaurants"}) }
  ].filter(option =>
    selectedCategory === "All" || option.value.toLowerCase() === selectedCategory.toLowerCase()
  );


  return (
    <div className="col-span-3 ml-8 mr-8 p-4 rounded-lg"> 
        <h2 className="text-xl font-bold">Popular Places</h2>
        {options.map((option) => (
          <Places key={option.value} option={option} />
        ))}
    </div>
  );
}