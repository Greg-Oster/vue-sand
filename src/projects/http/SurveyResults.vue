<template>
    <div>
        <BaseButton class="load-resources" @click="loadRes"
            >Load resources</BaseButton
        >
    </div>
    <div class="resources">
        <ul>
            <li v-for="item in survey" :key="item.id">
                <h4>{{ item.name }}</h4>
                <p>{{ item.score }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            survey: [
                {
                    id: 1,
                    name: 'Test',
                    score: 'regular'
                },
                {
                    id: 2,
                    name: 'Test2',
                    score: 'so so'
                }
            ]
        };
    },
    methods: {
        loadRes() {
            console.log('Loading...');

            fetch(
                'https://tasteofhttp-default-rtdb.europe-west1.firebasedatabase.app/survey.json'
            )
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    }
                })
                .then((data) => {
                    const result = [];
                    for (const id in data) {
                        result.push({ id: id, name: data[id].name, score: data[id].score });
                    }
                    this.survey = result
                });
        }
    }
};
</script>

<style lang="scss" scoped>
.load-resources {
    width: 100%;
    background-color: violet;
}
</style>