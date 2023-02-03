import React from 'react';
import { Line } from '../Line';
import { ArrowUp, ArrowDown } from '../Icons/Arrows';
import { Text } from '../Text';
import { Record, TaskRow, Block } from './styles';
import { TextType } from '../../types';

type CardItemProps = {
  title: string;
  isExpanded: boolean;
  onClick: () => void;
};

export const CardItem = ({ title, isExpanded, onClick }: CardItemProps) => {
  return (
    <Record>
      <Block>
        <Line />
        <TaskRow>
          <Text content={title} type={TextType.SECONDARY_TEXT} />
        </TaskRow>
      </Block>
      {isExpanded ? (
        <ArrowUp handleClick={onClick} />
      ) : (
        <ArrowDown handleClick={onClick} />
      )}
    </Record>
  );
};
