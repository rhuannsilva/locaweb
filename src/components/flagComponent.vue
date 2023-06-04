<template>
    <div v-bind:class="customclass">
        <slot></slot>
    </div>
</template>

<style scoped>
.green{
    background-color: #10c300;
    color: #fff;
    padding: 6px 15px;
    position: absolute;
    top: -18px;
    border-radius: 10px;
}
.black{
    background-color: #000;
    color: #fff;
    padding: 6px 15px;
    position: absolute;
    top: -18px;
    border-radius: 10px;

}
</style>

<script>
export default{
    props:{
        customclass: {
            type: String,
            default: ''
        }
    }
}
</script>