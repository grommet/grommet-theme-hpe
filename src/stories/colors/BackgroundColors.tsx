// SPDX-FileCopyrightText: © Hewlett Packard Enterprise Development LP
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { Data, List, Page, PageContent, PageHeader } from 'grommet';
import { ThemeContext } from 'styled-components';
import { ColorSwatch } from './ColorSwatch';

type ThemeColors = Record<string, string | { light: string; dark: string }>;
type BackgroundColorRow = {
  token: string;
  color: ThemeColors[string];
};

export const BackgroundColors = () => {
  const theme = React.useContext(ThemeContext) as
    { global?: { colors?: ThemeColors } } | undefined;
  const globalColors: ThemeColors = theme?.global?.colors ?? {};
  const backgroundColorRows: BackgroundColorRow[] = Object.entries(globalColors)
    .filter(([token]) => token.startsWith('background'))
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([token, color]) => ({ token, color }));

  return (
    <Page>
      <PageContent>
        <PageHeader title="Background Colors" />
        <Data data={backgroundColorRows} toolbar>
          <List
            itemKey="token"
            primaryKey={(datum: BackgroundColorRow) => (
              <ColorSwatch token={datum.token} color={datum.color} />
            )}
            defaultItemProps={{ pad: { vertical: 'xsmall' } }}
          />
        </Data>
      </PageContent>
    </Page>
  );
};
