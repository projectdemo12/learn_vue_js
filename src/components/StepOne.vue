<script setup lang="ts">
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import { useFormStore } from '../stores/formStore'
import { computed } from 'vue'

// Get the form store
const formStore = useFormStore()

// Define validation rules
const rules = {
  name: { required },
  email: { required, email }
}

// Create a computed property for the form data
const formData = computed(() => ({
  name: formStore.formData.name,
  email: formStore.formData.email
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
    <h2>Step 1: Personal Information</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name:</label>
        <input
          id="name"
          v-model="formStore.formData.name"
          type="text"
          :class="{ 'error': v$.name.$error }"
        />
        <div class="error-message" v-if="v$.name.$error">
          Name is required
        </div>
      </div>

      <div class="form-group">
        <label for="email">Email:</label>
        <input
          id="email"
          v-model="formStore.formData.email"
          type="email"
          :class="{ 'error': v$.email.$error }"
        />
        <div class="error-message" v-if="v$.email.$error">
          Please enter a valid email address
        </div>
      </div>

      <button type="submit">Next</button>
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