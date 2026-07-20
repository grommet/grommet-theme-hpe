import {
  primitives as localPrimitives,
  dark as localDark,
  light as localLight,
  dimension as localDimension,
  small as localSmall,
  global as localGlobal,
  components as localComponents,
} from 'hpe-design-tokens/grommet';
import { buildTheme } from '../../themes/hpe';

const tokens = {
  primitives: localPrimitives,
  light: localLight,
  dark: localDark,
  small: localSmall,
  large: localDimension,
  global: localGlobal,
  components: localComponents,
};

describe('Theme snapshot groups', () => {
  const theme = buildTheme(tokens, { 'v6-backwards-compatibility': false });

  it('matches global snapshot', () => {
    expect({
      global: {
        colors: theme.global.colors,
        font: theme.global.font,
        edgeSize: theme.global.edgeSize,
        focus: theme.global.focus,
        drop: theme.global.drop,
        elevation: theme.global.elevation,
      },
    }).toMatchSnapshot();
  });

  it('matches breakpoints snapshot', () => {
    expect({
      breakpoints: theme.global.breakpoints,
    }).toMatchSnapshot();
  });

  it('matches button snapshot', () => {
    expect({
      button: theme.button,
    }).toMatchSnapshot();
  });

  it('matches form controls snapshot', () => {
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
    }).toMatchSnapshot();
  });

  it('matches typography snapshot', () => {
    expect({
      anchor: theme.anchor,
      paragraph: theme.paragraph,
      text: theme.text,
      heading: theme.heading,
    }).toMatchSnapshot();
  });

  it('matches data components snapshot', () => {
    expect({
      data: theme.data,
      dataChart: theme.dataChart,
      dataFilter: theme.dataFilter,
      dataFilters: theme.dataFilters,
      dataSearch: theme.dataSearch,
      dataSort: theme.dataSort,
      dataSummary: theme.dataSummary,
      dataTable: theme.dataTable,
      dataTableColumns: theme.dataTableColumns,
    }).toMatchSnapshot();
  });

  it('matches navigation snapshot', () => {
    expect({
      tabs: theme.tabs,
      tab: theme.tab,
      menu: theme.menu,
      pagination: theme.pagination,
      accordion: theme.accordion,
      nav: theme.nav,
      sidebar: theme.sidebar,
    }).toMatchSnapshot();
  });

  it('matches feedback snapshot', () => {
    expect({
      layer: theme.layer,
      tip: theme.tip,
      spinner: theme.spinner,
      notification: theme.notification,
    }).toMatchSnapshot();
  });

  it('matches content snapshot', () => {
    expect({
      card: theme.card,
      cards: theme.cards,
      list: theme.list,
      table: theme.table,
      calendar: theme.calendar,
      avatar: theme.avatar,
    }).toMatchSnapshot();
  });

  it('matches theme metadata snapshot', () => {
    expect({
      name: theme.name,
      rounding: theme.rounding,
      scale: theme.scale,
      spacing: theme.spacing,
      version: theme.version,
    }).toMatchSnapshot();
  });

  it('matches top-level theme shape', () => {
    expect(Object.keys(theme).sort()).toMatchSnapshot();
  });
});
