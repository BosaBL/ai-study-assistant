// src/router.jsx
import {
  createRootRoute,
  createRoute,
  createRouter,
} from '@tanstack/react-router';

import MainLayout from './components/MainLayout';
import Home from './pages/Home';
import Upload from './pages/Upload';
import Summary from './pages/Summary';

const rootRoute = createRootRoute({
  component: MainLayout,
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
});

const uploadRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/upload',
  component: Upload,
});

const summaryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/summary',
  component: Summary,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  uploadRoute,
  summaryRoute,
]);

export const router = createRouter({ routeTree });