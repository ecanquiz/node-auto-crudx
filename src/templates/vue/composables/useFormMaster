import { onMounted, reactive, ref, watch, computed } from 'vue'
import useHttp from "@/composables/useHttp";
import { ascBubble } from "@/utils/helpers";
import { useVuelidate } from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";
import * as CategoryService from "@/modules/Product/services/CategoryService";
import * as MarkService from "@/modules/Product/services/MarkService";
import * as CommonService from "@/modules/Product/services/CommonService";
import type {
  Product,
  Category,
  Mark,
  MeasureUnit,
  MeasureUnitType
} from "../../types/Product";

export default (product: Product) => {
  const categories = ref<Category[]>()
  const marks = ref<Mark[]>()
  const measureUnitTypes = ref<MeasureUnitType[]>()
  const measureUnits = ref<MeasureUnit[]>()

  const form = reactive({
    category_id: product.category_id,
    mark_id: product.mark_id,
    measure_unit_type_id: product.measure_unit_type_id,
    measure_unit_id: product.measure_unit_id,
    name: product.name
  })

  const {
    errors,
    pending,

    getError
  } = useHttp()

  onMounted(() => {
    pending.value = true
    CategoryService.getCategoriesSelect()
      .then((response) => {
        categories.value = response.data.map(function (c) {
          return {
            id: c.id,
            name: c.family
          }
        }).sort(ascBubble)
      })
      .catch((err) => {
        errors.value = getError(err)
      })
      .finally(() => {
        pending.value = false
      })

    pending.value = true
    MarkService.getMarksSelect()
      .then((response) => {
        marks.value = response.data.sort(ascBubble)
      })
      .catch((err) => {
        errors.value = getError(err)
      })
      .finally(() => {
        pending.value = false
      })

    pending.value = true
    CommonService.getMeasureUnitTypes()
      .then((response) => {
        measureUnitTypes.value = response.data.map(function (mut) {
          return {
            id: mut.id,
            name: mut.description
          }
        }).sort(ascBubble)
      })
      .catch((err) => {
        errors.value = getError(err)
      })
      .finally(() => {
        pending.value = false;
      })

    if (product.measure_unit_type_id)
      getMeasureUnits(product.measure_unit_type_id)
  })

  const getMeasureUnits = async (measureUnitTypeId) => {
    pending.value = true
    CommonService.getMeasureUnits(measureUnitTypeId)
      .then((response) => {
        measureUnits.value = response.data.map(function (mu) {
          return {
            id: mu.id,
            name: mu.description
          }
        }).sort(ascBubble)
        if (!measureUnits.value.some(item => item.id === form.measure_unit_id)) {
          form.measure_unit_id = ""
        }
      })
      .catch((err) => {
        errors.value = getError(err)
      })
      .finally(() => {
        pending.value = false;
      })
  }

  const initMeasureUnits = () => {
    form.measure_unit_id = ""
    measureUnits.value = []
  }

  const rules = computed(() => {
    return {
      category_id: {
        required: helpers.withMessage("Campo requerido", required),
      },
      mark_id: {
        required: helpers.withMessage("Campo requerido", required),
      },
      measure_unit_type_id: {
        required: helpers.withMessage("Campo requerido", required),
      },
      measure_unit_id: {
        required: helpers.withMessage("Campo requerido", required),
      },
      name: {
        required: helpers.withMessage("Campo requerido", required),
      },
    };
  });

  const v$ = useVuelidate(rules, form);

  watch(
    () => form.measure_unit_type_id,
    (newMeasureUnitType, oldMeasureUnitType) => {
      newMeasureUnitType === ""
        ? initMeasureUnits()
        : getMeasureUnits(form.measure_unit_type_id)
    },
    { immediate: false, deep: true },
  )

  return {
    categories,
    form,
    marks,
    measureUnitTypes,
    measureUnits,
    errors,
    pending,

    v$      
  }
}
