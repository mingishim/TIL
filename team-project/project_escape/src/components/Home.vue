<template>
    <div class="container">
        <Todo></Todo>
        <stopwatch></stopwatch>
    </div>
</template>
<script>
import Todo from '../components/page3/todo2'
import stopwatch from '../components/page3/stopwatch.vue'


export default {
    components: {
    'Todo' : Todo,
    'stopwatch' : stopwatch
    },
};

</script>

