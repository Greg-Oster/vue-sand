<template>
    <vWrapper>
        <template #title>
            <h2>Пробуем HTTP на вкус</h2>
        </template>
        <template #default>
            <learning-survey class="learning-survey" />
            <survey-results />
        </template>
    </vWrapper>
</template>

<script>
import LearningSurvey from './LearningSurvey';
import SurveyResults from './SurveyResults';

export default {
    components: { LearningSurvey, SurveyResults }
};
</script>

<style lang="scss" scoped>
.learning-survey {
    margin-bottom: 25px;
}
</style>