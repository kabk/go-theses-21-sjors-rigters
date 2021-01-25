

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        25: '6.25rem',
        25.5: '6.375rem',
      },

      colors: {
        sun: '#ffffff',
        sky: '#6eb4d2',
        grass: '#009182',
        dirt: '#624c43',
        cobblestone: '#75737d',
        gold: '#ffd801',
        lava: '#f26827',
        obsidian: '#46325c',
        void: '#000000',
      },

      fontFamily: {
        neue_haas_grotesk_ds: ["NeueHaasGroteskDisplay"],
        neue_haas_grotesk_tx: ["NeueHaasGroteskText"],
        times_new_roman_mt_std: ["TimesNewRomanMTStd"],
       },

       fontSize: {
        '5.5xl': ['3.375rem', { lineHeight: '1' }],
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
