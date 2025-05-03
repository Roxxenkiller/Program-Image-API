
  // Modal Logic for Image Preview
  document.addEventListener("DOMContentLoaded", () => {
    const modal = new bootstrap.Modal(document.getElementById("imageModal"));
    const modalImage = document.getElementById("modalImage");

    // Delegate click event to images with class 'img-clickable'
    document.body.addEventListener("click", function (e) {
      if (e.target.classList.contains("img-clickable")) {
        const imageUrl = e.target.getAttribute("data-img-url") || e.target.src;
        modalImage.src = imageUrl;
        modal.show();
      }
    });

    // Optional: Clear image when modal hides
    document.getElementById("imageModal").addEventListener("hidden.bs.modal", () => {
      modalImage.src = "";
    });
  });






  let apiUrl = "https://ghinaulhasan.github.io/structure-of-API/index.json"

  async function getApi(link){

    let response = await fetch(link)
    let data = await response.json()
    console.log(data);
    

    let img = ""

    data.forEach(element => {

        img += `
  <div class="col">
    <div class="card h-100 shadow-sm">
      <img src="${element.img_url}"
           class="card-img-top img-clickable"
           alt="Image"
           data-bs-toggle="modal"
           data-bs-target="#imageModal"
           data-img-url="${element.img_url}">
      <div class="card-body text-center">
      </div>
    </div>
  </div>
`;


      
      document.getElementById("all-data").innerHTML = img

    });
  




  }

  getApi(apiUrl)