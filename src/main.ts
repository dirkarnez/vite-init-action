// import './style.css'

((appContainer: HTMLDivElement | null) => {
  if (!appContainer) {
    return;
  }

  appContainer.appendChild(timetableContainer);
})(document.querySelector<HTMLDivElement>('#app')!)
