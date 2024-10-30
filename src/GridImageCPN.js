import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Modal,
} from 'react-native';
import { Image } from 'expo-image'; // Sử dụng expo-image thay vì react-native Image

const GridImageCPN = () => {
  const [imageUri, setImageUri] = useState('');
  const [modalVisibleStatus, setModalVisibleStatus] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    const items = Array.from({ length: 120 }, (v, i) => ({
      id: i,
      src: `https://unsplash.it/400/400?image=${i + 1}`,
    }));
    setDataSource(items);
  }, []);

  const showModalFunction = (visible, imageURL) => {
    setImageUri(imageURL);
    setModalVisibleStatus(visible);
  };

  return (
    <SafeAreaView style={styles.container}>
      {modalVisibleStatus ? (
        <Modal
          transparent={false}
          animationType={'fade'}
          visible={modalVisibleStatus}
          onRequestClose={() => {
            showModalFunction(!modalVisibleStatus, '');
          }}>
          <View style={styles.modelStyle}>
            <Image
              style={styles.fullImageStyle}
              source={{ uri: imageUri }}
              contentFit="contain" // Thay thế resizeMode
            />
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.closeButtonStyle}
              onPress={() => {
                showModalFunction(!modalVisibleStatus, '');
              }}>
              <Image
                source={{
                  uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/close.png',
                }}
                style={{ width: 35, height: 35 }}
              />
            </TouchableOpacity>
          </View>
        </Modal>
      ) : (
        <View style={styles.container}>
          <Text style={styles.titleStyle}>
            Grid Image Gallery in React Native
          </Text>
          <FlatList
            data={dataSource}
            renderItem={({ item }) => (
              <View style={styles.imageContainerStyle}>
                <TouchableOpacity
                  key={item.id}
                  style={{ flex: 1 }}
                  onPress={() => {
                    showModalFunction(true, item.src);
                  }}>
                  <Image
                    style={styles.imageStyle}
                    source={{ uri: item.src }}
                    contentFit="cover" // Thay thế resizeMode
                  />
                </TouchableOpacity>
              </View>
            )}
            numColumns={3} // Setting the number of columns
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default GridImageCPN;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  titleStyle: {
    padding: 16,
    fontSize: 20,
    color: 'white',
    backgroundColor: 'green',
  },
  imageContainerStyle: {
    flex: 1,
    flexDirection: 'column',
    margin: 1,
  },
  imageStyle: {
    height: 120,
    width: '100%',
  },
  fullImageStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '98%',
    resizeMode: 'contain',
  },
  modelStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  closeButtonStyle: {
    width: 25,
    height: 25,
    top: 50,
    right: 20,
    position: 'absolute',
  },
});
