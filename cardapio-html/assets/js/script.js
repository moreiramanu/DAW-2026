const categoryLinks = document.querySelectorAll('nav a');
selectedCategory = document.getElementById('selected-category');    

categoryLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        //desativa a tentativa de navegação padrão do link
        event.preventDefault();

        //pega o nome da categoria clicada
        const categoryName = link.textContent;
    

         //atualiza o texto da categoria selecionada
        selectedCategory.textContent = categoryName;

        //remover a class "active"
        categoryLinks.forEach(function(categoryLink) {
            categoryLink.classList.remove('active');
        });

        //adicionar a class "active" ao link clicado
        link.classList.add('active');

    });

});