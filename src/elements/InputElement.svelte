<svelte:options tag="svelte-input" />

<script lang="ts">
  export let type: string = 'text';
  export let label: string = '';
  export let value: string = '';
  export let placeholder: string = '';
  export let disabled: boolean = false;
  export let required: boolean = false;
  export let error: string = '';
  export let helperText: string = '';
  
  // Create a unique ID for this input
  const inputId = `input-${Math.random().toString(36).substring(2, 9)}`;
  
  // Forward the input event
  function handleInput(event: Event) {
    const target = event.target as HTMLInputElement;
    value = target.value;
    
    // Dispatch a custom event for web component users
    this.dispatchEvent(new CustomEvent('input-change', {
      bubbles: true,
      composed: true,
      detail: { value }
    }));
  }
</script>

<div class="input-wrapper" part="wrapper">
  {#if label}
    <label for={inputId} class="input-label" part="label">
      {label}
      {#if required}
        <span class="input-required" part="required-indicator">*</span>
      {/if}
    </label>
  {/if}
  
  <input
    {type}
    {value}
    {placeholder}
    {disabled}
    {required}
    id={inputId}
    class="input {error ? 'input--error' : ''}"
    on:input={handleInput}
    aria-invalid={!!error}
    aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
    part="input"
  />
  
  {#if error}
    <div class="input-error" id="{inputId}-error" part="error">{error}</div>
  {:else if helperText}
    <div class="input-helper" id="{inputId}-helper" part="helper">{helperText}</div>
  {/if}
</div>

<style>
  :host {
    display: block;
  }
  
  .input-wrapper {
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
    width: 100%;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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
    box-sizing: border-box;
    width: 100%;
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
