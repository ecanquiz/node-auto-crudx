import { computed, reactive, ref, watch } from 'vue'
import { useVuelidate } from "@vuelidate/core";
import { required, helpers, minValue } from "@vuelidate/validators";
import type { Presentation } from "../../types/Presentation";

export default (presentation: Presentation) => {  
  const form = reactive<Presentation>({
    id: presentation.id,
    sale_type: presentation.sale_type,
    int_cod: presentation.int_cod,
    bar_cod: presentation.bar_cod,
    stock_min: presentation.stock_min,
    stock_max: presentation.stock_max,
    price: presentation.price,
    status: presentation.status
  })

  const isOpenModal = ref(false)


  const rules = computed(() => {
    return {
      sale_type: { required: helpers.withMessage("Campo requerido", required) },
      int_cod: { required: helpers.withMessage("Campo requerido", required) },
      bar_cod: { required: helpers.withMessage("Campo requerido", required) },
      stock_min: {
        required: helpers.withMessage("Campo requerido", required),
        minValue: helpers.withMessage("El valor mínimo permitido es 1", minValue(1)) 
      },
      stock_max: {
        required: helpers.withMessage("Campo requerido", required),
        minValue: helpers.withMessage("El valor mínimo permitido es 1", minValue(1)) 
      },
      price: {
        required: helpers.withMessage("Campo requerido", required),
        minValue: helpers.withMessage("El valor mínimo permitido es 1", minValue(1))
      },
      status: { required: helpers.withMessage("Campo requerido", required) }
    };
  });

  const v$ = useVuelidate(rules, form);
  
  watch(presentation, (newPresentation) => {
    form.sale_type = newPresentation.sale_type
    form.int_cod = newPresentation.int_cod
    form.bar_cod = newPresentation.bar_cod
    form.stock_min = newPresentation.stock_min
    form.stock_max = newPresentation.stock_max
    form.price = newPresentation.price
    form.status = newPresentation.status
  })

  return {
    form,
    
    v$ 
  }
}
