import { onMounted, reactive, inject } from 'vue'
import { useRouter } from 'vue-router'
import useHttp from "@/composables/useHttp";
import ProductService from "@/modules/Product/services/ProductService";
import type { Product } from "../../types/Product";

export default (productId?: string) => {

  const { measureUnit, updateMeasureUnit } = inject<{
    measureUnit: string,
    updateMeasureUnit: (val: any) => void;
  }>('measureUnit')

  const router = useRouter();    

  const product:Product = reactive({  
    category_id: "",
    mark_id: "",
    measure_unit_type_id: "",
    measure_unit_id: "",
    name:""
  }) 

  const {  
    errors,
    pending,

    getError
  } = useHttp()
  
  onMounted(() => {
    if (productId) {
      pending.value = true
      ProductService.getProduct(productId)
        .then((response) => {
          product.category_id = response.data.category_id;
          product.mark_id = response.data.mark_id;
          product.measure_unit_type_id = response.data.measure_unit_type_id;
          product.measure_unit_id = response.data.measure_unit_id;
          product.name = response.data.name          
          updateMeasureUnit(response.data.measure_unit)
        })
        .catch((err) => {        
          errors.value = getError(err)
        })
        .finally(() => {
          pending.value = false;
        })
    }    
  })

  const insertProduct = async (product: Product) => {
    pending.value = true
    product.measure_unit = measureUnit
    return ProductService.insertProduct(product)
      .then((response) => {         
        alert( response.data.message )
        router.push( { path: `/products/edit/${response.data.product_id}` } )
      })
      .catch((err) => {                
        console.log( err.response.data )
        errors.value = getError(err)
      })
      .finally(() => {
        pending.value = false
      })
  }

  const updateProduct = async (product: Product, productId: string) => {
    pending.value= true
    product._method = 'PUT'
    product.measure_unit = 'measureUnit'    
    return ProductService.updateProduct(productId, product)
      .then((response) => {
        alert( response.data.message )
        //router.push( { path: '/products' } )
      })
      .catch((err) => {                
        console.log( err.response.data )
        errors.value = getError(err)
      })
      .finally(() => {
        pending.value = false
      })
  }
  
  const submit = (product: Product) => {
    !productId ? insertProduct (product)  : updateProduct(product, productId)
  }

  return {    
    product,
    errors,
    pending,        

    submit    
  }

}

