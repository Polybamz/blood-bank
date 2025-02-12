// const hospitals = [
//     { name: "City Hospital", location: "Downtown", blood_type: "A+" },
//     { name: "General Clinic", location: "Uptown", blood_type: "B+" },
//     { name: "Health Center", location: "Suburb", blood_type: "O+" },
//     { name: "City Hospital", location: "Downtown", blood_type: "AB+" },
//     { name: "General Clinic", location: "Uptown", blood_type: "B-" },
//     { name: "Health Center", location: "Suburb", blood_type: "A-" },
//     { name: "General Clinic", location: "Uptown", blood_type: "AB-" },
//     { name: "Health Center", location: "Suburb", blood_type: "O-" }
// ];

// const bt =["A+", "B+", "AB+", "O+", "A-", "B-", "AB-", "O-"]

// const home = (data) => {
//     console.log(data);

//     data.forEach(hospital => {
//         const bloodTypeDive = document.querySelector(".blood-types-container");
//         console.log('Creating div for hospital');
//         let div = document.createElement("div");
//         div.className = "blood-type";
//         div.style.cursor = "pointer";
//         div.id = hospital;
//         div.value = hospital;
//         div.onclick = cardtap;
//         bloodTypeDive.appendChild(div);
//         div.textContent = ` ${hospital}`;
//     });
// };

// cardtap = () => {
//     const card = document.querySelectorAll('.blood-type');
//     card.forEach(c => {
//         c.classList.remove('active');
//         console.log('Removing active class from all cards', c.value);
//         if (c.value === this.id) {
//             c.classList.add('active');
//             console.log('Adding active class to selected card', c.value);
//         }
//     });
 
    
// }

// home(bt);


const bt = ["A+", "B+", "AB+", "O+", "A-", "B-", "AB-", "O-"];
const selectedValue = "";

const home = (data) => {
    console.log(data);

    const bloodTypeDive = document.querySelector(".blood-types-container");

    data.forEach((item) => {
        console.log('Creating div for blood type:', item);
        let div = document.createElement("div");
        div.className = "blood-type";
        div.textContent = item;
        div.value = item;
        div.style.cursor = "pointer";
       
        // Add a click event listener to each card
        div.addEventListener("click", () => cardtap(item));

        bloodTypeDive.appendChild(div);
        
    });
};

const cardtap = (selectedItem) => {
    const cards = document.querySelectorAll('.blood-type');
    cards.forEach((card) => {
        // Remove the 'active' class from all cards
        card.classList.remove('active');
        

        if (card.value === selectedItem) {

            card.classList.add('active');
            console.log('Selected card:', selectedItem);
            
                card.style.backgroundColor = "red";
                card.style.color = "white";
            
                
           
        } 
    });
};

// Call the home function to display blood type cards
home(bt);