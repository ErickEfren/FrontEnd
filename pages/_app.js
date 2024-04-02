import "@/styles/globals.css";
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css'
import TabNavIndex from "./components/TabNavIndex";

export default function App({ Component, pageProps }) {
  return <Theme appearance="light">
    <Component {...pageProps} />
  </Theme>
}
