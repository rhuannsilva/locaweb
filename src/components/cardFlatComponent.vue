<template>
    <div class="hosting-card">
      <h1 class="title">Hospedagem {{ plan.id }}</h1>

      <div>
        <div class="price" v-if="plan.price">
          <span class="price-month">R$</span>
          <span>{{ plan.price }}</span>
          <span class="price-month">/mês</span>
        </div>

        <div class="price" v-else>
          <span>
            Grátis
          </span>
        </div>
      </div>

      <div class="description">
        <div class="description-billingdate">
          <span v-if="plan.billingDate">cobrado {{ plan.billingDate }}</span>
          <span v-else>
            voce não paga nada para usar
          </span>
        </div>

        <div class="description-setup">
          <span v-if="plan.setupFee">{{ plan.setupFee }}</span>
          <span v-else> sem taxa de setup</span>
        </div>

        <div class="description-target">
            <span>{{ plan.target }}</span>
        </div>
      </div>
      
      <slot>
        
      </slot>

      <div class="content">
        <h4>Seu site em servidores no {{ plan.server }}</h4>
        <ul>
          <li v-for="detail in plan.details" :key="detail"> {{ detail }}</li>
        </ul>
        <h4>Suporte 24 horas, 7 dias por semana grátis;</h4>
        <br>
        <h4>Aplicativos disponiveis</h4>
        <ul>
          <li v-for="app in plan.availableApps" :key="app">{{ app }}</li>
        </ul>
        <div v-if="plan.migration">
          <h4>Migração Gratuita</h4>
          <ul>
            <li>Migramos todos os seus sites para nossos servidores</li>
          </ul>
        </div>
        <slot name="changePlan">

        </slot>

          <h4>Você ainda tem</h4>
          <ul>
            <li v-for="feature in plan.moreFeatures" :key="feature">{{ feature }}</li>
          </ul>
      </div>
    </div>
</template>



<script>
import buttonComponent from '../components/buttonComponent.vue';

export default {
    components:{
      buttonComponent
    },
    props:{
      plan: Object,
      action: String
    }
}
</script>

<style scoped>
.hosting-card{
    display: flex;
    flex-direction: column;
    background-color: #fff;
    max-width: 275px;
    width: 100%;
    border-radius: 5px;
    padding: 30px;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.137);
}
.content{
  text-align: initial;
}
.content ul{
  padding: 0 21px;
}
.content ul li::after{
  content: ';';
}
.content ul li{
  color: #00000091;;
  font-size: 18px;
  margin: 10px 0;
  font-weight: 500;
}
.content h4{
  color: #000000a6;
  font-size: 18px;
  margin: 0;
}
.title{
  color: #00000098;
  font-weight: 700;
  font-size: 25px;
}
.price{
  color: #f30168;
  font-weight: 700;
  font-size: 30px;
  margin: 10px 0;
}
.price-month{
  font-weight: 600;
  font-size: 21px;
}
.separator{
  border: 1px solid #00000011;
}
.choose-plan{
  background-color: #f30168;
  color: #fff;
  font-weight: 400;
  margin: 10px 0;
  height: 50px;
  border: none;
  outline: none;
}
.description{
  color: #00000091;
  font-size: 15px;
  font-weight: 500;
}
.description-setup{
  margin: 10px 0;
}
.description-target{
  border-top: 1px solid #00000027;
  border-bottom: 1px solid #00000027;
  padding: 20px 45px;
  font-size: 18px;
}
</style>