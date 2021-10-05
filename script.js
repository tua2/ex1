const buttonsPagination=document.querySelectorAll(".pagination >button");
for(let i=0;i<buttonsPagination.length;i++)
{
    buttonsPagination[i].addEventListener("click",function(){
        for(let j=0;j<buttonsPagination.length;j++){
            buttonsPagination[j].classList.remove("active");

        }
        this.classList.add("active");
    })
}