<template>
        <div class="header">
            <div class="logo">
                <img src="/images/logo.png" alt="">
            </div>
            <div class="dropdown">
                <div class="icon-user" @click="toggleDropdown">{{ name[0] }}</div>
                <div v-if="isDropdownOpen" class="dropdown-content">
                  <a @click="logout()">Sair</a>
                </div>
              </div>
        </div>
        <div class="content">
            <div class="description">
                <h2>Olá {{ this.name }},</h2>
                <span>Seja bem-vindo a sua conta de hospedagem.</span>
            </div>

            <iframe src="https://www.youtube.com/embed/0tdqo81VpLo" title="Clean Code: o que é e por que usar? | Locaweb" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
</template>

<script>
export default {
    data() {
        return {
            isDropdownOpen: false,
            name:''
        };
    },
    methods: {
        toggleDropdown() {
            this.isDropdownOpen = !this.isDropdownOpen;
        },
        logout(){
            this.$router.push({ path: '/' });
            sessionStorage.removeItem('name');
            sessionStorage.removeItem('token');
            sessionStorage.removeItem('plan');
        }
    },
    created() {
        this.name = sessionStorage.getItem('name') ? sessionStorage.getItem('name') : 'Fulano';
    },
};
</script>

<style scoped>
.content{
    display: flex;
    flex-direction: column;
    max-width: 880px;
    width: 100%;
    margin: 0 auto;
}
.content h2{
    margin: 10px 0;
}
.content span{
    font-weight: 500;
}
.home{
    display: flex;
    flex-direction: column;
    max-width: 880px;
    width: 100%;
    margin: 20px auto;
}
.description{
    text-align: initial;
    margin: 20px 0;
}
.header{
    display: flex;
    justify-content: space-between;
    align-items: normal ;
}
.header img{
    width: 210px;
}
.icon-user{
    padding: 20px 26px;
    background-color: #00000024;
    border-radius: 40px;
    color: #fff;
    font-weight: 600;
}
iframe{
    height: 500px;
}
.dropdown {
    position: relative;
    display: inline-block;
    cursor: pointer;
}
  
.dropdown-content {
    display: none;
    position: absolute;
    z-index: 1;
    background-color: #f9f9f9;
    min-width: 160px;
    padding: 10px;
    border: 1px solid #ddd;
    right: -20px;
    top: 70px;
    border-radius: 10px;
}

.dropdown-content a {
    display: block;
    padding: 5px 0;
    text-decoration: none;
    color: #333;
    padding: 5px 0px;
}

.dropdown:hover .dropdown-content {
    display: block;
}
@media screen and (max-width: 768px) {
    iframe{
        height: 400px;
    }
}
</style>