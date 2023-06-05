<template>
    <transition>
        <div class="content">
            <slot></slot>
        </div>
    </transition>
</template>

<style scoped>
.content{
    width: 100%;
    border-radius: 5px;
    padding: 10px 0;
    margin: 20px 0 0 0;
    color: #fff;
    background-color: #e91b1be3;
}
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>