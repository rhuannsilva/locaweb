<template>
    <div class="header">
        <div class="logo">
            <img src="/images/logo.png" alt="">
        </div>
        <div class="description">
            <h2>Você está muito próximo de mudar a forma de <br><span><u>hospedar seu site</u></span></h2>
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
                <inputComponent :placeholder="'E-mail'"
                                :type="'text'"
                                :label="'E-mail'"
                                v-model="user.email">
                </inputComponent>
                <inputComponent :placeholder="'Informe um usuário'"
                                :type="'text'"
                                :label="'Usuário'"
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

                <span><input type="checkbox"> Ao concluir com seu cadastro, você concorda com nossos <u>termos de uso</u> e <u>políticas de privacidade.</u></span>

                <alertComponent v-show="this.alertShow">{{ this.errorMessage }}</alertComponent>

                <buttonComponent @click="register()" :customclass="'red'">CRIAR CONTA</buttonComponent>
            </cardComponent>
        </div>

        <div class="plan-choose">
            <cardPlanComponent :hide="'hide'"
                               :plan="this.choosenPlan">

                <template v-slot:flag>
                    <flagComponent :customclass="'black'">PLANO ESCOLHIDO</flagComponent>
                </template>

                <template v-slot:changePlan>
                    <buttonComponent @click="choosePlan" :customclass="'black'">Trocar plano</buttonComponent>
                </template>
            </cardPlanComponent>
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
    font-size: 32px;
    font-weight: 700;
    color: #f30168;
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
    .description h2{
        font-size: 25px;
    }
    .description span{
        font-size: 25px;
    }
}
</style>

<script>

import cardComponent from '../components/cardComponent.vue';
import inputComponent from '../components/inputComponent.vue';
import cardPlanComponent from '../components/cardPlanComponent.vue';
import buttonComponent from '../components/buttonComponent.vue';
import flagComponent from '../components/flagComponent.vue'
import alertComponent from '../components/alertComponent.vue';
import axios from 'axios';
import { RouterLink } from 'vue-router';

export default {
    components:{
        cardComponent,
        inputComponent,
        cardPlanComponent,
        buttonComponent,
        flagComponent,
        alertComponent,
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
            },
            errorMessage: '',
            alertShow: false
        }
    },
    methods: {
        choosePlan(){
            this.$router.push({ path: '/choose-plan' });
        },
        validate(){

            // funcao responsavel por fazer as validaçoes nos campos de registro

            if(this.user.nameUser === ''){
                this.errorMessage = 'Nome obrigatório';
                this.alertShow = true;

                setTimeout(() => {
                    this.alertShow = false;
                }, 2000);

                return false;
            }

            if(this.user.telephone === ''){
                this.errorMessage = 'Telefone obrigatório';
                this.alertShow = true;

                setTimeout(() => {
                    this.alertShow = false;
                }, 2000);

                return false;
            }

            if(this.user.email === ''){
                this.errorMessage = 'Email obrigatório';
                this.alertShow = true;

                setTimeout(() => {
                    this.alertShow = false;
                }, 2000);

                return false;
            }

            if(this.user.username === ''){
                this.errorMessage = 'Usuário obrigatório';
                this.alertShow = true;

                setTimeout(() => {
                    this.alertShow = false;
                }, 2000);

                return false;
            }

            if(this.user.password === ''){
                this.errorMessage = 'Senha obrigatório';
                this.alertShow = true;

                setTimeout(() => {
                    this.alertShow = false;
                }, 2000);

                return false;
            }

            if(this.user.password != this.user.confirmPassword){
                this.errorMessage = 'Senhas não correspondem, por favor verifique!';
                this.alertShow = true;

                setTimeout(() => {
                    this.alertShow = false;
                }, 2000);

                return false;
            }
            return true;
        },
        register(){

            // funcao para criar um usuario e em seguida direcionar para a home

            if(this.validate() === false){
                return;
            }else{

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
                    sessionStorage.setItem('name', this.user.nameUser)
                    
                    this.$router.push({ path: '/home' });
                })
                .catch(function (error){
                    this.errorMessage = error.response.data;
                    this.alertShow = true;

                    setTimeout(() => {
                        this.alertShow = false;
                    }, 2000);
                })
            }
        }
    },
    created() {
        this.choosenPlan = JSON.parse(sessionStorage.getItem('plan'));
    },
};

</script>