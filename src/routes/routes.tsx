import type { RouteObject } from 'react-router';
import { HomePage } from '../pages/HomePage';
import { LayoutPage } from '../pages/LayoutPage';
import { ContactPage } from '../pages/ContactPage';
import { ResumePage } from '../pages/ResumePage';
import { AboutMePage } from '../pages/AboutMePage';
import { ExperiencePage } from '../pages/ExperiencePage';

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
                element: <AboutMePage />
            },
            {
                path: 'projects',
                element: <>Proyects</>
            },
            {
                path: 'experience',
                element: <ExperiencePage />
            },
            {
                path: 'contact',
                element: <ContactPage />
            },
        ]
    }
];
