import React from "react";
import styled from "styled-components";

const Li = styled.li`
  /* width: 50px; */
`;

const Img = styled.img`
  width: 100px;
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
