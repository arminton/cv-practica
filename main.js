async function fillData() {
  const randomUser = await fetch(
    "https://randomuser.me/api/?gender=male&inc=name,location,email,phone,cell,picture&nat=au,us,gb"
  );

  const randomData = await randomUser.json();

  fillHeader(randomData);
  fillContactInfo(randomData);
}

function fillHeader(obj) {
  const strong = document.querySelector("#dev-name");
  const img = document.querySelector("#dev-img");

  img.setAttribute("src", `${obj.results[0].picture.large}`);
  strong.textContent = `${obj.results[0].name.first} ${obj.results[0].name.last}`;
}

function fillContactInfo(obj) {
  const span = document.querySelectorAll(".info");

  const cell = obj.results[0].cell;
  const phone = obj.results[0].phone;
  const email = obj.results[0].email;
  const street = `${obj.results[0].location.street.number}, ${obj.results[0].location.street.name}`;
  const contactData = [cell, phone, email, street];

  for (let i = 0; i < contactData.length; i++) {
    const dataItem = document.createTextNode(contactData[i]);
    span[i].appendChild(dataItem);
  }
}

fillData();
