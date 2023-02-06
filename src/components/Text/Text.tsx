import React from 'react';
import { TextType } from '../../types';
import { PrimaryText, SecondaryText, Description } from './styles';

type TextProps = {
  content?: string;
  stroked?: boolean;
  type: TextType;
};

export const Text = ({ content, type, stroked = false }: TextProps) => {
  switch (type) {
    case TextType.PRIMARY_TEXT:
      return <PrimaryText>{content}</PrimaryText>;
    case TextType.SECONDARY_TEXT:
      return stroked ? (
        <s>
          <SecondaryText>{content}</SecondaryText>
        </s>
      ) : (
        <SecondaryText>{content}</SecondaryText>
      );
    case TextType.DESCRIPTION:
      return <Description>{content}</Description>;
    default:
      return <Description>{content}</Description>;
  }
};
