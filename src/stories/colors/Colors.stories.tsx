// SPDX-FileCopyrightText: © Hewlett Packard Enterprise Development LP
// SPDX-License-Identifier: Apache-2.0
import { BackgroundColors } from './BackgroundColors';
import { BorderColors } from './BorderColors';
import { ForegroundColors } from './ForegroundColors';

const meta = {
  title: 'Theme/Colors',
};

export default meta;

export const Background = {
  render: BackgroundColors,
};

export const Border = {
  render: BorderColors,
};

export const Foreground = {
  render: ForegroundColors,
};
