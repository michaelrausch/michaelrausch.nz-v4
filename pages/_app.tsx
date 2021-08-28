// import 'tailwindcss/tailwind.css'
import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.css'

import { ParallaxProvider } from 'react-scroll-parallax';
import { DefaultSeo } from 'next-seo';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'next-auth/client';
import { Banner } from '../components/home/Banner';
import dynamic from 'next/dynamic';
import AnimatedCursor from 'react-animated-cursor';

const AnimatedCursorNoSSR = dynamic<AnimatedCursor>(() => import("react-animated-cursor"), {
  ssr: false
});

function MyApp({ Component, pageProps }) {
  

  return (
    <>
      <AnimatedCursorNoSSR 
        innerSize={10}
        outerSize={50}
        color='255, 225, 255'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={2}
      />

      <DefaultSeo
        titleTemplate="Michael Rausch | %s"
        description="A Christchurch based software engineer who specializes in creating websites and apps for small and medium-sized businesses"
        canonical="https://michaelrausch.nz"
        openGraph={{
          type: 'website',
          locale: 'en_NZ',
          url: 'https://michaelrausch.nz',
          site_name: 'Michael Rausch | Web and App Development',
        }}
      />

      <ToastContainer
        position="bottom-right"
        autoClose={7000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        className="text-black"
      />


      <Provider>
        <ParallaxProvider>
          <Component {...pageProps} />
        </ParallaxProvider>
      </Provider>
    </>
  )
}

export default MyApp
