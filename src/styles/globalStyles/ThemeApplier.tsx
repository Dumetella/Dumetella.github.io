import React, { ReactChild } from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeType } from "./theme";
import GlobalStyles from '../global';


interface ThemeApplierProps {
    children: ReactChild;
    theme: ThemeType;
}

export default function ThemeApplier(props: ThemeApplierProps): JSX.Element {
    return (
        <ThemeProvider theme={props.theme}>
            <GlobalStyles />
            {props.children}
        </ThemeProvider>
    );
}
