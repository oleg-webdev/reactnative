import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

export default AlbumDetail = ({ single }) => {

  const { title, artist, thumbnail_image } = single;
  const { headerContentStyle, userpicStyle } = styles;

  return (
    <Card>
      <CardSection>
        <View>
          <Image
            style={userpicStyle}
            source={{ uri: thumbnail_image }}/>
        </View>
        <View style={headerContentStyle}>
          <Text>Title: {title}</Text>
          <Text>Name: {artist}</Text>
        </View>
      </CardSection>
    </Card>
  );

}

const styles = StyleSheet.create({
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  userpicStyle: {
    width: 50,
    height: 50,
    marginRight: 10
  }
});
