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
      return (
        <PrimaryText variant="h4" sx={{ flexGrow: 1 }}>
          {content}
        </PrimaryText>
      );
    case TextType.SECONDARY_TEXT:
      return stroked ? (
        <s>
          <SecondaryText variant="h5">{content}</SecondaryText>
        </s>
      ) : (
        <SecondaryText variant="h5">{content}</SecondaryText>
      );
    case TextType.DESCRIPTION:
      return <Description variant="subtitle2">{content}</Description>;
    default:
      return <Description variant="subtitle2">{content}</Description>;
  }
};
