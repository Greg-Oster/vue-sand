<template>
    <div>
        <input
            type="radio"
            :id="id"
            :name="name"
            :checked="value === modelValue"
            @change="updateValue($event.target.value)"
            :value="value"
        />
        <label :for="id" >
            <slot></slot>
        </label>
    </div>
</template>

<script>
export default {
    props: ['id', 'value', 'name', 'modelValue'],
    emits: ['update:modelValue'],
    methods: {
        updateValue: function (value) {
            this.$emit('update:modelValue', value);
        }
    }
};
</script>

<style lang="scss" scoped>
div {
    display: flex;

    input {
        margin-right: 6px;
        cursor: pointer;
    }

    label {
        cursor: pointer;
    }
}
</style>