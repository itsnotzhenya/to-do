import React from 'react';
import { Line } from '../Line';
import { Record, TaskRow, Title, Description, Block } from './styles';
import { ArrowUp, ArrowDown } from '../Icons/Arrows';

type CardItemProps = {
  title: string;
  isExpanded: boolean;
};

export const CardItem = ({ title, isExpanded }: CardItemProps) => {
  return (
    <Record>
      <Block>
        <Line />
        <TaskRow>
          <Title>{title}</Title>
        </TaskRow>
      </Block>
      {isExpanded ? <ArrowUp /> : <ArrowDown />}
    </Record>
  );
};
