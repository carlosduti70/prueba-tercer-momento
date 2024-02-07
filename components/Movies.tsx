import React, { useState, useEffect } from 'react';
import { Beer } from '@tamagui/lucide-icons'
import { H3, Paragraph, Tabs, Button, XStack, Card } from "tamagui";
import axios from 'axios';
import DialogDemo from './DialogDemo';
import {useRouter } from "expo-router";

interface MovieData {
  id: number;
  title: string;
  director: string;
  duration: string;
  releaseYear: string;
}

export default function Tab1() {



  const [movies, setMovies] = useState<MovieData[] | null>(null);

  const fetchMovies = async () => {
    try {
      const response = await fetch('http://10.0.8.246:8080/film');
      const data = await response.json();
      setMovies(data);
    } catch (error) {
      console.error('Error fetching data from API:', error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleEdit = async (filmId: number, updatedData: MovieData) => {
    try {
      await axios.put(`http://10.0.8.246:8080/film/${filmId}`, updatedData);
      // Actualiza la lista de películas después de editar
      fetchMovies();
    } catch (error) {
      console.error('Error updating movie:', error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`http://10.0.8.246:8080/film/${id}`);
      // Actualiza la lista de películas después de eliminar
      fetchMovies();
    } catch (error) {
      console.error('Error deleting movie:', error);
    }
  };

  const router = useRouter();

  return (
    <Tabs.Content value="tab1">
      <H3>Films</H3>

      {movies && movies.length > 0 && (
        <>
          {movies.map((movie, index) => (
            <Card key={index}
            onPress={() => router.push("tabs/tab2")}
            >
              <Card.Header padded>
                <H3>{movie.title}</H3>
                <Paragraph theme="alt2">Director: {movie.director}</Paragraph>
                <Paragraph theme="alt2">Time: {movie.duration}</Paragraph>
                <Paragraph theme="alt2">Año de lanzamiento: {movie.releaseYear}</Paragraph>
              </Card.Header>
              <XStack>
                <DialogDemo
                  Title0="Edit Movie"
                  Boton="Edit"
                  Title1="Titulo"
                  Title2="Duracion"
                  Title3="Director"
                  Title4="Año de lanzamiento"
                  Data1={movie.title}
                  Data2={movie.duration}
                  Data3={movie.director}
                  Data5={movie.releaseYear}
                  // onPress={(updatedData) => handleEdit(movie.id, updatedData)}
                />
                <Button icon={Beer} onPress={() => handleDelete(movie.id)}>Delete</Button>
              </XStack>
            </Card>
          ))}
        </>
      )}
    </Tabs.Content>
  );
}
