import { Route, Routes } from 'react-router-dom';

import { DefaultLayout } from './layouts/DefaultLayout';
import { Blog } from './pages/Blog';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Blog />} />
      </Route>
    </Routes>
  );
}