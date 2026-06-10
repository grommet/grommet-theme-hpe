export const buildFeedbackTheme = (tokens, icons) => {
  const { global, components } = tokens;
  const {
    Close,
    Info,
    StatusCritical,
    StatusGood,
    StatusUnknown,
    StatusWarning,
  } = icons;

  return {
    layer: {
      background: 'background-floating',
      border: { radius: 'medium', intelligentRounding: true },
      container: { elevation: 'large', height: { min: '5xsmall' } },
      overlay: { background: 'background-screenOverlay' },
      /* HPE Global Header/Footer Service a.k.a. HPE Common HFWS sets the header
       * at a z-index of 101. This adjustment allows for Layer modals and side-drawers
       * to sit atop the Global header. */
      zIndex: '110',
    },
    notification: {
      close: { icon: Close },
      container: {
        round: 'xsmall',
        pad: { horizontal: 'xsmall', vertical: '3xsmall' },
      },
      direction: 'column',
      gap: 'xsmall',
      global: {
        direction: 'row',
        container: {
          round: 'none',
          pad: {
            horizontal: 'xlarge',
            vertical: '3xsmall',
          },
        },
      },
      iconContainer: {
        pad: { right: 'xsmall' },
      },
      textContainer: {
        gap: 'medium',
      },
      message: {
        color: 'text',
        fill: true,
        text: { margin: { right: '3xsmall' } },
      },
      title: {
        color: 'text-strong',
        weight: global.hpe.fontWeight.medium,
      },
      critical: {
        icon: StatusCritical,
        background: 'background-critical',
        color: 'icon-critical',
        message: { color: 'text-onCritical' },
        title: { color: 'text-onCritical-strong' },
        global: {
          background: 'background-critical',
          message: { color: 'text-onCritical' },
          title: { color: 'text-onCritical-strong' },
        },
        toast: {
          background: 'background-front',
          message: { color: 'text' },
          title: { color: 'text-strong' },
        },
      },
      warning: {
        icon: StatusWarning,
        background: 'background-warning',
        color: 'icon-warning',
        message: { color: 'text-onWarning' },
        title: { color: 'text-onWarning-strong' },
        global: {
          background: 'background-warning',
          message: { color: 'text-onWarning' },
          title: { color: 'text-onWarning-strong' },
        },
        toast: {
          background: 'background-front',
          message: { color: 'text' },
          title: { color: 'text-strong' },
        },
      },
      normal: {
        icon: StatusGood,
        background: 'background-ok',
        color: 'icon-ok',
        message: { color: 'text-onOk' },
        title: { color: 'text-onOk-strong' },
        global: {
          background: 'background-ok',
          message: { color: 'text-onOk' },
          title: { color: 'text-onOk-strong' },
        },
        toast: {
          background: 'background-front',
          message: { color: 'text' },
          title: { color: 'text-strong' },
        },
      },
      unknown: {
        icon: StatusUnknown,
        background: 'background-unknown',
        color: 'icon-unknown',
        message: { color: 'text-onUnknown' },
        title: { color: 'text-onUnknown-strong' },
        global: {
          background: 'background-unknown',
          message: { color: 'text-onUnknown' },
          title: { color: 'text-onUnknown-strong' },
        },
        toast: {
          background: 'background-front',
          message: { color: 'text' },
          title: { color: 'text-strong' },
        },
      },
      info: {
        icon: Info,
        background: 'background-info',
        color: 'icon-info',
        message: { color: 'text-onInfo' },
        title: { color: 'text-onInfo-strong' },
        global: {
          background: 'background-info',
          message: { color: 'text-onInfo' },
          title: { color: 'text-onInfo-strong' },
        },
        toast: {
          background: 'background-front',
          message: { color: 'text' },
          title: { color: 'text-strong' },
        },
      },
      undefined: {
        icon: StatusUnknown,
        background: 'background-unknown',
        message: { color: 'text-onUnknown' },
        title: { color: 'text-onUnknown-strong' },
        global: {
          background: 'background-ok',
          message: { color: 'text-onUnknown' },
          title: { color: 'text-onUnknown-strong' },
        },
        toast: {
          background: 'background-front',
          message: { color: 'text' },
          title: { color: 'text-strong' },
        },
      },
      actions: { margin: { right: '3xsmall' } },
    },
    spinner: {
      container: {
        pad: 'none',
        color: 'foreground-primary',
        border: [
          { color: 'transparent', side: 'all', size: 'medium' },
          { color: 'transparent', side: 'right', size: 'medium' },
          { color: 'transparent', side: 'top', size: 'medium' },
          { color: 'transparent', side: 'left', size: 'medium' },
        ],
      },
      responsive: false,
      size: {
        xsmall: components.hpe.element?.xsmall.minHeight,
        small: components.hpe.element?.small.minHeight,
        medium: components.hpe.element?.medium.minHeight,
        large: components.hpe.element?.large.minHeight,
        xlarge: components.hpe.element?.xlarge.minHeight,
      },
    },
  };
};
