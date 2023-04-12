import Reflux from 'reflux';

const ProductActions = Reflux.createActions([
    'addProducts',
    'deleteProducts',
    'updateProduct',
    'getProducts',
]);

export default ProductActions;
