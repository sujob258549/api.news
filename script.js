const allCategory = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/categories`);
    const data = await res.json();
    // console.log(data);
    const buttonsDiv = document.getElementById('buttons-div');
    data.data.news_category.forEach(item => {
      console.log(item);
        const div = document.createElement('button');
        div.innerHTML = `
        <button  onclick="subCategory('${item.category_id}'),buttonsColors()" class="btn buttons bg-slate-300   shadows hover:text-red-800">${item.category_name}</button>

        

        `;
        buttonsDiv.append(div);
        
        // console.log(item);
    });
    // console.log(data.data.news_category);
};

const buttonsColors = () => {
  const buttons = document.getElementsByClassName('buttons');
  console.log(buttons)
  // buttons.style.backgroundColor = 'red';
};

// const buttonsColors = () => {
//   const buttons = document.getElementsByClassName('buttons');
//   for(let button of buttons){
//     button.style.backgroundColor = 'red';
//   }
// };


const subCategory = async(id)=>{
    const res= await  fetch(`https://openapi.programming-hero.com/api/news/category/${id}`);
    const data = await res.json();
    const newsDiv = document.getElementById('news-div');
    newsDiv.textContent = '';
    data.data.forEach(item => {
        const div = document.createElement('div');
        div.innerHTML= `
        <div class="card card-compact bg-base-100 shadow-xl">
        <figure><img src="${item.image_url}" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">${item.title}</h2>
          <p>${item.details.slice(0, 250)}</p>
          <p class="text-xl font-semibold">${item.author.name}</p>
          <p>${item.author.published_date}</p>
          <p>total vews ${item.total_view}</p>
          <div class="card-actions justify-end">
            <button onclick=" console.log('good')" class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
        `;
        newsDiv.appendChild(div);
        // console.log(item.others_info);
    })

   

};


const searchValue = ()=>{
  const inputValues = document.getElementById('input-values').value;
  if(inputValues){
    subCategory(inputValues);
  }
  else{
    alert('your input is wrong');
  }
  console.log('good')
}


// const detailsAll = ()=>{
//   const div = document.createElement('div');
//         div.innerHTML= `
//         <div class="card card-compact bg-base-100 shadow-xl">
//         <figure><img src="${item.image_url}" alt="Shoes" /></figure>
//         <div class="card-body">
//           <h2 class="card-title">${item.title}</h2>
//           <p>${item.details}</p>
//           <p class="text-xl font-semibold">${item.author.name}</p>
//           <p>${item.author.published_date}</p>
//           <p>total vews ${item.total_view}</p>
//           <div class="card-actions justify-end">
//             <button onclick=" console.log('good')" class="btn btn-primary">Buy Now</button>
//           </div>
//         </div>
//       </div>
//         `;
//         newsDiv.appendChild(div);
// };


// detailsAll();
subCategory('01');
allCategory();
button();