export default defineNuxtRouteMiddleware((to, from) => {
  return navigateTo(
    "https://www.extra-life.org/index.cfm?fuseaction=donorDrive.team&teamID=68390",
    { external: true }
  );
});
