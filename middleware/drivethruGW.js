export default defineNuxtRouteMiddleware((to, from) => {
  return navigateTo(
    "https://legacy.drivethrurpg.com/product/473873/Grimwood-City-for-EZD6",
    { external: true }
  );
});
