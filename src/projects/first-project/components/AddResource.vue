<template>
    <div>
        <form action="">
            <div>
                <label for="name">
                    Название
                    <input type="text" id="name" v-model="name">
                </label>
            </div>
            <div>
                <label for="link">
                    Ссылка
                    <input type="url" id="link" v-model="url">
                </label>
            </div>
            <div>
                <label for="description">
                    Описание
                    <textarea 
                    name="description" 
                    id="description" 
                    cols="30" 
                    rows="4"
                    v-model="description">
                    </textarea>
                </label>
            </div>
            <div>
                <base-button 
                @click.prevent="addResourceItem">
                Подтвердить
                </base-button>
                <base-button 
                class="active" 
                @click.prevent="resetForm">
                Отменить
                </base-button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        inject: ["addResource"],
        data() {
            return {
                name: "",
                url:"",
                description:""
            }
        },
        methods: {
            resetForm() {
                this.name = "";
                this.url = "";
                this.description = "";
            },
            addResourceItem(){
                console.log('Да, я работаю');
                const title = this.name;
                const url = this.url;
                const description = this.description;

                this.addResource(title,url,description);
            }
        },
    }
</script>

<style lang="scss" scoped>
    form{
        max-width:60%;
        margin-top:30px;
    }

    form >div:not(:last-child){
        margin-bottom:20px;
    }

    label {
        display:flex;
        flex-direction: column;
    }
</style>