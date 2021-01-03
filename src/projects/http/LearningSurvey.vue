<template>
    <form @submit.prevent="submitForm">
        <TheInput id="name1" v-model="inputName">Enter your name</TheInput>
        <div>
            <TheRadioBtn
                v-model="selectedOption"
                id="firstR"
                name="survey"
                value="Easy"
                >Easy
            </TheRadioBtn>
            <TheRadioBtn
                v-model="selectedOption"
                id="secondR"
                name="survey"
                value="Medium"
                >Medium
            </TheRadioBtn>
            <TheRadioBtn
                v-model="selectedOption"
                id="thirdR"
                name="survey"
                value="Hard"
                >Hard
            </TheRadioBtn>
        </div>
        <div v-if="error">
            <p>Please, fill the name and select any option before sumbitting</p>
        </div>
        <BaseButton>Send answer</BaseButton>
    </form>
</template>

<script>
export default {
    data() {
        return {
            inputName: '',
            selectedOption: null,
            error: false
        };
    },
    methods: {
        submitForm() {
            if (this.inputName.length === 0 || this.selectedOption === null) {
                this.error = true;
            } else {
                const review = {
                    name: this.inputName,
                    score: this.selectedOption
                };

                fetch(
                    'https://tasteofhttp-default-rtdb.europe-west1.firebasedatabase.app/survey.json',
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(review)
                    }
                );

                this.error = false;
                this.inputName = '';
                this.selectedOption = null;
                console.log('Form has been submitted!');
                console.log(review);
            }
        }
    }
};
</script>

<style lang="scss" scoped>
</style>