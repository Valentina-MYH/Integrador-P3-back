const productValidator = (request, response, next) => {
    const { name, precio, stock, marca, descripcion, categoria, free_shipping, edadDesde, edadHasta, foto } = request.body;
    const validationArray = [];
    if(typeof nombre !== "string") validationArray.push('Name must be string.')
    if(typeof marca !== "string") validationArray.push('Brand must be string.')
    if(stock < 0) validationArray.push('Stock must be a positive number')
    if(typeof descripcion !== "string") validationArray.push('Short description must be string.')
    if(typeof categoria !== "string") validationArray.push('Category must be string.')
    if(typeof free_shipping !== "boolean") validationArray.push('Free shipping must be boolean.')
    if(typeof edadDesde !== "number") validationArray.push('Age from must be number.')
    if(typeof edadHasta !== "number") validationArray.push('Age to must be number.')
    if(typeof foto !== "string") validationArray.push('Photo must be string.')
    if(typeof precio !== "number") validationArray.push('Price must be number')
    
    
    if(validationArray.length > 0) {
        return response.status(400).json({ message: validationArray.join(' ') })
    }
      next();
  };
  
export default productValidator ;