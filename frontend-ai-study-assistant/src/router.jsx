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
import HowItWorks from './pages/HowItWorks';

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
  path: '/summary/$id',
  component: Summary,
});

const howItWorksRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/how-it-works",
  component: HowItWorks,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  uploadRoute,
  summaryRoute,
  howItWorksRoute,
]);

export const router = createRouter({ routeTree });