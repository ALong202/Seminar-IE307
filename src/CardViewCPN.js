import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import {FAB, Provider as PaperProvider, Card, Title, Paragraph } from 'react-native-paper';
import GiftCardCPN from './GiftCardCPN';
import SwipeableCardCPN from './SwipeableCardCPN';



const CardViewCPN = ({navigation}) => {
  const [isFabOpen, setIsFabOpen] = useState(false); // Trạng thái mở/đóng của FAB Group 

  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <Card style={styles.card}>
          <Card.Content>
            <Title>Local Modules</Title>
            <Paragraph style={styles.paragraph}>
              React Native Card View for Android and IOS using "react-native-paper"
            </Paragraph>
          </Card.Content>
        </Card>
        
        <Card style={styles.card}>
          <Card.Content>
            <Title>Local Modules</Title>
            <Paragraph style={styles.paragraph}>
              React Native Card View for Android and IOS using "react-native-paper"
            </Paragraph>
          </Card.Content>
        </Card>
        <Card style={styles.card}>
          <Card.Content>
            <Title>Local Modules</Title>
            <Paragraph style={styles.paragraph}>
              React Native Card View for Android and IOS using "react-native-paper"
            </Paragraph>
          </Card.Content>
        </Card>
        <Card style={styles.card}>
          <Card.Content>
            <Title>Local Modules</Title>
            <Paragraph style={styles.paragraph}>
              React Native Card View for Android and IOS using "react-native-paper"
            </Paragraph>
          </Card.Content>
        </Card>
        <Card style={styles.card}>
          <Card.Content>
            <Title>Local Modules</Title>
            <Paragraph style={styles.paragraph}>
              React Native Card View for Android and IOS using "react-native-paper"
            </Paragraph>
          </Card.Content>
        </Card>
        {/* Nút FAB Group */}
        <FAB.Group
          open={isFabOpen}
          icon={isFabOpen ? 'close' : 'plus'}
          actions={[
            { icon: 'eye', label: 'GiftCardCPN', onPress: () => navigation.navigate('GiftCardCPN') }, //SwipeButton
            { icon: 'star', label: 'SwipeableCardCPN', onPress: () => navigation.navigate('SwipeableCardCPN') },
            // { icon: 'share', label: 'Share', onPress: () => navigation.navigate('ImageBackgroundCPN') }, //ImageBackgroundCPN
            // { icon: 'share', label: 'CardViewCPN', onPress: () => navigation.navigate('CardViewCPN') },
            // { icon: 'share', label: 'SwipeableCardCPN', onPress: () => navigation.navigate('SwipeableCardCPN') },//SwipeableCardCPN
            // { icon: 'share', label: 'GiftCardCPN', onPress: () => navigation.navigate('GiftCardCPN') },
            //GiftCardCPN
          ]}
          onStateChange={({ open }) => setIsFabOpen(open)}
          onPress={() => {
            if (isFabOpen) {
              // Xử lý logic khi FAB mở
            }
          }}
          style={styles.fabGroup}
        />
      </SafeAreaView>
    </PaperProvider>
  );
};

export default CardViewCPN;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
    backgroundColor: '#ecf0f1',
  },
  card: {
    width: '90%', // Set width of card for better visibility
    elevation: 8, // Add shadow effect
    margin:5,
  },
  paragraph: {
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center',
    color: '#34495e',
  },
});
