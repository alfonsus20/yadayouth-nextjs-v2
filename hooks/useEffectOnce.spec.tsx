import { renderHook } from "@testing-library/react";
import useEffectOnce from "./useEffectOnce";

const mockedCallback = jest.fn();

describe("useEffectOnce hook unit test", () => {
  it("should call callback function only once", () => {
    renderHook(() => useEffectOnce(mockedCallback));
    expect(mockedCallback).toHaveBeenCalledTimes(1);
  });
});
