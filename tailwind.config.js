module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    rtl: false,
    themes: [
      {
        'mytheme': {
          'primary': '#3F3F46',
          'primary-focus': '#3F3F46',
          'primary-content': '#ffffff',
          'secondary': '#3F3F46',
          'secondary-focus': '#3F3F46',
          'secondary-content': '#ffffff',
          'accent': '#3F3F46',
          'accent-focus': '#3F3F46',
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
