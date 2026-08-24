import { createBrowserRouter, RouterProvider } from "react-router";
import type { Employ } from "./context/useContext";
import { EmployContext } from "./context/context";
import { routes } from "./routes/routes";

const router = createBrowserRouter(routes)

export const MainProvider = () => {
    const employ: Employ = {
        name: 'Diego Romero',
        alias: 'DraketDev',
        location: 'Puebla, MX',
        phone: '+52 22 26 13 45 31',
        email: 'draketromero@gmail.com',
        social_media: [
            {
                name: 'Github',
                url: 'https://github.com/DraketRomero',
            },
            {
                name: 'LinkedIn',
                url: 'https://www.linkedin.com/in/rdiego-romero/'
            },
        ],
    };

    return (
        <EmployContext.Provider value={employ}>
            <RouterProvider router={router} />
        </EmployContext.Provider>
    )
}