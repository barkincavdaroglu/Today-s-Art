
$.getJSON("https://art-chronica.glitch.me/objectIds", function(data){
  let objectIds = data.objectIds
  let todaysArtIndex = objectIds[0]
  let todaysArtIds = objectIds[todaysArtIndex]
  
  $.getJSON("https://collectionapi.metmuseum.org/public/collection/v1/objects/" + todaysArtIds, function(data) {
    let title = data.title
    let primaryImage = data.primaryImage
    let artistDisplayName = data.artistDisplayName
    let artistDisplayBio = data.artistDisplayBio
    
    $('.artwork_image').attr('src', primaryImage);
    $('.artwork_title').append(title);
    $('.artwork_artist').append(artistDisplayName);
    $('.artwork_background').attr('src', primaryImage);
    $('.artistBio').append(artistDisplayBio);
    console.log(data)
  })
})


