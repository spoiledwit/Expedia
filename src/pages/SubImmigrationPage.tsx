import DiscoverImmigrationOptions from "../components/Immigration/DiscoverOptions";
import Hero from "../components/Immigration/Hero";
import ImmigrationPlans from "../components/Immigration/ImmigrationPlans";
import { useParams } from "react-router-dom";
import immigrationData from "../static/immigration-data.json";
import { CountryData } from "../types";
import { useEffect } from "react";


const ImmigrationPage = () => {

  const {country, plan} = useParams()
  console.log(country, plan);
  
  const countryName = country as string
  // @ts-ignore
  const countryData = immigrationData[countryName] as CountryData

  useEffect(()=>{
    window.scrollTo(0,0);
  }, [country, plan])  

  return (
    <div className="flex flex-col gap-20 mb-40">
      <Hero countryData={countryData} />
      <DiscoverImmigrationOptions countryData={countryData} />
      <ImmigrationPlans countryData={countryData} />
    </div>
  );
};

export default ImmigrationPage;
