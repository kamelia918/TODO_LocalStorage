// des variables globales pour stocker les taches 

var arr = new Array;
var arrv = new Array;
var i = 0;
var bigarr = new Array;
var l;
// fonction qui affiche les taches 
function t(smth){
    var tache = document.createElement('div');
    tache.innerHTML = smth + '<i class="fa-solid fa-check , remove"></i>';
    tache.classList.add('todo');
    var trash = document.querySelector("#trash");
    document.getElementsByClassName('container')[0].insertBefore(tache, trash);
    tache.addEventListener('click', function () {
    var ele = this.querySelector('.fa-solid.fa-check');
    ele.classList.toggle('remove');
    if (!ele.classList.contains('remove')) {
        arr[i] = tache; i++;
        console.log(arr[0]);
        tache.style.textDecoration = 'line-through';
        ele.style.textDecoration = 'none';
        console.log('element ' + ele);
    } else {
        tache.style.textDecoration='none';
        }
    });
};

// ajouter une tache quand on click sur le boutton +
document.querySelector('#add').addEventListener('click', function () {
    var input = document.getElementById('newtd');
    if (input.value != '') {
        for (k of bigarr) {
            if (k == input.value) {
                input.value = '';
                input.textContent = "add your new todo";
                window.alert('La tache existe déjà');
                return;
            }
        }
        bigarr[l] = input.value; l++;
        t(input.value);
        input.value = '';
        input.textContent = "add your new todo";
    }

});


// function to remove the finished 
document.querySelector('#trash').addEventListener('click', function () {
    for (let j = 0; j < arr.length; j++) {
        arrv[j] = arr[j].textContent.trim();
        arr[j].remove();
    }
    const filteredArray = bigarr.filter(item => !arrv.includes(item));
    localStorage.removeItem('itemTableData');
    bigarr = [];
    bigarr = bigarr.concat(filteredArray);

// Convert table data to JSON string
    const jsonData = JSON.stringify(filteredArray);
// Store the JSON string in local storage
    localStorage.setItem('itemTableData', jsonData);
});



//LOCAL STORAGE

add.onclick = () => { 
// Convert table data to JSON string
    const jsonData = JSON.stringify(bigarr);
// Store the JSON string in local storage
    localStorage.setItem('itemTableData', jsonData);
}



function f() {
    // Retrieve the JSON string from local storage
    const storedData = localStorage.getItem('itemTableData');
// Convert the JSON string back to an object or array
    const retrievedData = JSON.parse(storedData);
    console.log("les donner  " + retrievedData);
    l = 0;
    for (let i = 0; i < retrievedData.length; i++) {
        if (retrievedData[i] != null) {
            bigarr[l] = retrievedData[i]; l++;
            t(retrievedData[i]);
        }
    }
}
