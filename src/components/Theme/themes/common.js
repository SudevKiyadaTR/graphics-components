/** @type {Omit<import('../@types/component').Theme, "colour">} */
export default {
  font: {
    family: {
      serif: 'freight-book, serif',
      'sans-serif': 'Knowledge, sans-serif',
      monospace:
        'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
      hed: 'var(--theme-font-family-sans-serif)',
      subhed: 'var(--theme-font-family-sans-serif)',
      body: 'var(--theme-font-family-serif)',
      note: 'var(--theme-font-family-sans-serif)',
    },
    size: {
      xxs: 'clamp(0.79rem, -0.2vw + 0.83rem, 0.67rem)',
      xs: 'clamp(0.89rem, -0.08vw + 0.91rem, 0.84rem)',
      sm: 'clamp(1rem, 0.08vw + 0.98rem, 1.05rem)',
      base: 'clamp(1.13rem, 0.31vw + 1.06rem, 1.31rem)',
      lg: 'clamp(1.27rem, 0.63vw + 1.14rem, 1.64rem)',
      xl: 'clamp(1.42rem, 1.04vw + 1.21rem, 2.05rem)',
      '2xl': 'clamp(1.6rem, 1.6vw + 1.28rem, 2.56rem)',
      '3xl': 'clamp(1.8rem, 2.34vw + 1.33rem, 3.2rem)',
      '4xl': 'clamp(2.03rem, 3.3vw + 1.37rem, 4.01rem)',
      '5xl': 'clamp(2.28rem, 4.54vw + 1.37rem, 5.01rem)',
      '6xl': 'clamp(2.57rem, 6.15vw + 1.33rem, 6.26rem)',
    },
  },
};
