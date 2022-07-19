import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card } from '@rneui/themed';
import { Button } from 'react-native-elements';

const Movies = ({ navigation }) => {
  const [movies, setMovies] = useState([]);
  

  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/movie/popular?api_key=aa6fc65fcedb7431af3ac2fbe6484cd0&language=en-US&page=1'
      )
      .then(function (res) {
        // alert(JSON.stringify(res.data.results))
        setMovies(res.data.results);
      })
      .catch(function (err) {});
  }, []);
  return (
    <ScrollView>
      <View>
        

        {movies.map((movie) => {
          return (
            <Card>
              <Card.Title> {movie.original_title} </Card.Title>
              <Card.Image
                style={{ padding: 0 }}
                source={{
                  uri: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
                }}
              />
             
              <Button
                title="Details"
                onPress={() =>{ 
                  // alert(movie.id)
                  navigation.navigate('MovieDetails',{id:movie.id})}
                  }
              />
            </Card>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default Movies;
