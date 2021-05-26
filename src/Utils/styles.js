import {StyleSheet}  from 'react-native';

const styles = StyleSheet.create({
  button: {
    borderWidth: 1.7,
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
  },
});
export default styles;