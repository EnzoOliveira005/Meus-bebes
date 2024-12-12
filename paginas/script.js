document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  const options = {
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  }, options);

  sections.forEach((section) => {
    observer.observe(section);
  });

  if (document.querySelector("#blog")) {
    const loadMoreButton = document.getElementById("load-more");

    loadMoreButton.addEventListener("click", () => {
      // Simulação de carregamento de mais posts
      setTimeout(() => {
        const newPost = document.createElement("div");
        newPost.classList.add("post");
        newPost.innerHTML = `
            <h3>Novos Projetos em 2024</h3>
            <p>Publicado em: 01 de Março de 2024</p>
            <p>Estou trabalhando em novos projetos emocionantes para 2024. Fique de olho para mais atualizações...</p>
          `;
        document.querySelector(".blog").appendChild(newPost);
      }, 1000);
    });
  }
});
