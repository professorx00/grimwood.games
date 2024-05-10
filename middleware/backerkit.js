export default defineNuxtRouteMiddleware((to, from) => {
  return navigateTo(
    "https://www.backerkit.com/call_to_action/92cd4630-e662-4b87-a010-771fb23030ed/landing",
    { external: true }
  );
});
