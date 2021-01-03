<template>
    <div class="form-wrapper">
        <form @submit.prevent="submitForm">
            <label for="first">
                Name
                <input type="text" id="first" v-model="name">
            </label>
            <label for="age">
                Age
                <input type="number" id="age" v-model.number="age">
            </label>
            <label for="select">
                Select Size
                <select name="" id="select" v-model="selectSize">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
            </label>
            <label>
                Favorite Anime
                <label for="fav-anime">
                    Sonochi
                    <input type="checkbox" id="fav-anime" value="first" name="sonochi">
                </label>
                <label for="fav-anime">
                    Sonochi
                    <input type="checkbox" id="fav-anime" value="first" name="sonochi">
                </label>
                <label for="fav-anime">
                    Sonochi
                    <input type="checkbox" id="fav-anime" value="first" name="sonochi">
                </label>
            </label>
            
            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: "",
                age:null,
                selectSize: '3'
            }
        },
        methods: {
            submitForm() {
                console.log("Username: " + this.name)
                console.log(this.age + 10)
                console.log("selectSize: " + this.selectSize)
            }
        },
    }
</script>

<style lang="scss" scoped>
.form-wrapper {
    margin-top:15px;
}

label {
    display:flex;
    flex-direction: column;
    margin-bottom:15px;
    cursor: pointer;


    input {
        margin-top:8px;
    }
}
</style>