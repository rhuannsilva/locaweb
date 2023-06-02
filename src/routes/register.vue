<template>
    <div class="content">
        <div class="register">
            <cardComponent>
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
                <h2>Dados do seu site</h2>
                <inputComponent :placeholder="'Meu site'"
                                :type="'text'"
                                :label="'Nome do seu site'">
                </inputComponent>
            </cardComponent>
        </div>
        <div class="plan-choose">
            <cardFlatComponent :plan="this.choosenPlan">
                <template v-slot:changePlan>
                    <buttonComponent :customclass="'black'">TROCAR PLANO</buttonComponent>
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
            choosenPlan: ''
        }
    },
    created() {
        this.choosenPlan = JSON.parse(sessionStorage.getItem('plan'));
    },
};

</script>