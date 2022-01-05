import React from 'react';
import { Route, Routes } from 'react-router';
import Sitemap from './application/pages/sitemap/Sitemap';
import * as LearningSchool from './application/pages/learningSchool';

type TPartialViewModel = {};

interface IAppProps {}

const App: React.FC<IAppProps> = ({}) => {
  return (
    <Routes>
      <Route path={'/'} element={<Sitemap />} />
      <Route path={'learning-school'} element={<LearningSchool.Home />}>
        <Route path={'news'} element={<LearningSchool.News />} />
        <Route path={'menu'} element={<LearningSchool.Menu />} />
        <Route path={'contact'} element={<LearningSchool.Contact />} />
      </Route>
    </Routes>
  );
};

export default App;
