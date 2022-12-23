<template>
    <SignIn title="Request new password">
      <div class="m-2 p-2 text-green-900 font-semibold bg-green-300 rounded-md" v-if="authStore.status"> {{ authStore.status }}</div>
      <form class="mt-8 space-y-6" @submit.prevent="authStore.handleForgotPassword(email)">
        <input type="hidden" name="remember" value="true"/>
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input id="email-address" name="email" type="email" v-model="email.email" autocomplete="email" required=""
                   class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                   placeholder="Email address"/>
            <div v-if="authStore.errors"><span class="text-red-400 text-sm m-2 p-2">{{ authStore.errors[0] }}</span></div>
          </div>
        </div>
  
        <div>
          <button type="submit"
                  class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true"/>
              </span>
            Submit
          </button>
        </div>
      </form>
    </SignIn>
  </template>
  
  <script setup>
  import {LockClosedIcon} from '@heroicons/vue/20/solid'
  import SignIn from "../components/SignIn.vue";
  import {useAuthStore} from '../store/auth'
  import {ref} from 'vue'

  const authStore = useAuthStore()

  const email = ref({
    email: ''
  })
  </script>