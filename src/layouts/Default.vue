<template>
  <div class="layout font-display">
    <header class="header container h-40 flex items-center justify-between">
      <g-link to="/">
        <g-image alt="Tondreau Immobilier Logo" src="~/assets/img/logo.png" width="135" />
      </g-link>

      <nav class="nav font-light nav">
        <g-link class="p-4" to="/proprietes">Propriétés</g-link>
        <g-link class="p-4" to="/a-propos">À propos</g-link>
        <g-link class="p-4" to="/contact">Contact</g-link>
      </nav>
    </header>
    <slot />
    <footer class="container flex justify-center items-end">
      <div>Tous droits réservés &copy; Frédérick Tondreau</div>
    </footer>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>