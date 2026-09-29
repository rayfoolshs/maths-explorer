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
    { year: "2",  label: "Year 2",      icon: "🐳", colour: "#06B6D4", available: false },
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
    }
  }
};
