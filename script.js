(function () {
  function openDetailsOfHashTarget() {
    const hash = globalThis.location?.hash;
    if (!hash) return;
    const details = document.getElementById(hash.slice(1));
    if (details) {
      details.open = true;
    }
  }

  globalThis.addEventListener("hashchange", openDetailsOfHashTarget);
  document.addEventListener("DOMContentLoaded", openDetailsOfHashTarget);
})();
