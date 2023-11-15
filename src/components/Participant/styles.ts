import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#1f1e25',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10
  },
  name: {
    flex: 1,
    color: '#fff',
    marginLeft: 16,
    fontSize: 16
  },
  button: {
    width:56,
    height: 56,
    fontSize: 24,
    backgroundColor: '#e23c44',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 16
  },
  buttonText: {
    color: '#fff',
    fontSize: 24
  },
})