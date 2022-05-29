import React from "react";
import styled from "styled-components";

const Li = styled.li`
  text-align: center;
`;

const Img = styled.img`
  width: 90%;
  transition-property: color;
  transition-duration: 2s;
  color: white;
  &:hover {
    border: solid 10px;
    color: #cecece;
    transition-property: color;
    transition-duration: 1s;
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
