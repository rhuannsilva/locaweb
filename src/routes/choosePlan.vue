<template>
    <section class="choose-plan">
        <div class="header">
            <div class="logo">
                <img src="/images/logo.png" alt="">
            </div>
            <div class="description">
                <h2>Você está muito próximo de mudar a forma de <br><span class="description-span-color"><u>hospedar seu site</u></span></h2>
                <p>Escolha o seu plano</p>
            </div>
        </div>
        <div class="plans">
            <div class="content" v-for="plan in plans" :key="plan.id">
                <cardPlanComponent :plan="plan">
                    <template v-slot:flag>
                        <flagComponent v-if="plan.moreUsed === true" :customclass="'green'">MAIS USADO</flagComponent>
                    </template>
                    <buttonComponent :customclass="'red'"
                                        @click="choosenPlan(plan)">ESCOLHER ESSE PLANO</buttonComponent>
                </cardPlanComponent>
            </div>
        </div>
    </section>
</template>

<style scoped>
.choose-plan{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.plans{
    display: flex;
    flex-direction: row;
    gap: 30px;
}
.logo img{
    width: 210px;
}
.description h2{
    font-size: 32px;
    margin: 15px 0;
}
.description p{
    font-size: 21px;
    font-weight: 500;
}
.description{
    margin: 0 0 15px 0;
}
.header{
    margin: 0 0 20px 0;
}
.description-span-color{
    font-size: 32px;
    font-weight: 700;
    color: #f30168;
}
@media screen and (max-width: 999px) {
    .plans{
        flex-direction: column;
    }
    .description h2{
        font-size: 25px;
    }
    .description span{
        font-size: 25px;
    }
    .header{
        margin: 0 0 10px 0;
    }
}
</style>

<script>

import cardPlanComponent from '../components/cardPlanComponent.vue';
import buttonComponent from '../components/buttonComponent.vue';
import flagComponent from '../components/flagComponent.vue';
import { RouterLink } from 'vue-router';

export default{
    components: {
        cardPlanComponent,
        buttonComponent,
        RouterLink,
        flagComponent
    },
    data(){
        return{
            plans : [
                {
                    id: 1,
                    price: '',
                    target: 'Ideal para quem está começando.',
                    billingDate: '',
                    setupFee: '',
                    server: 'Estados Unidos',
                    details: [
                        'Servidores em nossos data centers americanos',
                        'ASP ASPNET 2.0/3.0/3.5/ e 4.0/4.5/4.5.1/4.5.2 (medium trust) ou PHP 5.3, 5.4, 5.5, 5.6 e 7.0',
                        '1 usuário de FTP upload ou download',
                        '1 contas de e-mails profissionais',
                        '1 subdomínio gratuito'
                ],
                    support: 'all',
                    availableApps: [
                        'Wordpress',
                        'Drupal',
                        'entre outros'
                    ],
                    moreUsed:false,
                    migration: false,
                    moreFeatures: [
                        'Webmail RoundCube',
                        'AntiSpam',
                        'Painel de gerenciamento de DNS',
                        'Painel de controle web',
                        'Configurações de PHP personalizáveis',
                        'Certificado SSL Grátis',
                        'Tranferência ilimitada'
                    ]
                },
                {
                    id: 2,
                    price: '499',
                    target: 'Ideal para site com mais de 30k de visitas.',
                    billingDate: 'mensalmente',
                    server: 'Brasil',
                    details: [
                        'Servidores em nossos data centers americanos',
                        'ASP ASPNET 2.0/3.0/3.5/ e 4.0/4.5/4.5.1/4.5.2 (medium trust) ou PHP 5.3, 5.4, 5.5, 5.6 e 7.0',
                        '1 usuário de FTP upload ou download',
                        '1 contas de e-mails profissionais',
                        '1 subdomínio gratuito'
                    ],
                    availableApps: [
                        'Wordpress',
                        'Drupal',
                        'entre outros'
                    ],
                    moreUsed:true,
                    migration: true,
                    moreFeatures: [
                        'Webmail RoundCube',
                        'AntiSpam',
                        'Painel de gerenciamento de DNS',
                        'Painel de controle web',
                        'Configurações de PHP personalizáveis',
                        'Certificado SSL Grátis',
                        'Tranferência ilimitada'
                    ]
                },
                {
                    id: 3,
                    price: '999',
                    target: 'Ideal para site com mais de 60k de visitas.',
                    billingDate: 'mensalmente',
                    server: 'Brasil',
                    details: {
                        field1: 'Servidores em nossos data centers de São Paulo',
                        field2: 'ASP ASPNET 2.0/3.0/3.5/ e 4.0/4.5/4.5.1/4.5.2 (medium trust) ou PHP 5.3, 5.4, 5.5, 5.6 e 7.0',
                        field3: '10 usuários de FTP para upload ou download',
                        field4: '30 contas de e-mails profissionais',
                        field5: '10 subdomínios gratuito'
                    },
                    support: 'all',
                    availableApps: [
                        'Wordpress',
                        'Drupal',
                        'entre outros'
                    ],
                    moreUsed:false,
                    migration: true,
                    moreFeatures: [
                        'Webmail RoundCube',
                        'AntiSpam',
                        'Painel de gerenciamento de DNS',
                        'Painel de controle web',
                        'Configurações de PHP personalizáveis',
                        'Certificado SSL Grátis',
                        'Tranferência ilimitada'
                    ]
                },

            ],
        }
    },

    methods:{
        choosenPlan(plan) {
            sessionStorage.setItem('plan', JSON.stringify(plan))

            this.$router.push({ path: '/register' });
        },

    },
}
</script>