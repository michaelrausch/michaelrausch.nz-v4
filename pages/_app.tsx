// import 'tailwindcss/tailwind.css'
import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.css'

import { DefaultSeo } from 'next-seo';
import { ToastContainer } from 'react-toastify';

function MyApp({ Component, pageProps }) {
  return (
    <>
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

      <Component {...pageProps}/>
    </>
  )
}

export default MyApp
