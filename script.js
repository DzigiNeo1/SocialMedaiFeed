const toggle = document.getElementById("toggle");

toggle.addEventListener("change", (e) => {
  document.body.classList.toggle("dark", e.target.checked);
});

const btn = document.getElementById("btn");
let currentElement = 0;
let lastElement = 4;
async function firstFourElements() {
  const fech = await fetch("./data.json");
  const response = await fech.json();
  console.log(response);
  let firstFourElements = response.slice(currentElement, lastElement);
  const html = firstFourElements.map((user) => {
    return `
    <div class="layout-container">
    <div class="feed">
      <div class="post">
      <div class="">
      <div> 
      <img src="${user.image}" alt="Post Image" class="post-image" id="post-img"/>
      <div class="prof-photo">
      <img src="${user.profile_image}" alt="Profile Image" class="profile-image" id="profile-img" />
      </div>
      <div class="">
      <div class="name" id="first-name">${user.name}</div>
      <p class="date" id="date">${user.date}</p>
      </div>
      <p class="caption" id="caption">${user.caption}</p>
      </div>
      </div>
      <div class="post-footer">
        <div class="likes" id="likes">👍🏻${user.likes}</div>
        <a href="${user.source_link}" class="source-link" id="source-link">${user.source_type}</a>
      </div>
    </div>
</div>
</div>
    `;
  });

  document
    .querySelector("#body-container")
    .insertAdjacentHTML("beforeend", html);
  console.log(currentElement, lastElement);
}
firstFourElements();

btn.addEventListener("click", async function LoadNextFourElements() {
  currentElement = lastElement;
  lastElement += 4;

  const fech = await fetch("./data.json");
  const response = await fech.json();
  let nextFourElements = response.slice(currentElement, lastElement);

  const html = nextFourElements.map((user) => {
   
    return `
    <div class="layout-container">
    <div class="feed">
      <div class="post">
      <div class="">
      <div> 
      <img src="${user.image}" alt="Post Image" class="post-image" id="post-img"/>
      <div class="prof-photo">
      <img src="${user.profile_image}" alt="Profile Image" class="profile-image" id="profile-img" />
      </div>
      <div class="">
      <div class="name" id="first-name">${user.name}</div>
      <p class="date" id="date">${user.date}</p>
      </div>
      <p class="caption" id="caption">${user.caption}</p>
      </div>
      </div>
      <div class="post-footer">
        <div class="likes" id="likes">👍🏻${user.likes}</div>
        <a href="${user.source_link}" class="source-link" id="source-link">${user.source_type}</a>
      </div>
    </div>
</div>
</div>`;
  });
  if (lastElement ===24) {
    btn.style.display = "none";
  }
  document
    .querySelector("#body-container")
    .insertAdjacentHTML("beforeend", html);
});
