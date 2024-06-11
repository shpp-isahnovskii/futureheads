function writingMode({ addUtilities }) {
  const newUtilities = {
    '.horizontal-tb': {
      writingMode: 'horizontal-tb',
    },
    '.vertical-rl': {
      writingMode: 'vertical-rl',
    },
    '.vertical-lr': {
      writingMode: 'vertical-lr',
    },
  };
  addUtilities(newUtilities);
}

export default writingMode;
