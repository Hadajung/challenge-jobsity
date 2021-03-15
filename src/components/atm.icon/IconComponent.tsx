import React from 'react';
import {Image} from 'react-native';
// import styled from 'styled-components/native';
import {ImageProps, ImageSourcePropType} from 'react-native';

interface IconProps extends ImageProps {
  source: ImageSourcePropType;
  height?: number;
  width?: number;
  tintColor?: string;
}

export const Icon: React.FC<IconProps> = (props) => {
  return (
    <Image
      source={props.source}
      resizeMode="contain"
      style={{
        tintColor: props.tintColor,
      }}
    />
  );
};
