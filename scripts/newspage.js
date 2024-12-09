document.addEventListener('DOMContentLoaded', function() {
    const newsContainer = document.getElementById('news-container');
    const newsData = [
        {
            title: "Subashwara Event",
            date: "2024-07-25",
            description: "A detailed description of the Subashwara event with full details and background information.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed tortor sapien. Vivamus tincidunt magna sed erat finibus blandit. Proin elementum nisl eu tincidunt mattis. Maecenas vel efficitur ex. Donec pretium ante justo, id rutrum diam porttitor vitae. Vestibulum lacus ipsum, ultricies vitae ex ac, tristique pretium ante. In hac habitasse platea dictumst. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus blandit mauris ac dui tincidunt, et pulvinar justo porttitor. In eu vulputate nunc. Etiam volutpat magna id lobortis ornare. Etiam molestie dapibus nisi, vitae tristique libero congue ut.Vestibulum dignissim, tellus non tristique facilisis, ligula erat aliquet libero, vitae ullamcorper ipsum nisi sed ex. Aliquam sodales quis risus ullamcorper vestibulum. Etiam volutpat justo a sagittis mollis. Donec eu mattis diam. Donec eu mauris ultricies eros euismod elementum accumsan lobortis leo. In hac habitasse platea dictumst. Donec enim massa, aliquet non euismod dignissim, rutrum nec justo. Nulla facilisi.Donec sit amet augue aliquam, ultrices nibh eu, congue lacus. Donec fermentum nunc ut vehicula tristique. Donec euismod nulla at turpis commodo congue. Duis sed risus ac augue semper eleifend. In gravida nibh risus, nec dictum tellus porttitor eu. Sed ut hendrerit magna, et egestas ipsum. Ut nisi urna, lobortis sed est eget, sollicitudin consectetur odio. Vestibulum mollis nulla ac tincidunt vestibulum. Quisque convallis turpis ut erat molestie suscipit. Fusce libero neque, aliquet et pulvinar vel, aliquam in leo. Phasellus scelerisque lacinia dui, eu tincidunt purus faucibus ullamcorper. Phasellus scelerisque arcu ligula, ut sagittis felis euismod eu. Sed eget elit lacus.",
            image: "Assets/News_img/Subashwara.jpg",
            link: "#"
        },
        {
            title: "Swimming Competition",
            date: "2024-07-20",
            description: "Detailed highlights from the recent swimming competition, including winners and records.",
            image: "Assets/News_img/swimming.jpeg",
            link: "#"
        },
        {
            title: "Parliament Visit",
            date: "2024-07-15",
            description: "Details of the students' visit to the parliament, including discussions and learning points.",
            image: "Assets/News_img/parliment.jpg",
            link: "#"
        }
    ];

    newsData.forEach((news, index) => {
        const newsCard = `
            <div class="col-md-4">
                <div class="card news-card">
                    <img src="${news.image}" class="card-img-top" alt="${news.title}">
                    <div class="card-body">
                        <h5 class="card-title">${news.title}</h5>
                        <p class="card-text">${news.date}</p>
                        <p class="card-text">${news.description.substring(0, 90)}...</p>
                        <button class="btn btn-primary read-more-btn" data-index="${index}">Read More</button>
                    </div>
                </div>
            </div>
        `;
        newsContainer.innerHTML += newsCard;
    });

    document.querySelectorAll('.read-more-btn').forEach(button => {
        button.addEventListener('click', function() {
            const news = newsData[this.getAttribute('data-index')];
            document.getElementById('newsModalLabel').textContent = news.title;
            document.getElementById('newsModalImage').src = news.image;
            document.getElementById('newsModalDate').textContent = news.date;
            document.getElementById('newsModalDescription').textContent = news.description;
            new bootstrap.Modal(document.getElementById('newsModal')).show();
        });
    });
});
