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

let list=document.querySelectorAll('.list');
let item=document.querySelectorAll('.post');
for(let i=0;i<list.length;i++){
    list[i].addEventListener("click",function(){
        for(let j=0;j<list.length;j++){
            list[j].classList.remove("active");

        }
        this.classList.add("active");
        let dataFilter=this.getAttribute('data-filter');
        for(let t=0;t<item.length;t++){
            item[t].classList.remove("active");
            item[t].classList.add("hide");
            console.log(dataFilter,item[t].getAttribute("data-item"))
            if(item[t].getAttribute("data-item") ==dataFilter||dataFilter=="All")
            {
                item[t].classList.remove("hide");
                item[t].classList.add("active");
            }
        }
    })
}