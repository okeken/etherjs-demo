import '../styles/globals.css'
import "tailwindcss/dist/base.min.css";

function MyApp({ Component, pageProps }) {
  return <>

  <Component {...pageProps} />
   
  </>
}

export default MyApp


//https://dev.to/devsmranjan/styling-react-components-styled-components-twin-macro-tailwind-css-2-0-3cnk
//https://blog.logrocket.com/intro-to-twin/