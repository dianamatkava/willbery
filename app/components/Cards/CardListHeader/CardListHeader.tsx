import CardListFilter from "./CardListFilter";
import CardListInfo from "./CardListInfo";

export default function CardListHeader() {
  return (
    <div className="w-full flex flex-row items-center justify-between text-center text-sm text-darkslategray font-roboto">
      <CardListInfo />
      <CardListFilter />
    </div>
  );
}
