import React, { useState, useEffect } from 'react';
import { Beer } from '@tamagui/lucide-icons'
import {H3, Paragraph, Tabs, Button, XStack, Card} from "tamagui";
import DialogDemo from './DialogDemo';

interface CharactersData {
    name: string;
    description: string;
    cost: string;
    Bando: string;
}

export default function Characters(){

    const [characters, setCharacters] = useState<CharactersData[] | null>(null);

    useEffect(() => {
        const fetchCharacters = async () => {
        try {
            const response = await fetch('http://10.0.8.246:8080/character');
            const data = await response.json(); 
            setCharacters(data);
        } catch (error) {
            console.error('Error fetching data from API:', error);
        }
        };
    
        fetchCharacters();
    }, []);

    return(
        <Tabs.Content value="tab3">
        <H3>Characters</H3>

        {characters && characters.length > 0 && (
            <>
            {characters.map((character, index) => (
            <Card key={index}>
                <Card.Header padded>
                <H3>{character.name}</H3>
                <Paragraph theme="alt2">Descripción: { character.description}</Paragraph>
                <Paragraph theme="alt2">Costo: {character.cost}</Paragraph>
                <Paragraph theme="alt2">Duracion: {character.Bando}</Paragraph>
                </Card.Header>
                <XStack>
                <DialogDemo
                    Title0="Edit Character"
                    Boton="Edit"
                    Title1="Nombre"
                    Title2="Descripción"
                    Title3="Costo"
                    Title4="Bando"
                    Data1={character.name}
                    Data2={character.description}
                    Data3={character.cost}
                    Data5={character.Bando}
                />
                <Button icon={Beer}>Delete</Button>
                </XStack>
            </Card>
            ))}
        </>
        )}
        </Tabs.Content>
    );
}