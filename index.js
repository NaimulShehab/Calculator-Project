const display = document.getElementById("output")

function appendToDisplay(input)
{
    display.value += input;
}

function calculate()
{
    try
    {
        display.value = eval(display.value);
    }
    catch(error)
    {
        display.value = "Error!!!"
    }
}

function clearDisplay()
{
    display.value = "";
}