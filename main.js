const accordeonMenu = () => {
  const accordeon = document.getElementById("accordeon");
  const tabs = document.querySelectorAll(".tab");

  tabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
      let isActive = e.target.parentElement.getAttribute("data-isactive");

      if (isActive == "false") {
        const tabElementActive = e.target.parentElement;
        tabElementActive.setAttribute("data-isactive", true);
        tabElementActive.classList.toggle("active");

        if (tabElementActive.getAttribute("data-isactive") == "true") {
          const newTabs = accordeon.children;

          for (let i = 0; i < newTabs.length; i++) {
            if (tabElementActive != newTabs[i]) {
              tabElementActive.classList.toggle("active");
              tabElementActive.setAttribute("data-isactive", false);
              newTabs[i].classList.remove("active");
              newTabs[i].setAttribute("data-isactive", false);
            }
          }
        }
      }
    });
  });
};

const createElementsModal = () => {
  const divFullSizeScreen = document.createElement("div");
  divFullSizeScreen.classList.add("fullSizeScreen");

  const divContainerModal = document.createElement("div");
  divContainerModal.classList.add("containerModal");

  const divLeft = document.createElement("div");
  divLeft.classList.add("left");

  const imgElement = document.createElement("img");
  imgElement.setAttribute("src", "./assets/newsletter.png");
  imgElement.setAttribute("alt", "Subscribe icon");
  divLeft.appendChild(imgElement);

  const divRight = document.createElement("div");
  divRight.classList.add("right");

  const closeModalBtn = document.createElement("a");
  closeModalBtn.setAttribute("id", "closeModalBtn");
  closeModalBtn.setAttribute("href", "#");
  const textCloseModalBtn = document.createTextNode("X");
  closeModalBtn.appendChild(textCloseModalBtn);

  const label = document.createElement("label");
  label.setAttribute("for", "emailNewsletter");

  const h2 = document.createElement("h2");
  const textH2 = document.createTextNode("Subscribe!");
  h2.appendChild(textH2);

  const p = document.createElement("p");
  const textP = document.createTextNode(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quod illum earum in, praesentium cumque laudantium dicta."
  );
  p.appendChild(textP);

  label.appendChild(h2);
  label.appendChild(p);

  const inputEmail = document.createElement("input");
  inputEmail.setAttribute("type", "email");
  inputEmail.setAttribute("id", "emailNewsletter");
  inputEmail.setAttribute("name", "emailNewsletter");
  inputEmail.setAttribute("placeholder", "Enter email address");

  const sendEmailBtn = document.createElement("a");
  sendEmailBtn.setAttribute("href", "#");
  sendEmailBtn.setAttribute("id", "sendEmailBtn");

  const textSendEmailBtn = document.createTextNode("Send");
  sendEmailBtn.appendChild(textSendEmailBtn);

  divRight.appendChild(closeModalBtn);
  divRight.appendChild(label);
  divRight.appendChild(inputEmail);
  divRight.appendChild(sendEmailBtn);

  divContainerModal.appendChild(divLeft);
  divContainerModal.appendChild(divRight);
  divFullSizeScreen.appendChild(divContainerModal);

  const home = document.getElementById("home");
  home.appendChild(divFullSizeScreen);
};

const closeModal = () => {
  const divFullSizeScreen = document.querySelector(".fullSizeScreen");
  divFullSizeScreen.remove();
};

const modal = () => {
  const activeButton = document.getElementById("subscribeModal");
  activeButton.addEventListener("click", (e) => {
    createElementsModal();
    const closeModalBtn = document.getElementById("closeModalBtn");
    closeModalBtn.onclick = () => {
      closeModal();
    };
    const divFullSize = document.querySelector(".fullSizeScreen");
    divFullSize.addEventListener("click", (e) => {
      if (e.target.classList.contains("fullSizeScreen")) {
        return closeModal();
      }
    });
  });
};

const dropdown = () => {
  const dropdownBtn = document.getElementById("dropbtn");
  const dropdownMenu = document.getElementById("dropdown");
  dropdownBtn.addEventListener("click", (e) => {
    e.preventDefault();
    dropdownMenu.classList.toggle("show");
  });

  dropdownMenu.addEventListener("click", (e) => {
    if (
      e.target.getAttribute("id") == "es" ||
      e.target.getAttribute("id") == "en"
    ) {
      dropdownMenu.classList.remove("show");
    }
  });
};

const changeNavColor = () => {
  const nav = document.querySelector("header");
  if (window.scrollY > 200) {
    nav.classList.add("changeColorNav");
  } else {
    nav.classList.remove("changeColorNav");
  }
};

const smoothScroll = () => {
  const links = document.querySelectorAll(".nav-item-link");
  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const href = this.getAttribute("href");
      const offsetTop = document.querySelector(href).offsetTop;

      scroll({
        top: offsetTop,
        behavior: "smooth",
      });
    });
  });
};

const showMenuMovil = () => {
  const openMenu = document.getElementById('openMenuMovil');
  const closeMenu = document.getElementById('closeMenuMovil');
  const menuMovil = document.getElementById('navMenuMovil');

  openMenu.onclick = () => {
    menuMovil.classList.add('show');
  }

  closeMenu.onclick = () => {
    menuMovil.classList.remove('show');
  }
}

window.addEventListener("DOMContentLoaded", (e) => {
  dropdown();
  accordeonMenu();
  modal();
  smoothScroll();
  showMenuMovil();

  window.addEventListener("scroll", changeNavColor);
});
