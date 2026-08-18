function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// SPDX-FileCopyrightText: © Hewlett Packard Enterprise Development LP
// SPDX-License-Identifier: Apache-2.0
import { buttonKinds, buttonStates, componentSizes } from './utils';
export var buildButtonTheme = function buildButtonTheme(tokens, dimensions) {
  var components = tokens.components;

  // Option button kind styles. Abstracted so select.emptySearchMessage
  // can reference pad value.
  var option = {
    color: components.hpe.select["default"].option.rest.textColor,
    border: {
      radius: dimensions.edgeSize[components.hpe.select["default"].medium.option.borderRadius] || components.hpe.select["default"].medium.option.borderRadius,
      width: dimensions.borderSize[components.hpe.select["default"].medium.option.borderWidth] || components.hpe.select["default"].medium.option.borderWidth,
      color: components.hpe.select["default"].option.rest.borderColor
    },
    pad: {
      horizontal: components.hpe.select["default"].medium.option.paddingX,
      vertical: components.hpe.select["default"].medium.option.paddingY
    },
    font: {
      weight: components.hpe.select["default"].option.rest.fontWeight
    }
  };

  // Abstracted so button and pinned list icon can reference.
  var mediumIconOnlyPad = {
    vertical: components.hpe.button["default"].medium.iconOnly.paddingY,
    horizontal: components.hpe.button["default"].medium.iconOnly.paddingY
  };
  var buttonKindTheme = {};
  buttonKinds.forEach(function (kind) {
    var _components$hpe$butto, _components$hpe$butto2, _components$hpe$butto3, _components$hpe$butto4, _components$hpe$butto5, _components$hpe$butto6;
    var borderWidth = (_components$hpe$butto = components.hpe.button[kind]) == null ? void 0 : _components$hpe$butto.medium.borderWidth;
    var borderRadius = (_components$hpe$butto2 = components.hpe.button[kind]) == null ? void 0 : _components$hpe$butto2.medium.borderRadius;
    buttonKindTheme[kind] = {
      background: (_components$hpe$butto3 = components.hpe.button) == null ? void 0 : _components$hpe$butto3[kind].rest.background,
      border: {
        width: dimensions.borderSize[borderWidth] || borderWidth,
        color: (_components$hpe$butto4 = components.hpe.button) == null ? void 0 : _components$hpe$butto4[kind].rest.borderColor,
        radius: dimensions.borderSize[borderRadius] || borderRadius
      },
      color: (_components$hpe$butto5 = components.hpe.button) == null ? void 0 : _components$hpe$butto5[kind].rest.textColor,
      font: {
        weight: (_components$hpe$butto6 = components.hpe.button) == null ? void 0 : _components$hpe$butto6[kind].rest.fontWeight
      }
    };
  });
  var buttonStatesTheme = {};
  buttonStates.forEach(function (state) {
    buttonStatesTheme[state] = {};
    buttonKinds.forEach(function (kind) {
      var adjustedState = state;
      if (state === 'active') {
        var _components$hpe$butto7, _components$hpe$butto8, _components$hpe$butto9, _components$hpe$butto0, _components$hpe$butto1, _components$hpe$butto10, _components$hpe$butto11, _components$hpe$butto12;
        adjustedState = 'selected';
        buttonStatesTheme[state][kind] = {
          background: {
            color: (_components$hpe$butto7 = components.hpe.button) == null || (_components$hpe$butto7 = _components$hpe$butto7[kind]) == null ? void 0 : _components$hpe$butto7[adjustedState].rest.background
          },
          border: {
            color: (_components$hpe$butto8 = components.hpe.button) == null || (_components$hpe$butto8 = _components$hpe$butto8[kind]) == null ? void 0 : _components$hpe$butto8[adjustedState].rest.borderColor
          },
          color: (_components$hpe$butto9 = components.hpe.button) == null || (_components$hpe$butto9 = _components$hpe$butto9[kind]) == null ? void 0 : _components$hpe$butto9[adjustedState].rest.textColor,
          font: {
            weight: (_components$hpe$butto0 = components.hpe.button) == null || (_components$hpe$butto0 = _components$hpe$butto0[kind]) == null ? void 0 : _components$hpe$butto0[adjustedState].rest.fontWeight
          }
        };
        if (!('active' in buttonStatesTheme.hover)) buttonStatesTheme.hover.active = {};
        buttonStatesTheme.hover[state][kind] = {
          background: {
            color: (_components$hpe$butto1 = components.hpe.button) == null || (_components$hpe$butto1 = _components$hpe$butto1[kind]) == null || (_components$hpe$butto1 = _components$hpe$butto1[adjustedState]) == null || (_components$hpe$butto1 = _components$hpe$butto1.hover) == null ? void 0 : _components$hpe$butto1.background
          },
          border: {
            color: (_components$hpe$butto10 = components.hpe.button) == null || (_components$hpe$butto10 = _components$hpe$butto10[kind]) == null || (_components$hpe$butto10 = _components$hpe$butto10[adjustedState]) == null || (_components$hpe$butto10 = _components$hpe$butto10.hover) == null ? void 0 : _components$hpe$butto10.borderColor
          },
          color: (_components$hpe$butto11 = components.hpe.button) == null || (_components$hpe$butto11 = _components$hpe$butto11[kind]) == null || (_components$hpe$butto11 = _components$hpe$butto11[adjustedState]) == null || (_components$hpe$butto11 = _components$hpe$butto11.hover) == null ? void 0 : _components$hpe$butto11.textColor,
          font: {
            weight: (_components$hpe$butto12 = components.hpe.button) == null || (_components$hpe$butto12 = _components$hpe$butto12[kind]) == null || (_components$hpe$butto12 = _components$hpe$butto12[adjustedState]) == null || (_components$hpe$butto12 = _components$hpe$butto12.hover) == null ? void 0 : _components$hpe$butto12.fontWeight
          }
        };
      } else if (state === 'disabled') {
        var _components$hpe$butto13, _components$hpe$butto14, _components$hpe$butto15, _components$hpe$butto16;
        buttonStatesTheme[state][kind] = {
          background: {
            color: (_components$hpe$butto13 = components.hpe.button) == null || (_components$hpe$butto13 = _components$hpe$butto13[kind]) == null ? void 0 : _components$hpe$butto13[adjustedState].rest.background
          },
          border: {
            width: '',
            color: (_components$hpe$butto14 = components.hpe.button) == null || (_components$hpe$butto14 = _components$hpe$butto14[kind]) == null ? void 0 : _components$hpe$butto14[adjustedState].rest.borderColor
          },
          color: (_components$hpe$butto15 = components.hpe.button) == null || (_components$hpe$butto15 = _components$hpe$butto15[kind]) == null ? void 0 : _components$hpe$butto15[adjustedState].rest.textColor,
          font: {
            weight: (_components$hpe$butto16 = components.hpe.button) == null || (_components$hpe$butto16 = _components$hpe$butto16[kind]) == null ? void 0 : _components$hpe$butto16[adjustedState].rest.fontWeight
          }
        };
      } else {
        var _components$hpe$butto17, _components$hpe$butto18, _components$hpe$butto19, _components$hpe$butto20;
        buttonStatesTheme[state][kind] = {
          background: {
            color: (_components$hpe$butto17 = components.hpe.button) == null || (_components$hpe$butto17 = _components$hpe$butto17[kind]) == null ? void 0 : _components$hpe$butto17[adjustedState].background
          },
          border: {
            width: '',
            color: (_components$hpe$butto18 = components.hpe.button) == null || (_components$hpe$butto18 = _components$hpe$butto18[kind]) == null ? void 0 : _components$hpe$butto18[adjustedState].borderColor
          },
          color: (_components$hpe$butto19 = components.hpe.button) == null || (_components$hpe$butto19 = _components$hpe$butto19[kind]) == null ? void 0 : _components$hpe$butto19[adjustedState].textColor,
          font: {
            weight: (_components$hpe$butto20 = components.hpe.button) == null || (_components$hpe$butto20 = _components$hpe$butto20[kind]) == null ? void 0 : _components$hpe$butto20[adjustedState].fontWeight
          }
        };
      }
    });
  });
  var buttonSizesTheme = {};
  componentSizes.forEach(function (buttonSize) {
    var _components$hpe$butto24, _components$hpe$butto25, _components$hpe$butto26, _components$hpe$butto27, _components$hpe$butto28;
    var kindStyles = {};
    buttonKinds.forEach(function (kind) {
      var _components$hpe$butto21, _components$hpe$butto22, _components$hpe$butto23;
      kindStyles[kind] = {
        border: {
          radius: (_components$hpe$butto21 = components.hpe.button) == null || (_components$hpe$butto21 = _components$hpe$butto21[kind]) == null || (_components$hpe$butto21 = _components$hpe$butto21[buttonSize]) == null ? void 0 : _components$hpe$butto21.borderRadius
        },
        pad: {
          vertical: (_components$hpe$butto22 = components.hpe.button) == null || (_components$hpe$butto22 = _components$hpe$butto22[kind]) == null || (_components$hpe$butto22 = _components$hpe$butto22[buttonSize]) == null ? void 0 : _components$hpe$butto22.paddingY,
          horizontal: (_components$hpe$butto23 = components.hpe.button) == null || (_components$hpe$butto23 = _components$hpe$butto23[kind]) == null || (_components$hpe$butto23 = _components$hpe$butto23[buttonSize]) == null ? void 0 : _components$hpe$butto23.paddingX
        }
      };
    });
    buttonSizesTheme[buttonSize] = _extends({
      border: {
        radius: (_components$hpe$butto24 = components.hpe.button) == null || (_components$hpe$butto24 = _components$hpe$butto24["default"]) == null || (_components$hpe$butto24 = _components$hpe$butto24[buttonSize]) == null ? void 0 : _components$hpe$butto24.borderRadius
      },
      pad: {
        vertical: (_components$hpe$butto25 = components.hpe.button) == null || (_components$hpe$butto25 = _components$hpe$butto25["default"]) == null || (_components$hpe$butto25 = _components$hpe$butto25[buttonSize]) == null ? void 0 : _components$hpe$butto25.paddingY,
        horizontal: (_components$hpe$butto26 = components.hpe.button) == null || (_components$hpe$butto26 = _components$hpe$butto26["default"]) == null || (_components$hpe$butto26 = _components$hpe$butto26[buttonSize]) == null ? void 0 : _components$hpe$butto26.paddingX
      },
      iconOnly: {
        pad: {
          vertical: (_components$hpe$butto27 = components.hpe.button) == null || (_components$hpe$butto27 = _components$hpe$butto27["default"]) == null || (_components$hpe$butto27 = _components$hpe$butto27[buttonSize]) == null ? void 0 : _components$hpe$butto27.iconOnly.paddingY,
          horizontal: (_components$hpe$butto28 = components.hpe.button) == null || (_components$hpe$butto28 = _components$hpe$butto28["default"]) == null || (_components$hpe$butto28 = _components$hpe$butto28[buttonSize]) == null ? void 0 : _components$hpe$butto28.iconOnly.paddingX
        }
      }
    }, kindStyles);
  });
  return {
    option: option,
    mediumIconOnlyPad: mediumIconOnlyPad,
    buttonKindTheme: buttonKindTheme,
    buttonStatesTheme: buttonStatesTheme,
    buttonSizesTheme: buttonSizesTheme
  };
};