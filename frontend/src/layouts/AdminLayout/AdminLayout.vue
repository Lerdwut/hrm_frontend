<template>
  <v-layout class="rounded rounded-md border height-100wh">
    <v-navigation-drawer>
        <v-card>
            <SideBar></SideBar>
        </v-card>
    </v-navigation-drawer>

    <v-app-bar title="Application bar"></v-app-bar>

    <v-main class="d-flex align-center justify-center" height="300">
      <v-container>
        <v-sheet
          border="dashed md"
          color="surface-light"
          height="200"
          rounded="lg"
          width="100%"
        ></v-sheet>
      </v-container>
    </v-main>
  </v-layout>
</template>

<script setup lang="ts">
import SideBar from '@/components/SideBar.vue';
</script>

<style scoped>
.v-main {
  transition: margin-left 0.3s ease;
}
</style>
