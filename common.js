var opened = false;

function createRipple(event) {
  const button = event.currentTarget;

  const circle = document.createElement("span");
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
  circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
  circle.classList.add("ripple");

  const ripple = button.getElementsByClassName("ripple")[0];

  if (ripple) {
    ripple.remove();
  }

  button.appendChild(circle);
}

const buttons = document.getElementsByTagName("button");
for (const button of buttons) {
  button.addEventListener("click", createRipple);
}

document.getElementById("menu").addEventListener("click",()=>{
	if(!opened){
	document.getElementsByClassName("links-mob")[0].style.display = "flex";
	opened = true;
	document.getElementById("menu").innerHTML = `<span class="material-symbols-outlined">
close
</span>`;
	}else{
		opened = false;
	    document.getElementsByClassName("links-mob")[0].style.display = "none";
        document.getElementById("menu").innerHTML = `<span class="material-symbols-outlined">
menu
</span>`;
	}
})