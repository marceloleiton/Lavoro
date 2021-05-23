import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flex: 1,
  },
  image: {
    width: '100%',
    aspectRatio: 3 / 2,
    resizeMode: 'cover',
    borderRadius: 15,
  },

  subtitle: {
    fontSize: 19,
    fontWeight: 'bold',
    marginVertical: 10,
    color: 'black',
  },
  description: {
    fontSize: 18,
    lineHeight: 26,
  },

  prices: {
    fontSize: 18,
    marginVertical: 10,
  },

  price: {
    fontWeight: 'bold',
  },

  totalPrice: {
    color: '#5b5b5b',
    textDecorationLine: 'underline',
    fontSize: 16,
  },
});
export default styles;