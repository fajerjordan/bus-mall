'strict'



var AllItemsImages = []
var FirstImage = document.getElementById('First');
var FirstImage = document.getElementById('Second');
var FirstImage = document.getElementById('Third');
var ItemImageDiv = document.getElementById('ItemImageDiv');

var DefultRoundsNuber = 25; 
var TotalClicks = 0;

var FirstImageIndex ;
var SecondImageIndex ;
var ThirdImageIndex ;

function ItemImages(name,sourse){
    this.name = name;
    this.sourse = sourse;
    this.ImagesClick = 0;
    this.ImagesShown - 0;

    AllItemsImages.push(this);
}

RoundsNumberForm.addEventListener('submit',AddRoundNum);

function AddRoundNum(event)
{
    event.preventDefault();

    defaultRoundNumber = parseInt(event.target.RoundNum.value) -1;
    return DefultRoundsNuber;

}

new ItemImages('bag','img/bag.jpg');
new ItemImages('banana', 'img/banana.jpg');
new ItemImages('bathroom', 'img/bathroom.jpg');
new ItemImages('boots', 'img/boots.jpg');
new ItemImages('breakfast', 'img/breakfast.jpg');
new ItemImages('bubblegum', 'img/bubblegum.jpg');
new ItemImages('chair', 'img/chair.jpg');
new ItemImages('cthulhu', 'img/cthulhu.jpg');
new ItemImages('dog-duck', 'img/dog-duck.jpg');
new ItemImages('dragon', 'img/dragon.jpg');
new ItemImages('pen', 'img/pen.jpg');
new ItemImages('pet-sweep', 'imgs/pet-sweep.jpg');
new ItemImages('scissors', 'img/scissors.jpg');
new ItemImages('shark', 'img/shark.jpg');
new ItemImages('sweep', 'img/sweep.png');
new ItemImages('tauntaun', 'img/tauntaun.jpg');
new ItemImages('unicorn', 'img/unicorn.jpg');
new ItemImages('usb', 'img/usb.gif');
new ItemImages('water-can', 'img/water-can.jpg');
new ItemImages('wine-glass', 'simg/wine-glass.jpg');


HTMLFormControlsCollection.log(AllItemsImages);

renderTreeRandomImages();

FirstImage.addEventListener('click',handleuserclick);
Secondmage.addEventListener('click',handleuserclick);
ThirdImage.addEventListener('click',handleuserclick);

function generateRandomIndex(){
    return Math.floor(Math.random()*(AllItemsImages.length));
}

function renderTreeRandomImages()
{
    FirstImageIndex = generateRandomIndex();

    do{
        SecondImageIndex = generateRandomIndex();
        ThirdImageIndex = generateRandomIndex();
    }

    while (FirstImageIndex === SecondImageIndex || FirstImageIndex  === ThirdImageIndex || SecondImageIndex === ThirdImageIndex)
    {
        AllItemsImages[FirstImageIndex].ImagesShown++;
        FirstImageIndex.src = AllItemsImages[FirstImageIndex].sourse;
        AllItemsImages[SecondImageIndex].ImagesShow++;
        SecondImageIndex.src = AllItemsImages[SecondImageIndex].sourse;
        AllItemsImages[ThirdImageIndex].ImagesShown++;
        ThirdImageIndex.src = AllItemsImages[ThirdImageIndex].sourse;
    } 
}




function handleUserClick(event)
{
    

    if(TotalClicks <= DefaultRoundsNumber)
    {
        if(event.target.id === 'First'){
            AllItemsImages[FirstImageIndex].ImagesClicks++;
            TotalClicks++;
          }
        else if(event.target.id === 'Second'){
            AllItemsImages[FirstImageIndex].ImagesClicks++;
            TotalClicks++;
        }
        else if(event.target.id === 'Third'){
                AllItemsImages[FirstImageIndex].ImagesClicks++;
                TotalClicks++;
        }

        renderThreeRandomImages();

    }

    else
    {
        ItemsImagesDiv.removeEventListener('click' ,handleUserClick );
        ResultButton.disabled = false;
        
    }


}

  var ResultButton = document.getElementById('SubmitResult');
  ResultButton.addEventListener('click', GoalResult);

function GoalResult()
{
    var ResultItemsList = document.getElementById('ResultItemsList');
    var goalResult;
    for (var i = 0; i < AllItemsImages.length; i++) {
        
        goalResult = document.createElement('li');
        goalResult.textContent =  AllItemsImages[i].name + ' had '+  AllItemsImages[i].ImagesClicks + ' votes, and was seen ' + AllItemsImages[i].ImagesShown ;
        ResultItemsList.appendChild(goalResult);
    }


    FirstImage.removeEventListener('click',handleUserClick);
    SecondImage.removeEventListener('click',handleUserClick);
    ThirdImage.removeEventListener('click',handleUserClick);

    ResultButton.disabled = true;
}

