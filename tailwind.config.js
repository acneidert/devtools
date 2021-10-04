module.exports = {
    theme: {
      extend: {
        colors: require('daisyui/colors'),
      },
    },
    plugins: [
      require('daisyui'),
    ],
    daisyui: {
      themes: [
        {
          'light_nullstack': {
            'primary': '#df498c',
            'primary-focus': '#db2777',
            'primary-content': '#ffffff',
            'secondary': '#3e4b60',
            'secondary-focus': '#35405a',
            'secondary-content': '#ffffff',
            'accent': '#3f73d5',
            'accent-focus': '#345ead',
            'accent-content': '#ffffff',
            'neutral': '#111827',
            'neutral-focus': '#313f5e',
            'neutral-content': '#ffffff',
            'base-100': '#111827',
            'base-200': '#1f2c47',
            'base-300': '#2a5493',
            'base-content': '#fff5f5',
            'info': '#2094f3',
            'success': '#009485',
            'warning': '#ff9900',
            'error': '#ff5724',
          },
        },
        {
          'dark_nullstack': {
            'primary': '#df498c',
            'primary-focus': '#db2777',
            'primary-content': '#ffffff',
            'secondary': '#3e4b60',
            'secondary-focus': '#35405a',
            'secondary-content': '#ffffff',
            'accent': '#3f73d5',
            'accent-focus': '#345ead',
            'accent-content': '#ffffff',
            'neutral': '#111827',
            'neutral-focus': '#313f5e',
            'neutral-content': '#ffffff',
            'base-100': '#ffffff',
            'base-200': '#c2c2c2',
            'base-300': '#808080',
            'base-content': '#262626',
            'info': '#2094f3',
            'success': '#009485',
            'warning': '#ff9900',
            'error': '#ff5724',
          },
        },
      ],
    },

  }