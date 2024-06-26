import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { categoriesMapSelctor, selectCategoriesIsLoading } from '../../store/categories/categorie.selector';
import Spinner from '../../components/spinner/spinner.component';
import CategoryPreview from '../../components/category-preview/category-preview.component';

const CategoriesPreview = () => {
  const categoriesMap = useSelector(categoriesMapSelctor);
  const isLoading = useSelector(selectCategoriesIsLoading);

  return (
    <Fragment>
    {
      isLoading ? <Spinner /> : 
      Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })
    }
    </Fragment>
  );
};

export default CategoriesPreview;