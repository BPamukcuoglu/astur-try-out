import { createTheme as createMuiTheme, responsiveFontSizes } from '@mui/material/styles';

export const baseThemeOptions = {
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 1000,
        lg: 1200,
        xl: 1920
      }
    },
    components: {
      MuiAvatar: {
        styleOverrides: {
          root: {
            fontSize: 14,
            fontWeight: 600,
            letterSpacing: 0
          }
        }
      },
      MuiButton: {
        defaultProps: {
          disableElevation: true
        },
        styleOverrides: {
          root: {
            textTransform: 'none'
          },
          sizeSmall: {
            padding: '6px 16px'
          },
          sizeMedium: {
            padding: '8px 20px'
          },
          sizeLarge: {
            padding: '11px 24px'
          },
          textSizeSmall: {
            padding: '7px 12px'
          },
          textSizeMedium: {
            padding: '9px 16px'
          },
          textSizeLarge: {
            padding: '12px 16px'
          }
        }
      },
      MuiButtonBase: {
        defaultProps: {
          disableRipple: true
        }
      },
      MuiCardActions: {
        styleOverrides: {
          root: {
            padding: '16px 24px'
          }
        }
      },
      MuiCardContent: {
        styleOverrides: {
          root: {
            padding: '32px 24px',
            '&:last-child': {
              paddingBottom: '32px'
            }
          }
        }
      },
      MuiCardHeader: {
        defaultProps: {
          titleTypographyProps: {
            variant: 'h6'
          },
          subheaderTypographyProps: {
            variant: 'body2'
          }
        },
        styleOverrides: {
          root: {
            padding: '32px 24px'
          }
        }
      },
      MuiCheckbox: {
        defaultProps: {
          color: 'primary'
        }
      },
      MuiChip: {
        styleOverrides: {
          root: {
            fontWeight: 500
          }
        }
      },
      MuiCssBaseline: {
        styleOverrides: {
          '*': {
            boxSizing: 'border-box'
          },
          html: {
            MozOsxFontSmoothing: 'grayscale',
            WebkitFontSmoothing: 'antialiased',
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100%',
            width: '100%'
          },
          body: {
            display: 'flex',
            flex: '1 1 auto',
            flexDirection: 'column',
            minHeight: '100%',
            width: '100%'
          },
          '#__next': {
            display: 'flex',
            flex: '1 1 auto',
            flexDirection: 'column',
            height: '100%',
            width: '100%'
          },
          '#nprogress': {
            pointerEvents: 'none'
          },
          '#nprogress .bar': {
            backgroundColor: '#5048E5',
            height: 3,
            left: 0,
            position: 'fixed',
            top: 0,
            width: '100%',
            zIndex: 2000
          }
        }
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            padding: 8
          },
          sizeSmall: {
            padding: 4
          }
        }
      },
      MuiLinearProgress: {
        styleOverrides: {
          root: {
            borderRadius: 3,
            overflow: 'hidden'
          }
        }
      },
      MuiLink: {
        defaultProps: {
          underline: 'hover'
        }
      },
      MuiListItemIcon: {
        styleOverrides: {
          root: {
            marginRight: '16px',
            '&.MuiListItemIcon-root': {
              minWidth: 'unset'
            }
          }
        }
      },
      MuiOutlinedInput: {
        styleOverrides: {
          input: {
            fontWeight: 500
          }
        }
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none'
          }
        }
      },
      MuiPopover: {
        defaultProps: {
          elevation: 16
        }
      },
      MuiRadio: {
        defaultProps: {
          color: 'primary'
        }
      },
      MuiSwitch: {
        defaultProps: {
          color: 'primary'
        }
      },
      MuiTab: {
        styleOverrides: {
          root: {
            fontSize: 14,
            fontWeight: 500,
            lineHeight: 1.71,
            minWidth: 'auto',
            paddingLeft: 0,
            paddingRight: 0,
            textTransform: 'none',
            '& + &': {
              marginLeft: 24
            }
          }
        }
      },
      MuiTableCell: {
        styleOverrides: {
          root: {
            padding: '15px 16px'
          }
        }
      },
      MuiTableHead: {
        styleOverrides: {
          root: {
            borderBottom: 'none',
            '& .MuiTableCell-root': {
              borderBottom: 'none',
              fontSize: '12px',
              fontWeight: 600,
              lineHeight: 1,
              letterSpacing: 0.5,
              textTransform: 'uppercase'
            },
            '& .MuiTableCell-paddingCheckbox': {
              paddingTop: 4,
              paddingBottom: 4
            }
          }
        }
      }
    },
    direction: 'ltr',
    shape: {
      borderRadius: 8
    },
    typography: {
      button: {
        fontWeight: 600
      },
      fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
      body1: {
        fontSize: '1rem',
        fontWeight: 400,
        lineHeight: 1.5
      },
      body2: {
        fontSize: '0.875rem',
        fontWeight: 400,
        lineHeight: 1.57
      },
      subtitle1: {
        fontSize: '1rem',
        fontWeight: 500,
        lineHeight: 1.75
      },
      subtitle2: {
        fontSize: '0.875rem',
        fontWeight: 500,
        lineHeight: 1.57
      },
      overline: {
        fontSize: '0.75rem',
        fontWeight: 600,
        letterSpacing: '0.5px',
        lineHeight: 2.5,
        textTransform: 'uppercase'
      },
      caption: {
        fontSize: '0.75rem',
        fontWeight: 400,
        lineHeight: 1.66
      },
      h1: {
        fontWeight: 700,
        fontSize: '3.5rem',
        lineHeight: 1.375
      },
      h2: {
        fontWeight: 700,
        fontSize: '3rem',
        lineHeight: 1.375
      },
      h3: {
        fontWeight: 700,
        fontSize: '2.25rem',
        lineHeight: 1.375
      },
      h4: {
        fontWeight: 700,
        fontSize: '2rem',
        lineHeight: 1.375
      },
      h5: {
        fontWeight: 600,
        fontSize: '1.5rem',
        lineHeight: 1.375
      },
      h6: {
        fontWeight: 600,
        fontSize: '1.125rem',
        lineHeight: 1.375
      }
    },
    zIndex: {
      appBar: 1200,
      drawer: 1100
    }
  };

  
  // Colors

