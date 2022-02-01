import Head from 'next/head'
import styles from '../styles/Layout.module.css';

const Layout = ({children}) => {
  return <>
    <Head>
        <title>Gastos mensuales</title>
        <meta name="description" content="aplicacion para llevar gastos mensuales" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    {children}
    <footer className={styles.footer}>
        Jaime Irazabal
    </footer>
  </>;
};

export default Layout;
