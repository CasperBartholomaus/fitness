<template>
    <md-button value="true" @click="click"></md-button>
</template>

<script>
    export default {
        data: () => ({

        }),
        methods: {
            click: function(event){
                console.log(event.target.value);
            },
        }
    }
</script>