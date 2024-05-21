$(document).foundation()

$('.sim-thumb').on('click', function() {
    let thmbSource = $(this).data('image');
    let mainSource = $('#main-product-image').find('img').attr('src');

    let thmbCap = $(this).data('caption');
    let mainCap = $('#main-product-image').find('figcaption').html();

    // Function to format caption
    function formatCaption(caption) {
        // Extract date from caption
        let match = caption.match(/Created (\w+ \d{4})/);
        if (match) {
            let date = match[1];
            return `Created in <span class="date">${date}</span>`;
        }
        return caption;
    }

    let formattedThmbCap = formatCaption(thmbCap);
    let formattedMainCap = formatCaption(mainCap);

    $('#main-product-image').find('figure').find('img').attr('src', thmbSource);
    $(this).find('img').attr('src', mainSource);
    $(this).data('image', mainSource);

    $('#main-product-image').find('figcaption').html(formattedThmbCap);
    $(this).data('caption', formattedMainCap);
  })