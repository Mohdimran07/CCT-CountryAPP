import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import SearchCountry from "./pages/SearchCountry";
import NavigationBar from "./components/NavigationBar";
import Error from "./utility/Error";
import PageNotFound from "./pages/PageNotFound"

describe("render App Component", () => {
  test("App Component", () => {
    const { container } = render(
      <BrowserRouter>
        <App></App>
      </BrowserRouter>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe("SearchCountry Component", () => {
  test("render the placeHoldertext", () => {
    render(
      <BrowserRouter>
      <SearchCountry />
      </BrowserRouter>
    );
    const placeHolderText = screen.getByPlaceholderText(/Enter country name/);
    expect(placeHolderText).toBeInTheDocument();
  })

  test("render the fireEvent placeHolder text", () => {
    render(
      <BrowserRouter>
      <SearchCountry />
      </BrowserRouter>
    );
    fireEvent.change(screen.getByPlaceholderText("Enter country name"), {
      target: { value: "India"}
    })
  })

  test("test for button", () => {
    render(
      <BrowserRouter>
      <SearchCountry />
      </BrowserRouter>
    );
     expect(screen.getByRole("button")).toBeInTheDocument();
  })
  test("render the no of buttons exist", () => {
    render(
      <BrowserRouter>
      <SearchCountry />
      </BrowserRouter>
    );
    expect(screen.getAllByRole("button").length).toBe(1);
  })

  test("render text box", () => {
    render(
      <BrowserRouter>
      <SearchCountry />
      </BrowserRouter>
    );
    expect(screen.getAllByRole("textbox").length).toBe(1);
  })
})

describe("render Naviagtion Bar component", () => {
  test("test for text", () => {
    render(
      <BrowserRouter>
      <NavigationBar />
      </BrowserRouter>
    )
    expect(screen.getByText(/Country/)).toBeInTheDocument();
  })

  test("test for banner", () => {
    render(
      <BrowserRouter>
      <NavigationBar />
      </BrowserRouter>
    )
    expect(screen.getAllByRole("banner").length).toBe(1)
  })
})

describe("render Error Component", () => {
  test("test for text element", () => {
    render(
      <BrowserRouter>
      <Error />
      </BrowserRouter>
    )
    expect(screen.getByText(/Something went wrong.../)).toBeInTheDocument();
  })
  test("test for button",() => {
    render(
      <BrowserRouter>
      <Error />
      </BrowserRouter>
    )
    expect(screen.getByRole("button")).toBeInTheDocument();
  })
  test("test for no of buttons", () => {
    render(
      <BrowserRouter>
      <Error />
      </BrowserRouter>
    )
    expect(screen.getAllByRole("button").length).toBe(1);
  })
  

})

describe("test on PageNotFound component", () => {
  test("test to finde existence any button", () => {
    render(
      <BrowserRouter>
        <PageNotFound></PageNotFound>
      </BrowserRouter>
    );
    const elemet = screen.getByRole("button");
    expect(elemet).toBeInTheDocument();
  });
});

describe("test on PageNotFound component", () => {
  test("test to find total number of buttons", () => {
    render(
      <BrowserRouter>
        <PageNotFound></PageNotFound>
      </BrowserRouter>
    );
    const elemet = screen.getAllByRole("button");
    expect(elemet.length).toBe(1);
  });

  test("finding text inside PageNotFound component", () => {
    render(
      <BrowserRouter>
        <PageNotFound></PageNotFound>
      </BrowserRouter>
    );

    const elemetText = screen.getByText(/Page Not Found/);
    expect(elemetText).toBeInTheDocument();
  });
});
