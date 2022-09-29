export const theme = {
  border: {
    solid: (color: string) => `0.1rem solid ${color}`
  },
  font: {
    family:
      "Poppins, -apple-system, Roboto, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    regular: 400,
    medium: 500,
    bold: 700,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem',
      huge: '5.2rem'
    }
  },
  colors: {
    primary: {
      lightGrey: '#f0f2f5'
    },
    secondary: {
      blue: '#A9DADF'
    },
    neutral: {
      black: '#000',
      grey: '#ccc',
      extraLightGrey: '#9E9E9E',
      white: '#fff',
      red: '#e52e4d',
      blueLight: '#6933ff',
      green: '#33cc95'
    },
    shades: {
      black: (opacity: number) => `rgba(0, 0, 0, ${opacity})`,
      darkGrey: (opacity: number) => `rgba(105, 105, 105, ${opacity})`,
      white: (opacity: number) => `rgba(255, 255, 255, ${opacity})`
    }
  },
  spacings: {
    xxxsmall: '0.4rem',
    xxsmall: '0.8rem',
    xsmall: '1.5rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out',
    slow: '1s ease-in-out'
  }
}
