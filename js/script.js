

const form = document.getElementsByTagName('form')[0];
let searchId = $('#search');
let containerClass = $('.grid-container');
let divHtml = "";

for (let image of images) {
  divHtml =  '<div class="photo">';
  divHtml += '<a href="images/'+
              image.fileName +
              '" data-lightbox="gallary" data-title="' +
              image.imgCaption +
              '">';
  divHtml += '<img src="images/thumbnails/' +
              image.fileName +
              '" alt="' +
              image.altText +
              '">';
  divHtml += '</a> </div>';
  containerClass.append(divHtml);
}

/******************************************************************************
                            Add Event Listener functions
 ******************************************************************************/
 /* function defined when the form is submitted
    to prevent page reload
*/
form.addEventListener('submit',(event)=>{
  event.preventDefault();
})

/******************************************************************************
  function defined when the the search input field has changed value
  to loop through all images, searching for the specified string
  in the alt text or caption text

  search value, alt text, and image caption are converted to lower case to make search feature case insensitive

  if found image class (hidden) is removed for parent div, and the data lightbox value is set as search string ,
  else class (hidden) is added, and the data lightbox value is set as gallary.

  so we have two gallary:
    the original one (gallary) with all hidden images
    and one for images found in search which will be displayed when these images are clicked.

  in case the search string is empty all images are shown, and all their data lightbox value is set as gallary once again
*******************************************************************************/
searchId.on('keyup',function(){
  let searchValue = searchId.val().toLowerCase();

    for (let image of images) {
      let altText= image.altText;
      let imgCaption = image.imgCaption;
      let imgDiv = $('[alt="'+altText+'"]').parent().parent();
      let imgA = $('[alt="'+altText+'"]').parent();

      altText =altText.toLowerCase();
      imgCaption= imgCaption.toLowerCase();

      if (searchValue.length != 0) {

        let altValueFound = altText.search(searchValue);
        let capValueFound = imgCaption.search(searchValue);

        if ((altValueFound != -1) ||
            (capValueFound != -1)) {
          imgDiv.removeClass('hidden');
          imgA.attr('data-lightbox',searchValue);
        } else {
          imgDiv.addClass('hidden');
          imgA.attr('data-lightbox','gallary');
        }

      } else {
        imgDiv.removeClass('hidden');
        imgA.attr('data-lightbox','gallary');
      }

    }

})



images = [
    {
      fileName: "images/01.jpg",
      altText: "Hay Bales",
      imgCaption:"I love hay bales. Took this snap on a drive through the countryside past some straw fields."
    },
    {
      fileName: "images/02.jpg",
      altText: "Lake",
      imgCaption: "The lake was so calm today. We had a great view of the snow on the mountains from here."
    },
    {
      fileName: "images/03.jpg",
      altText: "Canyon",
      imgCaption: "I hiked to the top of the mountain and got this picture of the canyon and trees below."
    },
    {
      fileName: "images/04.jpg",
      altText: "Iceberg",
      imgCaption: "It was amazing to see an iceberg up close, it was so cold but didn’t snow today."
    },
    {
      fileName: "images/05.jpg",
      altText: "Desert",
      imgCaption: "The red cliffs were beautiful. It was really hot in the desert but we did a lot of walking through the canyons."
    },
    {
      fileName: "images/06.jpg",
      altText: "Fall",
      imgCaption: "Fall is coming, I love when the leaves on the trees start to change color."
    },
    {
      fileName: "images/07.jpg",
      altText: "Plantation",
      imgCaption: "I drove past this plantation yesterday, everything is so green!"
    },
    {
      fileName: "images/08.jpg",
      altText: "Dunes",
      imgCaption: "My summer vacation to the Oregon Coast. I love the sandy dunes!"
    },
    {
      fileName: "images/09.jpg",
      altText: "Countryside Lane",
      imgCaption: "We enjoyed a quiet stroll down this countryside lane."
    },
    {
      fileName: "images/10.jpg",
      altText: "Sunset",
      imgCaption: "Sunset at the coast! The sky turned a lovely shade of orange."
    },
    {
      fileName: "images/11.jpg",
      altText: "Cave",
      imgCaption: "I did a tour of a cave today and the view of the landscape below was breathtaking."
    },
    {
      fileName: "images/12.jpg",
      altText: "Bluebells",
      imgCaption: "I walked through this meadow of bluebells and got a good view of the snow on the mountain before the fog came in."
    }
  ]