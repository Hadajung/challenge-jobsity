import React from 'react';
import {Image} from 'react-native';
import {ImageProps, ImageSourcePropType} from 'react-native';
import {SystemImages} from '../../constants/theme';

interface IconProps extends ImageProps {
  source: ImageSourcePropType;
}

export const Poster: React.FC<IconProps> = (props) => {
  return (
    <Image
      source={props.source}
      resizeMode="contain"
      style={{
        width: props.width || '100%',
        height: props.height || 160,
        borderRadius: 16,
      }}
      defaultSource={SystemImages.preview}
    />
  );
};

Poster.defaultProps = {
  source: SystemImages.preview,
};
