<template>
  <HomePageTemplate>
    <template #title>
      <PageTitle>Game Master</PageTitle>
    </template>
    <template #content>
      <pre>
        Bem vindo ao Game Master!

        Sou uma plataforma para resolução de jogos de tabuleiro,
        você só precisa selecionar um jogo no menu ao lado, 
        informe a entrada e me deixe resolvê-lo para você!
      </pre>
    </template>
  </HomePageTemplate>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import HomePageTemplate from "../components/templates/HomePageTemplate.vue";
import PageTitle from "../components/atoms/PageTitle.vue";

@Component({ components: { PageTitle, HomePageTemplate } })
export default class HomePage extends Vue {}
</script>
