const allQuestions = [
  {
    id:Math.random().toString(),
    quest: "A line which cuts a pair of parallel lines is called",
    correct: "Traversal",
    selected: null,
    opt: [
      {
        value: "Tangent",
        displayText: "Tangent",
      },
      {
        value: "Chord",
        displayText: "Chord",
      },
      {
        value: "Traversal",
        displayText: "Traversal",
      },
      {
        value: "Intersector",
        displayText: "Intersector",
      },
    ],
  },
  {
    id:Math.random().toString(),
    quest:
      "If a certain sum of money can become 5 times of its principal in 10 years, then the rate of interest is",
    correct: "30%",
    selected: null,
    opt: [
      {
        value: "20%",
        displayText: "20%",
      },
      {
        value: "30%",
        displayText: "30%",
      },
      {
        value: "40%",
        displayText: "40%",
      },
      {
        value: "50%",
        displayText: "50%",
      },
    ],
  },
  {
    id:Math.random().toString(),
    quest:
      "A shopkeeper purchases 15 mangoes for Rs. 10 and sells them at 10 mangoes for Rs. 15. Thus, he earns a profit of",
    correct: "80%",
    selected: null,
    opt: [
      {
        value: "50%",
        displayText: "50%",
      },
      {
        value: "75%",
        displayText: "75%",
      },
      {
        value: "80%",
        displayText: "80%",
      },
      {
        value: "125%",
        displayText: "125%",
      },
    ],
  },
];

export default allQuestions;
