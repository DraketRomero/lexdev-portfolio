import type { RouteObject } from 'react-router';
import { HomePage } from '../pages/HomePage';
import { LayoutPage } from '../pages/LayoutPage';
import { ContactPage } from '../pages/ContactPage';

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
                path: 'resume',
                element: <p style={{ color: "white" }}>Resume</p>
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
                element: <ContactPage />
            },
        ]
    }
];