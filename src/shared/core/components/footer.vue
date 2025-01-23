<script setup>
import { inject } from "vue";

const localeStore = inject("useLocaleStore");
</script>

<template>
  <footer>
    <ul>
      <li>
        <a
          href="#"
          @click="localeStore.setLocale('pt_BR')"
          aria-label="Alterar idioma para Português do Brasil"
          >{{ localeStore.translate("footer.locale.pt_BR") }}</a
        >
      </li>
      <li>
        <a
          href="#"
          @click="localeStore.setLocale('en_US')"
          aria-label="Change language to English (US)"
          >{{ localeStore.translate("footer.locale.en_US") }}</a
        >
      </li>
    </ul>
    <p>{{ localeStore.translate("footer.copyright") }}</p>
    <p>
      {{ localeStore.translate("footer.developer") }}
      <a
        href="https://github.com/jcmljunior"
        :aria-label="localeStore.translate('footer.developer.ariaLabel')"
        >Julio Cesar</a
      >
    </p>
  </footer>
</template>

<style scoped>
footer {
  padding: 2rem;
  text-align: center;
}

ul {
  display: flex;
  justify-content: center;
  gap: 1rem;
}
</style>
