<template>
    <div class="header">
        <div class="logo">
            <img src="/images/logo.png" alt="">
        </div>
        <div class="description">
            <h2>Você está muito próximo de mudar a forma de <br>hospedar seu site</h2>
        </div>
    </div>
    <div class="content">
        <div class="register">
            <cardComponent>
                <div class="personal">
                    <h2>Dados Pessoais</h2>
                    <span>Informe seus dados pessoais para acesso à sua conta</span>
                </div>

                <inputComponent :placeholder="'Informe seu nome completo'"
                                :type="'text'"
                                :label="'Nome completo'"
                                v-model="user.nameUser">
                </inputComponent>
                <inputComponent :placeholder="'Celular'"
                                :type="'number'"
                                :label="'Celular'"
                                v-model="user.telephone">
                </inputComponent>
                <inputComponent :placeholder="'e-mail'"
                                :type="'text'"
                                :label="'E-mail'"
                                v-model="user.email">
                </inputComponent>
                <inputComponent :placeholder="'Informe um usuario'"
                                :type="'text'"
                                :label="'Usuario'"
                                v-model="user.username">
                </inputComponent>
                <inputComponent :type="'password'"
                                :label="'Senha'"
                                v-model="user.password">
                </inputComponent>
                <inputComponent :type="'password'"
                                :label="'Confirme sua senha'"
                                v-model="user.confirmPassword">
                </inputComponent>

                <div class="website-data">
                    <h2>Dados do seu site</h2>
                    <inputComponent :placeholder="'Meu site'"
                                    :type="'text'"
                                    :label="'Nome do seu site'">
                    </inputComponent>
                    <div class="description-data">
                        <span>Extamente igual ao titulo do seu site</span>
                    </div>
                </div>

                <span><input type="checkbox"> Ao concluir com seu cadastro você concorda com nossos <u>termos de uso</u> e <u>politicas de privacidade.</u></span>

                <buttonComponent @click="register()" :customclass="'red'">CRIAR CONTA</buttonComponent>
            </cardComponent>
        </div>

        <div class="plan-choose">
            <cardFlatComponent :hide="'hide'"
                               :plan="this.choosenPlan">

                <template v-slot:flag>
                    <flagComponent :customclass="'black'">PLANO ESCOLHIDO</flagComponent>
                </template>

                <template v-slot:changePlan>
                    <buttonComponent @click="choosePlan" :customclass="'black'">Trocar plano</buttonComponent>
                </template>
            </cardFlatComponent>
        </div>

    </div>
</template>

<style scoped>
.content{
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 40px;
    width: -webkit-fill-available;
}
.register{
    max-width: 555px;
    width: 100%;
}
.personal{
    text-align: initial;
    margin: 0 0 10px 0;
}
.personal h2{
    font-size: 30px;
    margin: 0 0 10px 0;
}
.personal span{
    font-size: 18px;
    font-weight: 500;
}
.website-data{
    display: flex;
    flex-direction: column;
    border-top: 1px solid #00000027;
    border-bottom: 1px solid #00000027;
    margin: 15px 0;
    padding: 10px 0px;
}
.website-data h2{
    margin: 0;
    text-align: initial;
}
.description-data{
    text-align: initial;
    margin: 10px 0;
}
.logo img{
    width: 210px;
}
.description h2{
    font-size: 32px;
    margin: 15px 0;
}
.description span{
    font-size: 21px;
    font-weight: 500;
}
.description{
    margin: 0 0 15px 0;
}
.header{
    margin: 0 0 20px 0;
}
@media screen and (max-width: 999px) {
    .content{
        flex-direction: column-reverse;
        align-items: center;
    }
}
</style>

<script>

import cardComponent from '../components/cardComponent.vue';
import inputComponent from '../components/inputComponent.vue';
import cardFlatComponent from '../components/cardFlatComponent.vue';
import buttonComponent from '../components/buttonComponent.vue';
import flagComponent from '../components/flagComponent.vue'
import axios from 'axios';
import { RouterLink } from 'vue-router';

export default {
    components:{
        cardComponent,
        inputComponent,
        cardFlatComponent,
        buttonComponent,
        flagComponent,
        RouterLink
    },
    data() {
        return {
            choosenPlan: '',
            user: {
                nameUser: '',
                email:'',
                telephone:'',
                username:'',
                password:'',
                confirmPassword:''
            }
        }
    },
    methods: {
        choosePlan(){
            this.$router.push({ path: '/choose-plan' });
        },
        register(){

            const url = 'https://fakestoreapi.com/users';

            const user = {
                email: this.user.email,
                username: this.user.username,
                password: this.user.password,
                name : {
                    firstname : this.user.nameUser
                },
                phone: this.user.telephone
            }
            axios.post(url, user)
            .then((response) => {
                console.log(response.data);
                this.$router.push({ path: '/home' });
            })
            .catch(function (error){
                console.log(error);
            })
        }
    },
    created() {
        this.choosenPlan = JSON.parse(sessionStorage.getItem('plan'));
    },
};

</script>