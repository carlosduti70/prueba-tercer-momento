import { X } from "@tamagui/lucide-icons";
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

import SelectDemo from "./SelectDemo";

export default function DialogDemo ( {Boton="boton", Title0="titlie0", Title1="title1", Title2="title2", Title3="title3"}) {
  return (
    <Dialog modal>
      <Dialog.Trigger asChild>
        <Button>{Boton}</Button>
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
          <Dialog.Description>
            Make changes to your profile here. Click save when you&apos;re done.
          </Dialog.Description>
          <Fieldset>
            <Label htmlFor="name">{Title1}</Label>
            <Input
              id="name"
              defaultValue="Star Wars"
            />
          </Fieldset>

          <XStack>
            <Fieldset>
              <Label htmlFor="time">{Title2}</Label>
              <Input
                id="name"
                defaultValue="2h 1m"
              />
            </Fieldset>
            <Fieldset>
              <Label htmlFor="name">{Title3}</Label>
              <Input
                id="director"
                defaultValue="George Lucas"
                />
            </Fieldset>
          </XStack>

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
