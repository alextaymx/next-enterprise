import { render } from "@testing-library/react"
import { AppProps } from "next/app"
import HomePage from "@/app/page"

// Mock router object with required properties
const router = {
  basePath: "",
  pathname: "/",
  query: {},
  asPath: "/",
}

describe("MyApp", () => {
  it("should render a component with page props", () => {
    const props: AppProps = {
      Component: ({ title }) => (
        <>
          <div>Test Component</div>
          <div>{title}</div>
        </>
      ),
      pageProps: { title: "Test Page" },
      router: router as never, // Include mocked router object in props
    }
    const { getByText } = render(<HomePage />)
    expect(getByText("Portfolio")).toBeInTheDocument()
  })
})
