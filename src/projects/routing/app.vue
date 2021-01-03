<template>
    <customWrapper gridColumn="1/4" theme="">
        <template #title>
            <nav>
                <div class="logo">Routing</div>
                <div class="menu">
                    <ul class="menu__list">
                        <li class="menu__item">
                            <router-link to="/list">Перейти к List</router-link>
                        </li>
                        <li class="menu__item">
                            <router-link to="/item">Перейти к Item</router-link>
                        </li>
                    </ul>
                </div>
            </nav>
        </template>
        <template #default>
            <router-view></router-view>
        </template>
    </customWrapper>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>