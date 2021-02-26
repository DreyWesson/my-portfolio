export default function aboutTabs() {
  const about = document.querySelector("#about"),
    tabs = document.querySelector(".about-tabs");
  tabs.addEventListener("click", (e) => {
    // if e.target contains tab-item class but not active
    if (
      e.target.classList.contains("tab-item") &&
      !e.target.classList.contains("active")
    ) {
      const target = e.target.getAttribute("data-target");
      // deactivate existing active 'tab-item'
      tabs.querySelector(".active").classList.remove("outer-shadow", "active");
      // activate new 'tab-item
      e.target.classList.add("active", "outer-shadow");
      // deactivate pre-existing active tab-content
      about.querySelector(".tab-content.active").classList.remove("active");
      // activate new tab-content
      about.querySelector(target).classList.add("active");
    }
  });
}
