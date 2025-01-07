import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const baitap = () => {
  return (
    <View style={styles.wrapper}>
    <View style={styles.container}>
      <Text style={styles.text}>Hello, world</Text>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1, // Chiếm toàn bộ màn hình
    justifyContent: 'center', // Canh giữa theo chiều dọc
    alignItems: 'center', // Canh giữa theo chiều ngang
  },
  container: {
    width: 200, // Kích thước chiều rộng hình vuông
    height: 200, // Kích thước chiều cao hình vuông
    backgroundColor: 'black', // Màu nền
    justifyContent: 'center', // Canh giữa theo chiều dọc
    alignItems: 'center', // Canh giữa theo chiều ngang
  },
  text: {
    color: 'white', // Màu chữ
    fontSize: 16, // Kích thước chữ
  },
});

export default baitap;
