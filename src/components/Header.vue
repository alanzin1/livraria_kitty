<template>
    <header>


        <nav class="container">

            <a href="/"><img src="../assets/logo.png" id="logo" alt=""></a>

            <div id="containericon">
                <a href="/Login"><img id="menu" src="../assets/logoperfil.png" alt=""></a>
                <img v-on:click="openMenu" id="menu" src="../assets/menuicon.png" alt="">
            </div>



            <div v-on:click="closeMenu" id="menu-over" v-if="menuActive"></div>

            <div id="menu-items" :class="{active:menuActive}">


                <ul>
                    <li><a href="/"><img src="../assets/logo.png" id="logo" alt=""></a></li>
                    <li ><a href="/Romance">ROMANCE</a></li>
                    <li><a href="/Drama">DRAMA</a></li>
                    <li><a href="/Fantasia">FANTASIA</a></li>
                    <li ><a href="/Terror">TERROR</a></li>
                    <li><a href="/Infantil">INFANTIL</a></li>
                    <li><a href="/Religioso">RELIGIOSO</a></li>
                    <li ><a href="/Didatico">DIDÁTICO</a></li>
                    <li><a href="/Manga">MANGÁS</a></li>
                    <li><a href="/Hqs">HQs</a></li>


                </ul>




            </div>



        </nav>


    </header>




</template>

<script>

export default{
    name:  'HeaderBar',
    data(){
      return{
        menuActive: false
      }
    },
    methods:{
        openMenu:function(){
            this.menuActive = true;
        },
        closeMenu:function(){
            this.menuActive = false;
        }

    }
}

</script>



<style scoped>

header{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #8a2be2;
    height: 80px;
    width: 100%;
}

nav{
    display: flex;
    justify-content: space-between;
}
#containericon img{
 margin-left: 50px;
}

#logo{

    width: 100px;
}

#menu{

    height: 40px ;


    
}

#menu:hover{
     background-color: rgb(40, 10, 49);
}

#menu-over{

    position: fixed;
    top: 0;
    left: 0;
    width: 50%;
    height: 100vh;
    background-color: black;
    opacity: 0.8;
}

#menu-items{

    position: fixed;
    top: 0;
    right: 0;
    background-color: #8a2be2 ;
    width: 50%;
    height: 100vh;
    display: none;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

}



#menu-items.active{

    display: flex;


}

ul{

    list-style: none;
    text-align: center;

 

}

ul li a{

    color: white;
    




}
ul li:hover{
    background-color: #461b6f;

}

ul li a:hover{
    color: white;
}

ul li {
    margin: 30px 0px;
    padding: 5px ;
    font-weight: bold;
}

@media (min-width: 700px) {
    #menu-items{

        width: 20%;


    }
    #menu-over{

        width: 80%;
    }
    ul li {
    margin: 10px 0px;
   
}

    #menu{
        height: 70px;
    }
    #logo{
        width: 160px;

    }


    
}


</style>