<template>
    <div class="login">
        <div class="login__wrapper">
            <div class="login__header">
                <h1 class="app-name login__name">Bookshelf</h1>
            </div>
            <div class="login__body">
                <transition name="login__body_fade" mode="out-in">
                    <img v-if="!login" class="login__body__icon" src="../assets/main/icon.png" alt="" />
                    <div v-else-if="login" class="login__body__form"></div>
                </transition>
            </div>
            <div class="login__footer">
                <button class="btn login__btn" @click="login = true">{{ login ? 'Sign up' : 'Get started' }}</button>
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
    setup,
  }
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');

    .login {
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        width: 100%;
        display: flex;
        justify-content: center;
        box-shadow: inset 0 0 550px #000000;
        background-image: url("../assets/login/login_background.jpg");
        &__wrapper {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            margin: 10% 0;
        }
        &__header {
            display: flex;
            width: 100%;
        }
        &__body {
            width: 100%;
            display: flex;
            justify-content: center;
            &__form {
                width: 100%;
                height: 200px;
                background: azure;
            }
            &__icon {
                width: 200px;
            }
            &_fade-enter-active-from, &_fade-leave-active {
                transition: opacity .3s ease;
            }
            &_fade-enter-from, &_fade-leave-to
                /* .component-fade-leave-active до версии 2.1.8 */ {
                opacity: 0;
            }
        }
        &__footer {
            width: 100%;
        }
        &__btn {
            margin: 0 auto;
            display: block;
        }
        &__name {
            margin: 0 auto;
        }
    }

    .btn {
        background: #e1a73b;
        border: none;
        border-radius: 30px;
        padding: 15px 59px;
        font-size: 22px;
        font-weight: 700;
        box-shadow: 0 0 550px #000000;
        &:hover {
            /*background: #ffa620;*/
        }
        &:active {
            background: #fbcc67;
        }
        &:focus {
            outline: none;
        }
    }
    .app-name {
        font-family: 'Quicksand', sans-serif;
        color: #ffe8bd;
        font-size: 75px;
        text-shadow: 0px 0px 0px black, 0 0 1em black;
        text-transform: uppercase;
    }
</style>
