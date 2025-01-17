import { useState } from 'react';
import { useBackend } from '../../backend';
import { Button, Section, TextArea, Box, Stack } from '../../components';
import { TextFieldPreference } from './FieldPreferences';

export const FlavorCustomization = (props) => {
  const { act, data } = useBackend<FlavorCustomizationData>();
  const {
    slot,
    xeno_edible_jelly_name,
    xeno_edible_jelly_desc,
    xeno_edible_jelly_flavors,
  } = data;
  const [xenoJellyDesc, setXenoJellyDesc] = useState(xeno_edible_jelly_desc);
  const [xenoJellyFlav, setXenoJellyFlav] = useState(xeno_edible_jelly_flavors);
  return (
    <Section title="Flavor information">
      <Section title="Edible Jelly Options">
        <p>
          Options for spicing up the food you as a xenomorph can provide the
          hosts!
        </p>
        <p> Jelly names are limited to 26 characters.</p>
        <TextFieldPreference
          label={'Edible Jelly Name'}
          action={'xeno_edible_jelly_name'}
          value={'xeno_edible_jelly_name'}
        />
        <br />
        <Stack>
          <Stack.Item grow>
            <Section
              title="Edible Jelly Description"
              buttons={
                <Box>
                  <Button
                    icon="save"
                    disabled={xenoJellyDesc === xeno_edible_jelly_desc}
                    onClick={() =>
                      act('xeno_edible_jelly_desc', { xenoJellyDesc })
                    }>
                    Save
                  </Button>
                  <Button
                    icon="times"
                    onClick={() => setXenoJellyDesc(xeno_edible_jelly_desc)}>
                    Reset
                  </Button>
                </Box>
              }>
              <TextArea
                height="200px"
                maxLength={1024}
                value={xenoJellyDesc}
                onChange={(e, value) => setXenoJellyDesc(value)}
              />
            </Section>
          </Stack.Item>
          <Stack.Item grow>
            <Section
              title="Edible Jelly Flavors. Separate with commas."
              buttons={
                <Box>
                  <Button
                    icon="save"
                    disabled={xenoJellyFlav === xeno_edible_jelly_flavors}
                    onClick={() =>
                      act('xeno_edible_jelly_flavors', { xenoJellyFlav })
                    }>
                    Save
                  </Button>
                  <Button
                    icon="times"
                    onClick={() => setXenoJellyFlav(xeno_edible_jelly_flavors)}>
                    Reset
                  </Button>
                </Box>
              }>
              <TextArea
                height="200px"
                maxLength={256}
                value={xenoJellyFlav}
                onChange={(e, value) => setXenoJellyFlav(value)}
              />
            </Section>
          </Stack.Item>
        </Stack>
        <Stack>
          <Stack.Item grow>
            Jelly descriptions are limited to 1024 characters.
          </Stack.Item>
          <Stack.Item grow>
            Limit of 6 flavors, with 256 characers total.
          </Stack.Item>
        </Stack>
      </Section>
    </Section>
  );
};
