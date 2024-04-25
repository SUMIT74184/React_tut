import './NewPrduct.css'
import ProductForm from './ProductForm';
function NewProduct(){

  function saveProduct(product){
    console.log("i am inside the newProduct");
    console.log(product)

    props.PrintProductdata(product);
  }

  return (
    <div className='new-product'>
      <ProductForm onSaveProduct={saveProduct}/>
    </div>
  )
}

export default NewProduct;