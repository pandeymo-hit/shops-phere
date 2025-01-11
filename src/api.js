export const getProducts = async () => {
  // Simulated delay for API-like behavior
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          _id: "1",
          name: "Product 1",
          price: 29.99,
          imageUrl: "https://via.placeholder.com/200",
        },
        {
          _id: "1",
          name: "Product 1",
          price: 29.99,
          imageUrl: "https://via.placeholder.com/200",
        },
        {
          _id: "1",
          name: "Product 1",
          price: 29.99,
          imageUrl: "https://via.placeholder.com/200",
        },
        {
          _id: "1",
          name: "Product 1",
          price: 29.99,
          imageUrl: "https://via.placeholder.com/200",
        },
        {
          _id: "2",
          name: "Product 2",
          price: 49.99,
          imageUrl: "https://via.placeholder.com/200",
        },
        {
          _id: "3",
          name: "Product 3",
          price: 19.99,
          imageUrl: "https://via.placeholder.com/200",
        },
      ]);
    }, 1000); // Simulated 1-second delay
  });
};
