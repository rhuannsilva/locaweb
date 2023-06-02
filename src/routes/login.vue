<template>
    <cardComponent>
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

        <buttonComponent @click="login">FAZER LOGIN</buttonComponent>

    </cardComponent>

    <span>Ainda não tem conta? <router-link to="/choose-plan" class="link">Cadastre-se</router-link></span>

</template>

<script>

import inputComponent from '../components/inputComponent.vue';
import buttonComponent from '../components/buttonComponent.vue';
import cardComponent from '../components/cardComponent.vue';
import { RouterLink } from 'vue-router';
import axios from 'axios';

export default {
    components: {
        inputComponent,
        cardComponent,
        RouterLink,
        buttonComponent
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
    .link{
        /* Estilos personalizados */
        color: #f30168;
        text-decoration: underline;
        margin-top: 10px;

    }
</style>