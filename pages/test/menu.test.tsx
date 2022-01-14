import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Subidor from "../menu1";

describe("Subidor", () => {
  beforeEach(() => render(<Subidor />));
  describe("check all elements exist in page", () => {
    it("should  exists elements of the screen ", () => {
      expect(
        screen.getByRole("heading", { name: /Subidor/i })
      ).toBeInTheDocument();
    });

    it("should  exists elements of form", () => {
      expect(screen.queryByTitle(/Medio/i)).toBeInTheDocument();
      expect(screen.queryByTitle(/Upload/i)).toBeInTheDocument();

      expect(screen.queryByText(/Select a person/i)).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: /submit/i })
      ).toBeInTheDocument();
    });
  });

  describe("Submit actions", () => {
    it("should display validation message is not a pdf image", async () => {
      expect(screen.queryByText(/is not a pdf file/i)).not.toBeInTheDocument();

      fireEvent.click(screen.getByRole("button", { name: /submit/i }));

      waitFor(() =>
        expect(screen.queryByText(/is not a pdf file/i)).toBeInTheDocument()
      );

      await waitFor(() =>
        expect(
          screen.getByRole("button", { name: /submit/i })
        ).not.toBeDisabled()
      );
    });
  });
});
