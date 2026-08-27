// SPDX-FileCopyrightText: © Hewlett Packard Enterprise Development LP
// SPDX-License-Identifier: Apache-2.0
export const getGraphikFamily = (fontStackPrimary) =>
  fontStackPrimary
    .split(',')
    .map((s) => s.trim().replace(/['"]/g, ''))
    .find((f) => f.includes('Graphik')) || 'HPE Graphik';

export const getGraphikFontFaces = (family) => `
          @font-face {
            font-family: "${family}";
            src: url("https://www.hpe.com/content/dam/hpe/fonts/graphik/HPEGraphik-Regular-Web.woff2") format('woff2');
          }
          @font-face {
            font-family: "${family}";
            src: url("https://www.hpe.com/content/dam/hpe/fonts/graphik/HPEGraphik-Regular-Web.woff2") format('woff2');
            font-weight: 400;
          }
          @font-face {
            font-family: "${family}";
            src: url("https://www.hpe.com/content/dam/hpe/fonts/graphik/HPEGraphik-Bold-Web.woff2") format('woff2');
            font-weight: 700;
          }
          @font-face {
            font-family: "${family}";
            src: url("https://www.hpe.com/content/dam/hpe/fonts/graphik/HPEGraphik-Semibold-Web.woff2") format('woff2');
            font-weight: 600;
          }
          @font-face {
            font-family: "${family}";
            src: url("https://www.hpe.com/content/dam/hpe/fonts/graphik/HPEGraphik-Medium-Web.woff2") format('woff2');
            font-weight: 500;
          }
          @font-face {
            font-family: "${family}";
            src: url("https://www.hpe.com/content/dam/hpe/fonts/graphik/HPEGraphik-Extralight-Web.woff2") format('woff2');
            font-weight: 100;
          }
          @font-face {
            font-family: "GraphikXXCondensed";
            src: url("https://www.hpe.com/content/dam/hpe/fonts/graphik/HPEGraphikXXCondensed-Regular-Web.woff2") format('woff2');
          }
          @font-face {
            font-family: "GraphikXXCondensed";
            src: url("https://www.hpe.com/content/dam/hpe/fonts/graphik/HPEGraphikXXCondensed-Regular-Web.woff2") format('woff2');
            font-weight: 400;
          }
          @font-face {
            font-family: "GraphikXXCondensed";
            src: url("https://www.hpe.com/content/dam/hpe/fonts/graphik/HPEGraphikXXCondensed-Bold-Web.woff2") format('woff2');
            font-weight: 700;
          }
          @font-face {
            font-family: "GraphikXXCondensed";
            src: url("https://www.hpe.com/content/dam/hpe/fonts/graphik/HPEGraphikXXCondensed-Semibold-Web.woff2") format('woff2');
            font-weight: 600;
          }
          @font-face {
            font-family: "GraphikXXCondensed";
            src: url("https://www.hpe.com/content/dam/hpe/fonts/graphik/HPEGraphikXXCondensed-Medium-Web.woff2") format('woff2');
            font-weight: 500;
          }
          @font-face {
            font-family: "GraphikXXCondensed";
            src: url("https://www.hpe.com/content/dam/hpe/fonts/graphik/HPEGraphikXXCondensed-Extralight-Web.woff2") format('woff2');
            font-weight: 100;
          }`;
