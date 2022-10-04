const fetchButton = document.getElementById("fetchButton");
const nextButton = document.getElementById("nextButton");
const prevButton = document.getElementById("prevButton");
const peopleList = document.getElementById("peopleList");

let prevUrl = "https://swapi.dev/api/people";
let nextUrl = "https://swapi.dev/api/people";

const fetchMyData = async (url) => {
  const resp = await fetch(url);
  const data = await resp.json();
  return data;
};

const renderPeopleList = (list) => {
  // Prima di stampare cancella gli elementi precedenti e stampa quelli successivi
  peopleList.innerHTML = "";

  list.forEach((content) => {
    console.log(content);
    const li = document.createElement("li");
    li.append(content);
    peopleList.append(li);
  });
};

const renderPage = async (url) => {
  const data = await fetchMyData(url);
  prevUrl = data.previous;
  nextUrl = data.next;

  const list = await Promise.all(
    data.results.map(async (person) => {
      const homeworld = await fetchMyData(person.homeworld);
      return `${person.name} - ${homeworld.name}`;
    })
  );
  renderPeopleList(list);
};

prevButton.addEventListener("click", async () => {
  // se prevUrl è null non lo chiama
  if (prevUrl) {
    renderPage(prevUrl);
  }
});

nextButton.addEventListener("click", async () => {
  // se nextUrl è null non lo chiama
  if (nextUrl) {
    renderPage(nextUrl);
  }
});

fetchButton.addEventListener("click", async () => {
  renderPage("https://swapi.dev/api/people");
});
