<template>
    <SignIn title="Set new password">
      <div class="m-2 p-2 text-green-900 font-semibold bg-green-300 rounded-md" v-if="authStore.status"> {{ authStore.status }}</div>
      <form class="mt-8 space-y-6" @submit.prevent="authStore.handleResetPassword(form)">
        <input type="hidden" name="remember" value="true"/>
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="new-password" class="sr-only">New Password</label>
            <input id="new-password" name="password" v-model="form.password" type="password" required=""
                   class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                   placeholder="New Password"/>
          </div>
          <div>
            <label for="password-repeat" class="sr-only">Repeat Password</label>
            <input id="password-repeat" name="password_repeat"  v-model="form.password_confirmation" type="password" required=""
                   class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                   placeholder="Repeat Password"/>
          </div>
        </div>
  
        <div class="flex items-center justify-between">
          <div class="text-sm">
            <router-link :to="{name: 'login'}" class="font-medium text-indigo-600 hover:text-indigo-500">
              Go back to Login
            </router-link>
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
  import { useAuthStore } from '../store/auth';
  import {ref} from 'vue'
  import {useRoute} from 'vue-router'

  const route = useRoute()
  const authStore = useAuthStore()

  const form = ref({
    password: '',
    password_confirmation: '',
    email: route.query.email,
    token: route.params.token
  })
  </script>