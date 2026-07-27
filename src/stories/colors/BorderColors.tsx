import React from 'react';
import { Data, List, Page, PageContent, PageHeader } from 'grommet';
import { ThemeContext } from 'styled-components';
import { ColorSwatch } from './ColorSwatch';

type ThemeColors = Record<string, string | { light: string; dark: string }>;
type BorderColorRow = {
  token: string;
  color: ThemeColors[string];
};

export const BorderColors = () => {
  const theme = React.useContext(ThemeContext) as
    | { global?: { colors?: ThemeColors } }
    | undefined;
  const globalColors: ThemeColors = theme?.global?.colors ?? {};
  const borderColorRows: BorderColorRow[] = Object.entries(globalColors)
    .filter(([token]) => token.startsWith('border'))
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([token, color]) => ({ token, color }));

  return (
    <Page>
      <PageContent>
        <PageHeader title="Border Colors" />
        <Data data={borderColorRows} toolbar>
          <List
            itemKey="token"
            primaryKey={(datum: BorderColorRow) => (
              <ColorSwatch token={datum.token} color={datum.color} />
            )}
            defaultItemProps={{ pad: { vertical: 'xsmall' } }}
          />
        </Data>
      </PageContent>
    </Page>
  );
};
