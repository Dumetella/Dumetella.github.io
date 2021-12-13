import 'styled-components';

declare module 'styled-components' {

    export interface DefaultStyledComponent {
        theme: DefaultTheme;
    }

    export interface DefaultTheme {
        type: 'dark' | 'light',
        colors: {
            primary1: string,
            background1: string,
            accent1: string,
            button: string,
            background2: string,
        }
        breakpoints: {
            sm: 'screen and (max-width: 640px)',
            md: 'screen and (max-width: 768px)',
            lg: 'screen and (max-width: 1024px)',
            xl: 'screen and (max-width: 1280px)'
        },
        fonts: {
            title: string,
            main: string,
        },
    }
}