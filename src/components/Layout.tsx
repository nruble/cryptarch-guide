import { Outlet, ScrollRestoration } from "react-router-dom"
import Header from "./Header/Header.tsx"
import Footer from "./Footer/Footer.tsx"

export default function Layout() {
    return (
        <div className="site-wrapper">
            <ScrollRestoration />
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}