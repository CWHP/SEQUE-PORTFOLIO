window.addEventListener("load", () => {
  const elementsToAnimate = [
    "#form-title",
    "#email-input",
    "#password-input",
    "#sign-in-button",
  ];

  gsap.from(elementsToAnimate, {
    opacity: 0,
    y: -30,
    duration: 0.6,
    ease: "power2.out",
    stagger: 0.2,
  });

  document.querySelectorAll("input").forEach((input) => {
    input.addEventListener("focus", () => {
      gsap.to(input, {
        scale: 1.05,
        boxShadow: "0px 4px 20px rgba(0, 128, 128, 0.4)",
        duration: 0.3,
        ease: "power2.out",
      });
    });
    input.addEventListener("blur", () => {
      gsap.to(input, {
        scale: 1,
        boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
        duration: 0.3,
        ease: "power2.in",
      });
    });
  });

  const signInButton = document.querySelector("button");
  signInButton.addEventListener("mouseenter", () => {
    gsap.to(signInButton, {
      scale: 1.1,
      boxShadow: "0px 4px 20px rgba(0, 128, 128, 0.4)",
      duration: 0.3,
      ease: "power2.out",
    });
  });
  signInButton.addEventListener("mouseleave", () => {
    gsap.to(signInButton, {
      scale: 1,
      boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
      duration: 0.3,
      ease: "power2.in",
    });
  });
});

const toggleDisplay = (e) => {
  const passwordInput = document.getElementById("passwordInp");
  const isHidden = e.getAttribute("name") === "passwordHidden";

  passwordInput.type = isHidden ? "text" : "password";
  e.className = isHidden ? "bi bi-eye" : "bi bi-eye-slash";
  e.setAttribute("name", isHidden ? "passwordVisible" : "passwordHidden");
};
