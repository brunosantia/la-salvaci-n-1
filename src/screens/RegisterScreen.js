import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const RegisterScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Registro</Text>
      <Image source={require('../assets/registration_image.png')} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  }
});

export default RegisterScreen;
