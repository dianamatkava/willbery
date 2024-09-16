import ActivitiesFilter from "../../components/Activities/ActivitiesFilter";
import ActivitiesCard from "../../components/Activities/ActivitiesCard";

export default function Activities() {
  return (
    <div className="flex flex-col w-[var(--responsive-device-width)] h-[var(--responsive-device-width)] items-start gap-[30px] relative">
      <div className="inline-flex flex-col items-start gap-5 relative flex-[0_0_auto] mr-[-36.00px]">
        <ActivitiesFilter />
      </div>
      <div className="flex flex-wrap w-[994px] items-center gap-[20px_20px] px-0 py-5 relative flex-[0_0_auto]">
        <ActivitiesCard />
      </div>
    </div>
  );
}
