import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { routes } from './routes/routes.tsx';
import './i18n/config';

const router = createBrowserRouter(routes)

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
)
