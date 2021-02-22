const colors = {
  data: [
    {
      color: "aliceblue",
      code: {
        hex: "#f0f8ff",
      },
      id: 1,
    },
    {
      color: "limegreen",
      code: {
        hex: "#99ddbc",
      },
      id: 2,
    },
    {
      color: "aqua",
      code: {
        hex: "#00ffff",
      },
      id: 3,
    },
    {
      color: "aquamarine",
      code: {
        hex: "#7fffd4",
      },
      id: 4,
    },
    {
      color: "lilac",
      code: {
        hex: "#9a99dd",
      },
      id: 5,
    },
    {
      color: "softpink",
      code: {
        hex: "#dd99ba",
      },
      id: 6,
    },
  ],
};

module.exports = {
  getColors: () => {
    return Promise.resolve(colors);
  },
};
