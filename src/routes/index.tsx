import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Collection from 'pages/Collection';
import { useSelector } from 'react-redux';
import { selectCategories } from 'store/webContent';
import generatePath from 'util/generatePath';

interface props {}

const RootRouter: React.FC<props> = (props) => {
  const titles = useSelector(selectCategories());
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Collection title={titles[0]} />} />
          {titles.map((title) => (
            <Route
              key={`r-${title}`}
              path={generatePath(title)}
              element={<Collection title={title} />}
            />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RootRouter;
