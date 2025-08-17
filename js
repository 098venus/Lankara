<!-- Article Display Section
<section id="article-display" style="display: none;">
    <h2 id="article-title"></h2>
    <img id="article-image" class="thumbnail" alt="">
    <p id="article-content"></p>
    <button class="back-button" onclick="goBack()">Back</button>
</section> -->


<!-- JavaScript -->
<script>
    // Sample Articles Data with Image URLs and Date


    // Display All Articles in Articles Section
    // function displayAllArticles() {
    //     const articleListDiv = document.getElementById('article-list');
    //     articleListDiv.innerHTML = '';
    //     articles.forEach((article, index) => {
    //         const articleDiv = document.createElement('div');
    //         articleDiv.innerHTML = `
    //             <img src="${article.image}" alt="${article.title}" class="thumbnail">
    //             <h3>${article.title}</h3>
    //             <p>${article.content}</p>
    //             <button class="small-button" onclick="displayArticle(${index})">Click Me</button>
    //         `;
    //         articleListDiv.appendChild(articleDiv);
    //     });
    // }

    // Display the full article
    // function displayArticle(index) {
    //     const article = articles[index];
    //     document.getElementById('article-title').innerText = article.title;
    //     document.getElementById('article-image').src = article.image;
    //     document.getElementById('article-content').innerText = article.content;
    //
    //     // Hide other sections and show the article display section
    //     document.getElementById('home').style.display = 'none';
    //     document.getElementById('about-us').style.display = 'none';
    //     document.getElementById('articles').style.display = 'none';
    //     document.getElementById('article-display').style.display = 'block';
    // }

    // Go back to the articles list
    // function goBack() {
    //     document.getElementById('article-display').style.display = 'none';
    //     document.getElementById('home').style.display = 'block';
    //     document.getElementById('about-us').style.display = 'block';
    //     document.getElementById('articles').style.display = 'block';
    // }

    // // Search Articles
    // function searchArticles() {
    //     const searchInput = document.getElementById('search-bar').value.toLowerCase();
    //     const articleListDiv = document.getElementById('article-list');
    //     articleListDiv.innerHTML = '';
    //     articles
    //         .filter(article => article.title.toLowerCase().includes(searchInput))
    //         .forEach((article, index) => {
    //             const articleDiv = document.createElement('div');
    //             articleDiv.innerHTML = `
    //                 <img src="${article.image}" alt="${article.title}" class="thumbnail">
    //                 <h3>${article.title}</h3>
    //                 <p>${article.content}</p>
    //                 <button class="small-button" onclick="displayArticle(${index})">Read More</button>
    //             `;
    //             articleListDiv.appendChild(articleDiv);
    //         });
    // }
    //
    // // Initialize Page
    // displayAllArticles();
</script>
