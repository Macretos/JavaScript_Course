var xhr = new XMLHttpRequest();
var url = './news_articles.json';

xhr.open('GET', url, true);
xhr.responseType = 'json'; //inform the XMLHttpRequest object that the 
                           //expected response from the server should be in JSON format.


xhr.onload = function(){

if(xhr.status === 200){
    var articles = xhr.response.articles;
    var articlesDiv = document.getElementById('articles');

articles.forEach(function(article) {
    var articleDiv = document.createElement('div');
    articleDiv.classList.add('article');

    var title = document.createElement('h2');
    title.textContent = article.title;

    var description = document.createElement('p');
    description.textContent = article.description;

    var category = document.createElement('h3');
    category.textContent = article.category + " - " + article.date + " - " + article.source;

    var keyPoints = document.createElement('ul');
    article.key_points.forEach(function(point) {
      var keyPoint = document.createElement('li');
      keyPoint.textContent = point;
      keyPoints.appendChild(keyPoint);
    });

    var impacts = document.createElement('ul');
    article.impact.forEach(function(impact) {
      var impactList = document.createElement('li');
      impactList.textContent = impact;
      impacts.appendChild(impactList);
    });

    articleDiv.appendChild(title);
    articleDiv.appendChild(description);
    articleDiv.appendChild(category);
    articleDiv.appendChild(keyPoints);
    articleDiv.appendChild(impacts);

    articlesDiv.appendChild(articleDiv);
  });
}else{
    console.error('Error al cargar el .json');
}
};
xhr.send();
