# Vue 3 Multi-Step Form with Validation

This project demonstrates a beginner-friendly implementation of a multi-step form using Vue 3, TypeScript, and Pinia for state management. The form includes validation and provides a smooth user experience with clear feedback.

## Features

- Three-step form process
- Form validation using Vuelidate
- State management with Pinia
- Progress indicator
- Responsive design
- TypeScript support

## Project Structure

- `src/stores/formStore.ts`: Central state management using Pinia
- `src/components/`:
  - `StepOne.vue`: Personal information form (name and email)
  - `StepTwo.vue`: Address information form
  - `StepThree.vue`: Summary and submission
- `App.vue`: Main application component with progress tracking

## Key Learning Points

1. **Vue 3 Composition API**
   - Using `setup` script with TypeScript
   - Reactive state management
   - Component composition

2. **Form Validation**
   - Implementation of form validation using Vuelidate
   - Real-time validation feedback
   - Custom validation rules

3. **State Management**
   - Centralized state management with Pinia
   - Sharing state between components
   - Type-safe state management

4. **Component Communication**
   - Props and events
   - Component lifecycle
   - Dynamic component rendering

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Form Flow

1. **Step 1**: User enters name and email
   - Validates for required fields
   - Email format validation

2. **Step 2**: User enters address information
   - Street address
   - City
   - ZIP code

3. **Step 3**: Review and submit
   - Displays all entered information
   - Submit button to finalize

## Best Practices Demonstrated

- Modular component structure
- Type safety with TypeScript
- Form validation
- Responsive design
- Clear user feedback
- Clean and maintainable code