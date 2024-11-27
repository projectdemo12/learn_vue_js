<script setup lang="ts">
import { useFormStore } from '../stores/formStore'

const formStore = useFormStore()

const handleSubmit = () => {
  // Here you would typically send the data to your backend
  console.log('Form submitted:', formStore.formData)
  alert('Form submitted successfully!')
}
</script>

<template>
  <div class="step-container">
    <h2>Step 3: Summary</h2>
    <div class="summary">
      <h3>Personal Information</h3>
      <p><strong>Name:</strong> {{ formStore.formData.name }}</p>
      <p><strong>Email:</strong> {{ formStore.formData.email }}</p>

      <h3>Address Information</h3>
      <p><strong>Street:</strong> {{ formStore.formData.street }}</p>
      <p><strong>City:</strong> {{ formStore.formData.city }}</p>
      <p><strong>ZIP Code:</strong> {{ formStore.formData.zipCode }}</p>
    </div>

    <div class="button-group">
      <button type="button" @click="formStore.previousStep">Previous</button>
      <button type="button" @click="handleSubmit" class="submit-button">Submit</button>
    </div>
  </div>
</template>

<style scoped>
.step-container {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
}

.summary {
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 4px;
  margin-bottom: 20px;
}

h3 {
  margin-top: 0;
  color: #42b883;
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

.submit-button {
  background-color: #3498db;
}

.submit-button:hover {
  background-color: #2980b9;
}
</style>