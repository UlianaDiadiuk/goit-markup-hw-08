(() => {
  const refs = {
    openModalBtn: document.querySelector("[menu-modal-open]"),
    closeModalBtn: document.querySelector("[menu-modal-close]"),
    modal: document.querySelector("[menu-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();


// (() => {
//   const menuBtnRef = document.querySelector("[menu-modal-button]");
//   const mobileMenuRef = document.querySelector("[menu-modal]");
// });

// nuBtnRef.addEventListener("click", () => {
//   const expanded =
//     menuBtnRef.getAttribute("aria-expanded") === "trye" || false;
  
//   menuBtnRef.classList.toggle("is-open");
//   menuBtnRef.setAttribute("aria-expanded", !expanded);

//   mobileMenuRef.classList.toggle("is-open");
  
// })();