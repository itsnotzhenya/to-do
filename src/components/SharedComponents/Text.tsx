import React from 'react';
import styled from '@mui/styled-engine';
import { Typography } from '@mui/material';
import { TextType } from '../../types';

type TextProps = {
  content?: string;
  stroked?: boolean;
  type: TextType;
};

const PrimaryText = styled(Typography)(() => ({
  fontStyle: 'normal',
  fontWeight: 'bolder',
  color: '#f4f4f4',
}));

const SecondaryText = styled(Typography)(() => ({
  fontStyle: 'normal',
  fontWeight: '400',
  color: '#f4f4f4',
}));

const Description = styled(Typography)(() => ({
  fontStyle: 'normal',
  fontWeight: '400',
  color: 'rgba(255, 255, 255, 0.6)',
  margin: '0',
}));

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
