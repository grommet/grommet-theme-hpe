"use strict";

var _grommet = require("hpe-design-tokens/grommet");
var _hpe = require("../../themes/hpe");
var tokens = {
  primitives: _grommet.primitives,
  light: _grommet.light,
  dark: _grommet.dark,
  small: _grommet.small,
  large: _grommet.dimension,
  global: _grommet.global,
  components: _grommet.components
};
describe('Theme snapshot groups', function () {
  var theme = (0, _hpe.buildTheme)(tokens, {
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
      dateInput: theme.dateInput
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
});