$(document).ready(function(){

    console.log('Ready')

    //  Fetch the current date and update it in the DOM

    $('selector').action()

    //  write an event, when Submit button is clicked
    $('').click(function(){

        //  get the text value from the textarea using the 'val()' method
        let text_value = $('').val()

        //  Convert it to JS object.
        //  Provide a 'key' here and in write the same in app.py file as well to extract data
        let input_text = {'' : text_value}
        console.log(input_text)

        //  ajax request
        $.ajax({

            //  type of web request
            type: 'POST',
            
            //url: "/negative.png",
            //url: "/neutral.png",
            //url: "/positive.png",

            //  Data to be sent in JSON format
            data: JSON.stringify(save_data),

            //  type of response expected is json
            dataType : 'json',

            //  contentType
            contentType : 'application/json',

            //  if everything is successful, run this function
            success : function(result){

                alert("Your entry has been saved successfully")
                window.location.reload()

                // extract prediction and emoticon url from result
                //  update the DOM elements
                //  show them

            },

            //  if any error, run this function
            error : function(result){
                alert(result.responseJSON.message)
                console.log(result)
            }
        })


        //  clearing the textbox after every button push
        $('#text').val("")
    })
        
})