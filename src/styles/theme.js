const theme = {
  $black: '#191919',
  $darkGray: '#73737d',
  $white: '#fff',
  $mainColor: '#0059ff',
  $border: '#aaa',
  flex: ($justify = null, $align = null, $direction = null) => ({
    display: 'flex',
    'flex-direction': $direction,
    'justify-content': $justify,
    'align-items': $align,
  }),
  fixed: ($zIndex = 1) => ({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    'z-index': $zIndex,
  }),
};

export default theme;
