import DiscoverImmigrationOptions from "../components/Immigration/DiscoverOptions";
import Hero from "../components/Immigration/Hero";
import ImmigrationPlans from "../components/Immigration/ImmigrationPlans";
import { useParams } from "react-router-dom";
import immigrationData from "../static/immigration-data.json";
import { CountryData, PlanData } from "../types";
import { useEffect } from "react";


const ImmigrationPage = () => {

  const {country, plan} = useParams()
  const countryName = country as string
  // @ts-ignore
  const countryData = immigrationData[countryName] as CountryData
  let planData : PlanData|undefined= undefined
  if (plan) {
    planData = (countryData.plans.values.find(p => p.id === plan)) as PlanData
  }

  useEffect(()=>{
    window.scrollTo(0,0);
  }, [country, plan])

  const slogan: string = planData?.description.title || countryData.description.title
  const title: string = planData?.description.slogan || countryData.description.slogan
  const html: string = planData?.description.html || countryData.description.html

  return (
    <div className="flex flex-col gap-20 mb-40">
      <Hero countryData={countryData} />
      <DiscoverImmigrationOptions slogan={slogan} title={title} html={html} />
      <ImmigrationPlans countryData={countryData} />
    </div>
  );
};

export default ImmigrationPage;
