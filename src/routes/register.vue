<template>
    <div class="content">
        <div class="register">
            <cardComponent>
                <div class="personal">
                    <h2>Dados Pessoais</h2>
                    <span>Informe seus dados pessoais para acesso à sua conta</span>
                </div>

                <inputComponent :placeholder="'Informe seu nome completo'"
                                :type="'text'"
                                :label="'Nome completo'">
                </inputComponent>
                <inputComponent :placeholder="'Celular'"
                                :type="'number'"
                                :label="'Celular'">
                </inputComponent>
                <inputComponent :placeholder="'e-mail'"
                                :type="'text'"
                                :label="'E-mail'">
                </inputComponent>
                <inputComponent :placeholder="'Informe um usuario'"
                                :type="'text'"
                                :label="'Usuario'">
                </inputComponent>
                <inputComponent :type="'password'"
                                :label="'Senha'">
                </inputComponent>
                <inputComponent :type="'password'"
                                :label="'Confirme sua senha'">
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

                <buttonComponent :customclass="'red'">CRIAR CONTA</buttonComponent>
            </cardComponent>
        </div>

        <div class="plan-choose">
            <cardFlatComponent :hide="'hide'" :plan="this.choosenPlan">
                <template v-slot:changePlan>
                    <buttonComponent :customclass="'black'">Trocar plano</buttonComponent>
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
</style>

<script>

import cardComponent from '../components/cardComponent.vue';
import inputComponent from '../components/inputComponent.vue';
import cardFlatComponent from '../components/cardFlatComponent.vue';
import buttonComponent from '../components/buttonComponent.vue';

export default {
    components:{
        cardComponent,
        inputComponent,
        cardFlatComponent,
        buttonComponent
    },
    data() {
        return {
            choosenPlan: '',
            user: {
                
            }
        }
    },
    created() {
        this.choosenPlan = JSON.parse(sessionStorage.getItem('plan'));
    },
};

</script>