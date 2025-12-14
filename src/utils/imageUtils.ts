// Utility functions for reliable image URLs

// Using Picsum Photos (Lorem Picsum) - very reliable placeholder service
// Format: https://picsum.photos/seed/{seed}/width/height
export const getPicsumImage = (seed: string | number, width: number, height: number): string => {
  return `https://picsum.photos/seed/${seed}/${width}/${height}`;
};

// Using Unsplash API with proper format (w=width&h=height)
export const getUnsplashImage = (width: number, height: number): string => {
  // Using Unsplash's random image API
  return `https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=${width}&h=${height}&fit=crop&q=80`;
};

// Country-specific image mappings with multiple fallback options
// Pinterest images are PRIMARY (first in array), Picsum as fallbacks
export const getCountryImage = (countryName: string): string[] => {
  const countryImages: Record<string, string[]> = {
    'Australia': [
      'https://i.pinimg.com/1200x/4c/49/75/4c497530e4aaca38ef7da0855cb3f58c.jpg',
      getPicsumImage('australia1', 640, 480),
      getPicsumImage('australia2', 640, 480),
    ],
    'Brazil': [
      'https://i.pinimg.com/736x/e6/9f/ad/e69fade7a1a1135cf0c3549bd6b6f3fb.jpg',
      getPicsumImage('brazil1', 640, 480),
      getPicsumImage('brazil2', 640, 480),
    ],
    'Canada': [
      'https://i.pinimg.com/1200x/48/29/f1/4829f185d855adeadaf533a387dc4870.jpg',
      getPicsumImage('canada1', 640, 480),
      getPicsumImage('canada2', 640, 480),
    ],
    'Italy': [
      'https://i.pinimg.com/1200x/01/a0/59/01a059410aa9a9723eb12f1d8b8eecd6.jpg',
      getPicsumImage('italy1', 640, 480),
      getPicsumImage('italy2', 640, 480),
    ],
    'Japan': [
      'https://i.pinimg.com/1200x/fd/7b/ec/fd7becf818dc6a4be682b5dc77a5b1e3.jpg',
      getPicsumImage('japan1', 640, 480),
      getPicsumImage('japan2', 640, 480),
    ],
    'New Zealand': [
      'https://i.pinimg.com/736x/d4/6c/a0/d46ca0d07fb887f260a9e1f419a3fc2a.jpg',
      getPicsumImage('newzealand1', 640, 480),
      getPicsumImage('newzealand2', 640, 480),
    ],
    'Thailand': [
      'https://i.pinimg.com/736x/a9/0f/fe/a90ffe010becbd591fa05df9447e77fe.jpg',
      getPicsumImage('thailand1', 640, 480),
      getPicsumImage('thailand2', 640, 480),
    ],
    'Switzerland': [
      'https://i.pinimg.com/736x/bd/ee/63/bdee630d750fe94f22a22feccb11fc50.jpg',
      getPicsumImage('switzerland1', 640, 480),
      getPicsumImage('switzerland2', 640, 480),
    ],
    'India': [
      'https://i.pinimg.com/736x/2e/13/2e/2e132e59000aa4d018ec74e2dd06266c.jpg',
      getPicsumImage('india1', 640, 480),
      getPicsumImage('india2', 640, 480),
    ],
    'South Africa': [
      'https://i.pinimg.com/736x/99/0f/0f/990f0ffbc816f576c8515c26b7688f1b.jpg',
      getPicsumImage('southafrica1', 640, 480),
      getPicsumImage('southafrica2', 640, 480),
    ],
    'Greece': [
      'https://i.pinimg.com/736x/31/a2/da/31a2daeef4ca30bb222bbf0950131e48.jpg',
      getPicsumImage('greece1', 640, 480),
      getPicsumImage('greece2', 640, 480),
    ],
    'Norway': [
      'https://i.pinimg.com/736x/44/6e/cd/446ecd32851d6cb940bce7da05e7ec5f.jpg',
      getPicsumImage('norway1', 640, 480),
      getPicsumImage('norway2', 640, 480),
    ],
    'Mexico': [
      'https://i.pinimg.com/1200x/68/03/a6/6803a66ea0591411e466a04c1cafcea4.jpg',
      getPicsumImage('mexico1', 640, 480),
      getPicsumImage('mexico2', 640, 480),
    ],
    'France': [
      'https://i.pinimg.com/1200x/8d/00/ea/8d00ea834b0b5a31a03b9308ef7f97c1.jpg',
      getPicsumImage('france1', 640, 480),
      getPicsumImage('france2', 640, 480),
    ],
    'Argentina': [
      'https://i.pinimg.com/736x/55/9f/f9/559ff9eb715b1e46163cb6d2c7b5d9d5.jpg',
      getPicsumImage('argentina1', 640, 480),
      getPicsumImage('argentina2', 640, 480),
    ],
    'Spain': [
      'https://i.pinimg.com/736x/e5/f0/e8/e5f0e8c820b281646f332e7404c28e4c.jpg',
      getPicsumImage('spain1', 640, 480),
      getPicsumImage('spain2', 640, 480),
    ],
    'Peru': [
      'https://i.pinimg.com/736x/aa/0f/a1/aa0fa1f9706aca66258338a5df6773cb.jpg',
      getPicsumImage('peru1', 640, 480),
      getPicsumImage('peru2', 640, 480),
    ],
    'Indonesia': [
      'https://i.pinimg.com/1200x/02/21/ad/0221ad079845c3157be2a3e2bef978ce.jpg',
      getPicsumImage('indonesia1', 640, 480),
      getPicsumImage('indonesia2', 640, 480),
    ],
    'Iceland': [
      'https://i.pinimg.com/736x/b4/06/ce/b406ceecd975b53760c8b3d3ac1749c7.jpg',
      getPicsumImage('iceland1', 640, 480),
      getPicsumImage('iceland2', 640, 480),
    ],
    'Egypt': [
      'https://i.pinimg.com/736x/c8/8e/9a/c88e9aa6d50d3115a3172ba9547c31a5.jpg',
      getPicsumImage('egypt1', 640, 480),
      getPicsumImage('egypt2', 640, 480),
    ],
    'Vietnam': [
      'https://i.pinimg.com/736x/e8/7d/87/e87d8748b8fdd2615c24b306eeca7e78.jpg',
      getPicsumImage('vietnam1', 640, 480),
      getPicsumImage('vietnam2', 640, 480),
    ],
    'Chile': [
      'https://i.pinimg.com/1200x/f6/14/7d/f6147dddc714e7d9c0ec40d070a7becd.jpg',
      getPicsumImage('chile1', 640, 480),
      getPicsumImage('chile2', 640, 480),
    ],
    'Morocco': [
      'https://i.pinimg.com/1200x/f7/02/0c/f7020c3ac4429934e04c656dce7c4d25.jpg',
      getPicsumImage('morocco1', 640, 480),
      getPicsumImage('morocco2', 640, 480),
    ],
    'Sweden': [
      'https://i.pinimg.com/736x/87/f2/5a/87f25ad4cf8d5da0f51697b3abe0477f.jpg',
      getPicsumImage('sweden1', 640, 480),
      getPicsumImage('sweden2', 640, 480),
    ],
    'Portugal': [
      'https://i.pinimg.com/1200x/97/af/d1/97afd135cbfadb24033485977fc503fc.jpg',
      getPicsumImage('portugal1', 640, 480),
      getPicsumImage('portugal2', 640, 480),
    ],
  };

  return countryImages[countryName] || [getPicsumImage(countryName.toLowerCase(), 640, 480)];
};

