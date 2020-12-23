export function start_clock(hr_s, min_s, sec_s, analog_s) {
  setInterval(() => {
    const deg = 6;
    const hr = document.querySelectorAll(hr_s);
    const min = document.querySelectorAll(min_s);
    const sec = document.querySelectorAll(sec_s);

    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    for (let i = 0; i < hr.length; i++) {
      hr[i].style.transform = `rotate(${hh + mm / 12}deg)`;
      min[i].style.transform = `rotate(${mm}deg)`;
      sec[i].style.transform = `rotate(${ss}deg)`;
    }

    if (analog_s) {
      const analog = document.getElementsByClassName(analog_s);
      let ana_hr = day.getHours();
      let ana_min = day.getMinutes();
      let ana_sec = day.getSeconds();

      if (ana_hr < 10) {
        ana_hr = "0" + ana_hr;
      }
      if (ana_min < 10) {
        ana_min = "0" + ana_min;
      }
      if (ana_sec < 10) {
        ana_sec = "0" + ana_sec;
      }

      for (let i = 0; i < analog.length; i++) {
        analog[i].children[0].innerHTML = ana_hr;
        analog[i].children[1].innerHTML = " : " + ana_min;
        analog[i].children[2].innerHTML = " : " + ana_sec;
      }
    }
  }, 500);
}
