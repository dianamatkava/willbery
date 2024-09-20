import CardCategory from "./CardCategory";
import CardSubCategory from "./CardSubCategory";
import CardGroup from "./CardGroup";

export default function CardContent({ params }: { params: object }) {
  const groups = params.groups;
  return (
    <div className="w-full flex flex-col items-center h-fit pr-[1.5px]">
      {groups &&
        groups.map((group) => (
          <CardGroup
            key={group.name}
            name={group.name}
            progress={group.progress}
          >
            {group.nodes &&
              group.nodes.map((node) => (
                <CardCategory
                  key={node.name}
                  name={node.name}
                  progress={node.progress}
                >
                  {node.leafs &&
                    node.leafs.map((leaf) => (
                      <CardSubCategory
                        key={leaf.name}
                        name={leaf.name}
                        progress={leaf.progress}
                      />
                    ))}
                </CardCategory>
              ))}
          </CardGroup>
        ))}
    </div>
  );
}
