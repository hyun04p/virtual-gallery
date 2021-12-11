import Landing from './Landing';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Collection from './Collection';

interface props {}

const RootRouter: React.FC<props> = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="collection" element={<Collection />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RootRouter;