const neutral = {
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827'
  };
  
  const background = {
    default: '#0B0F19',
    paper: neutral[900]
  };
  
  const divider = '#2D3748';
  
  const primary = {
    main: '#7582EB',
    light: '#909BEF',
    dark: '#515BA4',
    contrastText: neutral[900]
  };
  
  const secondary = {
    main: '#10B981',
    light: '#3FC79A',
    dark: '#0B815A',
    contrastText: neutral[900]
  };
  
  const success = {
    main: '#14B8A6',
    light: '#43C6B7',
    dark: '#0E8074',
    contrastText: neutral[900]
  };
  
  const info = {
    main: '#2196F3',
    light: '#64B6F7',
    dark: '#0B79D0',
    contrastText: neutral[900]
  };
  
  const warning = {
    main: '#FFB020',
    light: '#FFBF4C',
    dark: '#B27B16',
    contrastText: neutral[900]
  };
  
  const error = {
    main: '#D14343',
    light: '#DA6868',
    dark: '#922E2E',
    contrastText: neutral[900]
  };
  
  const text = {
    primary: '#EDF2F7',
    secondary: '#A0AEC0',
    disabled: 'rgba(255, 255, 255, 0.48)'
  };
  
  export const darkThemeOptions = {
    components: {
      MuiAvatar: {
        styleOverrides: {
          root: {
            backgroundColor: neutral[500],
            color: '#FFFFFF'
          }
        }
      },
      MuiChip: {
        styleOverrides: {
          root: {
            '&.MuiChip-filledDefault': {
              backgroundColor: neutral[800],
              '& .MuiChip-deleteIcon': {
                color: neutral[500]
              }
            },
            '&.MuiChip-outlinedDefault': {
              borderColor: neutral[700],
              '& .MuiChip-deleteIcon': {
                color: neutral[700]
              }
            }
          }
        }
      },
      MuiInputBase: {
        styleOverrides: {
          input: {
            '&::placeholder': {
              opacity: 1,
              color: text.secondary
            }
          }
        }
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: divider
          }
        }
      },
      MuiMenu: {
        styleOverrides: {
          paper: {
            borderColor: divider,
            borderStyle: 'solid',
            borderWidth: 1
          }
        }
      },
      MuiPopover: {
        styleOverrides: {
          paper: {
            borderColor: divider,
            borderStyle: 'solid',
            borderWidth: 1
          }
        }
      },
      MuiSwitch: {
        styleOverrides: {
          switchBase: {
            color: neutral[700]
          },
          track: {
            backgroundColor: neutral[500],
            opacity: 1
          }
        }
      },
      MuiTableCell: {
        styleOverrides: {
          root: {
            borderBottom: `1px solid ${divider}`
          }
        }
      },
      MuiTableHead: {
        styleOverrides: {
          root: {
            backgroundColor: neutral[800],
            '.MuiTableCell-root': {
              color: neutral[300]
            }
          }
        }
      }
    },
    palette: {
      action: {
        active: neutral[400],
        hover: 'rgba(255, 255, 255, 0.04)',
        selected: 'rgba(255, 255, 255, 0.08)',
        disabledBackground: 'rgba(255, 255, 255, 0.12)',
        disabled: 'rgba(255, 255, 255, 0.26)'
      },
      background,
      divider,
      error,
      info,
      mode: 'dark',
      neutral,
      primary,
      secondary,
      success,
      text,
      warning
    },
    shadows: [
      'none',
      '0px 1px 2px rgba(0, 0, 0, 0.24)',
      '0px 1px 2px rgba(0, 0, 0, 0.24)',
      '0px 1px 4px rgba(0, 0, 0, 0.24)',
      '0px 1px 5px rgba(0, 0, 0, 0.24)',
      '0px 1px 6px rgba(0, 0, 0, 0.24)',
      '0px 2px 6px rgba(0, 0, 0, 0.24)',
      '0px 3px 6px rgba(0, 0, 0, 0.24)',
      '0px 4px 6px rgba(0, 0, 0, 0.24)',
      '0px 5px 12px rgba(0, 0, 0, 0.24)',
      '0px 5px 14px rgba(0, 0, 0, 0.24)',
      '0px 5px 15px rgba(0, 0, 0, 0.24)',
      '0px 6px 15px rgba(0, 0, 0, 0.24)',
      '0px 7px 15px rgba(0, 0, 0, 0.24)',
      '0px 8px 15px rgba(0, 0, 0, 0.24)',
      '0px 9px 15px rgba(0, 0, 0, 0.24)',
      '0px 10px 15px rgba(0, 0, 0, 0.24)',
      '0px 12px 22px -8px rgba(0, 0, 0, 0.24)',
      '0px 13px 22px -8px rgba(0, 0, 0, 0.24)',
      '0px 14px 24px -8px rgba(0, 0, 0, 0.24)',
      '0px 20px 25px rgba(0, 0, 0, 0.24)',
      '0px 25px 50px rgba(0, 0, 0, 0.24)',
      '0px 25px 50px rgba(0, 0, 0, 0.24)',
      '0px 25px 50px rgba(0, 0, 0, 0.24)',
      '0px 25px 50px rgba(0, 0, 0, 0.24)'
    ]
  };
  

export const createTheme = (config) => {
  let theme = createMuiTheme(baseThemeOptions,   
    darkThemeOptions,
    {
      palette: {
        background: {
          default:  "#0B0F19",
        }
      },
      direction: config.direction
    }    
);

  if (config.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }

  return theme;
};
