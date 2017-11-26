import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

export default class AlbumList extends Component {

  state = {
    albums: []
  };

  componentWillMount() {
    axios.get(`http://rallycoding.herokuapp.com/api/music_albums`)
      .then(response => this.setState({ albums: response.data }))
  }

  renderAlbums() {
    return this.state.albums.map(album => (
      <AlbumDetail key={album.title} single={album} />
    ));
  }

  render() {
    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }

}

const styles = StyleSheet.create({
  singleItem: {}
});
