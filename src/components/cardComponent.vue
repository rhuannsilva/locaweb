<template>
    <div class="card">
      <slot></slot>
    </div>
</template>

<style scoped>
.card{
    display: flex;
    flex-direction: column;
    max-width: 510px;
    background-color: #fff;
    border-radius: 5px;
    padding: 30px;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.137);
}

</style>