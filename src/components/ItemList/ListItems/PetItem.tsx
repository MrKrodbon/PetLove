import React from "react";
import { PetItemProps } from "../../../types/types";
import {
  ListItemWrapper,
  ListItemImageWrapper,
  ListItemTextWrapper,
  ListItemTime,
  ListItemTitle,
  ListItemParagraphSpan,
  ListItemParagraph,
  PetsListItem,
} from "./ListItems.styles";
import { Button } from "../../FilterSearchField/FilterSearchField.styles";
import {} from "../../../layouts/Header/Header.styles";
import { LoginButton, RegisterButton } from "../../../common/styles";

const PetItem = ({
  title,
  species,
  name,
  sex,
  birthday,
  category,
  comment,
  price,
  popularity,
  imgURL,
}: PetItemProps) => {
  console.log(price);

  return (
    <PetsListItem>
      <ListItemWrapper isPetsPage>
        <ListItemImageWrapper>
          <img
            src={imgURL}
            alt={species}
            className="object-contain"
            width={287}
            height={178}
          />
        </ListItemImageWrapper>
        <ListItemTextWrapper isPetsPage>
          <div className="flex flex-row justify-between">
            <ListItemTitle>{title}</ListItemTitle>
            <ListItemTitle>{popularity}</ListItemTitle>
          </div>
          <div className="flex flex-row gap-3.5">
            {[
              { label: "Name", value: name },
              { label: "Birthday", value: birthday },
              { label: "Sex", value: sex },
              { label: "Species", value: species },
              { label: "Category", value: category },
            ].map(({ label, value }) => (
              <div className="flex flex-col ">
                <ListItemParagraphSpan customFontSize={12}>
                  {label}{" "}
                </ListItemParagraphSpan>
                <ListItemParagraph customWidth={"100%"} customFontSize={12}>
                  {value}
                </ListItemParagraph>
              </div>
            ))}
          </div>
          <div className="flex flex-col">
            <ListItemParagraph
              customWidth="100%"
              customWhiteSpace
              customHeight="36px"
            >
              {comment}
            </ListItemParagraph>
            <ListItemParagraph className="mt-4">
              {price === undefined ? (
                <span className="text-amber-500">sold</span>
              ) : (
                `$${price}`
              )}
            </ListItemParagraph>
            <div className="flex flex-row w-full justify-between pt-3">
              <LoginButton type="button">Learn more</LoginButton>

              <RegisterButton type="button">
                <img src="/icons/heart.svg" width={18} height={18} />
              </RegisterButton>
            </div>
          </div>
        </ListItemTextWrapper>
      </ListItemWrapper>
    </PetsListItem>
  );
};

export default PetItem;
