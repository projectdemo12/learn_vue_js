<script setup lang="ts">
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { useFormStore } from '../stores/formStore'
import { computed } from 'vue'

const formStore = useFormStore()

// Define validation rules
const rules = {
  street: { required },
  city: { required },
  zipCode: { required }
}

// Create a computed property for the form data
const formData = computed(() => ({
  street: formStore.formData.street,
  city: formStore.formData.city,
  zipCode: formStore.formData.zipCode
}))

// Initialize vuelidate
const v$ = useVuelidate(rules, formData)

// Handle form submission
const handleSubmit = async () => {
  const isValid = await v$.value.$validate()
  if (isValid) {
    formStore.nextStep()
  }
}
</script>

<template>
  <div class="step-container">
    <h2>Step 2: Address Information</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="street">Street Address:</label>
        <input
          id="street"
          v-model="formStore.formData.street"
          type="text"
          :class="{ 'error': v$.street.$error }"
        />
        <div class="error-message" v-if="v$.street.$error">
          Street address is required
        </div>
      </div>

      <div class="form-group">
        <label for="city">City:</label>
        <input
          id="city"
          v-model="formStore.formData.city"
          type="text"
          :class="{ 'error': v$.city.$error }"
        />
        <div class="error-message" v-if="v$.city.$error">
          City is required
        </div>
      </div>

      <div class="form-group">
        <label for="zipCode">ZIP Code:</label>
        <input
          id="zipCode"
          v-model="formStore.formData.zipCode"
          type="text"
          :class="{ 'error': v$.zipCode.$error }"
        />
        <div class="error-message" v-if="v$.zipCode.$error">
          ZIP code is required
        </div>
      </div>

      <div class="button-group">
        <button type="button" @click="formStore.previousStep">Previous</button>
        <button type="submit">Next</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.step-container {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

input.error {
  border-color: #ff4444;
}

.error-message {
  color: #ff4444;
  font-size: 0.8em;
  margin-top: 5px;
}

.button-group {
  display: flex;
  gap: 10px;
  justify-content: space-between;
}

button {
  background-color: #42b883;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #3aa876;
}
</style>