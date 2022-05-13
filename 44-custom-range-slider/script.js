const range = document.querySelector("#range");
const label = document.querySelector("label");

range.addEventListener("input", (e) => {
  const value = +range.value;

  const rangeWidth = +getComputedStyle(e.target)
    .getPropertyValue("width")
    .slice(0, -2);
  const labelWidth = +getComputedStyle(e.target.nextElementSibling)
    .getPropertyValue("width")
    .slice(0, -2);

  const min = +e.target.min;
  const max = +e.target.max;

  const left =
    value * (rangeWidth / max) -
    labelWidth / 2 +
    scale(value, min, max, 10, -10);

  label.style.left = left + "px";

  label.innerText = value;
});

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
