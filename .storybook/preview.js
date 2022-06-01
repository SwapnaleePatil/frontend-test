import { ThemeProvider } from '@mui/material/styles';
import { ThemeProvider as Emotion10ThemeProvider } from '@emotion/react';
import theme from '../src/theme';

const defaultTheme = theme;

const withThemeProvider = (Story, context) => {
  return (
      <Emotion10ThemeProvider theme={defaultTheme}>
        <ThemeProvider theme={defaultTheme}>
          <Story {...context} />
        </ThemeProvider>
      </Emotion10ThemeProvider>
  );
};

export const decorators = [withThemeProvider];