<script lang="ts">
  export let type: string = 'text';
  export let label: string = '';
  export let value: string = '';
  export let placeholder: string = '';
  export let disabled: boolean = false;
  export let required: boolean = false;
  export let error: string = '';
  export let helperText: string = '';
  
  export type InputProps = {
    type: string;
    label: string;
    value: string;
    placeholder: string;
    disabled: boolean;
    required: boolean;
    error: string;
    helperText: string;
  };
  
  // Forward the input event
  function handleInput(event: Event) {
    const target = event.target as HTMLInputElement;
    value = target.value;
    dispatch('input', value);
  }
  
  // Forward the change event
  function handleChange(event: Event) {
    const target = event.target as HTMLInputElement;
    value = target.value;
    dispatch('change', value);
  }
  
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
</script>

<div class="input-wrapper">
  {#if label}
    <label for={$$restProps.id} class="input-label">
      {label}
      {#if required}
        <span class="input-required">*</span>
      {/if}
    </label>
  {/if}
  
  <input
    {type}
    {value}
    {placeholder}
    {disabled}
    {required}
    class="input {error ? 'input--error' : ''}"
    on:input={handleInput}
    on:change={handleChange}
    aria-invalid={!!error}
    aria-describedby={error ? `${$$restProps.id}-error` : helperText ? `${$$restProps.id}-helper` : undefined}
    {...$$restProps}
  />
  
  {#if error}
    <div class="input-error" id="{$$restProps.id}-error">{error}</div>
  {:else if helperText}
    <div class="input-helper" id="{$$restProps.id}-helper">{helperText}</div>
  {/if}
</div>

<style>
  .input-wrapper {
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
    width: 100%;
  }
  
  .input-label {
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 4px;
    color: #374151;
  }
  
  .input-required {
    color: #ef4444;
    margin-left: 2px;
  }
  
  .input {
    font-family: inherit;
    font-size: 16px;
    padding: 8px 12px;
    border: 1px solid #d1d5db;
    border-radius: 4px;
    background-color: white;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
  }
  
  .input:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
  }
  
  .input:disabled {
    background-color: #f3f4f6;
    cursor: not-allowed;
    opacity: 0.7;
  }
  
  .input--error {
    border-color: #ef4444;
  }
  
  .input--error:focus {
    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.2);
  }
  
  .input-error {
    font-size: 12px;
    color: #ef4444;
    margin-top: 4px;
  }
  
  .input-helper {
    font-size: 12px;
    color: #6b7280;
    margin-top: 4px;
  }
</style>
