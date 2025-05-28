// import { QuizData } from '../types/quiz';

// export const quizData: QuizData = {
//   team1: {
//     name: 'Team 1',
//     questions: [
//       {
//         id: 1,
//         question: "Which football player is known as 'The GOAT' and has won the most Ballon d'Or awards?",
//         options: ["Cristiano Ronaldo", "Lionel Messi", "Pelé", "Diego Maradona"],
//         correctAnswer: "Lionel Messi",
//         category: "sports",
//         imageUrl: "https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//       },
//       {
//         id: 2,
//         question: "Which character is the protagonist of the TV series 'Breaking Bad'?",
//         options: ["Jesse Pinkman", "Saul Goodman", "Walter White", "Hank Schrader"],
//         correctAnswer: "Walter White",
//         category: "web-series",
//         imageUrl: "https://images.pexels.com/photos/163077/mario-yoschi-figures-funny-163077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//       },
//       {
//         id: 3,
//         question: "Which singer is known as the 'Queen of Pop'?",
//         options: ["Lady Gaga", "Madonna", "Beyoncé", "Taylor Swift"],
//         correctAnswer: "Madonna",
//         category: "popular-culture",
//         imageUrl: "https://images.pexels.com/photos/1694900/pexels-photo-1694900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//       },
//       {
//         id: 4,
//         question: "Which country won the FIFA World Cup in 2018?",
//         options: ["Brazil", "Germany", "France", "Argentina"],
//         correctAnswer: "France",
//         category: "sports",
//         imageUrl: "https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//       },
//       {
//         id: 5,
//         question: "What is the name of the fictional continent where 'Game of Thrones' primarily takes place?",
//         options: ["Essos", "Westeros", "Sothoryos", "Ulthos"],
//         correctAnswer: "Westeros",
//         category: "web-series",
//         imageUrl: "https://images.pexels.com/photos/13791190/pexels-photo-13791190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//       },
//       {
//         id: 6,
//         question: "Which band released the album 'Dark Side of the Moon'?",
//         options: ["The Beatles", "Led Zeppelin", "Pink Floyd", "The Rolling Stones"],
//         correctAnswer: "Pink Floyd",
//         category: "popular-culture",
//         imageUrl: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//       },
//       {
//         id: 7,
//         question: "Which NBA team has won the most championships?",
//         options: ["Los Angeles Lakers", "Chicago Bulls", "Boston Celtics", "Golden State Warriors"],
//         correctAnswer: "Boston Celtics",
//         category: "sports",
//         imageUrl: "https://images.pexels.com/photos/358042/pexels-photo-358042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//       },
//       {
//         id: 8,
//         question: "Who plays the character Eleven in 'Stranger Things'?",
//         options: ["Winona Ryder", "Millie Bobby Brown", "Finn Wolfhard", "Sadie Sink"],
//         correctAnswer: "Millie Bobby Brown",
//         category: "web-series",
//         imageUrl: "https://images.pexels.com/photos/6502288/pexels-photo-6502288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//       },
//       {
//         id: 9,
//         question: "Which artist painted 'Starry Night'?",
//         options: ["Pablo Picasso", "Claude Monet", "Vincent van Gogh", "Leonardo da Vinci"],
//         correctAnswer: "Vincent van Gogh",
//         category: "popular-culture",
//         imageUrl: "https://images.pexels.com/photos/1193743/pexels-photo-1193743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//       },
//       {
//         id: 10,
//         question: "Who is the fastest man in Olympic history?",
//         options: ["Carl Lewis", "Usain Bolt", "Justin Gatlin", "Tyson Gay"],
//         correctAnswer: "Usain Bolt",
//         category: "sports",
//         imageUrl: "https://images.pexels.com/photos/33703/relay-race-competition-stadium-sport.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//       }
//     ]
//   },
//   team2: {
//     name: 'Team 2',
//     questions: [
//       {
//         id: 11,
//         question: "Which tennis player has won the most Grand Slam singles titles?",
//         options: ["Roger Federer", "Rafael Nadal", "Novak Djokovic", "Serena Williams"],
//         correctAnswer: "Novak Djokovic",
//         category: "sports",
//         imageUrl: "https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//       },
//       {
//         id: 12,
//         question: "Which actor plays Tony Stark/Iron Man in the Marvel Cinematic Universe?",
//         options: ["Chris Evans", "Chris Hemsworth", "Robert Downey Jr.", "Mark Ruffalo"],
//         correctAnswer: "Robert Downey Jr.",
//         category: "popular-culture",
//         imageUrl: "https://images.pexels.com/photos/1310847/pexels-photo-1310847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//       },
//       {
//         id: 13,
//         question: "Who is the creator of the Netflix series 'Squid Game'?",
//         options: ["Bong Joon-ho", "Park Chan-wook", "Hwang Dong-hyuk", "Kim Ki-duk"],
//         correctAnswer: "Hwang Dong-hyuk",
//         category: "web-series",
//         imageUrl: "https://images.pexels.com/photos/7679863/pexels-photo-7679863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//       },
//       {
//         id: 14,
//         question: "Which team won the 2023 Super Bowl?",
//         options: ["Kansas City Chiefs", "Philadelphia Eagles", "Cincinnati Bengals", "Los Angeles Rams"],
//         correctAnswer: "Kansas City Chiefs",
//         category: "sports",
//         imageUrl: "https://images.pexels.com/photos/159516/soccer-the-ball-sport-the-pitch-159516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//       },
//       {
//         id: 15,
//         question: "Which band's members were John Lennon, Paul McCartney, George Harrison, and Ringo Starr?",
//         options: ["The Rolling Stones", "The Who", "The Beatles", "Led Zeppelin"],
//         correctAnswer: "The Beatles",
//         category: "popular-culture",
//         imageUrl: "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//       },
//       {
//         id: 16,
//         question: "What is the name of the fictional metal in the Marvel universe that Captain America's shield is made of?",
//         options: ["Adamantium", "Vibranium", "Unobtainium", "Carbonadium"],
//         correctAnswer: "Vibranium",
//         category: "web-series",
//         imageUrl: "https://images.pexels.com/photos/6261132/pexels-photo-6261132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//       },
//       {
//         id: 17,
//         question: "Which golfer has won the most major championships?",
//         options: ["Tiger Woods", "Jack Nicklaus", "Arnold Palmer", "Phil Mickelson"],
//         correctAnswer: "Jack Nicklaus",
//         category: "sports",
//         imageUrl: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//       },
//       {
//         id: 18,
//         question: "Which director is known for films like 'Pulp Fiction' and 'Django Unchained'?",
//         options: ["Martin Scorsese", "Quentin Tarantino", "Christopher Nolan", "Steven Spielberg"],
//         correctAnswer: "Quentin Tarantino",
//         category: "popular-culture",
//         imageUrl: "https://images.pexels.com/photos/2923525/pexels-photo-2923525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//       },
//       {
//         id: 19,
//         question: "Who plays the character Saul Goodman in 'Better Call Saul'?",
//         options: ["Bryan Cranston", "Aaron Paul", "Bob Odenkirk", "Giancarlo Esposito"],
//         correctAnswer: "Bob Odenkirk",
//         category: "web-series",
//         imageUrl: "https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//       },
//       {
//         id: 20,
//         question: "Which city hosted the 2016 Summer Olympics?",
//         options: ["London", "Rio de Janeiro", "Tokyo", "Beijing"],
//         correctAnswer: "Rio de Janeiro",
//         category: "sports",
//         imageUrl: "https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//       }
//     ]
//   },
//   team3: {
//     name: 'Team 3',
//     questions: [
//       {
//         id: 21,
//         question: "Who is the main protagonist in the series 'The Witcher'?",
//         options: ["Geralt of Rivia", "Jaskier", "Yennefer", "Ciri"],
//         correctAnswer: "Geralt of Rivia",
//         category: "web-series",
//         imageUrl: "https://images.pexels.com/photos/8108063/pexels-photo-8108063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//       },
//       {
//         id: 22,
//         question: "Which athlete has won the most Olympic gold medals?",
//         options: ["Usain Bolt", "Michael Phelps", "Simone Biles", "Carl Lewis"],
//         correctAnswer: "Michael Phelps",
//         category: "sports",
//         imageUrl: "https://images.pexels.com/photos/163444/sport-treadmill-tor-route-163444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//       },
//       {
//         id: 23,
//         question: "Who wrote the 'Harry Potter' book series?",
//         options: ["J.R.R. Tolkien", "George R.R. Martin", "J.K. Rowling", "Stephen King"],
//         correctAnswer: "J.K. Rowling",
//         category: "popular-culture",
//         imageUrl: "https://images.pexels.com/photos/19079761/pexels-photo-19079761/free-photo-of-old-books-on-a-wooden-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//       },
//       {
//         id: 24,
//         question: "What is the name of the fictional city where 'Money Heist' primarily takes place?",
//         options: ["Berlin", "Madrid", "Palermo", "Lisbon"],
//         correctAnswer: "Madrid",
//         category: "web-series",
//         imageUrl: "https://images.pexels.com/photos/1308624/pexels-photo-1308624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//       },
//       {
//         id: 25,
//         question: "Which basketball player is known as 'King James'?",
//         options: ["Kobe Bryant", "Michael Jordan", "LeBron James", "Stephen Curry"],
//         correctAnswer: "LeBron James",
//         category: "sports",
//         imageUrl: "https://images.pexels.com/photos/869226/pexels-photo-869226.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//       },
//       {
//         id: 26,
//         question: "Who directed the film 'Inception'?",
//         options: ["James Cameron", "Christopher Nolan", "Steven Spielberg", "Martin Scorsese"],
//         correctAnswer: "Christopher Nolan",
//         category: "popular-culture",
//         imageUrl: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//       },
//       {
//         id: 27,
//         question: "Which team has won the most UEFA Champions League titles?",
//         options: ["Barcelona", "Bayern Munich", "Liverpool", "Real Madrid"],
//         correctAnswer: "Real Madrid",
//         category: "sports",
//         imageUrl: "https://images.pexels.com/photos/4700149/pexels-photo-4700149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//       },
//       {
//         id: 28,
//         question: "Who plays the lead role in the TV series 'Lucifer'?",
//         options: ["Matt Ryan", "Tom Ellis", "Benedict Cumberbatch", "David Tennant"],
//         correctAnswer: "Tom Ellis",
//         category: "web-series",
//         imageUrl: "https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//       },
//       {
//         id: 29,
//         question: "What is the name of the fictional metal alloy that Wolverine's claws are made of in X-Men?",
//         options: ["Vibranium", "Adamantium", "Unobtainium", "Carbonadium"],
//         correctAnswer: "Adamantium",
//         category: "popular-culture",
//         imageUrl: "https://images.pexels.com/photos/2225617/pexels-photo-2225617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//       },
//       {
//         id: 30,
//         question: "Who is the creator of the anime series 'One Piece'?",
//         options: ["Masashi Kishimoto", "Akira Toriyama", "Eiichiro Oda", "Hayao Miyazaki"],
//         correctAnswer: "Eiichiro Oda",
//         category: "web-series",
//         imageUrl: "https://images.pexels.com/photos/5356275/pexels-photo-5356275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//       }
//     ]
//   }
// };

