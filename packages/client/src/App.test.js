import { render, screen } from "@testing-library/react";

import App from "./App";

test("renders learn react link", () => {
  render(<App />);

  const linkElement = screen.getByText(/Check the server folder/i);

  expect(linkElement).toBeInTheDocument();
});
