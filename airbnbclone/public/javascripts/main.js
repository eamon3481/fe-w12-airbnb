
const seachbarRooms = document.querySelector("#main_seachbar_rooms");
const seachbaractivity = document.querySelector("#main_seachbar_activity");
//<==== 질문 =--->//
//seachbar를 불러올 때, SelectorAll 을 해서 Node[0], Node[1] 을 각자 불러오는 것이 좋을까요?
//아니면 이렇게 서로 id 를 부여해서 불러오는 것이 좋을까요?
const main = document.querySelector(".main");
const mainPeople = main.querySelector(".main_people");
const mainLocation = main.querySelector(".main_location");
const mainNavbar = main.querySelector(".navbar_ul");
const lists = mainNavbar.getElementsByTagName("li");

const searchbar = (searchbarDocument) => {
  const location = searchbarDocument.firstElementChild;
  const input = searchbarDocument.querySelector("input");
  const peoplebtn = searchbarDocument.querySelector(".seachbar_lastmenu");
  const searchbtn = peoplebtn.querySelector(".seachbar_btn");

  const locationClickHandler = () => {
    input.focus();
  };
  const locationFoucusHandler = () => {
    mainLocation.classList.remove("hide");
  };
  const peoplebtnClickHandler = () => {
    mainPeople.classList.remove("hide");
  };

  peoplebtn.addEventListener("click", (e) => {
    e.stopPropagation();
    peoplebtnClickHandler();
  });

  searchbtn.addEventListener("click",(e)=>{
    e.stopPropagation();
    locationClickHandler();
  })
  location.addEventListener("click", (e) => {
    e.stopPropagation();
    locationClickHandler();
  });

  input.addEventListener("focus", (e) => {
    locationFoucusHandler();
  });
};
searchbar(seachbarRooms);

const roomsBar = lists[0].querySelector(".navbar_selectedline");
const activityBar = lists[1].querySelector(".navbar_line");
const activityClickHandler = () => {
  seachbarRooms.classList.add("hide");
  seachbaractivity.classList.remove("hide");
  roomsBar.classList.replace("navbar_selectedline", "navbar_line");
  activityBar.classList.replace("navbar_line", "navbar_selectedline");
};
const roomClickHandler = () => {
  seachbarRooms.classList.remove("hide");
  seachbaractivity.classList.add("hide");
  activityBar.classList.replace("navbar_selectedline", "navbar_line");
  roomsBar.classList.replace("navbar_line", "navbar_selectedline");
};

lists[1].addEventListener("click", (e) => {
  activityClickHandler();
  searchbar(seachbaractivity);
});

lists[0].addEventListener("click", () => {
  roomClickHandler();
  searchbar(seachbarRooms);
});


const profileBtn = document.querySelector(".navbar_login_icons");
const profileHeader = document.querySelector(".profileHeader");
const body = document.querySelector("body");

const profileBtnClickHandler = () => {
  profileHeader.classList.toggle("hide");
};
const bodyClickHandler = () => {
  profileHeader.classList.add("hide");
  mainLocation.classList.add("hide");
  mainPeople.classList.add("hide");
};

profileBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  profileBtnClickHandler();
});

body.addEventListener("click", (e) => {
  bodyClickHandler();
});