// Question option images with fallbacks
export const getQuestionImage = (category: string, value: string): string[] => {
  const imageMap: Record<string, Record<string, string[]>> = {
    weather: {
      sunny: [
        'https://i.pinimg.com/736x/9b/a2/1a/9ba21a376bbed737b29249a8aed19213.jpg',
        getPicsumImage('sunny1', 240, 160),
        getPicsumImage('sunny2', 240, 160),
      ],
      tropical: [
        'https://i.pinimg.com/736x/5e/e0/75/5ee075ef782a845e1f582eea506136be.jpg',
        getPicsumImage('tropical1', 240, 160),
        getPicsumImage('tropical2', 240, 160),
      ],
      cold: [
        'https://i.pinimg.com/1200x/7b/dd/92/7bdd92d5ab370224a93b812ac64594e0.jpg',
        getPicsumImage('cold1', 240, 160),
        getPicsumImage('cold2', 240, 160),
      ],
      temperate: [
        'https://i.pinimg.com/736x/3d/0a/75/3d0a75c2c4feacf6bda76836eb0d0267.jpg',
        getPicsumImage('temperate1', 240, 160),
        getPicsumImage('temperate2', 240, 160),
      ],
      rainy: [
        'https://i.pinimg.com/1200x/77/49/46/774946a60be2e2c870500dcdbab205cd.jpg',
        getPicsumImage('rainy1', 240, 160),
        getPicsumImage('rainy2', 240, 160),
      ],
      windy: [
        'https://i.pinimg.com/736x/91/36/ce/9136ce853e74d59b505f9335ef3a9be1.jpg',
        getPicsumImage('windy1', 240, 160),
        getPicsumImage('windy2', 240, 160),
      ],
    },
    roads: {
      straight: [
        'https://i.pinimg.com/1200x/84/a1/ff/84a1ff848c5088f5de142ac5dc36ddce.jpg',
        getPicsumImage('road1', 240, 160),
        getPicsumImage('road2', 240, 160),
      ],
      curved: [
        'https://i.pinimg.com/1200x/3c/21/41/3c2141f0b41f7242e90c165ab8b83ff7.jpg',
        getPicsumImage('road3', 240, 160),
        getPicsumImage('road4', 240, 160),
      ],
      beachside: [
        'https://i.pinimg.com/1200x/3e/72/55/3e72558dba26e95041e4d22986731548.jpg',
        getPicsumImage('beachroad1', 240, 160),
        getPicsumImage('beachroad2', 240, 160),
      ],
      urban: [
        'https://i.pinimg.com/736x/aa/40/88/aa408869d17db394977160884a16760f.jpg',
        getPicsumImage('cityroad1', 240, 160),
        getPicsumImage('cityroad2', 240, 160),
      ],
      mountain: [
        'https://i.pinimg.com/1200x/67/d1/5d/67d15d925c1b1f10d36d2305cad7c858.jpg',
        getPicsumImage('mountainroad1', 240, 160),
        getPicsumImage('mountainroad2', 240, 160),
      ],
      countryside: [
        'https://i.pinimg.com/736x/ac/1f/65/ac1f657fd8bb7ee744e678485745de63.jpg',
        getPicsumImage('countryside1', 240, 160),
        getPicsumImage('countryside2', 240, 160),
      ],
    },
    landscape: {
      beaches: [
        'https://i.pinimg.com/1200x/2a/63/1d/2a631d3d6664c0c84bf78db4a758a2a9.jpg',
        getPicsumImage('beach1', 240, 160),
        getPicsumImage('beach2', 240, 160),
      ],
      mountains: [
        'https://i.pinimg.com/736x/7d/be/d9/7dbed90655c6d7de0f4d01eb01b9cbe1.jpg',
        getPicsumImage('mountain1', 240, 160),
        getPicsumImage('mountain2', 240, 160),
      ],
      jungles: [
        'https://i.pinimg.com/736x/ba/97/0b/ba970bb67dc4e2841b3b2598413a58a3.jpg',
        getPicsumImage('jungle1', 240, 160),
        getPicsumImage('jungle2', 240, 160),
      ],
      cities: [
        'https://i.pinimg.com/1200x/10/3f/a3/103fa32a398e8eac3d0b7abbacc1cdd5.jpg',
        getPicsumImage('city1', 240, 160),
        getPicsumImage('city2', 240, 160),
      ],
      deserts: [
        'https://i.pinimg.com/1200x/af/99/13/af9913985d2d52f76e896eb344993e49.jpg',
        getPicsumImage('desert1', 240, 160),
        getPicsumImage('desert2', 240, 160),
      ],
      savanna: [
        'https://i.pinimg.com/736x/4d/d7/c0/4dd7c0f68fd9d0d51f13cba3a8f24163.jpg',
        getPicsumImage('savanna1', 240, 160),
        getPicsumImage('savanna2', 240, 160),
      ],
      plains: [
        'https://i.pinimg.com/736x/78/3e/28/783e283f2621e49b1f7e72c1fe24af1a.jpg',
        getPicsumImage('plains1', 240, 160),
        getPicsumImage('plains2', 240, 160),
      ],
      forests: [
        'https://i.pinimg.com/1200x/2e/ee/56/2eee566424c1f35fbeacf85496b4b6e7.jpg',
        getPicsumImage('forest1', 240, 160),
        getPicsumImage('forest2', 240, 160),
      ],
      islands: [
        'https://i.pinimg.com/736x/4a/21/79/4a21793b88a264e62486adc99d140a50.jpg',
        getPicsumImage('islands1', 240, 160),
        getPicsumImage('islands2', 240, 160),
      ],
      lakes: [
        'https://i.pinimg.com/1200x/e3/11/2a/e3112a2b684a71b78bfeea87d58d243a.jpg',
        getPicsumImage('lakes1', 240, 160),
        getPicsumImage('lakes2', 240, 160),
      ],
    },
    culture: {
      vibrant: [
        'https://i.pinimg.com/1200x/c2/83/22/c2832207fd81bb01c85b68b7490f1113.jpg',
        getPicsumImage('festival1', 240, 160),
        getPicsumImage('festival2', 240, 160),
      ],
      historical: [
        'https://i.pinimg.com/736x/74/35/c0/7435c09f2f9a5513aea660a1625e86ea.jpg',
        getPicsumImage('historical1', 240, 160),
        getPicsumImage('historical2', 240, 160),
      ],
      relaxed: [
        'https://i.pinimg.com/736x/0a/15/6e/0a156ebdab0db992729478d9997afb87.jpg',
        getPicsumImage('relaxed1', 240, 160),
        getPicsumImage('relaxed2', 240, 160),
      ],
      diverse: [
        'https://i.pinimg.com/1200x/43/7c/f6/437cf6b355525268db8677bc97429cee.jpg',
        getPicsumImage('diverse1', 240, 160),
        getPicsumImage('diverse2', 240, 160),
      ],
      traditional: [
        'https://i.pinimg.com/1200x/5d/4e/5d/5d4e5d31a3758c9d615f1041c4607457.jpg',
        getPicsumImage('traditional1', 240, 160),
        getPicsumImage('traditional2', 240, 160),
      ],
      modern: [
        'https://i.pinimg.com/736x/96/9e/29/969e29466c4040aa181f7d80e6cac331.jpg',
        getPicsumImage('modern1', 240, 160),
        getPicsumImage('modern2', 240, 160),
      ],
    },
    activities: {
      outdoor: [
        'https://i.pinimg.com/1200x/19/0c/f5/190cf58ff4fb3c924720a4ef743efb73.jpg',
        getPicsumImage('outdoor1', 240, 160),
        getPicsumImage('outdoor2', 240, 160),
      ],
      cultural: [
        'https://i.pinimg.com/1200x/6c/d7/8c/6cd78cff97754e3207a7857c5918c0ea.jpg',
        getPicsumImage('cultural1', 240, 160),
        getPicsumImage('cultural2', 240, 160),
      ],
      festivals: [
        'https://i.pinimg.com/736x/63/70/78/637078bdfe21bc6b1247f4a92219314c.jpg',
        getPicsumImage('festival3', 240, 160),
        getPicsumImage('festival4', 240, 160),
      ],
      relaxation: [
        'https://i.pinimg.com/736x/e5/3e/77/e53e773158e5e00d3929ad148ef7f7ee.jpg',
        getPicsumImage('relaxation1', 240, 160),
        getPicsumImage('relaxation2', 240, 160),
      ],
      adventure: [
        'https://i.pinimg.com/736x/b9/17/fd/b917fdc63744ad30426969f6d5402ce8.jpg',
        getPicsumImage('adventure1', 240, 160),
        getPicsumImage('adventure2', 240, 160),
      ],
      nightlife: [
        'https://i.pinimg.com/1200x/1e/43/1b/1e431b40d5b5e38a2f579b9d7a6abdf6.jpg',
        getPicsumImage('nightlife1', 240, 160),
        getPicsumImage('nightlife2', 240, 160),
      ],
    },
  };

  return imageMap[category]?.[value] || [getPicsumImage(`${category}-${value}`, 240, 160)];
};

