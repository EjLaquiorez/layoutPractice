export function initTabs() {
  const tabContainers = document.querySelectorAll("[data-tabs]");

  tabContainers.forEach((container) => {
    const buttons = container.querySelectorAll("[data-tab-button]");
    const panels = container.querySelectorAll("[data-tab-panel]");

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const targetId = button.dataset.tabButton;

        buttons.forEach((btn) => btn.classList.remove("is-active"));
        panels.forEach((panel) => panel.classList.remove("is-active"));

        button.classList.add("is-active");
        const targetPanel = container.querySelector(
          `[data-tab-panel="${targetId}"]`
        );
        if (targetPanel) {
          targetPanel.classList.add("is-active");
        }
      });
    });
  });
}
