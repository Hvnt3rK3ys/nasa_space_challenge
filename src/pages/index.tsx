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
    <div>
      <Header />
      <FilterDate />
      <Location />
      <ShowCurve />
      <LeMapa />
      <button onClick={goToExploreData}>Explore Data</button>
    </div>
  );
};

export default HomePage;
