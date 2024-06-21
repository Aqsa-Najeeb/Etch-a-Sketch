
let container = document.querySelector('.container');
let button = document.querySelector('button');

function gen(num)
{
    container.innerHTML = "";
    
    for(let i=1; i<=num*num; i++)
    {
        const box = document.createElement('div');
        box.classList.add('box');
        box.style.height = (570/num) + "px";
        box.style.width = (570/num) + "px";
        box.style.backgroundColor = "transparent";
        container.appendChild(box);
    }
    
    hoverEffect();
}


function hoverEffect()
{
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => 
    {
        box.addEventListener("mouseover", () => 
        {
            if(box.style.backgroundColor != "transparent")
            {
                box.style.backgroundColor = "transparent";
            }
            else
            {
                const randomColor = Math.floor(Math.random() * 16777215).toString(16);
                box.style.backgroundColor = "#" + randomColor;
            }
            
        });
    });
}

button.addEventListener("click", () => 
{
    container.innerHTML = "";
    let num = 51;
    
    while((num < 0)||(num > 50))
    {
        num = Number(prompt("Enter a Number b/w 1 and 50"));
    }
    
    gen(num);
});

gen(16);