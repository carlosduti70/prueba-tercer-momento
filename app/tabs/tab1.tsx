import type { CardProps } from 'tamagui'
import { Plus, Edit3, Beer } from '@tamagui/lucide-icons'
import { H5, H2, Paragraph, Tabs, Text, Adapt,
  Button,
  Dialog,
  Fieldset,
  Input,
  Label,
  Sheet,
  Unspaced,
  YStack,
  XStack,
  Card,
  Image
} from "tamagui";

import { MyStack } from "../../components/MyStack";
import SelectDemo from "../../components/SelectDemo";
import DialogDemo from '../../components/DialogDemo';

export default function Tab1() {
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
          <H2>Films</H2>

          <Card>
            <Card.Header padded>
              <H2>Film 1</H2>
              <Paragraph theme="alt2">Director</Paragraph>
              <Paragraph theme="alt2">Time</Paragraph>
            </Card.Header>
            <XStack>
            
            <DialogDemo
              Title0='Edit Movie'
              Boton="Edit"
              Title1="Titulo"
              Title2= 'Duracion'
              Title3='Autor'
            />
              <Button icon={Beer}>Delete</Button>
            </XStack>
          </Card>

        </Tabs.Content>


        <Tabs.Content value="tab2">
          <H5>SubTab 2 Content</H5>
          
        </Tabs.Content>
        <Tabs.Content value="tab3">
          <H5>SubTab 3 Content</H5>
        </Tabs.Content>
      </Tabs>

      <Button icon={Plus}>Add</Button>
    </MyStack>
  );
}
