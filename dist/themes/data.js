"use strict";

exports.__esModule = true;
exports.buildDataTheme = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// SPDX-FileCopyrightText: © Hewlett Packard Enterprise Development LP
// SPDX-License-Identifier: Apache-2.0

var buildDataTheme = exports.buildDataTheme = function buildDataTheme(tokens, context) {
  var _components$hpe$dataC;
  var components = tokens.components;
  var _context$icons = context.icons,
    Add = _context$icons.Add,
    Ascending = _context$icons.Ascending,
    Close = _context$icons.Close,
    Descend = _context$icons.Descend,
    Descending = _context$icons.Descending,
    Down = _context$icons.Down,
    Filter = _context$icons.Filter,
    Lock = _context$icons.Lock,
    Search = _context$icons.Search,
    Splits = _context$icons.Splits,
    Subtract = _context$icons.Subtract,
    Unsorted = _context$icons.Unsorted,
    Up = _context$icons.Up;
  return {
    data: {
      button: {
        kind: 'toolbar'
      },
      toolbar: {
        gap: 'medium'
      }
    },
    dataChart: {
      colors: ['dataVis-categorical-10', 'dataVis-categorical-20', 'dataVis-categorical-30', 'dataVis-categorical-40', 'dataVis-categorical-50', 'dataVis-categorical-60', 'dataVis-categorical-70', 'dataVis-categorical-80'],
      gap: 'xsmall',
      granularity: {
        y: {
          '5xsmall': {
            fine: 2,
            medium: 2
          },
          '4xsmall': {
            fine: 2,
            medium: 2
          },
          '3xsmall': {
            fine: 3,
            medium: 2
          },
          xxsmall: {
            fine: 3,
            medium: 2
          },
          xsmall: {
            fine: 5,
            medium: 3
          },
          small: {
            fine: 5,
            medium: 3
          },
          medium: {
            fine: 7,
            medium: 5
          },
          large: {
            fine: 7,
            medium: 5
          },
          xlarge: {
            fine: 9,
            medium: 5
          },
          xxlarge: {
            fine: 9,
            medium: 5
          },
          '3xlarge': {
            fine: 11,
            medium: 5
          }
        }
      },
      detail: {
        gap: '3xsmall',
        pad: 'xsmall'
      },
      halfPad: {
        '3xlarge': 'xlarge',
        xxlarge: 'large',
        xlarge: 'medium',
        large: 'small',
        medium: 'xsmall',
        small: 'xxsmall',
        xsmall: '3xsmall',
        xxsmall: '4xsmall',
        '3xsmall': '5xsmall',
        '4xsmall': '2px',
        '5xsmall': 'hair'
      },
      legend: {
        margin: {
          top: 'xsmall'
        },
        gap: 'xsmall',
        item: {
          gap: '3xsmall',
          pad: {
            horizontal: 'xsmall',
            vertical: '3xsmall'
          }
        }
      },
      orderedSizes: ['3xlarge', 'xxlarge', 'xlarge', 'large', 'medium', 'small', 'xsmall', 'xxsmall', '3xsmall', '4xsmall', '5xsmall'],
      size: {
        height: 'xsmall'
      },
      thickness: {
        veryDense: 'hair',
        dense: '3xsmall',
        heavy: 'xsmall',
        moderate: 'medium',
        light: 'xlarge',
        sparse: '3xlarge'
      },
      thicknessPad: {
        xlarge: 'xlarge',
        large: 'medium',
        medium: 'xsmall',
        small: '3xsmall',
        xsmall: '5xsmall'
      }
    },
    dataFilter: {
      rangeSelector: {
        size: 'full',
        round: 'medium'
      },
      selectMultiple: {
        dropHeight: 'medium'
      }
    },
    dataFilters: {
      clearControl: {
        margin: {
          start: 'xsmall'
        }
      },
      footer: {
        actions: {
          margin: {
            top: 'medium'
          },
          gap: 'xsmall'
        }
      },
      icons: {
        close: Close,
        filter: Filter
      },
      pad: 'medium',
      width: {
        min: 'medium'
      }
    },
    dataSearch: {
      icons: {
        search: Search
      }
    },
    dataSort: {
      icons: {
        control: Descend
      }
    },
    dataSummary: {
      margin: {
        vertical: '3xsmall'
      },
      separator: {
        margin: {
          horizontal: 'xsmall'
        }
      }
    },
    dataTable: {
      body: {
        extend: function extend(_ref) {
          var theme = _ref.theme;
          return "\n          /* Margin and padding allow room for focus on table body */\n          margin: " + theme.global.edgeSize['5xsmall'] + " 0px;\n          padding: 0px " + theme.global.edgeSize['5xsmall'] + ";\n        ";
        },
        selected: {
          background: (_components$hpe$dataC = components.hpe.dataCell["default"].selected) == null || (_components$hpe$dataC = _components$hpe$dataC.rest) == null ? void 0 : _components$hpe$dataC.background
        },
        row: {
          extend: "&:last-child td {\n              border-color: transparent;\n            }\n            &:last-child th {\n              border-color: transparent;\n            }"
        }
      },
      expand: {
        size: '5xsmall'
      },
      icons: {
        ascending: function ascending() {
          return /*#__PURE__*/_react["default"].createElement(Descending, {
            size: "large"
          });
        },
        descending: function descending() {
          return /*#__PURE__*/_react["default"].createElement(Ascending, {
            size: "large"
          });
        },
        contract: function contract() {
          return /*#__PURE__*/_react["default"].createElement(Up, {
            height: "medium"
          });
        },
        expand: function expand() {
          return /*#__PURE__*/_react["default"].createElement(Down, {
            height: "medium"
          });
        },
        sortable: function sortable() {
          return /*#__PURE__*/_react["default"].createElement(Unsorted, {
            size: "large"
          });
        },
        resizeIncrease: Add,
        resizeDecrease: Subtract,
        search: Search
      },
      groupHeader: {},
      groupEnd: {
        border: {
          side: 'bottom',
          size: 'xsmall'
        }
      },
      header: {
        border: {
          side: 'bottom'
        },
        color: components.hpe.headerCell["default"].rest.textColor,
        extend: function extend(_ref2) {
          var column = _ref2.column,
            sort = _ref2.sort,
            sortable = _ref2.sortable,
            theme = _ref2.theme;
          return "\n            " + (sort && sort.property === column && "\n              background: " + theme.global.colors['background-active'][theme.dark ? 'dark' : 'light'] + "\n            ") + ";\n            " + (sortable && sort && sort.property !== column && "\n                svg {\n                  opacity: 0;\n                }\n                &:hover {\n                  svg {\n                    opacity: 1;\n                  }\n                }\n              ") + ";\n          ";
        },
        font: {
          weight: components.hpe.headerCell["default"].medium.fontWeight
        },
        gap: components.hpe.headerCell["default"].medium.gapX,
        hover: {
          background: {
            color: components.hpe.headerCell["default"].hover.background
          }
        },
        units: {
          color: components.hpe.headerCell["default"].units.rest.textColor,
          margin: {
            left: '3xsmall'
          }
        }
      },
      pinned: {
        header: {
          background: {
            opacity: 'strong'
          },
          extend: 'backdrop-filter: blur(12px);'
        },
        body: {
          background: {
            opacity: 'strong'
          },
          extend: 'backdrop-filter: blur(12px);'
        },
        footer: {
          background: {
            opacity: 'strong'
          },
          extend: 'backdrop-filter: blur(12px);'
        }
      },
      primary: {
        weight: components.hpe.dataCell.primary.medium.fontWeight,
        color: components.hpe.dataCell.primary.rest.textColor
      },
      resize: {
        border: {
          color: 'border',
          side: 'end'
        },
        hover: {
          border: {
            color: 'border-strong',
            size: 'small'
          }
        },
        padding: {
          vertical: '3xsmall'
        }
      },
      search: {
        pad: {
          left: 'xsmall'
        },
        text: {
          pad: {
            horizontal: 'xsmall'
          }
        }
      },
      sort: {
        gap: '3xsmall'
      }
    },
    dataTableColumns: {
      icons: {
        control: Splits,
        pinned: Lock,
        search: Search
      },
      tabs: {
        pad: 'xsmall'
      },
      selectColumns: {
        pad: {
          vertical: 'xsmall'
        },
        gap: '3xsmall'
      },
      orderColumns: {
        pad: {
          top: 'xsmall'
        }
      }
    },
    toolbar: {
      gap: 'xsmall',
      small: {
        gap: 'xsmall'
      }
    }
  };
};