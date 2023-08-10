import '@/styles/globals.css'
   //  {/* <div className='bg-gradient-to-br from-[#FEFDFC] to-[#F8F7EE]'> */}
export default function App({ Component, pageProps }) {
  return (
    <div className='bg-white'>
       <Component {...pageProps} />
      </div>
   );
}
