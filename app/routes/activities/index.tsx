import ActivitiesFilter from "~/components/Activities/ActivitiesFilter";
import ActivitiesCard from "../../components/Activities/ActivitiesCard";

export default function Activities() {
  return (
    <div className="w-full flex flex-col items-center gap-5 relative ml-2">
      <ActivitiesFilter />
      <div className="flex flex-col items-center w-full px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 w-full max-w-[300px] sm:max-w-full">
          <ActivitiesCard imgPath={"aws.png"} />
          <ActivitiesCard imgPath={"FE.png"} />
          <ActivitiesCard imgPath={"ML.png"} />
          <ActivitiesCard imgPath={"ML.png"} />
          <ActivitiesCard imgPath={"aws.png"} />
          <ActivitiesCard imgPath={"FE.png"} />
        </div>
      </div>
    </div>
  );
}
