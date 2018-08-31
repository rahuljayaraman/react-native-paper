/* @flow */

import * as React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import MaterialIcons from './VectorIcons';

export type IconSource =
  | string
  | number
  | { uri: string }
  | ((props: IconProps) => React.Node)
  // This will be removed in next major version
  | React.Node;

type IconProps = {
  color: string,
  size: number,
};

type Props = IconProps & {
  name: IconSource,
};

const isImageSource = (source: any) =>
  // source is an object with uri
  (typeof source === 'object' &&
    source !== null &&
    (Object.prototype.hasOwnProperty.call(source, 'uri') &&
      typeof source.uri === 'string')) ||
  // source is a module, e.g. - require('image')
  typeof source === 'number';

const getIconId = (source: any) => {
  if (
    typeof source === 'object' &&
    source !== null &&
    (Object.prototype.hasOwnProperty.call(source, 'uri') &&
      typeof source.uri === 'string')
  ) {
    return source.uri;
  }

  return source;
};

export const isValidIcon = (source: any) =>
  typeof source === 'string' || isImageSource(source);

export const isEqualIcon = (a: any, b: any) =>
  a === b || getIconId(a) === getIconId(b);

const Icon = ({ name, color, size, ...rest }: Props) => {
  if (typeof name === 'string') {
    return (
      <MaterialIcons
        {...rest}
        name={name}
        color={color}
        size={size}
        style={styles.icon}
        pointerEvents="none"
      />
    );
  } else if (isImageSource(name)) {
    return (
      <Image
        {...rest}
        source={name}
        style={[
          {
            width: size,
            height: size,
            tintColor: color,
          },
        ]}
      />
    );
  } else if (typeof name === 'function') {
    return name({ color, size });
  }

  return (
    <View
      {...rest}
      style={[
        {
          width: size,
          height: size,
        },
        styles.container,
      ]}
      pointerEvents="box-none"
    >
      {(name: any)}
    </View>
  );
};

export default Icon;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  icon: {
    backgroundColor: 'transparent',
  },
});
