from __future__ import annotations

from collections import deque
from typing import Deque, List, Optional


def format_deque(dq: Deque[int], nums: List[int]) -> str:
    indices = list(dq)
    values = [nums[i] for i in indices]
    return f"idx:{indices} val:{values}"


def log_step(
    i: int,
    x: int,
    ops: List[str],
    dq: Deque[int],
    nums: List[int],
    k: int,
    current_max: Optional[int],
) -> None:
    left = i - k + 1
    window_str = f"[{max(left, 0)},{i}]" if left >= 0 else f"(warming up; left would be {left})"

    print(f"i={i}, x={x}, window={window_str}")
    if ops:
        for op in ops:
            print(f"  - {op}")
    else:
        print("  - (no deque operations)")

    print(f"  deque: {format_deque(dq, nums)}")
    if current_max is not None:
        print(f"  max for window ending at i={i}: {current_max}")
    print("-" * 60)


def sliding_window_max_with_trace(nums: List[int], k: int) -> List[int]:
    if k <= 0:
        raise ValueError("k must be >= 1")
    if not nums:
        return []

    dq: Deque[int] = deque()  # stores indices; nums[dq[0]] is current max
    out: List[int] = []

    for i, x in enumerate(nums):
        ops: List[str] = []

        # 1) Remove indices that are out of the current window.
        left = i - k + 1
        while dq and dq[0] < left:
            j = dq[0]
            ops.append(
                f"pop-left: index {j} (value {nums[j]}) is out of window [{left},{i}]"
            )
            dq.popleft()

        # 2) Maintain decreasing values in deque (front is max).
        while dq and nums[dq[-1]] <= x:
            j = dq[-1]
            ops.append(
                f"pop-right: index {j} (value {nums[j]}) <= incoming {x}"
            )
            dq.pop()

        # 3) Append current index.
        dq.append(i)
        ops.append(f"append: index {i} (value {x})")

        # 4) Record max once the first full window is formed.
        current_max: Optional[int] = None
        if i >= k - 1:
            current_max = nums[dq[0]]
            out.append(current_max)

        log_step(i, x, ops, dq, nums, k, current_max)

    return out


def main() -> None:
    nums = [2, 4, 3, 6, 4, 1, 5, 4, 3]
    k = 3

    print("Input:")
    print(f"  nums={nums}")
    print(f"  k={k}")
    print("Note: deque stores indices; invariant: values decrease from front to back.")
    print("=" * 60)

    result = sliding_window_max_with_trace(nums, k)

    print("Output:")
    print(f"  final output maxima: {result}")


if __name__ == "__main__":
    main()
