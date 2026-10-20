export const theme = {
  colors: {
    background: '#F4F8FC',
    card: '#FFFFFF',
    titleText: '#092B55',
    subtitleText: '#60758A',
    descriptionText: '#52677D',
    border: '#C7D7E8',
    error: '#D9342B',
    primary: '#0B66E4',
    badgeNew: '#0B66E4',
    badgeFavorite: '#E4A90B',
    badgeUnavailable: '#8A94A6',
  },
  spacing: {
    screenPadding: 20,
    gridGap: 12,
    cardPadding: 16,
    loginCardPadding: 24,
  },
  radius: {
    card: 18,
    input: 12,
    loginCard: 22,
  },
};

export const darkTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    background: '#0B1220',
    card: '#141C2C',
    titleText: '#F4F8FC',
    subtitleText: '#94A3B8',
    descriptionText: '#CBD5E1',
    border: '#2B3A55',
  },
};

export type AppTheme = typeof theme;