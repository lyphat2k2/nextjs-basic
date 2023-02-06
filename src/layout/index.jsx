import Footer from '../components/footer'
import Header from '../components/header'

function MainLayout({ children }) {
  return (
    <>
        <Header />
        <main>{children}</main>
        <Footer />
    </>
  )
}

export default MainLayout