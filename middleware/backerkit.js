export default defineNuxtRouteMiddleware((to, from) => {
  return navigateTo("https://ironbound.backerkit.com/hosted_preorders", {
    external: true,
  });
});
