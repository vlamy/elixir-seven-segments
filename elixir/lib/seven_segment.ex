defmodule SevenSegment.CLI do
  @moduledoc """
  Documentation for SevenSegment.
  """

  def parseArgs([]) do
    "please provide a number between 0 and 999"
  end

  def parseArgs([input | tail]) when tail == [] do
    case Integer.parse(input) do
      {number, _} ->
        "Ok dude !"
      :error ->
        "input \"#{String.trim(input)}\" is not recognized as integer"
      _ ->
        "error while parsing input \"#{input}\""
    end
  end

  def parseArgs([input | tail]) when tail != [] do
    IO.puts "args #{Enum.join(tail, ",")} not treated"
    parseArgs([input | []])
  end

  def main(args) do
    args
    |> parseArgs
    |> IO.puts
  end
end
