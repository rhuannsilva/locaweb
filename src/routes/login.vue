<template>
    <cardLoginComponent>
        <inputComponent :placeholder="'Seu Email'" 
                        :type="'text'"
                        :label="'E-mail'"
                        v-model="user.email">
        </inputComponent>

        <inputComponent :placeholder="'Sua senha'" 
                        :type="'password'"
                        :label="'Senha'"
                        v-model="user.password">
        </inputComponent>

        <button class="button-login" @click="login"> FAZER LOGIN </button>
    </cardLoginComponent>

    <span>Ainda não tem conta? <router-link to="/register" class="link">Cadastre-se</router-link></span>

</template>

<script>

import inputComponent from '../components/inputComponent.vue';
import cardLoginComponent from '../components/cardLoginComponent.vue';
import { RouterLink } from 'vue-router';
import axios from 'axios';

export default {
    components: {
        inputComponent,
        cardLoginComponent,
        RouterLink
    },
    data () {
        return {
            user : {
                email: '', 
                password:  ''
            },
        }
    },
    methods: {
       login(){
            const url = 'https://fakestoreapi.com/auth/login'
            
            axios.post(url, {
                username: "mor_2314",
                password: "83r5^_"
            })
            .then(function(response){
                console.log(response.data)
            })
            .catch(function (error){

            });
       }
    },
}
</script>

<style scoped>
    .container{
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 600px;
        color: #000;
    }
    .button-login{
        height: 65px;
        border: none;
        outline: none;
        margin: 24px 0;
        background-color: #f30168;
    }
    .link{
        /* Estilos personalizados */
        color: #f30168;
        text-decoration: underline;

    }
</style>