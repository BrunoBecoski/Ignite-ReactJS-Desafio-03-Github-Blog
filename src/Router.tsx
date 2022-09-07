import { Route, Routes } from 'react-router-dom';

import { DefaultLayout } from './layouts/DefaultLayout';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" />
        <Route path=":user" />
        <Route path=":user/:repository" />
        <Route path=":user/:repository/:issue" />
      </Route>
    </Routes>
  );
}