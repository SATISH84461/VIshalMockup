import { useState } from 'react';
import SideBar from '../components/Home/SideBar/SideBar.jsx';
import DisplaySection from '../components/Home/PopularPlaces/DisplaySection.jsx';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className="pt-8 pl-6">
          <div className="grid grid-cols-4 gap-4">
           <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
           <DisplaySection selectedCategory={selectedCategory} />
          </div>
    </div>
  )
}