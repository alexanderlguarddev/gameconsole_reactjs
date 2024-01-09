import { createTheme, styled  } from '@mui/material/styles'

import FontLenktonRegular from './assets/fonts/lekton/Lekton-Regular.ttf'
import AudiowideRegular from './assets/fonts/audiowide/Audiowide-Regular.ttf'

const theme = createTheme({
    palette: {
        background: {
          default: "#083359",
        },
        secondary: {
            main: '#50B4F2'
        }
    },
    typography: {
        h4: {
            fontSize: 18,
            fontWeight: 400,
            fontFamily: "'Lekton', sans-serif",
        },
        body1: {
            color: 'white',
            fontWeight: 400,
            fontFamily: "'Lekton', sans-serif",
        }
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
                @font-face {
                    font-family: 'Lekton';
                    font-display: swap;
                    font-weight: 400;
                    src: local('Lekton'), local('Lekton-Regular'), url(${FontLenktonRegular}), format('ttf');
                    unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
                }

                @font-face {
                    font-family: 'Audiowide';
                    font-display: swap;
                    font-weight: 400;
                    src: local('Audiowide'), local('Audiowide-Regular'), url(${AudiowideRegular}), format('ttf');
                    unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
                }
            `
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    color: 'black',
                    fontFamily: "'Audiowide', sans-serif",
                    background:'#50B4F2',
                    paddingLeft: '35px',
                    paddingRight: '35px',
                    '&:hover': {
                        background: '#2678BF'
                    },
                    '&:active': {
                        color: 'white'
                    }
                }
            }
        },
        MuiListSubheader: {
            styleOverrides: {
                root: {
                    color: 'white',
                    fontSize: '16px',
                    fontWeight: 400,
                    fontFamily: "'Lekton', sans-serif",
                    background: 'transparent',
                }
            }
        },
        MuiListItemText: {
            styleOverrides: {
                root: {
                    color: 'white',
                    fontWeight: 400,
                    '&>span': {
                        fontSize: '17px',
                        fontFamily: "'Lekton', sans-serif",
                    }
                }
            }
        },
        MuiContainer: {
            variants: [
                {
                    props: { variant: 'no-space' },
                    style: {
                        margin: '0px !important',
                        padding: '0px !important'
                    }
                }
            ],
        },
        MuiGrid: {
            styleOverrides: {
                root: ({ kind }) => ({
                    ...(kind === 'box' && {
                        width: '100vw',
                        height: '100vh',
                        margin: '0px !important',
                        padding: '0px !important'
                    })
                })
            }
        },
        MuiAppBar: {
            styleOverrides: {
                root: ({}) => ({
                    background: 'transparent',
                    boxShadow: 'none',
                    borderBottom: '1px dashed rgba(255, 255, 255, .35)'
                })
            }
        }
    } 
});

export default theme;