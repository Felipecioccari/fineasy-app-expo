import {StyleSheet} from 'react-native';

const checkedInCardStyles = StyleSheet.create({
  container: {
    width: '92%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    color: '#41454A',
    fontSize: 24,
    alignSelf: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
    borderBottomColor: '#41454A',
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  count: {
    fontSize: 48,
    alignSelf: 'center',
    marginBottom: 5,
    color: '#41454A',
  },
  subtitle: {
    fontSize: 16,
    alignSelf: 'center',
    marginBottom: 5,
    color: '#41454A',
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default checkedInCardStyles;
