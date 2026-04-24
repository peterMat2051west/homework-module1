const appNav = {
    props: ["items"],
    template: `
        <nav class="site-nav" aria-label="Main navigation">
            <ul class="nav flex-column flex-md-row justify-content-lg-end">
                <li v-for="item in items" :key="item.label" class="nav-item">
                    <a class="nav-link" :href="item.href">{{ item.label }}</a>
                </li>
            </ul>
        </nav>
    `
};

const recipeSpotlight = {
    props: ["recipe"],
    template: `
        <article class="recipe-card h-100">
            <img class="recipe-image" :src="recipe.image.src" :alt="recipe.image.alt">
            <div class="recipe-copy">
                <p class="section-label mb-2">{{ recipe.label }}</p>
                <h2 class="mb-3">{{ recipe.title }}</h2>
                <p class="recipe-text mb-4">{{ recipe.description }}</p>
                <div class="row text-center">
                    <div v-for="stat in recipe.stats" :key="stat.label" class="col-4 mb-3 mb-sm-0">
                        <div class="recipe-stat h-100">
                            <span>{{ stat.label }}</span>
                            <strong>{{ stat.value }}</strong>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    `
};

const blogPostCard = {
    props: ["post", "profileImage"],
    template: `
        <article class="comment-card p-4">
            <div class="media align-items-center mb-3">
                <button type="button" class="avatar-button mr-3" @click="$emit('show-bio', post)">
                    <img :src="profileImage.src" :alt="profileImage.alt">
                </button>
                <div class="media-body">
                    <div class="d-sm-flex justify-content-between align-items-center">
                        <div>
                            <h3 class="h5 mb-1">{{ post.author }}</h3>
                            <p class="comment-date mb-0">{{ post.date }}</p>
                        </div>
                        <span class="badge badge-light mt-2 mt-sm-0 px-3 py-2">{{ post.foodieLevel }}</span>
                    </div>
                </div>
            </div>
            <p class="comment-body mb-0">{{ post.content }}</p>
        </article>
    `
};

const siteFooter = {
    props: ["copyright"],
    template: `
        <footer class="site-footer text-center">
            <div class="container">
                <p>&copy; {{ copyright }}</p>
            </div>
        </footer>
    `
};

new Vue({
    el: "#app",
    components: {
        "app-nav": appNav,
        "recipe-spotlight": recipeSpotlight,
        "blog-post-card": blogPostCard,
        "site-footer": siteFooter
    },
    data: {
        blogLabel: "Food Blog",
        headerTitle: "White Chicken Chili",
        headerSubtitle: "A Bootstrap 4 food blog page rebuilt with Vue components, clean spacing, and a better reading flow.",
        sectionLabel: "Latest Reviews",
        commentsTitle: "Reader Comments",
        footerCopyright: "Food Blog",
        selectedPost: null,
        navItems: [
            { label: "Home", href: "#" },
            { label: "Recipes", href: "#" },
            { label: "Lifestyles", href: "#" },
            { label: "Videos", href: "#" },
            { label: "About", href: "#" }
        ],
        recipe: {
            label: "Featured Recipe",
            title: "Creamy, bright, weeknight-ready chili",
            description: "This bowl keeps the original homework focus on white chicken chili, then gives it a stronger Bootstrap layout and Vue-driven content.",
            image: {
                src: "images/chili.jpg",
                alt: "White chicken chili in a bowl"
            },
            stats: [
                { label: "Heat", value: "Mild" },
                { label: "Texture", value: "Creamy" },
                { label: "Best With", value: "Toasted Bread" }
            ]
        },
        profileImage: {
            src: "images/profile-placeholder.svg",
            alt: "Author profile icon"
        },
        blogPosts: [
            {
                id: 1,
                author: "Brianna",
                date: "February 18, 2021 @ 3:30 pm",
                content: "Was amazing! My Walmart did not have coriander or ground cumin, so I made a few swaps. It still tasted like my favorite tortilla soup from BJs. I am sending this recipe to my whole family.",
                foodieLevel: "Novice",
                bio: "Food enthusiast. Loves to cook and experiment. Into organic, fat-free, and sugar-free dishes."
            },
            {
                id: 2,
                author: "Linh",
                date: "February 15, 2021 @ 9:46 am",
                content: "I made this soup today and it turned out so tasty. I did not have corn at home, but it still worked. I made beef chili for my parents, but this white chicken chili is perfect for my dad.",
                foodieLevel: "Expert",
                bio: "Food is my happy place. Enjoys fresh ingredients, home cooking, and making comfort meals for family."
            },
            {
                id: 3,
                author: "Catherine Leonardo",
                date: "February 13, 2021 @ 12:58 pm",
                content: "I love this white chicken chili. I made it as written, then added zucchini, carrots, and celery. It freezes very well and feels like the kind of recipe you keep forever.",
                foodieLevel: "Intermediate",
                bio: "Likes hearty recipes that are practical, easy to share, and packed with extra vegetables."
            },
            {
                id: 4,
                author: "Kali",
                date: "February 13, 2021 @ 11:31 am",
                content: "This recipe is dynamite. My partner usually skips beans, but finished the whole pot. It is a real crowd-pleaser and now has a permanent place in my recipe rotation.",
                foodieLevel: "Novice",
                bio: "Loves trying new dishes and turning simple meals into dinner-table favorites."
            }
        ]
    },
    methods: {
        showBio(post) {
            this.selectedPost = post;
        },
        closeBio() {
            this.selectedPost = null;
        }
    }
});
