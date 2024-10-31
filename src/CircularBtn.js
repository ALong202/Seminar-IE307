import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import { FAB, Provider as PaperProvider } from 'react-native-paper';
import Animated, { useAnimatedStyle, withSpring } from 'react-native-reanimated';

const CircularBtn = ({ navigation }) => {
  const [isFabOpen, setIsFabOpen] = useState(false);

  // Animated styles for each child button
  const animatedStyleTop = useAnimatedStyle(() => ({
    transform: [{ translateY: isFabOpen ? withSpring(-80) : withSpring(0) }],
  }));
  const animatedStyleLeft = useAnimatedStyle(() => ({
    transform: [{ translateX: isFabOpen ? withSpring(-80) : withSpring(0) }],
  }));
  const animatedStyleBottom = useAnimatedStyle(() => ({
    transform: [{ translateY: isFabOpen ? withSpring(80) : withSpring(0) }],
  }));
  const animatedStyleRight = useAnimatedStyle(() => ({
    transform: [{ translateX: isFabOpen ? withSpring(80) : withSpring(0) }],
  }));

  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.titleStyle}>
            Circular Button with Animated Expansion (Expo Compatible)
          </Text>

          {/* Main FAB */}
          <FAB
            style={styles.mainFab}
            icon={isFabOpen ? "close" : "plus"}
            onPress={() => setIsFabOpen(!isFabOpen)}
          />

          {/* Animated FAB Children */}
          {isFabOpen && (
            <>
              <Animated.View style={[styles.fabPositionTop, animatedStyleTop]}>
                <FAB
                  small
                  style={styles.childFab}
                  icon="eye"
                  onPress={() => alert("View Button Clicked")}
                />
              </Animated.View>
              <Animated.View style={[styles.fabPositionLeft, animatedStyleLeft]}>
                <FAB
                  small
                  style={styles.childFab}
                  icon="pencil"
                  onPress={() => alert("Edit Button Clicked")}
                />
              </Animated.View>
              <Animated.View style={[styles.fabPositionBottom, animatedStyleBottom]}>
                <FAB
                  small
                  style={styles.childFab}
                  icon="delete"
                  onPress={() => alert("Delete Button Clicked")}
                />
              </Animated.View>
              <Animated.View style={[styles.fabPositionRight, animatedStyleRight]}>
                <FAB
                  small
                  style={styles.childFab}
                  icon="share"
                  onPress={() => alert("Share Button Clicked")}
                />
              </Animated.View>
            </>
          )}
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'center',
  },
  titleStyle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
  mainFab: {
    backgroundColor: '#41727E',
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  childFab: {
    backgroundColor: '#459186',
  },
  fabPositionTop: {
    position: 'absolute',
    bottom: 100,
    right: 20,
  },
  fabPositionLeft: {
    position: 'absolute',
    bottom: 60,
    right: 100,
  },
  fabPositionBottom: {
    position: 'absolute',
    bottom: 20,
    right: 100,
  },
  fabPositionRight: {
    position: 'absolute',
    bottom: 60,
    right: 180,
  },
});

export default CircularBtn;
