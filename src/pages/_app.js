import '@/styles/globals.css'
import Context from '@/context/context';
export default function App({ Component, pageProps }) {
   return (
      <Context>
         <div className='bg-white'>
            <Component {...pageProps} />
         </div>
      </Context>
   );
}
