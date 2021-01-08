<template>
  <div class="layout font-display font-light" >
    <header class="flex h-40 header items-center justify-around">
      <g-link to="/" class="flex flex-row items-center">
        <g-image alt="Logo Via Capitale Sélect" src="~/assets/img/logo-viacapitale-equipe.png" width="135" />
        <span class="px-4 text-2xl font-title">Frédérick Tondreau</span>
      </g-link>

      <nav class="nav font-light nav">
        <a href="/#listing" class="p-4">Propriétés à vendre</a>
        <a href="/#contact" class="p-4">Contactez-moi</a>
      </nav>
    </header>
    <slot />
    <footer class="bg-gray-100 flex flex-col justify-around items-center pt-16 pb-4">
      <div class="flex flex-row items-center">
        <g-image src="~/assets/img/logo-viacapitale-equipe.png" alt="Logo Via Capitale Sélect" width="150" />
        <span class="px-4 text-2xl font-title">Frédérick Tondreau</span>
      </div>
      
      <div class="mt-12">
        <a href="tel:+14186553557">(418) 655-3557</a>
      </div>
      <div>
        <a href="mailto:info@tondreauimmobilier.com">info@tondreauimmobilier.com</a>
      </div>
      <div class="mt-12 text-gray-600">Tous droits réservés &copy; Frédérick Tondreau</div>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>