<template>
  <div class="card">
    <div class="cardHeader">
      <slot name="cardHeader" />
    </div>
    <div class="divider" />
    <div class="cardContent">
      <slot name="cardContent" />
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 100%;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
}

.cardHeader {
  padding: 1rem;
  padding-bottom: 0;
}

.cardContent {
  padding: 1rem;
  padding-top: 0;
}

.divider {
  height: 1px;
  background-color: var(--color-border);
  margin: 1rem 0;
}
</style>