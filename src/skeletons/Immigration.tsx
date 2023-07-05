import DiscoverImmigrationOptions from "../components/Immigration/DiscoverOptions";
import Hero from "../components/Immigration/Hero";
import ImmigrationPlans from "../components/Immigration/Plans";

const SkeletonImmigration = () => {
  return (
    <div className="flex flex-col gap-20">
      <Hero />
      <DiscoverImmigrationOptions />
      <ImmigrationPlans />
    </div>
  );
};

export default SkeletonImmigration;
