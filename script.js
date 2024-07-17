// Fetch data from API call
function fetchWantedList() {
  axios
    .get("https://api.fbi.gov/wanted/v1/list")
    .then((response) => {
      // Store retrieved data into variable
      const wantedList = response.data.items;
      console.log(wantedList);
      // Call HTML container and clear existing data
      const wantedContainer = document.getElementById("wantedContainer");
      wantedContainer.innerHTML = "";

      // Parse through items using forEach()
      wantedList.forEach((wantedPerson) => {
        // Create elements to display data in html
        const wpCard = document.createElement("div");

        const wpImage = document.createElement("img");
        wpImage.src = wantedPerson.images[0].thumb;

        const wpBody = document.createElement("div");

        const wpName = document.createElement("h5");
        wpName.textContent = `${wantedPerson.title}`;

        const wpDOB = document.createElement("p");
        wpDOB.textContent = `DOB: ${wantedPerson.dates_of_birth_used}`;

        const wpSex = document.createElement("p");
        wpSex.textContent = `Sex: ${wantedPerson.sex}`;

        const wpNationality = document.createElement("p");
        wpNationality.textContent = `Nationality: ${wantedPerson.nationality}`;

        const wpInfo = document.createElement("a");
        wpInfo.href = `${wantedPerson.url}`;
        wpInfo.textContent = `Click for more info`;

        // Append elements to DOM
        wpBody.appendChild(wpName);
        wpBody.appendChild(wpDOB);
        wpBody.appendChild(wpSex);
        wpBody.appendChild(wpNationality);
        wpBody.appendChild(wpInfo);
        wpCard.appendChild(wpImage);
        wpCard.appendChild(wpBody);

        wantedContainer.appendChild(wpCard);
      });
    })
    // Error handling
    .catch((error) => {
      console.error("Error fetching wanted list:", error);
    });
}
