const inp=document.querySelector('input');
const list=document.getElementById('list');

inp.addEventListener('keypress',(e)=>{
	if(e.which === 13){
        addItem(inp.value);
        console.log('click');
	}
});


function addItem(val)
{
    if(val!=='')
    {
      RenderList(val);
      inp.value="";
      console.log(val);
    }    
}

function RenderList(val)
{     

      const div=document.createElement('div');
      div.classList.add("row","each-row");

      const col1=document.createElement('div');
      col1.classList.add("col-1");
      const item1=document.createElement('i');
      item1.classList.add("fas","fa-star","star");
      col1.append(item1);
      div.append(col1);

      const col2=document.createElement('div');
      col2.classList.add("col-6");
      const item2=document.createElement('input');
      item2.classList.add("inputag");
      item2.value=val;
      item2.disabled=true;
      col2.append(item2);
      div.append(col2);

      const col3=document.createElement('div');
      col3.classList.add("col-1");
      const item3=document.createElement('i');
      item3.classList.add("fas","fa-arrow-up","up");
      col3.append(item3);
      div.append(col3);


      const col5=document.createElement('div');
      col5.classList.add("col-1");
      const item5=document.createElement('i');
      item5.classList.add("fas","fa-trash","del");
      col5.append(item5);
      div.append(col5);

      const col6=document.createElement('div');
      col6.classList.add("col-1");
      const item6=document.createElement('i');
      item6.classList.add("fas","fa-edit","edit");
      col6.append(item6);
      div.append(col6);

      const col4=document.createElement('div');
      col4.classList.add("col-1");
      const item4=document.createElement('i');
      item4.classList.add("fas","fa-arrow-down","down");
      col4.append(item4);
      div.append(col4);

      item6.addEventListener('click',() =>{
        item2.disabled=!item2.disabled;
        if(item2.disabled==false){
          item2.focus();
        }
      })
      
      item5.addEventListener('click',() =>{
         div.remove();
      })

      item4.addEventListener('click',()=>{
            let temp1=div.nextSibling;
            let temp2=div;
            if(temp1!=null)
            {
                div.remove();
                temp1.after(temp2);
            }
        })

      item3.addEventListener('click',()=>{
            let temp1=div.previousSibling;
            let temp2=div;
            if(temp1!=null)
            {
            div.remove();
            temp1.before(temp2);
            }
            
      })

      list.append(div);
}


