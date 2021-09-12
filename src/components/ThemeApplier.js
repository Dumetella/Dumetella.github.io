import { ThemeProvider } from 'styled-components';

import theme from "../styles/globalStyles/theme";
import GlobalStyles from '../styles/global';

const ThemeApplier = ({ children }) => (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
    </ThemeProvider>
);

export default ThemeApplier;