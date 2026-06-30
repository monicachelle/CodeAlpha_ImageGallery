const galleryData = [

    
    { id: 1,  title: "Tanjiro Kamado",     category: "anime",        image: "images/anime/1.png",          favorite: false },
    { id: 2,  title: "Itachi Uchiha",      category: "anime",        image: "images/anime/2.png",          favorite: false },
    { id: 3,  title: "Satoru Gojo",        category: "anime",        image: "images/anime/3.png",          favorite: false },
    { id: 4,  title: "Levi Ackerman",      category: "anime",        image: "images/anime/4.png",          favorite: false },
    { id: 5,  title: "Naruto Uzumaki",     category: "anime",        image: "images/anime/5.png",          favorite: false },

    
    { id: 6,  title: "Pikachu",            category: "pokemon",      image: "images/pokemon/1.png",        favorite: false },
    { id: 7,  title: "Charizard",          category: "pokemon",      image: "images/pokemon/2.png",        favorite: false },
    { id: 8,  title: "Mewtwo",             category: "pokemon",      image: "images/pokemon/3.png",        favorite: false },
    { id: 9,  title: "Lucario",            category: "pokemon",      image: "images/pokemon/4.png",        favorite: false },
    { id: 10, title: "Gengar",             category: "pokemon",      image: "images/pokemon/5.png",        favorite: false },

    
    { id: 11, title: "SpongeBob",          category: "cartoons",     image: "images/cartoons/1.png",       favorite: false },
    { id: 12, title: "Finn and Jake",      category: "cartoons",     image: "images/cartoons/2.png",       favorite: false },
    { id: 13, title: "Courage the Dog",    category: "cartoons",     image: "images/cartoons/3.png",       favorite: false },
    { id: 14, title: "Rick and Morty",     category: "cartoons",     image: "images/cartoons/4.png",       favorite: false },
    { id: 15, title: "Avatar Aang",        category: "cartoons",     image: "images/cartoons/5.png",       favorite: false },

    
    { id: 16, title: "Cherry Blossom Lane",category: "nature",       image: "images/nature/1.png",         favorite: false },
    { id: 17, title: "Aurora Borealis",    category: "nature",       image: "images/nature/2.png",         favorite: false },
    { id: 18, title: "Lavender Fields",    category: "nature",       image: "images/nature/3.png",         favorite: false },
    { id: 19, title: "Bioluminescent Bay", category: "nature",       image: "images/nature/4.png",         favorite: false },
    { id: 20, title: "Firefly Forest",     category: "nature",       image: "images/nature/5.png",         favorite: false },

    
    { id: 21, title: "Milky Way Core",     category: "space",        image: "images/space/1.png",          favorite: false },
    { id: 22, title: "Saturn Rings",       category: "space",        image: "images/space/2.png",          favorite: false },
    { id: 23, title: "Black Hole M87",     category: "space",        image: "images/space/3.png",          favorite: false },
    { id: 24, title: "Webb Deep Field",    category: "space",        image: "images/space/4.png",          favorite: false },
    { id: 25, title: "Andromeda Galaxy",   category: "space",        image: "images/space/5.png",          favorite: false },

    
    { id: 26, title: "Santorini Sunset",   category: "travel",       image: "images/travel/1.png",         favorite: false },
    { id: 27, title: "Machu Picchu",       category: "travel",       image: "images/travel/2.png",         favorite: false },
    { id: 28, title: "Fushimi Inari",      category: "travel",       image: "images/travel/3.png",         favorite: false },
    { id: 29, title: "Petra Treasury",     category: "travel",       image: "images/travel/4.png",         favorite: false },
    { id: 30, title: "Maldives Villa",     category: "travel",       image: "images/travel/5.png",         favorite: false },

    
    { id: 31, title: "AI Neural Network",  category: "technology",   image: "images/technology/1.png",     favorite: false },
    { id: 32, title: "Quantum Computer",   category: "technology",   image: "images/technology/2.png",     favorite: false },
    { id: 33, title: "Humanoid Robot",     category: "technology",   image: "images/technology/3.png",     favorite: false },
    { id: 34, title: "Cyberpunk City",     category: "technology",   image: "images/technology/4.png",     favorite: false },
    { id: 35, title: "Hologram Interface", category: "technology",   image: "images/technology/5.png",     favorite: false },

    
    { id: 36, title: "Sagrada Familia",    category: "architecture", image: "images/architecture/1.png",   favorite: false },
    { id: 37, title: "Sydney Opera House", category: "architecture", image: "images/architecture/2.png",   favorite: false },
    { id: 38, title: "Marina Bay Sands",   category: "architecture", image: "images/architecture/3.png",   favorite: false },
    { id: 39, title: "Alhambra Palace",    category: "architecture", image: "images/architecture/4.png",   favorite: false },
    { id: 40, title: "Fallingwater House", category: "architecture", image: "images/architecture/5.png",   favorite: false },

    
    { id: 41, title: "Lamborghini Huracan",category: "cars",         image: "images/cars/1.png",           favorite: false },
    { id: 42, title: "Bugatti Chiron",     category: "cars",         image: "images/cars/2.png",           favorite: false },
    { id: 43, title: "Pagani Huayra",      category: "cars",         image: "images/cars/3.png",           favorite: false },
    { id: 44, title: "Porsche 911 GT3 RS", category: "cars",         image: "images/cars/4.png",           favorite: false },
    { id: 45, title: "Koenigsegg Jesko",   category: "cars",         image: "images/cars/5.png",           favorite: false },

    
    { id: 46, title: "Bengal Tiger",       category: "wildlife",     image: "images/wildlife/1.png",       favorite: false },
    { id: 47, title: "Snow Leopard",       category: "wildlife",     image: "images/wildlife/2.png",       favorite: false },
    { id: 48, title: "Humpback Whale",     category: "wildlife",     image: "images/wildlife/3.png",       favorite: false },
    { id: 49, title: "Arctic Fox",         category: "wildlife",     image: "images/wildlife/4.png",       favorite: false },
    { id: 50, title: "Cheetah Sprint",     category: "wildlife",     image: "images/wildlife/5.png",       favorite: false },

    
    { id: 51, title: "Wagyu Beef Steak",   category: "food",         image: "images/food/1.png",           favorite: false },
    { id: 52, title: "Ramen Bowl",         category: "food",         image: "images/food/2.png",           favorite: false },
    { id: 53, title: "Omakase Sushi",      category: "food",         image: "images/food/3.png",           favorite: false },
    { id: 54, title: "Chocolate Lava Cake",category: "food",         image: "images/food/4.png",           favorite: false },
    { id: 55, title: "Birria Tacos",       category: "food",         image: "images/food/5.png",           favorite: false },

    
    { id: 56, title: "Great Barrier Reef", category: "ocean",        image: "images/ocean/1.png",          favorite: false },
    { id: 57, title: "Pipeline Wave",      category: "ocean",        image: "images/ocean/2.png",          favorite: false },
    { id: 58, title: "Blue Whale",         category: "ocean",        image: "images/ocean/3.png",          favorite: false },
    { id: 59, title: "Jellyfish Bloom",    category: "ocean",        image: "images/ocean/4.png",          favorite: false },
    { id: 60, title: "Orca Pod",           category: "ocean",        image: "images/ocean/5.png",          favorite: false },

    
    { id: 61, title: "Mount Everest",      category: "mountains",    image: "images/mountains/1.png",      favorite: false },
    { id: 62, title: "Dolomites Italy",    category: "mountains",    image: "images/mountains/2.png",      favorite: false },
    { id: 63, title: "Torres del Paine",   category: "mountains",    image: "images/mountains/3.png",      favorite: false },
    { id: 64, title: "Zhangjiajie Pillars",category: "mountains",    image: "images/mountains/4.png",      favorite: false },
    { id: 65, title: "Volcano Lava Flow",  category: "mountains",    image: "images/mountains/5.png",      favorite: false },

];