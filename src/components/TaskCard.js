import React from 'react';
import styled from 'styled-components';
import { FaInstagram } from 'react-icons/fa';

const TaskCardWrapper = styled.div`
  background-color: #fdfdfd;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  margin: 15px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: transform 0.3s ease, background-color 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background-color: #f0f8ff;
  }
`;

const TaskText = styled.div`
  font-size: 16px;
  color: #333;
  font-weight: 500;
`;

const PointsBadge = styled.div`
  background-color: #ff6347;
  color: white;
  font-size: 14px;
  padding: 10px;
  border-radius: 20px;
  font-weight: bold;
`;

const IconWrapper = styled.div`
  background-color: #ff69b4;
  color: white;
  padding: 10px;
  border-radius: 50%;
  font-size: 24px;
`;

const TaskCard = ({ taskName, points }) => {
  return (
    <TaskCardWrapper>
      <IconWrapper>
        <FaInstagram />
      </IconWrapper>
      <TaskText>{taskName}</TaskText>
      <PointsBadge>{points} Points</PointsBadge>
    </TaskCardWrapper>
  );
};

export default TaskCard;
