import * as React from 'react';
import { Text } from 'react-native';

export default (MaterialIcons = ({ name, color, size, ...rest }) => {
  // eslint-disable-next-line no-console
  console.warn(
    `Tried to use the icon '${name}' in a component from 'react-native-paper', but 'react-native-vector-icons' is not installed. To remove this warning, install 'react-native-vector-icons' or use another method to specify icon: https://callstack.github.io/react-native-paper/icons.html.`
  );

  return (
    <Text
      {...rest}
      style={[{ color, fontSize: size, backgroundColor: 'transparent' }]}
      pointerEvents="none"
    >
      □
    </Text>
  );
});
