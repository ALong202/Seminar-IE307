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

// Định nghĩa component chính GridImageCPN
const GridImageCPN = () => {
  // Khởi tạo state để lưu URL ảnh, trạng thái modal và danh sách ảnh
  const [imageUri, setImageUri] = useState('');
  const [modalVisibleStatus, setModalVisibleStatus] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  // Sử dụng useEffect để tạo danh sách ảnh khi component được khởi tạo
  useEffect(() => {
    // Tạo danh sách 120 ảnh với URL từ dịch vụ Unsplash
    const items = Array.from({ length: 120 }, (v, i) => ({
      id: i,
      src: `https://unsplash.it/400/400?image=${i + 1}`,
    }));
    setDataSource(items); // Cập nhật danh sách ảnh vào state
  }, []);

  // Hàm xử lý hiển thị modal với ảnh đã chọn
  const showModalFunction = (visible, imageURL) => {
    setImageUri(imageURL); // Cập nhật URL ảnh vào state
    setModalVisibleStatus(visible); // Thay đổi trạng thái của modal
  };

  return (
    // SafeAreaView đảm bảo nội dung không tràn vào khu vực tai thỏ (notch)
    <SafeAreaView style={styles.container}>
      {/* Kiểm tra nếu modal đang mở thì hiển thị modal, nếu không thì hiển thị danh sách ảnh */}
      {modalVisibleStatus ? (
        <Modal
          transparent={false}
          animationType={'fade'}
          visible={modalVisibleStatus}
          onRequestClose={() => {
            showModalFunction(!modalVisibleStatus, ''); // Đóng modal khi yêu cầu đóng
          }}>
          {/* Phần nội dung của modal */}
          <View style={styles.modelStyle}>
            <Image
              style={styles.fullImageStyle}
              source={{ uri: imageUri }} // Hiển thị ảnh toàn màn hình
              contentFit="contain" // Thay thế resizeMode để vừa khung
            />
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.closeButtonStyle}
              onPress={() => {
                showModalFunction(!modalVisibleStatus, ''); // Đóng modal khi nhấn nút
              }}>
              <Image
                source={{
                  uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/close.png',
                }}
                style={{ width: 35, height: 35 }} // Nút đóng modal
              />
            </TouchableOpacity>
          </View>
        </Modal>
      ) : (
        // Phần hiển thị danh sách ảnh theo dạng lưới (Grid)
        <View style={styles.container}>
          <Text style={styles.titleStyle}>
            Grid Image Gallery in React Native
          </Text>
          <FlatList
            data={dataSource} // Dữ liệu là danh sách ảnh
            renderItem={({ item }) => (
              <View style={styles.imageContainerStyle}>
                <TouchableOpacity
                  key={item.id}
                  style={{ flex: 1 }}
                  onPress={() => {
                    showModalFunction(true, item.src); // Mở modal với ảnh được nhấn
                  }}>
                  <Image
                    style={styles.imageStyle}
                    source={{ uri: item.src }} // Hiển thị ảnh trong lưới
                    contentFit="cover" // Đảm bảo ảnh lấp đầy khung ảnh
                  />
                </TouchableOpacity>
              </View>
            )}
            numColumns={3} // Thiết lập số cột trong lưới là 3
            keyExtractor={(item, index) => index.toString()} // Đặt key cho mỗi ảnh
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default GridImageCPN;

// Định nghĩa style cho từng thành phần
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff', // Màu nền trắng cho container chính
  },
  titleStyle: {
    padding: 16,
    fontSize: 20,
    color: 'white',
    backgroundColor: 'green', // Màu nền xanh lá cho tiêu đề
  },
  imageContainerStyle: {
    flex: 1,
    flexDirection: 'column',
    margin: 1, // Cách nhau 1 đơn vị giữa các ảnh
  },
  imageStyle: {
    height: 120,
    width: '100%', // Kích thước ảnh trong lưới
  },
  fullImageStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '98%', // Kích thước ảnh toàn màn hình trong modal
  },
  modelStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)', // Màu nền mờ cho modal
  },
  closeButtonStyle: {
    width: 25,
    height: 25,
    top: 50,
    right: 20,
    position: 'absolute', // Vị trí nút đóng modal
  },
});
