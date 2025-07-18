<template>
  <v-card>
    <v-layout class="h-screen">
      <v-navigation-drawer
        class="bg-white"
        theme="dark"
        permanent
      >
       <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
          <v-list-item prepend-icon="mdi-account" title="Employees" value="account"></v-list-item>
          <v-list-item prepend-icon="mdi-calendar" title="Attendance" value="users"></v-list-item>
        </v-list>
        <template v-slot:append>
          <div class="pa-2">
            <v-btn block>
              Logout
            </v-btn>
          </div>
        </template>
      </v-navigation-drawer>
      <v-main style="height: 400px"></v-main>
    </v-layout>
  </v-card>
</template>

<script setup lang="ts"></script>

<style scoped>
.v-navigation-drawer {
  height: 100vh;
}
</style>
