//npx tailwindcss init 'fileName' --full
//above command generate the full Config. file

module.exports = {
  content: ["*"],
  theme: {
    // if i put any class like fontSize directly inside theme and not extend, i will overide the class.
    screens: {
      xsm: '500px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      // Can't add smaller breakpoints in screens in extend as the custom xsm will 
      // come after all other pre-defined class and no effect will come to our 
      // file if we use xsm, sm, md,etc togther. Only xsm effect will be there.
      //  So add all in the theme direclty with custom breakpoints. But for larger 
      // breakpoints we can add in extend. Means the breakpoints above custom breakpoints 
      // (if any) will not work until its in theme.
      // screens: {
      //   xsm: '500px'
      // },
      spacing:{
        13: '3.25rem' //we can also do 13: '13px', but to maintain consistency as other margin are in rem so I will use rem here too.
      },
      fontSize: {
        '10xl': ['9rem', { lineHeight: '1.2' }],
      }
    },
  },
  plugins: [],
}
