import React from 'react';
import { StyleSheet, Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

export default AlbumDetail = ({ single }) => {

  const { title, artist, thumbnail_image, image, url } = single;
  const {
    headerContentStyle,
    userpicStyle,
    coverStyle,
    headerTextStyle
  } = styles;

  return (
    <Card>
      <CardSection>
        <View>
          <Image style={userpicStyle} source={{ uri: thumbnail_image }}/>
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>Title: {title}</Text>
          <Text>Name: {artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image style={coverStyle} source={{ uri: image }}/>
      </CardSection>

      <CardSection>
        <Button onPressCallback={() => Linking.openURL(url)}>
          Buy Now!
        </Button>
      </CardSection>
    </Card>
  );

}

const styles = StyleSheet.create({
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  coverStyle: {
    width: '100%',
    height: 300
  },
  userpicStyle: {
    width: 50,
    height: 50,
    marginRight: 10
  }
});
