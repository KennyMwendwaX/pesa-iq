// Function to format amount based on frequency
const formatAmount = (amount: number, frequency: string) => {
  switch (frequency) {
    case "one-time":
      return amount;
    case "daily":
      return amount * 30; // Assuming an average month has 30 days
    case "weekly":
      return amount * 4; // Assuming an average month has 4 weeks
    case "bi-weekly":
      return amount * 2; // Assuming an average month has 4 weeks
    case "monthly":
      return amount;
    case "yearly":
      return amount / 12; // Divide by 12 for monthly equivalent
    default:
      return amount;
  }
};
