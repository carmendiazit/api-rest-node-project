import productService  from '../services/products.services.js';


export const getAllProducts = async (req, res) => {
    res.status(200).json( await productService.getAllProducts());    
};


export const getProductById = async (req, res) => {
    const id = req.params.id;
    res.status(200).json(await productService.getProductById(id));    
};

export const saveProduct = async (req, res) => {
   const { name, price } = req.body;
    console.log(req.body);
    const savedProduct = await productService.saveProduct(req.body);    
    res.status(200).json(savedProduct);   
};

export const updateProduct = async (req, res) => {
   const id = req.params.id;
   const {name, price } = req.body;
   console.log(id, name, price);
   const savedProduct = await productService.updateProduct(id, req.body);    
   res.status(200).json(savedProduct);   
};

export const deleteProduct = async (req, res) => {     
    const id = req.params.id;
    res.status(200).json(await productService.deleteProduct(id));    
};
