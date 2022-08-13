<template>
    <!--Stopwatch-->
    <div id="app">
        <button id="in" @click="start">입실</button>
        <button id="out" @click="stop">탈출</button>
        <p>{{formattedElapsedTime}}</p>
    </div>

</template>

<script>
    export default {
        name: "App",
        data() {
            return {elapsedTime: 0, timer: undefined};
        },
        computed: {
            formattedElapsedTime() {
                const date = new Date(null);
                date.setSeconds(this.elapsedTime / 1000);
                const utc = date.toUTCString();
                return utc.substr(utc.indexOf(":") - 2, 8);
            }
        },
        methods: {
            start() {
                // 인터벌이 이미 실행 중인지 확인
                if (!this.timer) {
                    this.timer = setInterval(() => {
                        this.elapsedTime += 1000;
                    }, 1000);
                }
            },
            stop() {
                if (this.timer) {
                    clearInterval(this.timer)
                    this.timer = undefined;
                }
            }
        }
    };
</script>

<style>

    p {
        font-size: 65px;
        font-weight: 600;
        color: rgb(74, 135, 255);
        position: absolute;
        left: 50px;
        top: 55px;
    }

    #in {
        border: 0;
        outline: 0;
        background-color: white;
        font-size: 30px;
        font-weight: 700;
        color: rgb(144, 181, 255);
        position: absolute;
        position: absolute;
        left: 325px;
        top: 220px;
        font-family: 'Do Hyeon', sans-serif;
    }

    #out {
        border: 0;
        outline: 0;
        background-color: white;
        font-size: 30px;
        font-weight: 700;
        color: rgb(144, 181, 255);
        position: absolute;
        left: 420px;
        top: 220px;
        font-family: 'Do Hyeon', sans-serif;
    }

    /*입실버튼 막기*/
</style>