import '@/styles/globals.css'
import Context from '@/context/context';
import NextNProgress from 'nextjs-progressbar';
export default function App({ Component, pageProps }) {
   return (
      <Context>
         <div className='bg-white'>
         <NextNProgress color='#46a999' height={2} />
            <Component {...pageProps} />
         </div>
      </Context>
   );
}
