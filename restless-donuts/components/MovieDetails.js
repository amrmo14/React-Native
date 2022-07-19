import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import { Card } from '@rneui/themed';
import axios from 'axios';
import { Button } from 'react-native-elements';

const MovieDetails = (props) => {
  // alert(JSON.stringify(props.route.params.id))
  const [movie, setMovie] = useState({});
  

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${props.route.params.id}?api_key=aa6fc65fcedb7431af3ac2fbe6484cd0`
      )
  
        .then(function(res){
            // alert(JSON.stringify(res.data))
            setMovie(res.data);
            // alert(res.data);

        })
        .catch(function(err){

        })

    }, [props.route.params.id])
    return (  
      <View>
      
      <Card>
              <Card.Title> {movie.original_title} </Card.Title>
              <Card.Image
                style={{ padding: 0 }}
                source={{
                  uri: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
                }}
              />
              <Text>{movie.overview}</Text>
            
             
             
            </Card>
               <Button
                title="Back"
                style={{ margin: 20 }}
                onPress={() =>{ 
                   
                  props.navigation.navigate('Movies')}
                  }
              />
     
        </View>
    );
}
 
export default MovieDetails;