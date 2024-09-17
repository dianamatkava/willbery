import CardCategory from "./CardCategory";
import CardSubCategory from "./CardSubCategory";
import CardGroup from "./CardGroup";

export default function CardContent() {
  return (
    <>
      <CardGroup>
        <CardCategory>
          <CardSubCategory />
        </CardCategory>
      </CardGroup>
    </>
  );
}
