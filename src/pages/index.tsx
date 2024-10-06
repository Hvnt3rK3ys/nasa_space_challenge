import React from "react";
import { useRouter } from 'next/router';
import Header from '../components/fHeader/Header';
import LeMapa from '../components/fEarthMap/LeMapa';
import FilterDate from '../components/fFilters/FilterDate';
import Location from '../components/fFilters/Location';
import ShowCurve from '../components/fFilters/ShowCurve';

const HomePage = () => {
  const router = useRouter();

  const goToExploreData = () => {
    router.push('/ShowData'); // Navega a pExploreData
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <Header className="w-full md:w-3/4 lg:w-1/2 mr-10" />
      <div className="flex flex-col items-center space-y-2.5 w-full md:w-3/4 lg:w-1/2">
        <FilterDate className="w-full" />
        <Location className="w-full" />
        <ShowCurve className="w-full" />
      </div>
      <button 
        onClick={goToExploreData} 
        className="mt-5 px-4 py-2 bg-primary text-white rounded-md hover:bg-secondary transition duration-300"
      >
        Explore Data
      </button>
      <LeMapa className="w-11/12 md:w-full lg:w-4/5 mt-5" />

    </div>
  );
};

export default HomePage;
