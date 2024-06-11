function animationDuration({ matchUtilities, addUtilities }) {
  matchUtilities({
    'animation-duration': (value) => {
      return {
        'animation-duration': value,
      };
    },
  });
  addUtilities({
    '.animation-paused': { 'animation-play-state': 'paused' },
  });
}

export default animationDuration;