import { Outlet } from "react-router";
import { Header } from "../components/Header";

export const LayoutPage = () => {
    return (
        <>
            <Header />

            <main>
                <section id="main-content">
                    <Outlet />
                </section>
            </main>
        </>
    );
}