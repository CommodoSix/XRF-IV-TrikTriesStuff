import { useBackend } from "../../backend";
import { Window } from "../../layouts";
import { Button, Section, Stack, Flex } from "../../components";
import { SlotSelector } from './Slots';
import { Loadout } from '../LoadoutManager/Types';
import { LoadoutViewerData } from "./Types";

const LoadoutNavigator = (props: Loadout, context) => {
  const { act } = useBackend(context);
  const {
    name,
  }= props;

  return (
    <Section title="Loadout Navigator" textAlign="center">
      <Flex>
        <Flex.Item grow={1}><div> </div></Flex.Item>
        <Flex.Item>
          <Button
            onClick={() => { 
              act('equipLoadout', { loadout_name: name });
            }}>
            Equip Loadout
          </Button>
        </Flex.Item>
        <Flex.Item grow={1}><div> </div></Flex.Item>
        <Flex.Item>
          <Button
            onClick={() => {
              act('deleteLoadout', { loadout_name: name });
            }}>
            Delete Loadout
          </Button>
        </Flex.Item>
        <Flex.Item grow={1}><div> </div></Flex.Item>
      </Flex>
    </Section>
  );
};

export const LoadoutViewer = (props, context) => {
  const { data } = useBackend<LoadoutViewerData>(context);
  
  const {
    loadout,
    items,
  }= data;

  return (
    <Window 
      title="Loadout Viewer"
      width={260} 
      height={460}>
      <Window.Content>
        <Stack fill vertical>
          <SlotSelector 
            items={items}
          />
          <LoadoutNavigator
            name={loadout.name}
          /> 
        </Stack>
      </Window.Content>
    </Window>
  );
};
