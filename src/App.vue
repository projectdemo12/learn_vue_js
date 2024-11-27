<script setup lang="ts">
import { useFormStore } from './stores/formStore'
import StepOne from './components/StepOne.vue'
import StepTwo from './components/StepTwo.vue'
import StepThree from './components/StepThree.vue'

const formStore = useFormStore()
</script>

<template>
  <div class="app-container">
    <div class="progress-bar">
      <div
        class="progress"
        :style="{ width: ((formStore.formData.currentStep - 1) * 50) + '%' }"
      ></div>
    </div>

    <div class="steps-indicator">
      <div
        v-for="step in 3"
        :key="step"
        class="step"
        :class="{ 'active': formStore.formData.currentStep >= step }"
      >
        Step {{ step }}
      </div>
    </div>

    <component
      :is="formStore.formData.currentStep === 1 ? StepOne :
           formStore.formData.currentStep === 2 ? StepTwo : StepThree"
    />
  </div>
</template>

<style>
.app-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.progress-bar {
  width: 100%;
  height: 4px;
  background-color: #eee;
  margin-bottom: 20px;
  border-radius: 2px;
  overflow: hidden;
}

.progress {
  height: 100%;
  background-color: #42b883;
  transition: width 0.3s ease;
}

.steps-indicator {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
}

.step {
  flex: 1;
  text-align: center;
  padding: 10px;
  background-color: #eee;
  margin: 0 5px;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.step.active {
  background-color: #42b883;
  color: white;
}
</style>