import {
  Box,
  createMuiTheme,
  CssBaseline,
  ThemeProvider,
} from '@material-ui/core';

const darkTheme = createMuiTheme({
  palette: {
    mode: 'dark',
  },
});

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {children}
      </Box>
    </ThemeProvider>
  );
}
