import { Edit3, X } from "@tamagui/lucide-icons";
import {
  Adapt,
  Button,
  Dialog,
  Fieldset,
  Input,
  Label,
  Sheet,
  Unspaced,
  YStack,
  XStack
} from "tamagui";


export default function DialogDemo ( {Boton="boton", Title0="titlie0", Title1="title1", Title2="title2", Title3="title3", Title4="titlie4", Data1="",Data2="", Data3="", Data5=""}) {
  return (
    <Dialog modal>
      <Dialog.Trigger asChild>
        <Button icon={Edit3}>{Boton}</Button>
      </Dialog.Trigger>

      <Adapt
        when="sm"
        platform="touch"
      >
        <Sheet
          zIndex={200000}
          modal
          dismissOnSnapToBottom
        >
          <Sheet.Frame
            padding="$4"
            space
          >
            <Adapt.Contents />
          </Sheet.Frame>
          <Sheet.Overlay />
        </Sheet>
      </Adapt>

      <Dialog.Portal>
        <Dialog.Overlay
          key="overlay"
          animation="quick"
          o={0.5}
          enterStyle={{ o: 0 }}
          exitStyle={{ o: 0 }}
        />

        <Dialog.Content
          bordered
          elevate
          key="content"
          animation={[
            "quick",
            {
              opacity: {
                overshootClamping: true
              }
            }
          ]}
          enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
          exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
          space
        >
          <Dialog.Title>{Title0}</Dialog.Title>
          <Fieldset>
            <Label htmlFor="name">{Title1}</Label>
            <Input
              id="name"
              defaultValue={Data1}
            />
          </Fieldset>

          <XStack>
            <Fieldset>
              <Label htmlFor="time">{Title2}</Label>
              <Input
                id="time"
                defaultValue={Data2}
              />
            </Fieldset>
            <Fieldset>
              <Label htmlFor="name">{Title3}</Label>
              <Input
                id="director"
                defaultValue={Data3}
                />
            </Fieldset>
          </XStack>
          <Fieldset>
              <Label htmlFor="name">{Title4}</Label>
              <Input
                id="releaseYear"
                defaultValue={Data5}
                />
            </Fieldset>

          <YStack
            alignItems="flex-end"
            marginTop="$2"
          >
            <Dialog.Close
              displayWhenAdapted
              asChild
            >
              <Button
                theme="green_Button"
                aria-label="Close"
                
              >
                Save
              </Button>
            </Dialog.Close>
          </YStack>

          <Unspaced>
            <Dialog.Close asChild>
              <Button
                pos="absolute"
                top="$3"
                right="$3"
                size="$2"
                circular
                icon={X}
              />
            </Dialog.Close>
          </Unspaced>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  );
}
