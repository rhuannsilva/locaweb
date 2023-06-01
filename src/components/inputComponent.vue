<template>
    <label class="label-left">{{ name }}</label>
    <input :type='type' :placeholder="placeholder"/>
</template>

<script>
export default {
    props:{
        type: String,
        placeholder: String,
        name: String
    },
    data(){
        return {
        }
    }
}
</script>

<style scoped>
    .label-left {
    text-align: left;
    }
    input {
        height: 65px;
        border: #0000005e 1px solid;
        border-radius: 5px;
        padding: 0 10px;
        background-color: #fff;
        color: #000;

    }

    input:focus{
        outline: none;
    }
</style>