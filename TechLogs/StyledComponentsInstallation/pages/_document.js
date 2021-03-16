import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet as StyledComponentSheets } from 'styled-components';
import { ServerStyleSheets as MaterialUiServerStyleSheets } from '@material-ui/core/styles';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body
          style={{
            margin: 0,
            WebkitFontSmoothing: 'antialiased',
          }}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {

  const styledComponentSheet = new StyledComponentSheets();
  const materialUiSheets = new MaterialUiServerStyleSheets();
  const originalRenderPage = ctx.renderPage;
  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) =>
        styledComponentSheet.collectStyles(
          materialUiSheets.collect(<App {...props} />)
        ),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: [
      ...React.Children.toArray(initialProps.styles),
      materialUiSheets.getStyleElement(),
      styledComponentSheet.getStyleElement(),
    ],
  };
};
