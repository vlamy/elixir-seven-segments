defmodule LCD do
  @moduledoc """
  Documentation for Lcd.
  """

  @lcd_numbers %{
    "0" => {" _ ", "| |", "|_|"},
    "1" => {"   ", "  |", "  |"},
    "2" => {" _ ", " _|", "|_ "},
    "3" => {" _ ", " _|", " _|"},
    "4" => {"   ", "|_|", "  |"},
    "5" => {" _ ", "|_ ", " _|"},
    "6" => {" _ ", "|_ ", "|_|"},
    "7" => {" _ ", "  |", "  |"},
    "8" => {" _ ", "|_|", "|_|"},
    "9" => {" _ ", "|_|", "  |"}
  }

  defp sanitize(charlist) do
    String.split(charlist, "")
    |> Enum.filter(fn c -> @lcd_numbers[c] != nil end)
  end

  defp extract(line, charlist) do
    charlist
    |> Enum.map(fn c -> @lcd_numbers[c] end)
    |> Enum.map(fn list -> elem(list, line) end)
    |> Enum.join("")
  end

  def to_lines(charlist) do
    0..2
    |> Enum.reduce("", fn i, acc -> acc <> extract(i, charlist) <> "\n" end)
  end

  @doc """
  Tranforms any string in LCD formated string.

  ## Examples
      iex> LCD.transform("12345")
      "    _  _     _ 
        | _| _||_||_ 
        ||_  _|  | _|
      "

      iex> LCD.transform("1a23*45")
      "    _  _     _ 
        | _| _||_||_ 
        ||_  _|  | _|
      "

  """
  def transform(inputString) do
    inputString
    |> sanitize
    |> to_lines
  end
end

defmodule LCD.CLI do
  def main(args) do
     LCD.transform(hd(args))
     |> IO.puts
  end
end
