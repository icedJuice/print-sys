<template>
    <div ref="el" contenteditable="true"
        @input="changeText">{{innerText}}</div>
</template>
<script>
    export default {
        name: 'DivModel',
        props: ['value', 'type', 'index'],
        data(){
            return {innerText:''}
        },
        mounted() {
            if (this.value != undefined) {
                this.innerText = this.value;
            }
        },
        methods:{
            changeText(){
                const innerText = this.$refs.el.innerHTML;
                this.$emit('input',{
                    type:this.type,
                    index: this.index,
                    value: innerText,
                });
            }
        }
    }
</script>
