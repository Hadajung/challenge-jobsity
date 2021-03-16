import React from 'react';
import {Text, TextProps} from 'react-native';
import {Fonts} from '../../constants/theme';

type preset = 'title' | 'desc' | 'semibold' | 'bold' | 'small' | 'cardTitle';

interface BaseTypographyProps extends TextProps {
  preset: preset;
  color?: string;
}

const getTextStyles = (preset: preset) => {
  const availablePresets = {
    title: {
      fontSize: 17,
      fontFamily: Fonts.MulishBold,
      lineHeight: 24,
    },
    desc: {
      fontSize: 14,
      fontFamily: Fonts.MulishRegular,
      lineHeight: 24,
    },
    semibold: {
      fontSize: 14,
      fontFamily: Fonts.MulishSemiBold,
      lineHeight: 16,
    },
    bold: {
      fontSize: 14,
      fontFamily: Fonts.MulishBold,
      lineHeight: 16,
    },
    small: {
      fontSize: 12,
      fontFamily: Fonts.MulishRegular,
      lineHeight: 14,
    },
    cardTitle: {
      fontSize: 14,
      fontFamily: Fonts.MulishSemiBold,
      flexWrap: 'wrap',
      maxWidth: 80,
      textAlign: 'center',
      lineHeight: 16,
    },
  };

  return availablePresets[preset];
};

export const PText: React.FC<BaseTypographyProps> = (props) => {
  return (
    <Text
      style={{
        color: props.color || '#fff',
        // fontSize: getTextStyles(props.preset).fontSize,
        ...getTextStyles(props.preset),
      }}>
      {props.children}
    </Text>
  );
};
