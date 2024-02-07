import React, { useState, useEffect } from 'react';
import { Beer } from '@tamagui/lucide-icons'
import {H3, Paragraph, Tabs,
  Button,
  XStack,
  Card,
} from "tamagui";

import {useRouter } from "expo-router";
import DialogDemo from './DialogDemo';


  interface ScenesData {
    title: string;
    description: string;
    budget: string;
    minutes: string;
  }

export default function Scenes(){
    const [scenes, setScenes] = useState<ScenesData[] | null>(null);

    useEffect(() => {
      const fetchScenes = async () => {
        try {
          const response = await fetch('http://10.0.8.246:8080/scene');
          const data = await response.json(); 
          setScenes(data);
        } catch (error) {
          console.error('Error fetching data from API:', error);
        }
      };
  
      fetchScenes();
    }, []);

    const router = useRouter();

    return(

        <Tabs.Content value="tab2">
          <H3>Scenes</H3>

          {scenes && scenes.length > 0 && (
            <>
            {scenes.map((scene, index) => (
              <Card key={index}
              onPress={() => router.push("tabs/tab3")}
              >
                <Card.Header padded>
                  <H3>{scene.title}</H3>
                  <Paragraph theme="alt2">Descripción: { scene.description}</Paragraph>
                  <Paragraph theme="alt2">Costo: {scene.budget}</Paragraph>
                  <Paragraph theme="alt2">Duracion: {scene.minutes}</Paragraph>
                </Card.Header>
                <XStack>
                  <DialogDemo
                    Title0="Edit Scene"
                    Boton="Edit"
                    Title1="Titulo"
                    Title2="Descripción"
                    Title3="Costo"
                    Title4="Duración"
                    Data1={scene.title}
                    Data2={scene.description}
                    Data3={scene.budget}
                    Data5={scene.minutes}
                  />
                  <Button icon={Beer}>Delete</Button>
                </XStack>
              </Card>
            ))}
          </>
          )}
          
          {/* <DialogDemo
          Title0="Add Scene"
          Boton="Add"
          Title1="Titulo"
          Title2="Descripción"
          Title3="Costo"
          Title4="Duración"
          Data1="Escena"
          Data2="Descripcion"
          Data3="Costo"
          Data5="Duración"
          /> */}

        </Tabs.Content>
    );
}