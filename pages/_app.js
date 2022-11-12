import '../styles/globals.css'
import { DataLayer } from '../DataLayer'
import reducer,{ initialState } from '../reducer'

function MyApp({ Component, pageProps }) {
  return (
     <DataLayer initialState={initialState} reducer={reducer}>
      <Component {...pageProps} />
     </DataLayer>
  )
}

export default MyApp
