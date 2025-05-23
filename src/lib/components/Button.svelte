<script lang="ts">
  export let text: string = 'Button';
  export let variant: 'primary' | 'secondary' | 'tertiary' = 'primary';
  export let size: 'small' | 'medium' | 'large' = 'medium';
  export let disabled: boolean = false;
  export let fullWidth: boolean = false;
  
  export type ButtonProps = {
    text: string;
    variant: 'primary' | 'secondary' | 'tertiary';
    size: 'small' | 'medium' | 'large';
    disabled: boolean;
    fullWidth: boolean;
  };
  
  // Dynamically compute classes based on props
  $: classes = [
    'button',
    `button--${variant}`,
    `button--${size}`,
    fullWidth ? 'button--full-width' : ''
  ].filter(Boolean).join(' ');
  
  // Forward the click event
  function handleClick(event: MouseEvent) {
    if (!disabled) {
      // If the component has an onClick prop, call it
      // Using dispatch to maintain Svelte conventions
      dispatch('click', event);
    }
  }
  
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
</script>

<button 
  class={classes}
  {disabled}
  on:click={handleClick}
  {...$$restProps}
>
  <slot>{text}</slot>
</button>

<style>
  .button {
    font-family: inherit;
    border: 0;
    border-radius: 4px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    transition: all 0.2s ease;
    font-weight: 500;
  }
  
  .button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  /* Variants */
  .button--primary {
    background-color: #3b82f6;
    color: white;
  }
  
  .button--primary:hover:not(:disabled) {
    background-color: #2563eb;
  }
  
  .button--secondary {
    background-color: #e5e7eb;
    color: #374151;
  }
  
  .button--secondary:hover:not(:disabled) {
    background-color: #d1d5db;
  }
  
  .button--tertiary {
    background-color: transparent;
    color: #3b82f6;
    text-decoration: underline;
  }
  
  .button--tertiary:hover:not(:disabled) {
    color: #2563eb;
  }
  
  /* Sizes */
  .button--small {
    padding: 6px 12px;
    font-size: 14px;
  }
  
  .button--medium {
    padding: 8px 16px;
    font-size: 16px;
  }
  
  .button--large {
    padding: 12px 24px;
    font-size: 18px;
  }
  
  /* Full width */
  .button--full-width {
    width: 100%;
  }
</style>
