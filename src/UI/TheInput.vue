<template>
    <div>
        <label :for="id">
            <slot></slot>
            <input
                type="text"
                :id="id"
                @input="updateValue($event.target.value)"
                :value="modelValue"
            />
        </label>
    </div>
</template>

<script>
export default {
    props: ['modelValue', 'id'],
    emits: ['update:modelValue'],
    methods: {
        updateValue: function (value) {
            this.$emit('update:modelValue', value);
        }
    }
};
</script>

<style lang="scss" scoped>
label {
    display: flex;
    flex-direction: column;
    cursor: pointer;

    input {
        margin-top: 8px;
    }
}
</style>