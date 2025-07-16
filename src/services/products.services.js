import productModel  from '../models/products.model.js';



const productService = {
  getAllProducts, 
  getProductById,
  saveProduct ,deleteProduct , updateProduct
}

export async function getAllProducts (){
 return await productModel.getAllProducts();
};

export async function getProductById (id){
 return await productModel.getProductById(id);
};
export async function saveProduct(data){
 return await productModel.saveProduct(data);
};
export async function deleteProduct(id){
 return await productModel.deleteProduct(id);
};

export async function updateProduct(id, data){
 return await productModel.updateProduct(id,data);
};

export default productService;
