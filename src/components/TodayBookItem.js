import React from "react";
import styled from "styled-components";

const Li = styled.li`
  text-align: center;
`;

const Img = styled.img`
  width: 80%;
  transition-property: opacity;
  transition-duration: 0.5s;
  opacity: 40%;
  &:hover {
    transition-property: opacity;
    transition-duration: 0.5s;
    opacity: 100%;
    cursor: pointer;
  }
`;

const TodayBookItem = ({ item, onView }) => {
  const { img, title, id } = item;
  console.log(img);
  return (
    <Li onClick={() => onView(id)}>
      <Img src={"assets/" + img} alt={title} />
    </Li>
  );
};

export default TodayBookItem;
