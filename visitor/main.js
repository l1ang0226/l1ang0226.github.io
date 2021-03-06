const firebaseConfig = {
    apiKey: "AIzaSyA_1vA9VnvkatB8exIo3hWLCc54DcI8hoE",
    authDomain: "finalwebproject-76874.firebaseapp.com",
    projectId: "finalwebproject-76874",
    storageBucket: "finalwebproject-76874.appspot.com",
    messagingSenderId: "1005780715046",
    appId: "1:1005780715046:web:51ab0e2676a09d2a0408e7",
    measurementId: "G-XD0QTV3X1B"
  };
  
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const equipment = db.collection('equipment');
const weapon = db.collection('weapon');

let currentTab = "";

let content = $("#content");

function goBack(){
    document.location.href="../login/index.html";
}

async function getEquipment(){
    const equipmentDocs = await equipment.get();
    equipmentDocs.forEach((equipmentDoc) =>{
        const { name , price, picture } =equipmentDoc.data();
        const one_thing = `
        <div id="${equipmentDoc.id}" class = "thing_table">
            <p class="sentence">name: ${name}</p>
            <p class="sentence">price: ${price} </p>
            <button type = "button" id=${name}>purchase</button>
        </div>
        `;
        content.append(one_thing);
    });
}

async function getWeapon(){
    const weaponDocs = await weapon.get();
    weaponDocs.forEach((weaponDoc) =>{
        const { name , price, picture } = weaponDoc.data();
        const one_thing = `
            <div id="${weaponDoc.id}" class = "thing_table">
                <p class="sentence">name: ${name}</p>
                <p class="sentence">price: ${price} </p>
                <button type = "button" id=${name}>purchase</button>
            </div>
        `;
        content.append(one_thing);
    });

    console.log(content);
}
document.getElementById('equipment').onclick = function () {
    currentTab = 'equipment';
    $("#content").html("");
    getEquipment();
};
document.getElementById('weapon').onclick = function () {
    currentTab = 'weapon';
    $("#content").html("");
    getWeapon();
};

content.on('click', (event) => {
    const targetElement = event.target;
    if(targetElement.tagName.toLowerCase() === 'button') {
        const docID = targetElement.parentElement.id;
        if(currentTab === 'equipment'){
            equipment.doc(docID).delete();
            $("#content").html("");
            getEquipment();
        }
        if(currentTab === 'weapon'){
            weapon.doc(docID).delete();
            $("#content").html("");
            getWeapon();
        }
        // ??? id ??????????????????????????????????????? 56 ??? 57 ?????? 61 ??? 62 ????????????(?????? currentTab ??????????????????)
    }
});


