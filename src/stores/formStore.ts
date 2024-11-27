import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

// Define the interface for our form data
interface FormData {
  // Step 1 data
  name: string
  email: string
  // Step 2 data
  street: string
  city: string
  zipCode: string
  // Current step tracking
  currentStep: number
}

export const useFormStore = defineStore('form', () => {
  // Initialize form data with default values
  const formData = ref<FormData>({
    name: '',
    email: '',
    street: '',
    city: '',
    zipCode: '',
    currentStep: 1
  })

  // Computed property to check if current step is complete
  const isCurrentStepValid = computed(() => {
    switch (formData.value.currentStep) {
      case 1:
        return formData.value.name && formData.value.email
      case 2:
        return formData.value.street && formData.value.city && formData.value.zipCode
      default:
        return true
    }
  })

  // Method to move to next step
  function nextStep() {
    if (formData.value.currentStep < 3) {
      formData.value.currentStep++
    }
  }

  // Method to move to previous step
  function previousStep() {
    if (formData.value.currentStep > 1) {
      formData.value.currentStep--
    }
  }

  // Method to update form data
  function updateFormData(data: Partial<FormData>) {
    Object.assign(formData.value, data)
  }

  return {
    formData,
    isCurrentStepValid,
    nextStep,
    previousStep,
    updateFormData
  }
})