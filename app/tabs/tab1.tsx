
import { Tabs, Text} from "tamagui";
import React, { useState } from "react";
import { MyStack } from "../../components/MyStack";
import DialogDemo from '../../components/DialogDemo';
import Movies from '../../components/Movies';
import Scenes from '../../components/Scenes';
import Characters from '../../components/Characters';


  export default function Tab1() {

    const [activeTab, setActiveTab] = useState("tab1"); // Estado para almacenar la pestaña activa

  const handleMovieClick = () => {
    setActiveTab("tab2"); // Cambiar a la pestaña de Scenes cuando se hace clic en un film
  };


  return (
    <MyStack>
      <Tabs
        defaultValue="tab1"
        orientation="horizontal"
        flexDirection="column"
        width="100%"
      >
        <Tabs.List>
          <Tabs.Tab value="tab1">
            <Text>SubTab 1</Text>
          </Tabs.Tab>
          <Tabs.Tab value="tab2">
            <Text>SubTab 2</Text>
          </Tabs.Tab>
          <Tabs.Tab value="tab3">
            <Text>SubTab 3</Text>
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Content value="tab1">
          <Movies
          />
        </Tabs.Content>

        <Tabs.Content value="tab2">
          <Scenes/>
        </Tabs.Content>

        <Tabs.Content value="tab3">
          <Characters/>
        </Tabs.Content>

      </Tabs>


        <DialogDemo
          Title0="Add Movie"
          Boton="Add"
          Title1="Titulo"
          Title2="Duracion"
          Title3="Director"
          Title4="Año de lanzamiento"
        />
    </MyStack>
  );
}
