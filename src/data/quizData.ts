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
  //         question: "Which country won the FIFA World Cup in 2022?",
  //         options: ["Brazil", "Germany", "France", "Argentina"],
  //         correctAnswer: "Argentina",
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
        question: "Who is known for winning the most Ballon d'Or awards in football history?",
        options: ["Cristiano Ronaldo", "Lionel Messi", "Pelé", "Diego Maradona"],
        correctAnswer: "Lionel Messi",
        category: "sports",
        imageUrl: "https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg"
      },
      {
        id: 2,
        question: "Who is the high school chemistry teacher turned meth kingpin in 'Breaking Bad'?",
        options: ["Jesse Pinkman", "Saul Goodman", "Walter White", "Hank Schrader"],
        correctAnswer: "Walter White",
        category: "web-series",
        imageUrl: "https://images.pexels.com/photos/163077/mario-yoschi-figures-funny-163077.jpeg"
      },
      {
        id: 3,
        question: "Who is widely regarded as the 'Queen of Pop'?",
        options: ["Lady Gaga", "Madonna", "Beyoncé", "Taylor Swift"],
        correctAnswer: "Madonna",
        category: "popular-culture",
        imageUrl: "https://images.pexels.com/photos/1694900/pexels-photo-1694900.jpeg"
      },
      {
        id: 4,
        question: "Which nation won the 2022 FIFA World Cup?",
        options: ["Brazil", "Germany", "France", "Argentina"],
        correctAnswer: "Argentina",
        category: "sports",
        imageUrl: "https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg"
      },
      {
        id: 5,
        question: "In which fictional land does the majority of 'Game of Thrones' take place?",
        options: ["Essos", "Westeros", "Sothoryos", "Ulthos"],
        correctAnswer: "Westeros",
        category: "web-series",
        imageUrl: "https://images.pexels.com/photos/13791190/pexels-photo-13791190.jpeg"
      },
      {
        id: 6,
        question: "Which band is behind the legendary album 'Dark Side of the Moon'?",
        options: ["The Beatles", "Led Zeppelin", "Pink Floyd", "The Rolling Stones"],
        correctAnswer: "Pink Floyd",
        category: "popular-culture",
        imageUrl: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg"
      },
      {
        id: 7,
        question: "Which NBA team holds the record for the most championship wins?",
        options: ["Los Angeles Lakers", "Chicago Bulls", "Boston Celtics", "Golden State Warriors"],
        correctAnswer: "Boston Celtics",
        category: "sports",
        imageUrl: "https://images.pexels.com/photos/358042/pexels-photo-358042.jpeg"
      },
      {
        id: 8,
        question: "Who portrays the character Eleven in 'Stranger Things'?",
        options: ["Winona Ryder", "Millie Bobby Brown", "Finn Wolfhard", "Sadie Sink"],
        correctAnswer: "Millie Bobby Brown",
        category: "web-series",
        imageUrl: "https://images.pexels.com/photos/6502288/pexels-photo-6502288.jpeg"
      },
      {
        id: 9,
        question: "Who is the artist behind the painting 'Starry Night'?",
        options: ["Pablo Picasso", "Claude Monet", "Vincent van Gogh", "Leonardo da Vinci"],
        correctAnswer: "Vincent van Gogh",
        category: "popular-culture",
        imageUrl: "https://images.pexels.com/photos/1193743/pexels-photo-1193743.jpeg"
      },
      {
        id: 10,
        question: "Who is the current record holder for the fastest 100m sprint in Olympic history?",
        options: ["Carl Lewis", "Usain Bolt", "Justin Gatlin", "Tyson Gay"],
        correctAnswer: "Usain Bolt",
        category: "sports",
        imageUrl: "https://images.pexels.com/photos/33703/relay-race-competition-stadium-sport.jpg"
      }
    ]
  },
  team2: {
    name: 'Team 2',
    questions: [
      {
        id: 11,
        question: "Which tennis player has clinched the most Grand Slam singles titles?",
        options: ["Roger Federer", "Rafael Nadal", "Novak Djokovic", "Serena Williams"],
        correctAnswer: "Novak Djokovic",
        category: "sports",
        imageUrl: "https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg"
      },
      {
        id: 12,
        question: "Who plays Tony Stark, also known as Iron Man, in the MCU?",
        options: ["Chris Evans", "Chris Hemsworth", "Robert Downey Jr.", "Mark Ruffalo"],
        correctAnswer: "Robert Downey Jr.",
        category: "popular-culture",
        imageUrl: "https://images.pexels.com/photos/1310847/pexels-photo-1310847.jpeg"
      },
      {
        id: 13,
        question: "Who created the Netflix series 'Squid Game'?",
        options: ["Bong Joon-ho", "Park Chan-wook", "Hwang Dong-hyuk", "Kim Ki-duk"],
        correctAnswer: "Hwang Dong-hyuk",
        category: "web-series",
        imageUrl: "https://images.pexels.com/photos/7679863/pexels-photo-7679863.jpeg"
      },
      {
        id: 14,
        question: "Who won the 2023 Super Bowl?",
        options: ["Kansas City Chiefs", "Philadelphia Eagles", "Cincinnati Bengals", "Los Angeles Rams"],
        correctAnswer: "Kansas City Chiefs",
        category: "sports",
        imageUrl: "https://images.pexels.com/photos/159516/soccer-the-ball-sport-the-pitch-159516.jpeg"
      },
      {
        id: 15,
        question: "Which British band was made up of John Lennon, Paul McCartney, George Harrison, and Ringo Starr?",
        options: ["The Rolling Stones", "The Who", "The Beatles", "Led Zeppelin"],
        correctAnswer: "The Beatles",
        category: "popular-culture",
        imageUrl: "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg"
      },
      {
        id: 16,
        question: "In the Marvel universe, what metal is Captain America's shield made of?",
        options: ["Adamantium", "Vibranium", "Unobtainium", "Carbonadium"],
        correctAnswer: "Vibranium",
        category: "web-series",
        imageUrl: "https://images.pexels.com/photos/6261132/pexels-photo-6261132.jpeg"
      },
      {
        id: 17,
        question: "Which golfer holds the record for the most major championship wins?",
        options: ["Tiger Woods", "Jack Nicklaus", "Arnold Palmer", "Phil Mickelson"],
        correctAnswer: "Jack Nicklaus",
        category: "sports",
        imageUrl: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg"
      },
      {
        id: 18,
        question: "Who directed 'Pulp Fiction' and 'Inglourious Basterds'?",
        options: ["Martin Scorsese", "Quentin Tarantino", "Christopher Nolan", "Steven Spielberg"],
        correctAnswer: "Quentin Tarantino",
        category: "popular-culture",
        imageUrl: "https://images.pexels.com/photos/2923525/pexels-photo-2923525.jpeg"
      },
      {
        id: 19,
        question: "Who portrays the sly lawyer Saul Goodman in 'Better Call Saul'?",
        options: ["Bryan Cranston", "Aaron Paul", "Bob Odenkirk", "Giancarlo Esposito"],
        correctAnswer: "Bob Odenkirk",
        category: "web-series",
        imageUrl: "https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg"
      },
      {
        id: 20,
        question: "Which city hosted the Summer Olympics in 2016?",
        options: ["London", "Rio de Janeiro", "Tokyo", "Beijing"],
        correctAnswer: "Rio de Janeiro",
        category: "sports",
        imageUrl: "https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg"
      }
    ]
  },
  team3: {
    name: 'Team 3',
    questions: [
      {
        id: 21,
        question: "Who is the monster hunter in the TV series 'The Witcher'?",
        options: ["Geralt of Rivia", "Jaskier", "Yennefer", "Ciri"],
        correctAnswer: "Geralt of Rivia",
        category: "web-series",
        imageUrl: "https://images.pexels.com/photos/8108063/pexels-photo-8108063.jpeg"
      },
      {
        id: 22,
        question: "Who has won the most Olympic gold medals in history?",
        options: ["Usain Bolt", "Michael Phelps", "Simone Biles", "Carl Lewis"],
        correctAnswer: "Michael Phelps",
        category: "sports",
        imageUrl: "https://images.pexels.com/photos/163444/sport-treadmill-tor-route-163444.jpeg"
      },
      {
        id: 23,
        question: "Who is the author of the 'Harry Potter' books?",
        options: ["J.R.R. Tolkien", "George R.R. Martin", "J.K. Rowling", "Stephen King"],
        correctAnswer: "J.K. Rowling",
        category: "popular-culture",
        imageUrl: "https://images.pexels.com/photos/19079761/pexels-photo-19079761/free-photo-of-old-books-on-a-wooden-table.jpeg"
      },
      {
        id: 24,
        question: "In 'Money Heist', which city is the heist's main target?",
        options: ["Berlin", "Madrid", "Palermo", "Lisbon"],
        correctAnswer: "Madrid",
        category: "web-series",
        imageUrl: "https://images.pexels.com/photos/1308624/pexels-photo-1308624.jpeg"
      },
      {
        id: 25,
        question: "Which basketball star is known by the nickname 'King James'?",
        options: ["Kobe Bryant", "Michael Jordan", "LeBron James", "Stephen Curry"],
        correctAnswer: "LeBron James",
        category: "sports",
        imageUrl: "https://images.pexels.com/photos/869226/pexels-photo-869226.jpeg"
      },
      {
        id: 26,
        question: "Who is the director of 'Inception' and 'Interstellar'?",
        options: ["James Cameron", "Christopher Nolan", "Steven Spielberg", "Martin Scorsese"],
        correctAnswer: "Christopher Nolan",
        category: "popular-culture",
        imageUrl: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg"
      },
      {
        id: 27,
        question: "Which European club has won the most UEFA Champions League trophies?",
        options: ["Barcelona", "Bayern Munich", "Liverpool", "Real Madrid"],
        correctAnswer: "Real Madrid",
        category: "sports",
        imageUrl: "https://images.pexels.com/photos/4700149/pexels-photo-4700149.jpeg"
      },
      {
        id: 28,
        question: "Who plays the devilishly charming role of Lucifer in the TV series 'Lucifer'?",
        options: ["Matt Ryan", "Tom Ellis", "Benedict Cumberbatch", "David Tennant"],
        correctAnswer: "Tom Ellis",
        category: "web-series",
        imageUrl: "https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg"
      },
      {
        id: 29,
        question: "What is the metal alloy that Wolverine's claws are made of?",
        options: ["Vibranium", "Adamantium", "Unobtainium", "Carbonadium"],
        correctAnswer: "Adamantium",
        category: "popular-culture",
        imageUrl: "https://images.pexels.com/photos/2225617/pexels-photo-2225617.jpeg"
      },
      {
        id: 30,
        question: "Who created the iconic anime 'One Piece'?",
        options: ["Masashi Kishimoto", "Akira Toriyama", "Eiichiro Oda", "Hayao Miyazaki"],
        correctAnswer: "Eiichiro Oda",
        category: "web-series",
        imageUrl: "https://images.pexels.com/photos/5356275/pexels-photo-5356275.jpeg"
      }
    ]
  }
};
