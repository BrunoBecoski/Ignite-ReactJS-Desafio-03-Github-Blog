import { Route, Routes } from 'react-router-dom';

import { DefaultLayout } from './layouts/DefaultLayout';
import { Blog } from './pages/Blog';
import { Repository } from './pages/Repository';
import { Post } from './pages/Post';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Blog />} />
        <Route path="/repository" element={<Repository />} />
        <Route path="/post">
          <Route path=":issueId" element={<Post />} />
        </Route>
      </Route>
    </Routes>
  );
}