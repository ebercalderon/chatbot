module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        'mytheme': {
          'primary': '#a991f7',
          'primary-focus': '#8462f4',
          'primary-content': '#ffffff',

          'secondary': '#f6d860',
          'secondary-focus': '#f3cc30',
          'secondary-content': '#ffffff',

          'accent': '#E11D48',
          'accent-focus': '#2aa79b',
          'accent-content': '#ffffff',

          'neutral': '#3d4451',
          'neutral-focus': '#2a2e37',
          'neutral-content': '#ffffff',

          'base-100': '#ffffff',
          'base-200': '#f9fafb',
          'base-300': '#d1d5db',
          'base-content': '#1f2937',

          'info': '#2094f3',
          'success': '#009485',
          'warning': '#ff9900',
          'error': '#ff5724',
        },
      },
    ],
  },
}
