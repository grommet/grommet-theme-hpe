// SPDX-FileCopyrightText: © Hewlett Packard Enterprise Development LP
// SPDX-License-Identifier: Apache-2.0
import { primitives as localPrimitives, dark as localDark, light as localLight, dimension as localDimension, small as localSmall, global as localGlobal, components as localComponents } from 'hpe-design-tokens/grommet';
import { buildTheme } from '../../themes/hpe';
var tokens = {
  primitives: localPrimitives,
  light: localLight,
  dark: localDark,
  small: localSmall,
  large: localDimension,
  global: localGlobal,
  components: localComponents
};
describe('Theme snapshot groups', function () {
  var theme = buildTheme(tokens, {
    'v6-backwards-compatibility': false
  });
  it('matches global snapshot', function () {
    expect({
      global: {
        colors: theme.global.colors,
        font: theme.global.font,
        edgeSize: theme.global.edgeSize,
        focus: theme.global.focus,
        drop: theme.global.drop,
        elevation: theme.global.elevation
      }
    }).toMatchSnapshot();
  });
  it('matches breakpoints snapshot', function () {
    expect({
      breakpoints: theme.global.breakpoints
    }).toMatchSnapshot();
  });
  it('matches button snapshot', function () {
    expect({
      button: theme.button
    }).toMatchSnapshot();
  });
  it('matches form controls snapshot', function () {
    expect({
      formField: theme.formField,
      checkBox: theme.checkBox,
      radioButton: theme.radioButton,
      select: theme.select,
      selectMultiple: theme.selectMultiple,
      rangeInput: theme.rangeInput,
      rangeSelector: theme.rangeSelector,
      fileInput: theme.fileInput,
      dateInput: theme.dateInput,
      dateTimeInput: theme.dateTimeInput
    }).toMatchSnapshot();
  });
  it('matches typography snapshot', function () {
    expect({
      anchor: theme.anchor,
      paragraph: theme.paragraph,
      text: theme.text,
      heading: theme.heading
    }).toMatchSnapshot();
  });
  it('matches data components snapshot', function () {
    expect({
      data: theme.data,
      dataChart: theme.dataChart,
      dataFilter: theme.dataFilter,
      dataFilters: theme.dataFilters,
      dataSearch: theme.dataSearch,
      dataSort: theme.dataSort,
      dataSummary: theme.dataSummary,
      dataTable: theme.dataTable,
      dataTableColumns: theme.dataTableColumns
    }).toMatchSnapshot();
  });
  it('matches navigation snapshot', function () {
    expect({
      tabs: theme.tabs,
      tab: theme.tab,
      menu: theme.menu,
      pagination: theme.pagination,
      accordion: theme.accordion,
      nav: theme.nav,
      sidebar: theme.sidebar
    }).toMatchSnapshot();
  });
  it('matches feedback snapshot', function () {
    expect({
      layer: theme.layer,
      tip: theme.tip,
      spinner: theme.spinner,
      notification: theme.notification
    }).toMatchSnapshot();
  });
  it('matches content snapshot', function () {
    expect({
      card: theme.card,
      cards: theme.cards,
      list: theme.list,
      table: theme.table,
      calendar: theme.calendar,
      avatar: theme.avatar
    }).toMatchSnapshot();
  });
  it('matches theme metadata snapshot', function () {
    expect({
      name: theme.name,
      rounding: theme.rounding,
      scale: theme.scale,
      spacing: theme.spacing
    }).toMatchSnapshot();
  });
  it('matches top-level theme shape', function () {
    expect(Object.keys(theme).sort()).toMatchSnapshot();
  });
});