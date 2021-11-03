export default function getColorFromTheme(theme, color) {
  try {
    switch (color) {
      case 'textSecondary':
        return theme.palette.text.secondary;
      case 'textPrimary':
        return theme.palette.text.primary;
      case 'primary':
      case 'secondary':
        return theme.palette[color].main;
      case 'contrastPrimary':
        return theme.palette.primary.contrastText;
      case 'contrastSecondary':
        return theme.palette.secondary.contrastText;
      case 'white':
      case 'black':
        return theme.palette.common[color];
      case 'alert':
      case 'warning':
      case 'urgent':
      case 'mediumGrey':
      case 'lightGrey':
      case 'success':
      case 'darkGrey':
      case 'darkOrange':
      case 'darkGreen':
      case 'modernBlack':
      case 'backgroundColor':
        if (theme.palette[color]) {
          return theme.palette[color].main;
        }
        return theme.palette.primary.main;
      default:
        return color;
    }
  } catch (e) {
    return color;
  }
}
