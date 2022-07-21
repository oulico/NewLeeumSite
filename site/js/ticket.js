window.addEventListener("DOMContentLoaded", () => {
  const tickets = document.querySelectorAll(".ticket");
  const textSelect = document.querySelectorAll(".selectBtn span");
  const infoTicket = document.querySelector(".infoTicket > span");

  console.log(`tickets`, tickets);

  let num = 0;
  let isBlack = [false, false];

  tickets.forEach((ele, idx) => {
    tickets[idx].addEventListener("click", () => {
      if (!isBlack[idx]) {
        tickets[idx].classList.add("on");
        textSelect[idx].innerText = "취소";
        num++;
        isBlack[idx] = true;
      } else {
        tickets[idx].classList.remove("on");
        textSelect[idx].innerText = "선택";
        num--;
        isBlack[idx] = false;
      }
      if (num !== 0) {
        infoTicket.innerText = `${num}개의 전시를 선택했습니다.`;
      } else {
        infoTicket.innerText = "관람을 원하는 전시를 선택해주세요";
      }
    });
  });
});
