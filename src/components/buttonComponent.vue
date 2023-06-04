<template>
    <button v-bind:class="customclass">
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: {
        customclass: {
            type: String,
            default: ''
        }
    }
};
</script>

<style scoped>

.red{
    height: 65px;
    border: none;
    width: 100%;
    outline: none;
    margin: 24px 0;
    background-color: #f30168;
    
    transition: all 0.4s;
    color: #fff;
}
.red:hover{
    opacity: 0.5;
}
.black{
    height: 65px;
    border: 1px solid ;
    width: 100%;
    outline: none;
    margin: 24px 0;
    background-color: #fff;
    color: #000;
    transition: all 0.4s;
}
.black:hover{
    background-color: #000;
    color: #fff;
}
</style>