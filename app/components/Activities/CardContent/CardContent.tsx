import CardCategory from "./CardCategory";
import CardSubCategory from "./CardSubCategory";
import CardGroup from "./CardGroup";

export default function CardContent({ params }: { params: object }) {
  const groups = params.skills;
  return (
    <div className="w-full flex flex-col items-center h-fit">
      {groups &&
        groups.map((group) => (
          <CardGroup
            key={group.name}
            name={group.name}
            progress={group.progress}
          >
            {group.learningResources &&
              group.learningResources.map((category) => (
                <CardCategory
                  key={category.name}
                  name={category.name}
                  progress={category.progress}
                >
                  {category.units &&
                    category.units.map((subCategory) => (
                      <CardSubCategory
                        key={subCategory.name}
                        name={subCategory.name}
                        progress={subCategory.progress}
                      />
                    ))}
                </CardCategory>
              ))}
          </CardGroup>
        ))}
    </div>
  );
}
