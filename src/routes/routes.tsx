import type { RouteObject } from 'react-router';
import { HomePage } from '../pages/HomePage';
import { LayoutPage } from '../pages/LayoutPage';
import { ContactPage } from '../pages/ContactPage';
import { ResumePage } from '../pages/ResumePage';

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
                path: 'skills-and-tools',
                element: <ResumePage />
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
