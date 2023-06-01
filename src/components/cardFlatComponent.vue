<template>
    <div class="hosting-card">
      <span class="title">Hospedagem 1</span>
      <span class="price">Grátis</span>
      <div class="separator"></div>
      <span>Ideal para quem está <br> começando.</span>
      <div class="separator"></div>
      <button class="choose-plan">ESCOLHER ESSE PLANO</button>
      <span>Seu site em servidores no <br>Estados Unidos</span>
    </div>
</template>

<style scoped>
.hosting-card{
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 5px;
    padding: 30px;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.137);
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
</style>