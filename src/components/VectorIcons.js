import VectorIcons from './VectorIcons.web';

let MaterialIcons;

try {
  MaterialIcons = require('react-native-vector-icons/MaterialIcons').default;
} catch (e) {
  MaterialIcons = VectorIcons;
}

export default MaterialIcons;
