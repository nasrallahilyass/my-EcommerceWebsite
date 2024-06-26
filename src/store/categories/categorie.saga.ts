// Moving the fetchCategoriesAsync function from thunk to saga:
import { takeLatest, call, put, all } from "typed-redux-saga";
import {getCategoriesAndDocuments} from '../../utils/firebase/firebase';
import {fetchCategoriesSuccess, fetchCategoriesFailure} from './categorie.action';
import {CATEGORIES_ACTION_TYPES} from './categorie.types';


export function* fetchCategoriesAsync() {
    try {
        const categoriesArray = yield* call(getCategoriesAndDocuments, 'categories' );
        yield* put(fetchCategoriesSuccess(categoriesArray));
    } catch (error) {
        yield* put(fetchCategoriesFailure(error as Error))
    }

}

export function* onFetchCategories() {
    yield* takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync)

}

export function* categoriesSaga() {
    yield* all([call(onFetchCategories)])

}
