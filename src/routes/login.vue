<template>
    <section class="login">
        <div class="logo">
            <img src="/images/logo.png" alt="" srcset="">
        </div>
        <cardComponent>
            <div class="description">
                <h2>Entre na sua conta</h2>
                <span>Para acessar sua conta informe seu usuário e senha</span>
            </div>
            <inputComponent :placeholder="'Seu usuário'"
                            :type="'text'"
                            :label="'Usuário'"
                            v-model="user.username">
            </inputComponent>
            <inputComponent :placeholder="'Sua senha'"
                            :type="'password'"
                            :label="'Senha'"
                            v-model="user.password">
            </inputComponent>

            <alertComponent v-show="this.alertShow">{{ this.errorMessage }}</alertComponent>

            <buttonComponent :customclass="'red'" @click="login">FAZER LOGIN</buttonComponent>
        </cardComponent>
        <div class="register">
            <span>Ainda não tem conta? <router-link to="/choose-plan" class="link">Cadastre-se</router-link></span>
        </div>
    </section>
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
    data: function ()  {
        return {
            user : {
                username: '', 
                password:  ''
            },
            errorMessage: '',
            alertShow: false
        }
    },
    methods: {
        login(){
            // funcao responsavel por fazer autenticaçao do usuario

            const url = 'https://fakestoreapi.com/auth/login'
            
            const user = {
                username: this.user.username,
                password: this.user.password
            }

            axios.post(url, user)
            .then((response) => {
                
                sessionStorage.setItem('token', response.data.token);

                this.getUser(this.user.username);
            })
            .catch((error) => {
                this.errorMessage = error.response.data;
                this.alertShow = true;

                setTimeout(() => {
                    this.alertShow = false;
                }, 2000);
            });
        },
        getUser(userParams){
            // funcao responsavel por capturar usuario de login e retornar nome para a tela home
            
            const url = 'https://fakestoreapi.com/users'
            var nameUser;

            axios.get(url)
            .then((response) =>{

                nameUser = response.data;

                nameUser = nameUser.map(user => {
                    if(userParams === user.username){
                        sessionStorage.setItem('name', user.name.firstname)
                    }
                }).filter((user) => user !== undefined)

                this.$router.push({ path: '/home' });
            })
            .catch((error)=>{
                console.log(error)
            })
        }
    },
}
</script>

<style scoped>
    .login{
        display: flex;
        flex-direction: column;
        align-items: center;
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