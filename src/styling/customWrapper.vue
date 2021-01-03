<template>
    <div :class="theme" :style="{ gridColumn: gridColumn }">
        <header v-if="$slots.title">
            <slot name="title"></slot>
        </header>

        <slot name="default"></slot>
    </div>
</template>

<script>
export default {
    props: ['theme', 'gridColumn']
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');
div {
    background: #f8f8f8;
    padding: 20px;
    color: rgb(31, 31, 31);
    border-radius: 15px;
    box-shadow: 0px 3px 0 rgba(0, 0, 0, 0.23);
    font-family: 'Roboto', sans-serif;

    hr {
        border: 1px solid #ebebeb;
    }

    p {
        font-size: 1.25em;
    }

    ul {
        list-style-type: none;
        padding-left: 0;
    }

    li:not(:last-child) {
        margin-bottom: 15px;
    }

    header {
        border-bottom: 1px solid #ebebeb;
        margin-bottom: 25px;
    }
}

.form-actions {
    display: flex;
    justify-content: space-between;

    .button {
        flex-grow: 1;

        &:first-child {
            margin-right: 15px;
        }
    }
}

.button,
.button--primary {
    padding: 10px;
    background: #34b570;
    font-weight: 500;
    font-family: inherit;
    font-size: 17px;
    color: #fff;
    border-radius: 5px;
    border: none;
    cursor: pointer;

    &:focus {
        outline: #2da766 auto 1px;
    }
}

.button--secondary {
    background: #34b5aa;
    &:focus {
        outline: #2d99a7 auto 1px;
    }
}

label {
    display: block;
    margin-bottom: 20px;
}

input {
    padding: 6px 5px;
    font-size: 16px;
    border: 1px solid #d3d3d3;
    border-radius: 4px;

    &:focus {
        outline: #afafaf auto 1px;
    }
}

.dark {
    background-color: #0c0b10;
    color: rgb(248, 248, 248);
}
</style>