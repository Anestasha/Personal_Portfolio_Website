$(document).foundation()

$('.sim-thumb').on('click', function() {
    //'Special Interests' page, theatre poster captions
    function formatPosterCaption(caption){
        let dateMatch = caption.match(/Created (\w+ \d{4})/);
        if(dateMatch){
            let date = dateMatch[1];
            return `Created <span class="date">${date}</span>`;
        }
        return caption;
    }

    //'Featured Projects' page, math pumpkin caption
    function formatPumpkinCaption(caption){
        let detailMatch = caption.split(" (");
        console.log(detailMatch[1]);
        if(detailMatch[1]){
            let main = detailMatch[0];
            let details = detailMatch[1];
            console.log("main: " + main);
            console.log("details: " + details);
            return `${main} <br><span class="description">${details}</span>`;
        }
        return caption;
    }
    
    //Get the image source for the main and thumbnail images
    let thumbSource = $(this).data('image');
    let mainSource = $('#main-product-image').find('img').attr('src');

    //Get the image alt tags for the main and thumbnail images
    let thumbAlt = $(this).find('img').attr('alt');
    let mainAlt = $('#main-product-image').find('img').attr('alt');
    console.log("thumb alt = " + thumbAlt);
    console.log("main alt = " + mainAlt);

    //Get the captions for the main and thumbnail images
    let thumbCap = $(this).data('caption');
    let mainCap = $('#main-product-image').find('figcaption').html();

    let formattedThumbCap;
    let formattedMainCap;

    //Format captions if necessary
    if($(this).data('type') == 'pumpkin'){
        formattedThumbCap = formatPumpkinCaption(thumbCap);
        formattedMainCap = formatPumpkinCaption(mainCap);
    }

    else if($(this).data('type') == 'poster'){
        console.log($(this).data('type'));

        formattedThumbCap = formatPosterCaption(thumbCap);
        formattedMainCap = formatPosterCaption(mainCap);
    }

    else{
        formattedThumbCap = thumbCap;
        formattedMainCap = mainCap; 
    }

    //Update the main figure to contain the image source, caption and alt tags
    $('#main-product-image').find('figure').find('img').attr('src', thumbSource);
    $('#main-product-image').find('figure').find('img').attr('alt', thumbAlt);
    $('#main-product-image').find('figcaption').html(formattedThumbCap);


    //Update the thumbnail li to contain the new image source, caption and alt tags
    $(this).find('img').attr('src', mainSource);
    $(this).find('img').attr('alt', mainAlt);
    $(this).data('image', mainSource);
    $(this).data('caption', formattedMainCap);
})