import { describe, it, expect, vi } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { PostsPagination } from "../PostsPagination"

const defaultProps = {
  page: 1,
  totalPages: 5,
  isPlaceholderData: false,
  onPageChange: vi.fn(),
}

describe("PostsPagination", () => {
  it("рендерить кнопки всіх сторінок", () => {
    render(<PostsPagination {...defaultProps} />)

    expect(screen.getByText("1")).toBeInTheDocument()
    expect(screen.getByText("5")).toBeInTheDocument()
  })

  it("кнопка ← задизейблена на першій сторінці", () => {
    render(<PostsPagination {...defaultProps} page={1} />)

    expect(screen.getByText("←")).toBeDisabled()
  })

  it("кнопка → задизейблена на останній сторінці", () => {
    render(<PostsPagination {...defaultProps} page={5} />)

    expect(screen.getByText("→")).toBeDisabled()
  })

  it("викликає onPageChange з правильною сторінкою при кліку", async () => {
    const onPageChange = vi.fn()
    render(<PostsPagination {...defaultProps} page={3} totalPages={10} onPageChange={onPageChange} />)

    await userEvent.click(screen.getByText("4"))

    expect(onPageChange).toHaveBeenCalledWith(4)
  })

  it("викликає onPageChange при кліку на →", async () => {
    const onPageChange = vi.fn()
    render(<PostsPagination {...defaultProps} page={3} onPageChange={onPageChange} />)

    await userEvent.click(screen.getByText("→"))

    expect(onPageChange).toHaveBeenCalledWith(4)
  })
})
