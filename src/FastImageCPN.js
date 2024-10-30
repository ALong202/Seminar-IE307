import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image as RNImage,
} from 'react-native';
import { Image } from 'expo-image';

const FastImageCPN = () => {
  const [showGrid, setShowGrid] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    let items = Array.from({ length: 60 }).map((_, i) => ({
      id: i,
      src: 'https://unsplash.it/400/400?image=' + (i + 1),
    }));
    setDataSource(items);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        {!showGrid ? (
          <ScrollView style={{ flex: 1 }}>
            <View style={styles.container}>
              <Text style={styles.titleStyle}>Example of Expo Image Component</Text>

              <View style={{ padding: 16, flexDirection: 'row', marginTop: 20 }}>
                <Image
                  style={styles.imageStyle}
                  source={{
                    uri: 'https://unsplash.it/400/400?image=1',
                    headers: { Authorization: '9876543210' },
                  }}
                  cachePolicy="immutable"
                />
                <Text style={{ flex: 1, textAlign: 'center' }}>Simple Image with source + header</Text>
              </View>

              <View style={{ padding: 16, flexDirection: 'column', marginTop: 20 }}>
                <Text style={{ textAlign: 'center' }}>Different Images with different resize modes</Text>
                <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'center' }}>
                  <Image
                    style={styles.imageStyle}
                    source={{
                      uri: 'https://unsplash.it/400/400?image=5',
                      headers: { Authorization: '9876543210' },
                    }}
                    contentFit="contain"
                  />
                  <Image
                    style={styles.imageStyle}
                    source={{
                      uri: 'https://unsplash.it/400/400?image=5',
                      headers: { Authorization: '9876543210' },
                    }}
                    contentFit="cover"
                  />
                </View>
              </View>

              <View style={{ padding: 16, flexDirection: 'column', marginTop: 20, alignItems: 'center' }}>
                <Text style={{ textAlign: 'center' }}>Image with Gif Support</Text>
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                  <Image
                    style={styles.imageStyle}
                    source={{
                      uri: 'https://media.giphy.com/media/e0Pc2kjVu9PilBcNcu/giphy.gif?cid=790b76114ndftuq145qfmhirxwkbwkh7hgm7kkl2y4u6o79s&ep=v1_gifs_search&rid=giphy.gif&ct=g',
                      headers: { Authorization: '9876543210' },
                    }}
                    cachePolicy="immutable"
                  />
                </View>
              </View>

              <View style={{ padding: 16, flexDirection: 'column', marginTop: 20, alignItems: 'center' }}>
                <Text style={{ textAlign: 'center' }}>Images with Rounded Corners</Text>
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                  <Image
                    style={[styles.imageStyle, { borderRadius: 50 }]}
                    source={{ uri: 'https://unsplash.it/400/400?image=9' }}
                  />
                  <Image
                    style={[styles.imageStyle, { borderRadius: 50, borderTopLeftRadius: 10, borderBottomRightRadius: 10 }]}
                    source={{ uri: 'https://unsplash.it/400/400?image=9' }}
                  />
                </View>
              </View>
            </View>
          </ScrollView>
        ) : (
          <FlatList
            data={dataSource}
            renderItem={({ item }) => (
              <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
                <Image
                  style={styles.imageThumbnailStyle}
                  source={{
                    uri: item.src,
                  }}
                  cachePolicy="memory-disk"
                />
              </View>
            )}
            numColumns={3}
            keyExtractor={(item) => item.id.toString()}
          />
        )}
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setShowGrid(!showGrid)}
          style={styles.touchableOpacityStyle}>
          <RNImage
            source={{
              uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/plus_icon.png',
            }}
            style={styles.floatingButtonStyle}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default FastImageCPN;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 30,
  },
  titleStyle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  imageStyle: {
    height: 70,
    width: 100,
    marginRight: 10,
  },
  touchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },
  imageThumbnailStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
  floatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
  },
});
