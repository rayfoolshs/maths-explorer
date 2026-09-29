/*
 * Maths Explorer — curriculum data
 * Aligned to the Western Australian Curriculum: Mathematics (implementation 2026).
 *
 * Loaded with a plain <script> tag (no fetch) so the site works by double-clicking
 * index.html — no server or build step required.
 *
 * Year 1 is complete. Other year levels are stubbed with `available: false`.
 */
window.MATHS_CURRICULUM = {
  siteName: "Maths Explorer",
  curriculumNote: "Aligned to the Western Australian Curriculum: Mathematics (2026)",

  // Card shown on the home page for every year level.
  yearCards: [
    { year: "PP", label: "Pre-primary", icon: "🧸", colour: "#EC4899", available: false },
    { year: "1",  label: "Year 1",      icon: "🦕", colour: "#22C55E", available: true  },
    { year: "2",  label: "Year 2",      icon: "🐳", colour: "#06B6D4", available: true  },
    { year: "3",  label: "Year 3",      icon: "🚀", colour: "#3B82F6", available: false },
    { year: "4",  label: "Year 4",      icon: "🦊", colour: "#8B5CF6", available: false },
    { year: "5",  label: "Year 5",      icon: "🌋", colour: "#F59E0B", available: false },
    { year: "6",  label: "Year 6",      icon: "🐙", colour: "#EF4444", available: false },
    { year: "7",  label: "Year 7",      icon: "🧭", colour: "#14B8A6", available: false },
    { year: "8",  label: "Year 8",      icon: "🔭", colour: "#6366F1", available: false },
    { year: "9",  label: "Year 9",      icon: "⚙️", colour: "#0EA5E9", available: false },
    { year: "10", label: "Year 10",     icon: "🎓", colour: "#A855F7", available: false }
  ],

  // Strand colours and icons, shared across year levels.
  strands: {
    "number-algebra": { name: "Number and algebra", icon: "🔢", colour: "#F59E0B" },
    "measurement-geometry": { name: "Measurement and geometry", icon: "📐", colour: "#3B82F6" },
    "probability-statistics": { name: "Probability and statistics", icon: "🎲", colour: "#8B5CF6" }
  },

  yearData: {
    "1": {
      year: "1",
      label: "Year 1",
      icon: "🦕",
      colour: "#22C55E",
      tagline: "Bigger numbers, shapes, patterns and measuring!",
      kidIntro:
        "Welcome to Year 1! This year you will work with numbers all the way to 120. " +
        "You will add and subtract, share things into equal groups, make halves, explore " +
        "shapes and measuring, and collect information to answer questions. Let's go!",
      canDo: [
        "Say, read, write and order numbers to 120.",
        "Break collections into groups of 10.",
        "Add and subtract numbers to 20 using clever strategies.",
        "Skip count by twos, fives and tens.",
        "Continue repeating patterns and find the repeating unit.",
        "Show and name one half.",
        "Identify Australian coins and notes by their value.",
        "Classify 2D shapes and sort and name 3D objects.",
        "Give and follow directions in familiar places.",
        "Compare length, capacity and mass.",
        "Read the time on digital clocks.",
        "Talk about how likely things are and collect data to answer questions."
      ],
      achievementStandard:
        "Children demonstrate the behaviours of the proficiencies of understanding, fluency, " +
        "problem-solving and reasoning in conjunction with year level content in routine situations. " +
        "They select from and engage with content when representing situations involving real-world " +
        "situations in familiar contexts.\n\n" +
        "Children say, read, write and order numbers to 100. They partition collections, including in " +
        "groups of 10. Children add and subtract numbers to 20 using calculation strategies. They skip " +
        "count collections by twos, fives and tens, and use objects to continue repeating patterns, " +
        "identifying the repeating unit.\n\n" +
        "Children create representations of one-half and identify Australian coins and notes according " +
        "to their value.\n\n" +
        "Children classify two-dimensional shapes, and sort and name three-dimensional objects, " +
        "identifying the two-dimensional shapes that comprise them. They give and follow directions " +
        "within familiar locations. Children directly and indirectly compare lengths using uniform " +
        "informal units, and directly compare the capacity of containers and mass of objects. They read " +
        "the time on digital clocks, making connections to routines, and describing duration informally.\n\n" +
        "Children describe the likelihood of familiar events and collect categorical data to answer questions.",
      yearLevelDescription:
        "In the early childhood phase of schooling, learning, development and wellbeing are connected " +
        "and learning experiences are informed by the Principles and Practices of the Early Years " +
        "Learning Framework. A holistic curriculum that integrates knowledge, understandings, skills, " +
        "values and attitudes across learning areas connects learning to children's lives and their " +
        "natural curiosity about their world.\n\n" +
        "Mathematics provides opportunities for children to learn through a variety of means, including " +
        "play and experimentation. Concrete materials are used to explore and visualise concepts, " +
        "developing content knowledge and understanding of the symbolic representations associated with " +
        "Mathematics.\n\n" +
        "Children engage in a range of approaches to learning through the proficiencies of understanding, " +
        "fluency, problem-solving and reasoning. These reinforce the significance of working " +
        "mathematically with the content and describe how the content is explored or developed.\n\n" +
        "In Year 1, children become more familiar with the number system beyond two digits. They " +
        "manipulate and compare small collections, using them to build calculation strategies and model " +
        "real-world situations. Children explore their world, comparing everyday items based on different " +
        "measurement attributes. They name two-dimensional shapes and three-dimensional objects and read " +
        "the time on digital clocks. Children describe and reason about the likelihood of familiar events " +
        "occurring and answer questions of interest by collecting categorical data.",

      topics: [
        // ---------------------------- NUMBER AND ALGEBRA ----------------------------
        {
          id: "numbers-to-120",
          strand: "number-algebra",
          name: "Numbers to 120",
          icon: "🔢",
          summary: "Say, read, write and order numbers to 120, and skip count by 2s, 5s and 10s.",
          learn: [
            "You can count, read and write numbers all the way to 120: 1, 2, 3 … 98, 99, 100, 101 … 120.",
            "Counting by 2s goes 2, 4, 6, 8 … Counting by 5s goes 5, 10, 15, 20 … Counting by 10s goes 10, 20, 30, 40 …",
            "You can put numbers in order from smallest to biggest. Look at the tens first, then the ones."
          ],
          example: {
            prompt: "Put these numbers in order from smallest to biggest: 34, 9, 21, 15",
            steps: [
              "Find the smallest number first: 9.",
              "Next smallest: 15.",
              "Then: 21.",
              "Then the biggest: 34.",
              "So the order is 9, 15, 21, 34."
            ]
          },
          quiz: [
            { q: "Which number comes straight after 109?", options: ["108", "110", "100", "119"], answer: 1, explain: "After 109 comes 110." },
            { q: "Count by 10s: 10, 20, 30, __", options: ["31", "40", "50", "13"], answer: 1, explain: "Counting by 10s: 10, 20, 30, 40." },
            { q: "Which is the biggest number?", options: ["87", "78", "97", "79"], answer: 2, explain: "97 is the biggest." },
            { q: "Count by 5s: 5, 10, 15, __", options: ["16", "20", "25", "10"], answer: 1, explain: "Counting by 5s: 5, 10, 15, 20." },
            { q: "Which number is missing? 101, 102, __, 104", options: ["103", "100", "105", "120"], answer: 0, explain: "103 is between 102 and 104." }
          ]
        },
        {
          id: "groups-of-10",
          strand: "number-algebra",
          name: "Groups of 10",
          icon: "🔟",
          summary: "Break collections into groups of 10 and say how many tens and ones.",
          learn: [
            "When you have lots of things, it helps to bundle them into groups of 10.",
            "10 ones make one group of 10. And 10 groups of 10 make 100.",
            "You can break a number into tens and ones. 24 is 2 tens and 4 ones."
          ],
          example: {
            prompt: "You have 30 buttons. How many groups of 10 can you make?",
            steps: [
              "Count in tens: 10, 20, 30.",
              "That is 3 lots of 10.",
              "So 30 makes 3 groups of 10."
            ]
          },
          quiz: [
            { q: "How many tens are in 40?", options: ["4", "40", "14", "10"], answer: 0, explain: "40 is 4 groups of 10." },
            { q: "3 groups of 10 is the same as…", options: ["13", "30", "310", "3"], answer: 1, explain: "3 tens makes 30." },
            { q: "25 is __ tens and 5 ones.", options: ["2", "5", "25", "1"], answer: 0, explain: "25 has 2 tens and 5 ones." },
            { q: "10 ones make…", options: ["one 10", "two 10s", "100", "20"], answer: 0, explain: "10 ones bundle together to make one 10." },
            { q: "Which one shows 50?", options: ["5 groups of 10", "5 ones", "50 tens", "10 groups of 10"], answer: 0, explain: "5 groups of 10 makes 50." }
          ]
        },
        {
          id: "add-subtract-20",
          strand: "number-algebra",
          name: "Adding and subtracting to 20",
          icon: "➕",
          summary: "Add and subtract numbers to 20 using counting on, counting back and making 10.",
          learn: [
            "To add, you can count on. To subtract, you can count back.",
            "Doubles can help: if you know 6 + 6 = 12, you know 6 + 7 is one more, which is 13.",
            "Making 10 is a great trick. For 9 + 7, think: 9 + 1 = 10, and there are 6 left, so 10 + 6 = 16."
          ],
          example: {
            prompt: "Work out 9 + 7.",
            steps: [
              "Make 10 first: 9 + 1 = 10.",
              "7 is 1 + 6, so there are 6 left to add.",
              "10 + 6 = 16.",
              "So 9 + 7 = 16."
            ]
          },
          quiz: [
            { q: "8 + 5 = ?", options: ["12", "13", "14", "3"], answer: 1, explain: "8 + 2 = 10, then + 3 = 13." },
            { q: "15 − 4 = ?", options: ["11", "19", "10", "12"], answer: 0, explain: "Count back 4 from 15: 11." },
            { q: "6 + 6 = ?", options: ["11", "12", "13", "66"], answer: 1, explain: "A double: 6 + 6 = 12." },
            { q: "9 + 9 = ?", options: ["18", "19", "17", "20"], answer: 0, explain: "Double 9 is 18." },
            { q: "14 − __ = 9", options: ["5", "6", "4", "23"], answer: 0, explain: "9 + 5 = 14, so 14 − 5 = 9." }
          ]
        },
        {
          id: "number-facts-10",
          strand: "number-algebra",
          name: "Number facts to 10",
          icon: "🎯",
          summary: "Recall pairs of numbers that add to 10 and use them to subtract.",
          learn: [
            "Some number pairs always make 10. Learn them by heart: 1 + 9, 2 + 8, 3 + 7, 4 + 6, 5 + 5.",
            "You can use these facts to help with subtraction. To work out 10 − 7, think: 7 + ? = 10."
          ],
          example: {
            prompt: "Work out 10 − 7.",
            steps: [
              "Think: 7 plus what makes 10?",
              "7 + 3 = 10.",
              "So 10 − 7 = 3."
            ]
          },
          quiz: [
            { q: "6 + __ = 10", options: ["4", "5", "6", "16"], answer: 0, explain: "6 + 4 = 10." },
            { q: "10 − 3 = ?", options: ["7", "6", "13", "8"], answer: 0, explain: "3 + 7 = 10, so 10 − 3 = 7." },
            { q: "Is 2 + 8 = 10 true?", options: ["Yes", "No"], answer: 0, explain: "2 + 8 = 10, so it is true." },
            { q: "10 − 8 = ?", options: ["2", "3", "18", "1"], answer: 0, explain: "8 + 2 = 10, so 10 − 8 = 2." },
            { q: "5 + 5 = ?", options: ["10", "11", "9", "55"], answer: 0, explain: "5 + 5 = 10." }
          ]
        },
        {
          id: "grouping-sharing",
          strand: "number-algebra",
          name: "Grouping and sharing",
          icon: "🍪",
          summary: "Share collections into equal groups and find how many groups you can make.",
          learn: [
            "To share fairly, every group must have the same amount. This is like early division.",
            "You can also group things to count them faster. How many groups of 2 are in 6?",
            "When you share, the more groups you make, the smaller each group is."
          ],
          example: {
            prompt: "Share 12 cookies equally between 3 friends.",
            steps: [
              "Give one cookie to each friend: 1, 1, 1.",
              "Keep going until the cookies are gone.",
              "Each friend ends up with 4 cookies.",
              "So 12 shared by 3 is 4 each."
            ]
          },
          quiz: [
            { q: "Share 8 apples between 2 baskets. How many in each?", options: ["4", "6", "3", "16"], answer: 0, explain: "8 shared by 2 is 4 each." },
            { q: "How many groups of 2 are in 6?", options: ["3", "2", "4", "12"], answer: 0, explain: "6 can be split into 3 groups of 2." },
            { q: "Share 10 into 5 equal groups. How many in each group?", options: ["2", "5", "10", "1"], answer: 0, explain: "10 shared by 5 is 2 each." },
            { q: "🍎🍎 | 🍎🍎 | 🍎🍎  — how many groups of 2?", options: ["3", "6", "2", "4"], answer: 0, explain: "There are 3 groups, each with 2 apples." },
            { q: "Share 9 between 3 friends. How many each?", options: ["3", "4", "2", "6"], answer: 0, explain: "9 shared by 3 is 3 each." }
          ]
        },
        {
          id: "halves",
          strand: "number-algebra",
          name: "Making a half",
          icon: "🍕",
          summary: "Make and name one half by splitting a whole into two equal parts.",
          learn: [
            "A half is one of two equal parts. The two parts must be exactly the same size.",
            "You can show a half of a shape by cutting it into two equal parts, or a half of a collection by sharing it into two equal groups.",
            "Half of 8 is 4, because 4 + 4 = 8."
          ],
          example: {
            prompt: "What is half of 8?",
            steps: [
              "Share 8 into 2 equal groups.",
              "Each group has 4.",
              "So half of 8 is 4."
            ]
          },
          quiz: [
            { q: "What is half of 6?", options: ["3", "4", "2", "12"], answer: 0, explain: "3 + 3 = 6, so half of 6 is 3." },
            { q: "What is half of 10?", options: ["5", "4", "6", "20"], answer: 0, explain: "5 + 5 = 10, so half of 10 is 5." },
            { q: "To make a half, the two parts must be…", options: ["equal", "different", "empty", "colourful"], answer: 0, explain: "A half needs two equal parts." },
            { q: "What is half of 4?", options: ["2", "3", "4", "8"], answer: 0, explain: "2 + 2 = 4, so half of 4 is 2." },
            { q: "What is half of 12?", options: ["6", "5", "7", "24"], answer: 0, explain: "6 + 6 = 12, so half of 12 is 6." }
          ]
        },
        {
          id: "equals-sign",
          strand: "number-algebra",
          name: "The equals sign",
          icon: "⚖️",
          summary: "Understand that = means 'is the same as'.",
          learn: [
            "The equals sign = means 'is the same as'. Both sides must balance, like a see-saw.",
            "You can have numbers on both sides: 5 + 2 = 3 + 4, because both sides make 7.",
            "Something can be true, like 3 + 2 = 5, or false, like 3 + 2 = 6."
          ],
          example: {
            prompt: "Is 4 + 1 = 5 true or false?",
            steps: [
              "Work out the left side: 4 + 1 = 5.",
              "The right side is 5.",
              "Both sides are the same, so it is true."
            ]
          },
          quiz: [
            { q: "3 + 2 = 1 + __", options: ["4", "3", "5", "6"], answer: 0, explain: "3 + 2 = 5, and 1 + 4 = 5." },
            { q: "Is 5 = 2 + 3 true?", options: ["Yes", "No"], answer: 0, explain: "2 + 3 = 5, so it is true." },
            { q: "6 = 3 + __", options: ["3", "2", "4", "6"], answer: 0, explain: "3 + 3 = 6." },
            { q: "Is 2 + 2 = 4 true?", options: ["Yes", "No"], answer: 0, explain: "2 + 2 = 4, so it is true." },
            { q: "Which one is true?", options: ["5 + 1 = 6", "5 + 1 = 7", "5 + 1 = 5", "5 + 1 = 4"], answer: 0, explain: "5 + 1 = 6 is the true one." }
          ]
        },
        {
          id: "repeating-patterns",
          strand: "number-algebra",
          name: "Repeating patterns",
          icon: "🔁",
          summary: "Continue repeating patterns and find the repeating unit.",
          learn: [
            "A repeating pattern uses the same group of things again and again.",
            "The part that repeats is called the repeating unit. In 🔴🔵🔴🔵🔴🔵 the repeating unit is 🔴🔵.",
            "Once you find the repeating unit, you can work out what comes next."
          ],
          example: {
            prompt: "What comes next? 🔴🔵🔴🔵🔴 __",
            steps: [
              "Find the repeating unit: 🔴🔵.",
              "The pattern goes red, blue, red, blue, red …",
              "After red comes blue.",
              "So the next one is 🔵."
            ]
          },
          quiz: [
            { q: "What comes next? 🔺🔵🔺🔵 __", options: ["🔺", "🔵", "🟢", "⭐"], answer: 0, explain: "The unit 🔺🔵 repeats, so after 🔵 comes 🔺." },
            { q: "What is the repeating unit in 🐶🐱🐶🐱🐶🐱?", options: ["🐶🐱", "🐶", "🐱", "🐶🐱🐶"], answer: 0, explain: "Dog then cat repeats, so the unit is 🐶🐱." },
            { q: "What comes next? ⭐⭐🌙⭐⭐🌙 __", options: ["⭐", "🌙", "⭐⭐", "🌙🌙"], answer: 0, explain: "The unit ⭐⭐🌙 repeats, so after 🌙 comes ⭐." },
            { q: "What comes next? 🟩🟨🟥🟩🟨 __", options: ["🟥", "🟩", "🟨", "⬛"], answer: 0, explain: "The unit 🟩🟨🟥 repeats, so after 🟨 comes 🟥." },
            { q: "Which one is a repeating pattern?", options: ["A B A B A B", "A B C D E F", "1 2 3 4 5 6", "A A B C D E"], answer: 0, explain: "A B A B A B repeats the unit A B." }
          ]
        },
        {
          id: "money",
          strand: "number-algebra",
          name: "Australian money",
          icon: "💰",
          summary: "Identify Australian coins and notes and know their value.",
          learn: [
            "Australian coins are 5c, 10c, 20c, 50c, $1 and $2. Notes are $5, $10, $20, $50 and $100.",
            "100 cents makes $1. So a 50c coin and two 20c coins and a 10c coin make $1.",
            "Put money in order by value: 5c, 10c, 20c, 50c, $1, $2."
          ],
          example: {
            prompt: "Which is worth more: a $2 coin or a 50c coin?",
            steps: [
              "Remember that $2 = 200 cents.",
              "200 cents is more than 50 cents.",
              "So the $2 coin is worth more."
            ]
          },
          quiz: [
            { q: "Which is worth more?", options: ["$2", "50c", "They are the same", "5c"], answer: 0, explain: "$2 = 200c, which is more than 50c." },
            { q: "How many 10c coins make 20c?", options: ["2", "3", "1", "20"], answer: 0, explain: "10c + 10c = 20c." },
            { q: "100 cents is the same as…", options: ["$1", "$100", "10c", "$2"], answer: 0, explain: "100 cents makes $1." },
            { q: "Which is an Australian coin?", options: ["50c", "$3 note", "25c", "$7"], answer: 0, explain: "50c is an Australian coin." },
            { q: "Put in order from smallest to largest.", options: ["5c, 20c, $1", "$1, 5c, 20c", "20c, 5c, $1", "$1, 20c, 5c"], answer: 0, explain: "5c < 20c < $1." }
          ]
        },

        // ---------------------------- MEASUREMENT AND GEOMETRY ----------------------------
        {
          id: "shapes-2d",
          strand: "measurement-geometry",
          name: "2D shapes",
          icon: "🔷",
          summary: "Classify familiar 2D shapes by their sides and vertices (corners).",
          learn: [
            "2D shapes are flat. We can name them by their sides and vertices (corners).",
            "A triangle has 3 sides and 3 vertices. A square has 4 equal sides and 4 vertices.",
            "A rectangle has 4 sides and 4 vertices. A circle has no straight sides and no vertices."
          ],
          example: {
            prompt: "How many sides does a triangle have?",
            steps: [
              "A triangle is a flat shape.",
              "Count the straight sides: 1, 2, 3.",
              "So a triangle has 3 sides."
            ]
          },
          quiz: [
            { q: "How many sides does a triangle have?", options: ["3", "4", "2", "5"], answer: 0, explain: "A triangle has 3 sides." },
            { q: "How many vertices (corners) does a square have?", options: ["4", "3", "0", "5"], answer: 0, explain: "A square has 4 corners." },
            { q: "Which shape has no corners?", options: ["Circle", "Square", "Triangle", "Rectangle"], answer: 0, explain: "A circle is round and has no corners." },
            { q: "How many sides does a rectangle have?", options: ["4", "3", "5", "6"], answer: 0, explain: "A rectangle has 4 sides." },
            { q: "Which shape has 3 sides?", options: ["Triangle", "Square", "Circle", "Rectangle"], answer: 0, explain: "A triangle has 3 sides." }
          ]
        },
        {
          id: "objects-3d",
          strand: "measurement-geometry",
          name: "3D objects",
          icon: "🧊",
          summary: "Sort and name 3D objects and find the 2D shapes on their faces.",
          learn: [
            "3D objects are solid — they take up space. Examples are cubes, cylinders, cones, spheres and rectangular prisms.",
            "Every 3D object has faces. The faces of a cube are squares. A can is like a cylinder, with a circle at each end.",
            "A ball is like a sphere. An ice-cream cone is like a cone."
          ],
          example: {
            prompt: "A cube — what shape are its faces?",
            steps: [
              "Look at one face of the cube.",
              "Every face is a flat square.",
              "So the faces of a cube are squares."
            ]
          },
          quiz: [
            { q: "Which 3D object is like a ball?", options: ["Sphere", "Cube", "Cylinder", "Cone"], answer: 0, explain: "A ball is shaped like a sphere." },
            { q: "The faces of a cube are…", options: ["squares", "circles", "triangles", "ovals"], answer: 0, explain: "Each face of a cube is a square." },
            { q: "A tin can is shaped like a…", options: ["cylinder", "cube", "sphere", "pyramid"], answer: 0, explain: "A can is a cylinder — a circle at each end." },
            { q: "Which object can roll?", options: ["Sphere", "Cube", "Rectangular prism", "Book"], answer: 0, explain: "A sphere is round and can roll." },
            { q: "How many faces does a cube have?", options: ["6", "4", "8", "2"], answer: 0, explain: "A cube has 6 square faces." }
          ]
        },
        {
          id: "length-area",
          strand: "measurement-geometry",
          name: "Comparing length and area",
          icon: "📏",
          summary: "Compare lengths using informal units and compare the area of shapes.",
          learn: [
            "Length is how long something is. We can compare two things to say which is longer or shorter.",
            "You can measure with informal units like paperclips or blocks. Line them up end to end, with no gaps and no overlaps.",
            "Area is how much flat space a shape covers. You can compare area by covering or laying one shape over another."
          ],
          example: {
            prompt: "A pencil is 3 paperclips long. A crayon is 5 paperclips long. Which is longer?",
            steps: [
              "The pencil measures 3 paperclips.",
              "The crayon measures 5 paperclips.",
              "5 is more than 3, so the crayon is longer."
            ]
          },
          quiz: [
            { q: "Which is longer?", options: ["A bus", "A bike", "They are the same", "A shoe"], answer: 0, explain: "A bus is much longer than a bike." },
            { q: "You measure a pencil with 4 paperclips. How many paperclips long is it?", options: ["4", "3", "5", "1"], answer: 0, explain: "It measures 4 paperclips." },
            { q: "When measuring with blocks, you should line them up with…", options: ["no gaps", "big gaps", "overlaps", "one on top"], answer: 0, explain: "Measure end to end with no gaps or overlaps." },
            { q: "Ribbon A is 4 cubes long. Ribbon B is 6 cubes long. Which is longer?", options: ["Ribbon B", "Ribbon A", "They are the same", "Neither"], answer: 0, explain: "6 cubes is longer than 4 cubes." },
            { q: "Area is how much ___ a shape covers.", options: ["flat space", "mass", "time", "height"], answer: 0, explain: "Area is the flat space a shape covers." }
          ]
        },
        {
          id: "capacity-mass",
          strand: "measurement-geometry",
          name: "Capacity and mass",
          icon: "🧴",
          summary: "Compare how much containers hold and how heavy objects are.",
          learn: [
            "Capacity is how much a container can hold. A bucket holds more than a cup.",
            "Mass is how heavy something is. You can compare mass by hefting (holding) or by using balance scales.",
            "When the balance scales tip down on one side, that side is heavier."
          ],
          example: {
            prompt: "Which holds more: a cup or a bucket?",
            steps: [
              "Think about how much each one can hold.",
              "A bucket can hold lots of water.",
              "A cup holds only a little.",
              "So a bucket holds more."
            ]
          },
          quiz: [
            { q: "Which holds more?", options: ["A bucket", "A cup", "They are the same", "A spoon"], answer: 0, explain: "A bucket holds much more than a cup." },
            { q: "Which is heavier?", options: ["A rock", "A feather", "They are the same", "A leaf"], answer: 0, explain: "A rock is heavier than a feather." },
            { q: "We compare mass by hefting or using…", options: ["balance scales", "a ruler", "a clock", "a map"], answer: 0, explain: "Balance scales compare mass." },
            { q: "A big pillow and a small rock. Which is likely heavier?", options: ["The rock", "The pillow", "Same", "Neither"], answer: 0, explain: "Big does not always mean heavy — the rock is heavier." },
            { q: "The side of the balance that goes down is…", options: ["heavier", "lighter", "empty", "bigger"], answer: 0, explain: "The heavier side tips down." }
          ]
        },
        {
          id: "time",
          strand: "measurement-geometry",
          name: "Telling time",
          icon: "🕐",
          summary: "Read the time on digital clocks and describe how long things take.",
          learn: [
            "A digital clock shows the hour and the minutes. 5:00 is five o'clock. 2:30 is half past two.",
            "You can use time words like morning, afternoon, yesterday, today and tomorrow.",
            "Some things take a second, some take a minute, and some take an hour. Sleeping takes much longer than brushing your teeth."
          ],
          example: {
            prompt: "A digital clock shows 3:00. What time is it?",
            steps: [
              "The hour is 3.",
              "The minutes are 00, which means o'clock.",
              "So it is three o'clock."
            ]
          },
          quiz: [
            { q: "A digital clock shows 5:00. What time is it?", options: ["Five o'clock", "Half past five", "Five thirty", "Five past five"], answer: 0, explain: "5:00 is five o'clock." },
            { q: "Half past 2 is the same as…", options: ["2:30", "2:00", "3:30", "2:15"], answer: 0, explain: "Half past 2 is 2:30." },
            { q: "Which takes longer?", options: ["Sleeping all night", "Brushing your teeth", "Blinking", "Clapping once"], answer: 0, explain: "Sleeping all night takes many hours." },
            { q: "How many hours are in one day?", options: ["24", "12", "60", "10"], answer: 0, explain: "A day has 24 hours." },
            { q: "Which comes first in the day?", options: ["Morning", "Night", "Bedtime", "Midnight"], answer: 0, explain: "Morning comes before night." }
          ]
        },
        {
          id: "directions",
          strand: "measurement-geometry",
          name: "Position and directions",
          icon: "🧭",
          summary: "Give and follow directions and describe position in familiar places.",
          learn: [
            "We use position words like in, out, under, above, next to, between and beside.",
            "We use direction words like left, right, forward, backward and turn.",
            "You can follow a path by listening to the steps: 'go forward, then turn left'."
          ],
          example: {
            prompt: "You are facing forward. You turn left. Which way are you facing now?",
            steps: [
              "Start facing forward.",
              "Turn to the left.",
              "Now you are facing the left side."
            ]
          },
          quiz: [
            { q: "Your pencil is beside your book. Where is it?", options: ["Next to the book", "Under the book", "In the book", "On the ceiling"], answer: 0, explain: "Beside means next to." },
            { q: "Which word tells you a direction?", options: ["Forward", "Red", "Happy", "Three"], answer: 0, explain: "Forward is a direction word." },
            { q: "A bird is flying above the tree. Where is the bird?", options: ["Over the tree", "Under the tree", "In the tree", "Next to the tree"], answer: 0, explain: "Above means over." },
            { q: "You go forward 2 steps, then turn left. What did you do first?", options: ["Went forward", "Turned left", "Turned right", "Went back"], answer: 0, explain: "First you went forward 2 steps." },
            { q: "Which word describes position?", options: ["Under", "Quickly", "Loudly", "Blue"], answer: 0, explain: "Under tells you a position." }
          ]
        },

        // ---------------------------- PROBABILITY AND STATISTICS ----------------------------
        {
          id: "chance",
          strand: "probability-statistics",
          name: "Chance words",
          icon: "🎲",
          summary: "Describe and reason about how likely familiar events are.",
          learn: [
            "We use chance words to talk about what might happen: will happen, might happen, and cannot happen.",
            "Something certain will definitely happen, like the sun rising in the morning.",
            "Something impossible cannot happen, like a cat flying to the moon."
          ],
          example: {
            prompt: "Will it rain today? How could you describe it?",
            steps: [
              "Rain is not certain.",
              "Rain is not impossible either.",
              "So we say it might rain, or it is possible."
            ]
          },
          quiz: [
            { q: "The sun will rise tomorrow. Is this…", options: ["Certain", "Impossible", "Might happen", "Never"], answer: 0, explain: "The sun always rises — it is certain." },
            { q: "Rolling a 7 on a dice that shows 1–6 is…", options: ["Impossible", "Certain", "Likely", "Sure"], answer: 0, explain: "A 1–6 dice cannot show a 7." },
            { q: "Which chance word means 'it will definitely not happen'?", options: ["Impossible", "Certain", "Likely", "Possible"], answer: 0, explain: "Impossible means it cannot happen." },
            { q: "A cat flying to the moon is…", options: ["Impossible", "Certain", "Likely"], answer: 0, explain: "Cats cannot fly to the moon." },
            { q: "Tomorrow might be sunny. This means it…", options: ["Could happen", "Will not happen", "Always happens", "Never happens"], answer: 0, explain: "Might means it could happen." }
          ]
        },
        {
          id: "data",
          strand: "probability-statistics",
          name: "Collecting and showing data",
          icon: "📊",
          summary: "Collect and compare information to answer questions.",
          learn: [
            "Data is information we collect. We collect it by asking questions and recording the answers.",
            "We can show data with objects, tally marks, a table or a picture graph.",
            "Once we have the data, we can compare it: which one has the most? The least?"
          ],
          example: {
            prompt: "You ask your class: favourite fruit? 5 say apple, 3 say banana, 2 say grapes. Which is the most popular?",
            steps: [
              "Look at the numbers: apple 5, banana 3, grapes 2.",
              "The biggest number is 5.",
              "So apple is the most popular."
            ]
          },
          quiz: [
            { q: "🍏🍏🍏🍏🍏  🍌🍌🍌  Which fruit got more votes?", options: ["🍏", "🍌", "Same", "Neither"], answer: 0, explain: "Apples got 5 votes, bananas got 3." },
            { q: "We collect data by…", options: ["asking questions", "drawing", "sleeping", "running"], answer: 0, explain: "We collect data by asking questions and recording answers." },
            { q: "🐶🐶🐶🐱🐱  How many more dogs than cats?", options: ["1", "2", "3", "5"], answer: 0, explain: "3 dogs and 2 cats — 1 more dog." },
            { q: "A tally mark helps us…", options: ["count answers", "colour in", "tell the time", "measure length"], answer: 0, explain: "Tallies help us count how many." },
            { q: "🚗🚗🚗🚗  🚲🚲  Which is the least popular?", options: ["🚲", "🚗", "Same", "Neither"], answer: 0, explain: "Bikes have 2, cars have 4, so bikes are least." }
          ]
        }
      ]
    },

    "2": {
      year: "2",
      label: "Year 2",
      icon: "🐳",
      colour: "#06B6D4",
      tagline: "Bigger numbers, groups, fractions and measuring!",
      kidIntro:
        "Welcome to Year 2! This year you will work with numbers up to 1000. You will skip count, " +
        "add and subtract bigger numbers, share into equal groups, explore halves, quarters and " +
        "eighths, and learn about money, shapes, measuring, time and data. Let's dive in!",
      canDo: [
        "Read, write and order numbers to at least 1000.",
        "Skip count by twos, threes, fives and tens from any starting point.",
        "Break two- and three-digit numbers into hundreds, tens and ones.",
        "Recall number facts to 10 and use them to add and subtract.",
        "Add and subtract one- and two-digit numbers.",
        "Show multiplication and division with equal groups and arrays.",
        "Make halves, quarters and eighths.",
        "Continue growing and shrinking patterns and find missing numbers.",
        "Describe the relationship between dollars and cents.",
        "Identify and draw 2D shapes.",
        "Locate positions and pathways on simple maps.",
        "Compare length, area, capacity and mass using informal units.",
        "Tell time to the hour, half- and quarter-hour, and use a calendar.",
        "Describe chance events as possible or impossible.",
        "Collect and display data using tables and one-to-one graphs."
      ],
      achievementStandard:
        "Children demonstrate the behaviours of the proficiencies of understanding, fluency, " +
        "problem-solving and reasoning in conjunction with year level content in routine situations. " +
        "They select from and engage with content when representing real-world situations in familiar contexts.\n\n" +
        "Children read, write and order numbers to at least 1000 and skip count by twos, threes, fives and " +
        "10s from any starting point. They partition two- and three-digit numbers in 10s and 100s, recall " +
        "addition and subtraction facts to 10 and use these to add and subtract one- and two-digit numbers. " +
        "Children represent situations involving multiplication and division. They continue increasing or " +
        "decreasing additive patterns and identify missing elements. Children recognise and create halves, " +
        "quarters and eighths, and describe the relationship between dollars and cents.\n\n" +
        "Children identify and draw two-dimensional shapes. They locate positions and pathways on simple " +
        "maps of familiar locations. Children compare objects based on length, capacity and mass using " +
        "uniform informal units. They tell the time to the hour, half- and quarter-hour, on analog and " +
        "digital clocks, and use a calendar to identify the date and determine the duration between two events.\n\n" +
        "Children describe familiar chance events as possible or impossible. They collect and display " +
        "categorical data to answer questions, using tables and one-to-one block and picture graphs.",
      yearLevelDescription:
        "In the early childhood phase of schooling, learning, development and wellbeing are connected " +
        "and learning experiences are informed by the Principles and Practices of the Early Years " +
        "Learning Framework. A holistic curriculum that integrates knowledge, understandings, skills, " +
        "values and attitudes across learning areas connects learning to children's lives and their " +
        "natural curiosity about their world.\n\n" +
        "Mathematics provides opportunities for children to learn through a variety of means, including " +
        "play and experimentation. Concrete materials are used to explore and visualise concepts, " +
        "developing content knowledge and understanding of the symbolic representations associated with " +
        "Mathematics.\n\n" +
        "Children engage in a range of approaches to learning through the proficiencies of understanding, " +
        "fluency, problem-solving and reasoning. These reinforce the significance of working " +
        "mathematically with the content and describe how the content is explored or developed.\n\n" +
        "In Year 2, children extend their knowledge of the number system beyond three digits. They " +
        "connect place value and partitions to calculation strategies and apply these to model real-world " +
        "situations that are relevant to them. Children broaden their awareness of how Mathematics occurs " +
        "in the world around them as they explore the relationship between dollars and cents and their " +
        "value, continue to develop an understanding of measurement attributes, including area, and tell " +
        "time to the hour, half- and quarter-hour on analog and digital clocks. In familiar contexts, " +
        "children build on their understanding of chance, comparing the likelihood of familiar chance " +
        "events, and collect, compare and display data to answer a question of interest.",

      topics: [
        // ---------------------------- NUMBER AND ALGEBRA ----------------------------
        {
          id: "numbers-to-1000",
          strand: "number-algebra",
          name: "Numbers to 1000",
          icon: "💯",
          summary: "Read, write and order numbers to at least 1000, and know what zero does.",
          learn: [
            "You can read, write and order numbers up to 1000 and beyond: 98, 99, 100, 101 … 998, 999, 1000.",
            "The digits 0–9 repeat in every group of ten. After 99 comes 100 — the zero shows the tens place is empty.",
            "Zero keeps a place when a group is empty. In 305 there are no tens, so we write a 0."
          ],
          example: {
            prompt: "Put these numbers in order: 342, 324, 432",
            steps: [
              "Compare the hundreds first: 3, 3 and 4. 432 has the most hundreds, so it is the biggest.",
              "342 and 324 both have 3 hundreds. Compare the tens: 4 and 2.",
              "324 has fewer tens, so it is smaller than 342.",
              "Order: 324, 342, 432."
            ]
          },
          quiz: [
            { q: "Which number comes straight after 199?", options: ["198", "200", "190", "109"], answer: 1, explain: "After 199 comes 200." },
            { q: "Which number has no tens?", options: ["305", "350", "530", "503"], answer: 0, explain: "305 has 0 tens." },
            { q: "Which is the biggest number?", options: ["899", "989", "998", "898"], answer: 2, explain: "998 is the biggest." },
            { q: "Which is the smallest number?", options: ["407", "74", "470", "740"], answer: 1, explain: "74 is the smallest." },
            { q: "Which number is 100 more than 250?", options: ["150", "350", "260", "251"], answer: 1, explain: "250 + 100 = 350." }
          ]
        },
        {
          id: "skip-counting",
          strand: "number-algebra",
          name: "Skip counting",
          icon: "🐸",
          summary: "Skip count forwards and backwards by 2s, 3s, 5s and 10s.",
          learn: [
            "Skip counting means jumping in equal steps. Counting by 2s: 2, 4, 6, 8, 10.",
            "You can start anywhere. Counting by 3s from 12: 12, 15, 18, 21, 24.",
            "You can count backwards too. Counting back by 5s from 30: 30, 25, 20, 15."
          ],
          example: {
            prompt: "Skip count by 3s starting at 12. What are the next three numbers?",
            steps: [
              "12 + 3 = 15.",
              "15 + 3 = 18.",
              "18 + 3 = 21.",
              "The next three numbers are 15, 18, 21."
            ]
          },
          quiz: [
            { q: "Count by 2s: 6, 8, 10, __", options: ["11", "12", "14", "9"], answer: 1, explain: "Counting by 2s: 6, 8, 10, 12." },
            { q: "Count by 5s: 15, 20, 25, __", options: ["26", "30", "35", "20"], answer: 1, explain: "Counting by 5s: 15, 20, 25, 30." },
            { q: "Count by 10s from 40: 40, 50, __, 70", options: ["51", "60", "55", "80"], answer: 1, explain: "40, 50, 60, 70." },
            { q: "Count backwards by 2s from 10: 10, 8, __", options: ["6", "7", "9", "4"], answer: 0, explain: "10, 8, 6." },
            { q: "Count by 3s from 9: 9, 12, __, 18", options: ["13", "15", "14", "16"], answer: 1, explain: "9, 12, 15, 18." }
          ]
        },
        {
          id: "place-value",
          strand: "number-algebra",
          name: "Hundreds, tens and ones",
          icon: "🧱",
          summary: "Break two- and three-digit numbers into hundreds, tens and ones.",
          learn: [
            "Every number is built from hundreds, tens and ones.",
            "In 234 there are 2 hundreds, 3 tens and 4 ones. We can write it as 200 + 30 + 4.",
            "10 ones bundle into one ten. 10 tens bundle into one hundred."
          ],
          example: {
            prompt: "Break 234 into hundreds, tens and ones.",
            steps: [
              "The 2 means 2 hundreds = 200.",
              "The 3 means 3 tens = 30.",
              "The 4 means 4 ones = 4.",
              "So 234 = 200 + 30 + 4."
            ]
          },
          quiz: [
            { q: "How many tens are in 156?", options: ["1", "5", "6", "15"], answer: 1, explain: "156 has 5 tens." },
            { q: "What is the value of the 7 in 372?", options: ["7", "70", "700", "72"], answer: 1, explain: "The 7 is in the tens place, so it is worth 70." },
            { q: "256 = 200 + __ + 6", options: ["5", "50", "500", "56"], answer: 1, explain: "256 = 200 + 50 + 6." },
            { q: "How many ones are in 408?", options: ["0", "4", "8", "40"], answer: 2, explain: "408 has 8 ones." },
            { q: "10 tens make…", options: ["one hundred", "one ten", "one thousand", "ten"], answer: 0, explain: "10 tens make one hundred (100)." }
          ]
        },
        {
          id: "number-facts-10",
          strand: "number-algebra",
          name: "Number facts to 10",
          icon: "🎯",
          summary: "Recall pairs that make 10 and use them to add and subtract.",
          learn: [
            "Know pairs that make 10 by heart: 1 + 9, 2 + 8, 3 + 7, 4 + 6, 5 + 5.",
            "Use them to add quickly. 9 + 4: make 10 first (9 + 1 = 10), then add 3 more to get 13.",
            "Use them to subtract. 10 − 6 = 4, because 6 + 4 = 10."
          ],
          example: {
            prompt: "Work out 13 − 5 using a fact to 10.",
            steps: [
              "Break 5 into 3 + 2.",
              "13 − 3 = 10.",
              "Then 10 − 2 = 8.",
              "So 13 − 5 = 8."
            ]
          },
          quiz: [
            { q: "8 + __ = 10", options: ["2", "3", "1", "8"], answer: 0, explain: "8 + 2 = 10." },
            { q: "10 − 7 = ?", options: ["3", "4", "17", "2"], answer: 0, explain: "7 + 3 = 10, so 10 − 7 = 3." },
            { q: "9 + 4 = ?", options: ["12", "13", "14", "5"], answer: 1, explain: "9 + 1 = 10, then + 3 = 13." },
            { q: "__ + 6 = 10", options: ["4", "3", "5", "16"], answer: 0, explain: "4 + 6 = 10." },
            { q: "15 − 8 = ?", options: ["7", "8", "6", "23"], answer: 0, explain: "15 − 5 = 10, then 10 − 3 = 7." }
          ]
        },
        {
          id: "add-subtract",
          strand: "number-algebra",
          name: "Adding and subtracting",
          icon: "➕",
          summary: "Add and subtract one- and two-digit numbers.",
          learn: [
            "You can add by making tens or by jumping along a number line.",
            "For 34 + 25, add the tens first, then the ones: 34 + 20 = 54, then 54 + 5 = 59.",
            "For subtraction, jump back: 59 − 20 = 39, then 39 − 5 = 34."
          ],
          example: {
            prompt: "Work out 34 + 25.",
            steps: [
              "Add the tens: 34 + 20 = 54.",
              "Add the ones: 54 + 5 = 59.",
              "So 34 + 25 = 59."
            ]
          },
          quiz: [
            { q: "34 + 25 = ?", options: ["59", "49", "69", "57"], answer: 0, explain: "34 + 20 = 54, then + 5 = 59." },
            { q: "46 + 30 = ?", options: ["76", "66", "73", "16"], answer: 0, explain: "46 + 30 = 76." },
            { q: "72 − 20 = ?", options: ["52", "62", "50", "92"], answer: 0, explain: "72 − 20 = 52." },
            { q: "58 − 6 = ?", options: ["52", "64", "51", "53"], answer: 0, explain: "58 − 6 = 52." },
            { q: "25 + 18 = ?", options: ["43", "33", "42", "35"], answer: 0, explain: "25 + 10 = 35, then + 8 = 43." }
          ]
        },
        {
          id: "arrays",
          strand: "number-algebra",
          name: "Groups, arrays and sharing",
          icon: "🍫",
          summary: "Show multiplication and division with equal groups and arrays.",
          learn: [
            "Multiplication is adding equal groups. 3 groups of 4 is 4 + 4 + 4 = 12.",
            "An array is a neat rectangle of rows and columns. 3 rows of 4 make 12.",
            "Division is sharing into equal groups. 12 shared into 3 groups is 4 each."
          ],
          example: {
            prompt: "An array has 3 rows of 4 dots. How many dots altogether?",
            steps: [
              "Each row has 4 dots.",
              "There are 3 rows: 4 + 4 + 4 = 12.",
              "So 3 × 4 = 12.",
              "And 12 ÷ 3 = 4."
            ]
          },
          quiz: [
            { q: "2 rows of 5 = ?", options: ["10", "7", "25", "12"], answer: 0, explain: "5 + 5 = 10, so 2 × 5 = 10." },
            { q: "3 × 4 = ?", options: ["12", "7", "34", "9"], answer: 0, explain: "4 + 4 + 4 = 12." },
            { q: "Share 10 into 2 equal groups. How many in each?", options: ["5", "2", "8", "20"], answer: 0, explain: "10 ÷ 2 = 5." },
            { q: "4 + 4 + 4 = ?", options: ["12", "8", "16", "44"], answer: 0, explain: "Three groups of 4 make 12." },
            { q: "How many groups of 2 are in 8?", options: ["4", "2", "6", "16"], answer: 0, explain: "8 can be split into 4 groups of 2." }
          ]
        },
        {
          id: "fractions",
          strand: "number-algebra",
          name: "Halves, quarters and eighths",
          icon: "🍕",
          summary: "Make halves, quarters and eighths by halving again and again.",
          learn: [
            "Halve a whole to get 2 halves. Halve each half to get 4 quarters. Halve again to get 8 eighths.",
            "Two quarters make one half, so 1/2 = 2/4.",
            "All the parts must be equal."
          ],
          example: {
            prompt: "Show that 1/2 is the same as 2/4.",
            steps: [
              "Cut a whole into 2 equal parts. One part is 1/2.",
              "Cut each half into 2 again. Now there are 4 equal parts.",
              "One half covers 2 of those 4 parts.",
              "So 1/2 = 2/4."
            ]
          },
          quiz: [
            { q: "How many quarters make one whole?", options: ["4", "2", "8", "1"], answer: 0, explain: "Four quarters make one whole." },
            { q: "Half of 8 = ?", options: ["4", "2", "6", "16"], answer: 0, explain: "4 + 4 = 8, so half of 8 is 4." },
            { q: "How many eighths make a half?", options: ["4", "2", "8", "6"], answer: 0, explain: "Four eighths make one half." },
            { q: "A quarter of 12 = ?", options: ["3", "4", "6", "24"], answer: 0, explain: "12 shared into 4 equal parts is 3 each." },
            { q: "1/2 is the same as…", options: ["2/4", "1/4", "4/4", "2/2"], answer: 0, explain: "Two quarters make one half." }
          ]
        },
        {
          id: "compare-numbers",
          strand: "number-algebra",
          name: "Greater than and less than",
          icon: "⚖️",
          summary: "Compare numbers using >, < and =.",
          learn: [
            "The > symbol means greater than, and < means less than. The wide end faces the bigger number.",
            "45 > 23 says 45 is greater than 23. And 23 < 45 says 23 is less than 45.",
            "If both sides are the same we use =, like 30 + 2 = 32."
          ],
          example: {
            prompt: "Compare 45 and 23.",
            steps: [
              "45 has 4 tens. 23 has 2 tens.",
              "45 is bigger than 23.",
              "So we write 45 > 23."
            ]
          },
          quiz: [
            { q: "Which one is true?", options: ["45 > 23", "45 < 23", "45 = 23", "23 > 45"], answer: 0, explain: "45 is greater than 23." },
            { q: "Fill in: 30 __ 25", options: [">", "<", "="], answer: 0, explain: "30 is greater than 25." },
            { q: "Fill in: 17 __ 17", options: ["=", ">", "<"], answer: 0, explain: "17 equals 17." },
            { q: "Which is less than 50?", options: ["49", "51", "60", "50"], answer: 0, explain: "49 is less than 50." },
            { q: "100 __ 99", options: [">", "<", "="], answer: 0, explain: "100 is greater than 99." }
          ]
        },
        {
          id: "patterns",
          strand: "number-algebra",
          name: "Growing and shrinking patterns",
          icon: "🔁",
          summary: "Continue increasing or decreasing patterns and find missing numbers.",
          learn: [
            "A growing pattern gets bigger by the same amount each time: 5, 10, 15, 20.",
            "A shrinking pattern gets smaller: 20, 18, 16, 14.",
            "Find the rule by looking at the step between numbers."
          ],
          example: {
            prompt: "Find the missing number: 5, 10, __, 20",
            steps: [
              "Find the step: 5 + 5 = 10, so the rule is add 5.",
              "10 + 5 = 15.",
              "Check: 15 + 5 = 20.",
              "The missing number is 15."
            ]
          },
          quiz: [
            { q: "What is the rule? 3, 6, 9, 12", options: ["add 3", "add 2", "add 4", "add 1"], answer: 0, explain: "Each number is 3 more." },
            { q: "Next number: 5, 10, 15, __", options: ["20", "16", "25", "19"], answer: 0, explain: "The rule is add 5." },
            { q: "Missing number: 20, 18, __, 14", options: ["16", "17", "15", "12"], answer: 0, explain: "The pattern is −2, so 18 − 2 = 16." },
            { q: "Next number: 2, 4, 6, 8, __", options: ["10", "9", "12", "16"], answer: 0, explain: "The rule is add 2." },
            { q: "Missing number: 100, 90, 80, __, 60", options: ["70", "85", "75", "50"], answer: 0, explain: "The pattern is −10, so 80 − 10 = 70." }
          ]
        },
        {
          id: "money",
          strand: "number-algebra",
          name: "Dollars and cents",
          icon: "💰",
          summary: "Describe the relationship between dollars and cents.",
          learn: [
            "There are 100 cents in one dollar. So $1 = 100c.",
            "Coins come in 5c, 10c, 20c, 50c, $1 and $2. Notes start at $5.",
            "You can make $1 with coins, like 50c + 20c + 20c + 10c."
          ],
          example: {
            prompt: "How many 20c coins make $1?",
            steps: [
              "$1 is 100 cents.",
              "20 + 20 + 20 + 20 + 20 = 100.",
              "So five 20c coins make $1."
            ]
          },
          quiz: [
            { q: "How many cents in $1?", options: ["100", "10", "50", "1000"], answer: 0, explain: "$1 = 100c." },
            { q: "How many 50c coins make $1?", options: ["2", "5", "10", "1"], answer: 0, explain: "50c + 50c = $1." },
            { q: "$2 = how many cents?", options: ["200", "20", "100", "220"], answer: 0, explain: "$2 = 200c." },
            { q: "Which is worth more?", options: ["$1", "90c", "same", "80c"], answer: 0, explain: "$1 = 100c, which is more than 90c." },
            { q: "How many 10c coins make 50c?", options: ["5", "10", "2", "4"], answer: 0, explain: "10c + 10c + 10c + 10c + 10c = 50c." }
          ]
        },

        // ---------------------------- MEASUREMENT AND GEOMETRY ----------------------------
        {
          id: "shapes-2d",
          strand: "measurement-geometry",
          name: "2D shapes",
          icon: "🔷",
          summary: "Identify and draw familiar 2D shapes.",
          learn: [
            "2D shapes are flat. We name them by their sides and corners (vertices).",
            "Triangle: 3 sides. Square: 4 equal sides. Rectangle: 4 sides. Pentagon: 5 sides. Hexagon: 6 sides.",
            "A circle has no straight sides and no corners. Draw shapes by joining straight sides with a ruler."
          ],
          example: {
            prompt: "How many sides does a pentagon have?",
            steps: [
              "Count the straight sides one by one: 1, 2, 3, 4, 5.",
              "A pentagon has 5 sides."
            ]
          },
          quiz: [
            { q: "How many sides does a hexagon have?", options: ["6", "5", "4", "8"], answer: 0, explain: "A hexagon has 6 sides." },
            { q: "Which shape has no corners?", options: ["Circle", "Square", "Triangle", "Pentagon"], answer: 0, explain: "A circle is round and has no corners." },
            { q: "How many sides does a square have?", options: ["4", "3", "5", "6"], answer: 0, explain: "A square has 4 sides." },
            { q: "Which shape has 3 sides?", options: ["Triangle", "Hexagon", "Circle", "Rectangle"], answer: 0, explain: "A triangle has 3 sides." },
            { q: "How many corners does a pentagon have?", options: ["5", "4", "6", "3"], answer: 0, explain: "A pentagon has 5 corners." }
          ]
        },
        {
          id: "objects-3d",
          strand: "measurement-geometry",
          name: "3D objects",
          icon: "🧊",
          summary: "Name familiar 3D objects and describe their features.",
          learn: [
            "3D objects are solid and take up space. Examples: cube, cylinder, cone, sphere, rectangular prism.",
            "A cube has 6 square faces. A cylinder has a circle at each end. A sphere is perfectly round.",
            "Flat faces stack. Curved surfaces roll."
          ],
          example: {
            prompt: "A tin can — what shape are its ends?",
            steps: [
              "Look at the top and bottom of the can.",
              "Both ends are circles.",
              "The can is a cylinder."
            ]
          },
          quiz: [
            { q: "Which object is round and can roll?", options: ["Sphere", "Cube", "Book", "Brick"], answer: 0, explain: "A sphere is round and rolls." },
            { q: "The faces of a cube are…", options: ["squares", "circles", "triangles", "ovals"], answer: 0, explain: "Each face of a cube is a square." },
            { q: "An ice-cream cone is like a…", options: ["cone", "cube", "sphere", "cylinder"], answer: 0, explain: "It is shaped like a cone." },
            { q: "A tissue box is like a…", options: ["rectangular prism", "sphere", "cone", "cylinder"], answer: 0, explain: "A tissue box is a rectangular prism." },
            { q: "How many faces does a cube have?", options: ["6", "4", "8", "2"], answer: 0, explain: "A cube has 6 faces." }
          ]
        },
        {
          id: "length-area",
          strand: "measurement-geometry",
          name: "Length and area",
          icon: "📏",
          summary: "Compare length and area using uniform informal units.",
          learn: [
            "Measure length with equal informal units like paperclips, lined up end to end with no gaps or overlaps.",
            "The bigger the unit, the fewer units you need.",
            "Area is the flat space a shape covers. Cover a shape with equal squares to compare areas."
          ],
          example: {
            prompt: "A book is 6 paperclips long. A pencil is 4 paperclips long. Which is longer?",
            steps: [
              "The book measures 6 paperclips.",
              "The pencil measures 4 paperclips.",
              "6 is more than 4, so the book is longer."
            ]
          },
          quiz: [
            { q: "Which is longer?", options: ["A bus", "A bike", "same", "A shoe"], answer: 0, explain: "A bus is longer than a bike." },
            { q: "When measuring with blocks, line them up with…", options: ["no gaps", "big gaps", "overlaps", "one on top"], answer: 0, explain: "Measure end to end with no gaps or overlaps." },
            { q: "A shape covered by 9 squares or 6 squares — which has more area?", options: ["9 squares", "6 squares", "same", "neither"], answer: 0, explain: "More squares cover more area." },
            { q: "Ribbon A is 5 blocks. Ribbon B is 8 blocks. Which is longer?", options: ["Ribbon B", "Ribbon A", "same", "neither"], answer: 0, explain: "8 blocks is longer than 5 blocks." },
            { q: "Area is the flat ___ a shape covers.", options: ["space", "mass", "time", "height"], answer: 0, explain: "Area is the flat space a shape covers." }
          ]
        },
        {
          id: "capacity-mass",
          strand: "measurement-geometry",
          name: "Capacity and mass",
          icon: "🧴",
          summary: "Compare capacity and mass using informal units.",
          learn: [
            "Capacity is how much a container holds. Compare by filling with a unit like a cup.",
            "Mass is how heavy something is. Compare by hefting or using balance scales.",
            "An object keeps the same mass even if you reshape it."
          ],
          example: {
            prompt: "A bottle holds 4 cups. A jug holds 7 cups. Which holds more?",
            steps: [
              "The bottle holds 4 cups.",
              "The jug holds 7 cups.",
              "7 is more than 4, so the jug holds more."
            ]
          },
          quiz: [
            { q: "Which holds more?", options: ["A bucket", "A cup", "same", "A spoon"], answer: 0, explain: "A bucket holds more than a cup." },
            { q: "We compare mass using…", options: ["balance scales", "a ruler", "a clock", "a map"], answer: 0, explain: "Balance scales compare mass." },
            { q: "Which is heavier?", options: ["A rock", "A feather", "same", "A leaf"], answer: 0, explain: "A rock is heavier than a feather." },
            { q: "A small rock and a big pillow — which is heavier?", options: ["The rock", "The pillow", "same", "neither"], answer: 0, explain: "Big does not always mean heavy." },
            { q: "The side of the balance that goes down is…", options: ["heavier", "lighter", "empty", "bigger"], answer: 0, explain: "The heavier side tips down." }
          ]
        },
        {
          id: "time",
          strand: "measurement-geometry",
          name: "Time and calendars",
          icon: "🕐",
          summary: "Tell time to the hour, half- and quarter-hour and use a calendar.",
          learn: [
            "The minute hand points to 12 for o'clock, to 6 for half past, to 3 for quarter past and to 9 for quarter to.",
            "The same time can be read on analogue and digital clocks. Half past 2 is 2:30.",
            "A calendar shows days, weeks and months. You can count the days between two dates."
          ],
          example: {
            prompt: "What is quarter past 4 on a digital clock?",
            steps: [
              "Quarter past means 15 minutes past the hour.",
              "The hour is 4.",
              "So it is 4:15."
            ]
          },
          quiz: [
            { q: "Half past 3 is the same as…", options: ["3:30", "3:00", "4:30", "3:15"], answer: 0, explain: "Half past 3 is 3:30." },
            { q: "Quarter past 6 on a digital clock is…", options: ["6:15", "6:45", "6:30", "6:00"], answer: 0, explain: "Quarter past means 15 minutes past." },
            { q: "How many days are in a week?", options: ["7", "5", "10", "12"], answer: 0, explain: "There are 7 days in a week." },
            { q: "Which hand shows the minutes?", options: ["The long hand", "The short hand", "The numbers", "The second hand"], answer: 0, explain: "The long hand shows the minutes." },
            { q: "How many months are in a year?", options: ["12", "10", "7", "24"], answer: 0, explain: "There are 12 months in a year." }
          ]
        },
        {
          id: "maps",
          strand: "measurement-geometry",
          name: "Position and simple maps",
          icon: "🗺️",
          summary: "Locate positions and pathways on simple maps.",
          learn: [
            "A map is a drawing of a place seen from above (a bird's-eye view).",
            "We use position words like above, below, next to and between.",
            "A pathway is a set of steps: go forward, then turn left."
          ],
          example: {
            prompt: "On a map the shop is between the park and the school. Where is the shop?",
            steps: [
              "Between means in the middle.",
              "The shop is in the middle of the park and the school."
            ]
          },
          quiz: [
            { q: "A map shows a place from…", options: ["above", "the side", "underneath", "far away"], answer: 0, explain: "A map is a bird's-eye view from above." },
            { q: "The cat is under the table. Where is the cat?", options: ["Below the table", "Above the table", "On the table", "Next to the table"], answer: 0, explain: "Under means below." },
            { q: "Which word tells a direction?", options: ["Left", "Red", "Happy", "Three"], answer: 0, explain: "Left is a direction word." },
            { q: "The library is next to the hall. Where is it?", options: ["Beside the hall", "Under the hall", "Inside the hall", "Above the hall"], answer: 0, explain: "Next to means beside." },
            { q: "To follow a path you move step by step.", options: ["True", "False"], answer: 0, explain: "A path is a set of steps." }
          ]
        },

        // ---------------------------- PROBABILITY AND STATISTICS ----------------------------
        {
          id: "chance",
          strand: "probability-statistics",
          name: "Possible or impossible",
          icon: "🎲",
          summary: "Describe events as possible or impossible and compare likelihood.",
          learn: [
            "An event is possible if it can happen. It is impossible if it cannot happen.",
            "Compare likelihood: which is more likely — seeing a bird or a kangaroo in the playground?",
            "Some things are certain, like the sun rising. Some are impossible, like a cat flying."
          ],
          example: {
            prompt: "It might rain today. Is that possible or impossible?",
            steps: [
              "Rain can happen — it is not impossible.",
              "But it is not certain either.",
              "So rain is possible."
            ]
          },
          quiz: [
            { q: "Rolling a 7 on a 1–6 dice is…", options: ["Impossible", "Certain", "Likely", "Sure"], answer: 0, explain: "A 1–6 dice cannot show 7." },
            { q: "The sun rising tomorrow is…", options: ["Certain", "Impossible", "Unlikely", "Maybe"], answer: 0, explain: "The sun always rises — it is certain." },
            { q: "In your classroom, which is more likely?", options: ["A student", "An elephant", "same", "neither"], answer: 0, explain: "A student is far more likely." },
            { q: "Rain tomorrow is…", options: ["Possible", "Impossible", "Certain", "Never"], answer: 0, explain: "Rain can happen, so it is possible." },
            { q: "A fish walking to school is…", options: ["Impossible", "Certain", "Likely", "Possible"], answer: 0, explain: "Fish cannot walk to school." }
          ]
        },
        {
          id: "data",
          strand: "probability-statistics",
          name: "Collecting and displaying data",
          icon: "📊",
          summary: "Collect and compare data and show it in tables and one-to-one graphs.",
          learn: [
            "Collect data by asking a question and recording the answers, using tallies.",
            "Show data in a table or a one-to-one graph. In a one-to-one graph, one picture stands for one thing.",
            "Then compare: which has the most? the least? How many more?"
          ],
          example: {
            prompt: "5 people like apples, 3 like bananas, 2 like grapes. Which is the most popular?",
            steps: [
              "Look at the numbers: apples 5, bananas 3, grapes 2.",
              "The biggest number is 5.",
              "So apples are the most popular."
            ]
          },
          quiz: [
            { q: "🐶🐶🐶🐱🐱  Which is the most?", options: ["🐶", "🐱", "same", "neither"], answer: 0, explain: "Dogs have 3, cats have 2." },
            { q: "A tally helps you…", options: ["count answers", "colour in", "tell the time", "measure length"], answer: 0, explain: "Tallies help you count." },
            { q: "In a one-to-one graph, one picture means…", options: ["one thing", "ten things", "two things", "nothing"], answer: 0, explain: "One picture stands for one thing." },
            { q: "4 cats and 6 dogs — how many more dogs?", options: ["2", "10", "1", "6"], answer: 0, explain: "6 − 4 = 2 more dogs." },
            { q: "🚗🚗🚗🚗  🚲🚲  Which is the least?", options: ["🚲", "🚗", "same", "neither"], answer: 0, explain: "Bikes have 2, cars have 4." }
          ]
        }
      ]
    }
  }
};