import { QuizData } from '../types/quiz';

export const quizData: QuizData = {
  team1: {
    name: 'Team 1',
    questions: [
      {
        id: 1,
        question: "In The Lion King, what is the name of Simba's mother?",
        options: ["Sarabi", "Shenzi", "Rafiki", "Zira"],
        correctAnswer: "Sarabi",
        category: "popular-culture",
        imageUrl: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=800&h=600&fit=crop"
      },
      {
        id: 2,
        question: "In Friends, what's the name of the character Joey plays on a soap opera?",
        options: ["Dr. Howser", "Dr. Ramoray", "Dr. Dorian", "Dr. Wilson"],
        correctAnswer: "Dr. Ramoray",
        category: "web-series",
        imageUrl: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&h=600&fit=crop"
      },
      {
        id: 3,
        question: "Which Infinity Stone was hidden in Vision's forehead in Avengers?",
        options: ["Time Stone", "Power Stone", "Mind Stone", "Reality Stone"],
        correctAnswer: "Mind Stone",
        category: "popular-culture",
        imageUrl: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=800&h=600&fit=crop"
      },
      {
        id: 4,
        question: "In Money Heist, which city name does the character Tokyo suggest for the Professor?",
        options: ["Madrid", "Berlin", "Oslo", "None – he doesn't get a city name"],
        correctAnswer: "None – he doesn't get a city name",
        category: "web-series",
        imageUrl: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=800&h=600&fit=crop"
      },
      {
        id: 5,
        question: "What's the name of the pub in Stranger Things where Hopper meets Joyce?",
        options: ["Benny's", "Enzo's", "Byer's Inn", "Starcourt"],
        correctAnswer: "Enzo's",
        category: "web-series",
        imageUrl: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&h=600&fit=crop"
      },
      {
        id: 6,
        question: "Who scored a century in the 2011 Cricket World Cup final?",
        options: ["Gautam Gambhir", "MS Dhoni", "Sachin Tendulkar", "Virat Kohli"],
        correctAnswer: "MS Dhoni",
        category: "sports",
        imageUrl: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&h=600&fit=crop"
      },
      {
        id: 7,
        question: "Which football club has won the most UEFA Champions League titles?",
        options: ["Barcelona", "AC Milan", "Real Madrid", "Bayern Munich"],
        correctAnswer: "Real Madrid",
        category: "sports",
        imageUrl: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&h=600&fit=crop"
      },
      {
        id: 8,
        question: "Which animal is known to spend 90% of its day sleeping?",
        options: ["Cat", "Koala", "Panda", "Sloth"],
        correctAnswer: "Koala",
        category: "popular-culture",
        imageUrl: "https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?w=800&h=600&fit=crop"
      },
      {
        id: 9,
        question: "Which famous scientist had a brain so big, it was preserved after death?",
        options: ["Nikola Tesla", "Isaac Newton", "Albert Einstein", "Stephen Hawking"],
        correctAnswer: "Albert Einstein",
        category: "popular-culture",
        imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop"
      },
      {
        id: 10,
        question: "What's Eleven's favorite snack in Stranger Things?",
        options: ["Skittles", "Popcorn", "Eggo Waffles", "Twinkies"],
        correctAnswer: "Eggo Waffles",
        category: "web-series",
        imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
      }
    ]
  },
  team2: {
    name: 'Team 2',
    questions: [
      {
        id: 11,
        question: "Which character said the iconic line 'I am inevitable' in the MCU?",
        options: ["Loki", "Thor", "Thanos", "Ultron"],
        correctAnswer: "Thanos",
        category: "popular-culture",
        imageUrl: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=800&h=600&fit=crop"
      },
      {
        id: 12,
        question: "In Breaking Bad, what does Walter White hide his money in?",
        options: ["A mattress", "A storage locker", "A pizza box", "A barrel"],
        correctAnswer: "A barrel",
        category: "web-series",
        imageUrl: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=800&h=600&fit=crop"
      },
      {
        id: 13,
        question: "In Harry Potter, what spell is used to disarm an opponent?",
        options: ["Lumos", "Expelliarmus", "Avada Kedavra", "Accio"],
        correctAnswer: "Expelliarmus",
        category: "popular-culture",
        imageUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop"
      },
      {
        id: 14,
        question: "What color is the Mind Flayer's cloud in Stranger Things Season 3?",
        options: ["Red", "Purple", "Black", "Blue"],
        correctAnswer: "Black",
        category: "web-series",
        imageUrl: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&h=600&fit=crop"
      },
      {
        id: 15,
        question: "Which Indian batsman is known for hitting six sixes in one over in T20 international cricket?",
        options: ["Virat Kohli", "Yuvraj Singh", "Rohit Sharma", "Suryakumar Yadav"],
        correctAnswer: "Yuvraj Singh",
        category: "sports",
        imageUrl: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&h=600&fit=crop"
      },
      {
        id: 16,
        question: "Who won the 2023 Wimbledon Men's Singles title?",
        options: ["Novak Djokovic", "Carlos Alcaraz", "Daniil Medvedev", "Rafael Nadal"],
        correctAnswer: "Carlos Alcaraz",
        category: "sports",
        imageUrl: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop"
      },
      {
        id: 17,
        question: "Which planet rotates in the opposite direction of most other planets?",
        options: ["Mars", "Earth", "Venus", "Jupiter"],
        correctAnswer: "Venus",
        category: "popular-culture",
        imageUrl: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&h=600&fit=crop"
      },
      {
        id: 18,
        question: "What is Chandler Bing's job in Friends?",
        options: ["He's a transponster", "He works in data analysis", "Nobody knows", "Statistical analysis and data reconfiguration"],
        correctAnswer: "Statistical analysis and data reconfiguration",
        category: "web-series",
        imageUrl: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&h=600&fit=crop"
      },
      {
        id: 19,
        question: "In The Office (US), what's the name of the company they work for?",
        options: ["Dunder Mifflin", "Sabre", "PaperWorks Inc.", "Staples"],
        correctAnswer: "Dunder Mifflin",
        category: "web-series",
        imageUrl: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=800&h=600&fit=crop"
      },
      {
        id: 20,
        question: "In Peaky Blinders, what is the name of Tommy Shelby's horse?",
        options: ["Grace's Secret", "Monaghan Boy", "Thunderbolt", "Kingsman"],
        correctAnswer: "Monaghan Boy",
        category: "web-series",
        imageUrl: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=800&h=600&fit=crop"
      }
    ]
  },
  team3: {
    name: 'Team 3',
    questions: [
      {
        id: 21,
        question: "Which Marvel character is a former KGB assassin?",
        options: ["Wanda Maximoff", "Natasha Romanoff", "Peggy Carter", "Gamora"],
        correctAnswer: "Natasha Romanoff",
        category: "popular-culture",
        imageUrl: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=800&h=600&fit=crop"
      },
      {
        id: 22,
        question: "In Game of Thrones, what is Arya Stark's sword called?",
        options: ["Needle", "Ice", "Oathkeeper", "Whisper"],
        correctAnswer: "Needle",
        category: "web-series",
        imageUrl: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=800&h=600&fit=crop"
      },
      {
        id: 23,
        question: "In Sherlock (BBC), what's the name of Sherlock's older brother?",
        options: ["Mycroft", "Lestrade", "Watson", "Moriarty"],
        correctAnswer: "Mycroft",
        category: "web-series",
        imageUrl: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=800&h=600&fit=crop"
      },
      {
        id: 24,
        question: "Which country hosted the FIFA World Cup in 2022?",
        options: ["Russia", "USA", "Qatar", "Brazil"],
        correctAnswer: "Qatar",
        category: "sports",
        imageUrl: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&h=600&fit=crop"
      },
      {
        id: 25,
        question: "Which female tennis player has the most Grand Slam singles titles?",
        options: ["Serena Williams", "Margaret Court", "Steffi Graf", "Martina Navratilova"],
        correctAnswer: "Margaret Court",
        category: "sports",
        imageUrl: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop"
      },
      {
        id: 26,
        question: "Which app icon changes the most during holidays?",
        options: ["WhatsApp", "Google", "Instagram", "Amazon"],
        correctAnswer: "Google",
        category: "popular-culture",
        imageUrl: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=800&h=600&fit=crop"
      },
      {
        id: 27,
        question: "What's the unofficial 'national bird' of social media?",
        options: ["The eagle", "The sparrow", "The Twitter bird", "The roast chicken meme"],
        correctAnswer: "The Twitter bird",
        category: "popular-culture",
        imageUrl: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=800&h=600&fit=crop"
      },
      {
        id: 28,
        question: "What's a universally accepted excuse when your camera is off in a meeting?",
        options: ["Bad internet", "Power cut", "Camera not working", "All of the above"],
        correctAnswer: "All of the above",
        category: "popular-culture",
        imageUrl: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=800&h=600&fit=crop"
      },
      {
        id: 29,
        question: "Who was voted the most beautiful woman in the world last year?",
        options: ["Deepika Padukone", "Zendaya", "Taylor Swift", "Muskan 😇"],
        correctAnswer: "Muskan 😇",
        category: "popular-culture",
        imageUrl: "https://images.unsplash.com/photo-1494790108755-2616c375484a?w=800&h=600&fit=crop"
      },
      {
        id: 30,
        question: "What's something we all do during Zoom calls but won't admit?",
        options: ["Judge people's backgrounds", "Pretend to freeze", "Mute and talk to family", "All of the above"],
        correctAnswer: "All of the above",
        category: "popular-culture",
        imageUrl: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=800&h=600&fit=crop"
      }
    ]
  }
};