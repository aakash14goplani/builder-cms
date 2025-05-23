<script lang="ts">
  export let title: string = '';
  export let subtitle: string = '';
  export let elevation: number = 1;
  export let padding: string = '16px';

  export type CardProps = {
    title: string;
    subtitle: string;
    elevation: number;
    padding: string;
  };

  // Computed styles
  $: shadowClass = `card--elevation-${elevation}`;
  $: style = `padding: ${padding};`;
</script>

<div class="card {shadowClass}" style={style} {...$$restProps}>
  {#if title}
    <div class="card__header">
      <h3 class="card__title">{title}</h3>
      {#if subtitle}
        <h4 class="card__subtitle">{subtitle}</h4>
      {/if}
    </div>
  {/if}
  
  <div class="card__content">
    <slot></slot>
  </div>
  
  {#if $$slots.footer}
    <div class="card__footer">
      <slot name="footer"></slot>
    </div>
  {/if}
</div>

<style>
  .card {
    background-color: white;
    border-radius: 8px;
    overflow: hidden;
  }
  
  .card--elevation-0 {
    border: 1px solid #e5e7eb;
  }
  
  .card--elevation-1 {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }
  
  .card--elevation-2 {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.12);
  }
  
  .card--elevation-3 {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15), 0 3px 6px rgba(0, 0, 0, 0.1);
  }
  
  .card__header {
    margin-bottom: 12px;
  }
  
  .card__title {
    font-size: 18px;
    font-weight: 600;
    margin: 0 0 4px 0;
    color: #1f2937;
  }
  
  .card__subtitle {
    font-size: 14px;
    font-weight: 400;
    margin: 0;
    color: #6b7280;
  }
  
  .card__content {
    color: #374151;
  }
  
  .card__footer {
    margin-top: 16px;
    display: flex;
    justify-content: flex-end;
    gap: 8px;
  }
</style>
