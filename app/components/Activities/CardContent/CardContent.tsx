import CardCategory from "./CardCategory";
import CardSubCategory from "./CardSubCategory";
import CardGroup from "./CardGroup";

export default function CardContent() {
  return (
    <div className="w-full flex flex-col items-center h-fit">
      <CardGroup>
        <CardCategory categoryName="AWS SkillBuilder">
          <CardSubCategory subCategoryName="Course" />
        </CardCategory>
        <CardCategory categoryName="AWS Udemy Maeek">
          <CardSubCategory subCategoryName="Course" />
          <CardSubCategory subCategoryName="Practice" />
        </CardCategory>
      </CardGroup>
      <CardGroup>
        <CardCategory categoryName="Terraform">
          <CardSubCategory subCategoryName="Terraform Coursera" />
        </CardCategory>
      </CardGroup>
    </div>
  );
}
