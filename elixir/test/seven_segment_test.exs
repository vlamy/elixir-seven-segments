defmodule SevenSegmentTest do
  use ExUnit.Case
  doctest SevenSegment.CLI

  test "when no args provided" do
    assert SevenSegment.CLI.parseArgs([]) == "please provide a number between 0 and 999"
  end
end
