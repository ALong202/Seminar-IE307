import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, View, Dimensions, Image, FlatList } from 'react-native';

const { width: viewportWidth } = Dimensions.get('window');

const SliderImageCPN = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Tạo một mảng ảnh để hiển thị trong gallery
    const images = Array.from({ length: 60 }, (v, i) => ({
      uri: 'http://placehold.it/200x200?text=' + (i + 1),
    }));
    setItems(images);
  }, []);

  // Hàm render item cho FlatList
  const renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Image source={item} style={styles.image} resizeMode="contain" />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal // Để hiển thị các hình ảnh theo chiều ngang
        pagingEnabled // Kích hoạt hiệu ứng paging
        showsHorizontalScrollIndicator={false} // Ẩn thanh cuộn ngang
      />
    </SafeAreaView>
  );
};

export default SliderImageCPN;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 30,
  },
  slide: {
    width: viewportWidth,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
