export default defineNuxtRouteMiddleware((to, from) => {
  return navigateTo(
    "https://www.backerkit.com/call_to_action/4770ca96-655c-4d15-83a4-23756e94c1c9/landing",
    {
      external: true,
    }
  );
});
