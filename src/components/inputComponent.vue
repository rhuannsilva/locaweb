<template>

    <label class="label-left">{{ label }}</label>
    <input :value="modelValue"
            v-bind="$attrs"
            @input="$emit('update:modelValue', $event.target.value)"/>

</template>

<script>
export default {
    emits:['update:modelValue'],
    props:{
        label: String,
        modelValue: String
    }
}
</script>

<style scoped>
.content{
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 10px 0;
}
.label-left {
    text-align: left;
    padding: 6px 0px;
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