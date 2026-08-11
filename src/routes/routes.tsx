import type { RouteObject } from 'react-router';
import { HomePage } from '../pages/HomePage';
import { LayoutPage } from '../pages/LayoutPage';

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <LayoutPage />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'about-me',
                element: <p style={{ color: "white" }}>Nnenuco</p>
            },
            {
                path: 'projects',
                element: <>Proyects</>
            },
            {
                path: 'experience',
                element: <>Experience</>
            },
            {
                path: 'contact',
                element: <>Contac</>
            },
        ]
    }
];