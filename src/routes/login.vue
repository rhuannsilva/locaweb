<template>
    <div class="logo">
        <img src="/images/logo.png" alt="" srcset="">
    </div>
    <cardComponent>
        <div class="description">
            <h2>Entre na sua conta</h2>
            <span>Para acessar sua conta informe seu usuario e senha</span>
        </div>
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

        <buttonComponent :customclass="'red'" @click="login">FAZER LOGIN</buttonComponent>

    </cardComponent>

    <div class="register">
        <span>Ainda não tem conta? <router-link to="/choose-plan" class="link">Cadastre-se</router-link></span>
    </div>

</template>

<script>

import inputComponent from '../components/inputComponent.vue';
import alertComponent from '../components/alertComponent.vue';
import buttonComponent from '../components/buttonComponent.vue';
import cardComponent from '../components/cardComponent.vue';
import { RouterLink } from 'vue-router';
import axios from 'axios';

export default {
    components: {
        inputComponent,
        cardComponent,
        RouterLink,
        buttonComponent,
        alertComponent
    },
    data: function () {
        return {
            user : {
                email: '', 
                password:  ''
            }
        }
    },
    methods: {
        login(){
            const url = 'https://fakestoreapi.com/auth/login'
            
            const user = {
                username: this.user.email,
                password: this.user.password
            }

            axios.post(url, user)
            .then((response) => {
                this.$router.push({ path: '/home' });
            })
            .catch(function (error){
                console.log(error)
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
    .description{
        text-align: initial;
        margin: 0 0 10px 0;
    }
    .description h2{
        font-size: 28px;
        margin: 0;
    }
    .description span{
        font-size: 19px;
        font-weight: 400;
    }
    .logo{
        margin: 0 0 20px 0;
    }
    .logo img{
        width: 210px;
    }
    .register{
        margin: 25px 0 0 0;
    }
    .register span{
        font-weight: 500;
    }
</style>