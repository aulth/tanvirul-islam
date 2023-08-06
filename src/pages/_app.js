import '@/styles/globals.css'
export default function App({ Component, pageProps }) {
  return (
    <div className='bg-gradient-to-br from-[#FEFDFC] to-[#F8F7EE]'>
       <Component {...pageProps} />
      </div>
   );
}
