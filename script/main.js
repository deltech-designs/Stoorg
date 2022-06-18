let hiddenBar = document.querySelector(".hidden-bar");
let navBarList = document.querySelector(".navbar-link-container") 

hiddenBar.onclick = () => {
  // alert("Hey")
  if(hiddenBar.onclick){
    navBarList.style.display = "block";
  }
  else if(hiddenBar.onclick) {
    navBarList.style.display = "hidden";
  }

  // // navBarList.style.width = "100px";
  // // navBarList.style.height = "100%";
  
  // closeBtn()
}

// function closeBtn(){
//   navBarList.style.display = "block";
// }



let featuredImg = [

  {
    pic: "/img/GUEST_3b4179f0-dfa5-4f25-9d51-375f6bc17391.JFIF",
    name: "Single Seater Sofa", 
    price: "USD 5.00"
  }, 
  
  {
    pic: "/img/European-Style-Nordic-Beautiful-Living-Room-Small-Single-Fabric-Sofa-Chair.jpg",
    name: "Tufted White Sofa", 
    price: "USD 5.00"
  }, 

  {
    pic: "/img/high-back-sofa-chair-500x500.jpg",
    name: "Bedside Table Sofa", 
    price: "USD 5.00"
  }, 

  {
    pic: "/img/GUEST_3b4179f0-dfa5-4f25-9d51-375f6bc17391.JFIF",
    name: "Single Seater Sofa", 
    price: "USD 5.00"
  }, 
  
  {
    pic: "/img/European-Style-Nordic-Beautiful-Living-Room-Small-Single-Fabric-Sofa-Chair.jpg",
    name: "Chair Living room", 
    price: "USD 5.00"
  }, 

  {
    pic: "/img/high-back-sofa-chair-500x500.JPG",
    name: "Single Seater Sofa", 
    price: "USD 5.00"
  }, 

]


let featuredItems = document.querySelector(".featured-items");
featuredImg.map(({pic, name, price}) => {
  featuredItems.innerHTML += `
    <div class="card">
      <img src="${pic}" alt="">
      <div class="card-container">
          <h5>${name}</h5>
          <p>${price}</p>
          <div class="card-btn">
            <button class="btn-shop">Shop Now</button>
            <button class="btn-cart">Add to Cart</button>
          </div>  
      </div>
    </div>
  `
})



// Latest Blog

const latestBlog = [
  {
    pics: "/img/high-back-sofa-chair-500x500.jpg", 
    date: "20 May, 2022",
    title: "Lemke, Gutkownski and Bernhand",
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, quas dolorum quasi rem nesciunt fugiat quae accusantium quisquam reprehenderit officia! Quibusdam explicabo ut exercitationem sapiente corporis sequi cum deleniti esse!", 

  },

  {
    pics: "/img/high-back-sofa-chair-500x500.jpg", 
    date: "20 May, 2022",
    title: "Lemke, Gutkownski and Bernhand",
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, quas dolorum quasi rem nesciunt fugiat quae accusantium quisquam reprehenderit officia! Quibusdam explicabo ut exercitationem sapiente corporis sequi cum deleniti esse!", 

  },

  {
    pics: "/img/high-back-sofa-chair-500x500.jpg", 
    date: "20 May, 2022",
    title: "Lemke, Gutkownski and Bernhand",
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, quas dolorum quasi rem nesciunt fugiat quae accusantium quisquam reprehenderit officia! Quibusdam explicabo ut exercitationem sapiente corporis sequi cum deleniti esse!", 

  },
]

let latest = document.querySelector(".container-blog"); 

latestBlog.map(({pics, date, title, content}) => {
  latest.innerHTML +=`
    <div class="card">
      <div class="card-img">
          <img src="${pics}" alt="">
          <p class="date">${date}</p>
      </div>

      <div class="card-container">
          <h3>${title}</h3>
          <p class="card-content">
              ${content}
          </p>
          <a class="card-link" href="#">Learn More</a>
      </div>
    </div>
  `
})