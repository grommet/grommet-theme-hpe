import React from 'react';
import { Data, List, Page, PageContent, PageHeader } from 'grommet';
import { ThemeContext } from 'styled-components';
import { ColorSwatch } from './ColorSwatch';

type ThemeColors = Record<string, string | { light: string; dark: string }>;
type ForegroundColorRow = {
  token: string;
  color: ThemeColors[string];
};

export const ForegroundColors = () => {
  const theme = React.useContext(ThemeContext) as
    | { global?: { colors?: ThemeColors } }
    | undefined;
  const globalColors: ThemeColors = theme?.global?.colors ?? {};
  const foregroundColorRows: ForegroundColorRow[] = Object.entries(globalColors)
    .filter(([token]) => token.startsWith('foreground'))
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([token, color]) => ({ token, color }));

  return (
    <Page>
      <PageContent>
        <PageHeader title="Foreground Colors" />
        <Data data={foregroundColorRows} toolbar>
          <List
            itemKey="token"
            primaryKey={(datum: ForegroundColorRow) => (
              <ColorSwatch token={datum.token} color={datum.color} />
            )}
            defaultItemProps={{ pad: { vertical: 'xsmall' } }}
          />
        </Data>
      </PageContent>
    </Page>
  );
};
