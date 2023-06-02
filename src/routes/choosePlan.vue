<template>
    <div class="plans">
        <div class="content" v-for="plan in plans" :key="plan.id">
            <cardFlatComponent :plan="plan">
                <buttonComponent :customclass="'red'" 
                                 @click="choosenPlan(plan)">ESCOLHER ESSE PLANO</buttonComponent>
            </cardFlatComponent>
        </div>
    </div>
</template>

<style scoped>
.plans{
    display: flex;
    flex-direction: row;
    gap: 30px;
}
</style>

<script>

import cardFlatComponent from '../components/cardFlatComponent.vue';
import buttonComponent from '../components/buttonComponent.vue';
import { RouterLink } from 'vue-router';

export default{
    components: {
        cardFlatComponent,
        buttonComponent,
        RouterLink,
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
                        'Servidores em nossos data center americanos',
                        'ASP ASPNET 2.0/3.0/3.5/ e 4.0/4.5/4.5.1/4.5.2 (medium trust) ou PHP 5.3, 5.4, 5.5, 5.6 e 7.0',
                        '1 usuário de FTP upload ou download',
                        '1 contas de e-mails profissionais',
                        '1 subdomínio gratuito;'
                ],
                    support: 'all',
                    availableApps: [
                        'Wordpress',
                        'Drupal',
                        'entre outros'
                    ],
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
                        'Servidores em nossos data center americanos',
                        'ASP ASPNET 2.0/3.0/3.5/ e 4.0/4.5/4.5.1/4.5.2 (medium trust) ou PHP 5.3, 5.4, 5.5, 5.6 e 7.0;',
                        '1 usuário de FTP upload ou download',
                        '1 contas de e-mails profissionais',
                        '1 subdomínio gratuito'
                    ],
                    availableApps: [
                        'Wordpress',
                        'Drupal',
                        'entre '
                    ],
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
                        field1: 'Servidores em nossos data center de São Paulo',
                        field2: 'ASP ASPNET 2.0/3.0/3.5/ e 4.0/4.5/4.5.1/4.5.2 (medium trust) ou PHP 5.3, 5.4, 5.5, 5.6 e 7.0;',
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

            ]
        }
    },
    methods:{
        choosenPlan(plan) {
            sessionStorage.setItem('plan', JSON.stringify(plan))

            this.$router.push({ path: '/register' });
        },
    }
}
</script>