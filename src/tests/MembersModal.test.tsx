import { render, screen } from "@testing-library/react";
import MembersModal from "../components/MembersModal";

test("renders Members Modal", () => {
  render(
    <MembersModal open={true} onClose={() => {}} onSelectUser={() => {}} />
  );
  expect(screen.getByText(/Select a Member/i)).toBeInTheDocument();
});
