import React from "react";
import { PropTypes } from "prop-types";
import styled from "styled-components";

const CardStyled = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: space-between;
  align-items: none;
  flex-direction: column;
  background-color: #fff;
  width: 380px;
  margin-bottom: 16px;
  padding: 24px;
`;

const Headline = styled.div`
  font-size: 25px;
  font-family: Didot, serif;
`;

const Author = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  margin-top: 15px;
  span {
    padding-left: 10px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
  }
`;

const imgContainer = styled.div`
  padding-right: 10px;
  border-right: 1px solid lightgrey;
  height: 40px;
`;

const Image = styled.img`
  width: 40px;
`;
const Card = props => {
  return (
    <CardStyled>
      <Headline>{props.card.headline}</Headline>
      <Author>
        <imgContainer>
          <Image alt="..." src={props.card.img} />
        </imgContainer>
        <span>By {props.card.author}</span>
      </Author>
    </CardStyled>
  );
};

// Make sure to include PropTypes.
Card.propTypes = {
  card: PropTypes.shape({
    headline: PropTypes.string,
    img: PropTypes.img,
    author: PropTypes.author
  })
};
export default Card;
