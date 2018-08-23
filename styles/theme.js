const screenXsMin = 480
const screenSmMin = 768
const screenMdMin = 992
const screenLgMin = 1400
const lgGridMargin = 50
const screenLgWidth = screenLgMin - 2 * lgGridMargin

export default {
  screenXsMin: screenXsMin,
  screenSmMin: screenSmMin,
  screenMdMin: screenMdMin,
  screenLgMin: screenLgMin,
  screenXsMax: screenSmMin - 1,
  screenSmMax: screenMdMin - 1,
  screenMdMax: screenLgMin - 1,
  screenLgWidth: screenLgWidth,
  xsGridMargin: 10,
  smGridMargin: 20,
  mdGridMargin: 30,
  lgGridMargin: lgGridMargin,
  fontFamily: 'Avenir Next, sans-serif',
  borderRadius: 10,
  colors: {
    darkGrey: '#2D2E33',
    grey: '#32393F',
    lightGrey: '#929CA5',
    green: '#54C18F',
    white: 'white',
    red: 'red',
  },
  spaces: {
    extraSmall: 5,
    small: 10,
    medium: 20,
    extraLarge: 75,
  },
  fontSizes: {
    large: 20,
    medium: 18,
    small: 14,
  },
  header: {
    height: 100,
  },
  footer: {
    height: 50,
  },
  project: {
    width: 380,
    height: 160,
  },
}
