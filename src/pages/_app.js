import MainLayout from '/src/layout/index.jsx';
import '@/styles/globals.css';
import '/src/styles/general.scss'

export default function App({ Component, pageProps }) {
    return (
        <MainLayout>
            <Component {...pageProps} />
        </MainLayout>
    );
}
