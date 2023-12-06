import { Routes, Route } from 'react-router-dom';

import CategoriesPreview from '../categories-preview/categories-preview.component';

import {ProductContainer} from './shop.styles';
import Category from '../category/category.component';

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category/>} />
    </Routes>
  );
};

export default Shop;