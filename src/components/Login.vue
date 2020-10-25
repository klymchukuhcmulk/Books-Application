<template>
    <div class="login-wrapper">
        <div class="login-container">
            <div class="login-header">
                <h1 class="app-name login-name">Bookshelf</h1>
            </div>
            <div class="login-body">
                <img v-if="!login" class="login-icon" src="../assets/icon.png" alt="" />
            </div>
            <div class="login-footer">
                <button class="btn login-btn" @click="login = true">Get started</button>
            </div>
        </div>
    </div>
</template>

<script>
  import { onMounted, ref } from 'vue'
  import { useStore } from 'vuex'

  const setup = () => {
    const store = useStore()
    const login = ref(false)

    onMounted(() => {})
    return {
      store,
      login
    }
  }
  export default {
    setup
  }
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');

    .login-wrapper {
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        width: 100%;
        display: flex;
        justify-content: center;
        box-shadow: inset 0 0 550px #000000;
        background-image: url("../assets/login_background.jpg");
    }
    .login-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .login-icon {
        width: 100px;
    }
    .login-footer {
        width: 100%;
    }
    .login-btn {
        margin: 0 auto;
        display: block;
    }
    .btn {
        background: #e29e32;
        border: none;
        border-radius: 30px;
        padding: 15px 59px;
        font-size: 22px;
        font-weight: 700;
        box-shadow: 0 0 550px #000000;
    }
    .btn:hover {
        /*background: #ffa620;*/
    }
    .btn:active {
        background: #ffa620;
    }
    .btn:focus {
        outline: none;
    }
    .app-name {
        font-family: 'Quicksand', sans-serif;
        color: #ffe8bd;
        font-size: 75px;
        text-shadow: 0px 0px 0px black, 0 0 1em black;
        text-transform: uppercase;
    }
    .login-header {
        display: flex;
        width: 100%;
    }
    .login-name {
        margin: 0 auto;
    }
</style>
