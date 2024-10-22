export default defineNuxtRouteMiddleware((to, from) => {
  return navigateTo(
    "https://streamlabscharity.com/@grimwood-games/hope-after-helene",
    { external: true }
  );
});
