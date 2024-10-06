import { LuPlus, LuSmilePlus, LuTag } from "react-icons/lu";
import { useEffect, useState } from "react";
import useStore from "../../../stores/useStore";
import CreatableSelectInput from "../../ui-elements/form/CreatableSelectInput";
import TagComponent from "../../ui-elements/TagComponent";
import LinkInputComponent from "~/components/ui-elements/form/LinkInput";
import TextInputComponent from "~/components/ui-elements/form/TextInput";
import TextAreaInputComponent from "~/components/ui-elements/form/TextAreaInput";
import { CardInterface } from "~/interfaces/CardInterfaces";
import { useFetcher } from "@remix-run/react";
import InlineFormControl from "~/components/ui-elements/form/InlineFormControl";

export function CardDetailsInfo({
  cardDetails,
}: {
  cardDetails: CardInterface;
}) {
  const fetcher = useFetcher();
  const scoupes = useStore((state) => state.scoupes);
  const [enterImagePath, setEnterImagePath] = useState(false);
  const updateCardName = useStore((state) => state.updateCardName);
  const updateCardImage = useStore((state) => state.updateCardImage);
  const updateCardDescription = useStore(
    (state) => state.updateCardDescription
  );
  const updateCardScoupe = useStore((state) => state.updateCardScoupe);

  const [fields, setFields] = useState({
    name: cardDetails.name || "",
    description: cardDetails.description || "",
    image: cardDetails.image || "",
  });

  useEffect(() => {
    setFields({
      name: cardDetails.name || "",
      description: cardDetails.description || "",
      image: cardDetails.image || "",
    });
  }, [cardDetails]);

  const handleChange = (e, field) => {
    const value = e.target.value;
    setFields((prevFields) => ({
      ...prevFields,
      [field]: value,
    }));
  };

  const handleKeyDown = async (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      await e.target.blur();
    }
  };

  const handleBlur = async (e, field) => {
    if (e.target.value && e.target.value !== cardDetails[field]) {
      switch (field) {
        case "name":
          updateCardName(cardDetails._id.toString(), e.target.value);
          break;
        case "description":
          updateCardDescription(cardDetails._id.toString(), e.target.value);
          break;
      }
    }

    if (field == "image") {
      if (
        (e.target.value || e.target.value == null) &&
        e.target.value !== cardDetails[field]
      ) {
        updateCardImage(cardDetails._id.toString(), e.target.value);
      }
    }

    // TODO: move this to function
    const formData = new FormData();
    formData.append(field, e.target.value);

    await fetcher.submit(formData, {
      method: "put",
      action: `/activities/${cardDetails._id.toString()}`,
    });
  };

  const onSelectScoupe = async (option: string) => {
    const scopeToUpdate = scoupes.filter((scoupe) => scoupe.name == option)[0];
    updateCardScoupe(cardDetails._id.toString(), scopeToUpdate);

    // TODO: move this to function
    const formData = new FormData();
    formData.append("scoupe", option);

    await fetcher.submit(formData, {
      method: "put",
      action: `/activities/${cardDetails._id.toString()}?update=scoupe`,
    });
  };

  return (
    <div className="relative flex flex-col items-start justify-start gap-6 w-full">
      <div className="relative h-full flex flex-row items-center justify-start box-border gap-5">
        {cardDetails.image ? (
          <div
            role="button"
            tabIndex={0}
            onClick={() => {
              setEnterImagePath((enterImagePath) => !enterImagePath);
            }}
            onKeyDown={() =>
              setEnterImagePath((enterImagePath) => !enterImagePath)
            }
            className="w-[100px] h-full rounded-[100%] flex flex-row items-center justify-center shadow-[1px_1px_1px_rgba(0,_0,_0,_0.05)]"
          >
            <img
              src={
                cardDetails.image.startsWith("https://")
                  ? cardDetails.image
                  : `/${cardDetails.image}`
              }
              alt="icon"
              className="w-full h-full object-cover rounded-[100%]"
            />
          </div>
        ) : (
          <div
            className="
          w-[100px] h-full rounded-[100%] bg-gainsboro-100 hover:bg-gray-100 hover:text-gray-100 
          flex flex-row items-center justify-center"
          >
            <LuPlus
              size={34}
              className="cursor-pointer text-grey-100 icon"
              color="#808080"
              onClick={() => {
                setEnterImagePath((enterImagePath) => !enterImagePath);
              }}
              onKeyDown={() =>
                setEnterImagePath((enterImagePath) => !enterImagePath)
              }
            />
          </div>
        )}
        {enterImagePath && (
          <InlineFormControl
            hideOnMouseLeave={false}
            isSelected={enterImagePath}
            setIsSelected={setEnterImagePath}
          >
            <LinkInputComponent
              onChange={(e) => handleChange(e, "image")}
              onBlur={(e) => handleBlur(e, "image")}
              onKeyDown={handleKeyDown}
              value={fields.image || ""}
              name="image"
              className="absolute top-12 left-2 z-10 h-10"
            />
          </InlineFormControl>
        )}

        <div className="flex flex-col items-start justify-center gap-1 w-full">
          <div className="flex items-center gap-1 h-[42px]">
            <h2 className="text-xlg w-full min-w-[200px] font-semibold text-gainsboro-500 leading-[1]">
              <TextInputComponent
                value={fields.name || ""}
                name="name"
                onChange={(e) => handleChange(e, "name")}
                onKeyDown={handleKeyDown}
                onBlur={(e) => handleBlur(e, "name")}
              />
            </h2>
          </div>

          <div className="relative w-full flex flex-row items-center justify-start gap-1 text-sm">
            {/* Card Icon */}
            {/* {cardDetails.image ? (
              <p className="text-gainsboro-500">{cardDetails.image}</p>
            ) : ( */}
            <div className="w-[26px] rounded-md bg-gainsboro-100 h-6 flex flex-row items-center justify-center">
              <LuSmilePlus size={18} className="cursor-pointer" />
            </div>
            {/* )} */}

            {/* Card Tag */}
            <CreatableSelectInput
              value={cardDetails.scoupe?.name}
              options={scoupes.map((scoupe: { name: string }) => scoupe.name)}
              onSelect={onSelectScoupe}
            >
              {cardDetails.scoupe ? (
                <TagComponent
                  value={cardDetails.scoupe?.name}
                  className={
                    "text-white text-xs rounded-lg h-6 flex flex-row items-center justify-center px-2 box-border gap-1 cursor-pointer bg-black"
                  }
                />
              ) : (
                <div className="w-[26px] rounded-md bg-gainsboro-100 h-6 flex flex-row items-center justify-center">
                  <LuTag size={18} />
                </div>
              )}
            </CreatableSelectInput>
          </div>
        </div>
      </div>
      <div className="w-full h-fit text-sm cursor-pointer text-grey-800">
        <TextAreaInputComponent
          value={fields.description || ""}
          name={"description"}
          placeholder={"Click to add a description"}
          onChange={(e) => handleChange(e, "description")}
          onKeyDown={(e) => handleChange(e, "description")}
          onBlur={(e) => handleBlur(e, "description")}
          className="editable-text-area"
        />
      </div>
    </div>
  );
}
