/**
 * @name:   script.js
 * @desc:   this script will display the image, booking fee and total cost of the trip of the chosen country
 *          This will be done using arrays, objects, and arrays of objects.
 */


(function () {

    var

        none = document.getElementById("none"),
        spain = document.getElementById("spain"),
        france = document.getElementById("france"),
        italy = document.getElementById("italy"),
        img = document.getElementById("img"),
        bkg = document.getElementById("bkg"),
        noLug = document.getElementById("noLug"),
        ten = document.getElementById("ten"),
        twenty = document.getElementById("twenty"),
        thirty = document.getElementById("thirty"),
        luggageFee = document.getElementById("luggageFee"),
        path = "rb-images/",
        imgArray = ["spain_400x400.jpg", "france_400x400.jpg", "italy_400x400.jpg", "holiday_400x400.jpg"],
        sum = 0,
        bkgFee = {spainFee: 30, franceFee: 35, italyFee: 40},
        lugFee = {noLug: 0, ten: 10, twenty: 20, thirty: 30},
        subTotal = document.getElementById("subTotal"),
        total = document.getElementById("total"),
        flight = document.getElementById("flight"),

        countryArray = [
            {id: spain, img: path + imgArray[0], cost: parseInt(spain.value) + bkgFee.spainFee},
            {id: france, img: path + imgArray[1], cost: parseInt(france.value) + bkgFee.franceFee},
            {id: italy, img: path + imgArray[2], cost: parseInt(italy.value) + bkgFee.italyFee},
            {id: none, img: path + imgArray[3], cost: 0}
        ],


        clearChoice = function () {
            ten.disabled = true;
            twenty.disabled = true;
            thirty.disabled = true;
            subTotal.innerHTML = "";
            subTotal.style.background = "none";
            luggageFee.innerHTML = "";
            total.innerHTML = "";
            noLug.checked = true;
            flight.innerHTML = "";
            total.style.backgroundColor = "";

        },//clearChoice

        enableLugBtns = function(){
            ten.disabled = false;
            twenty.disabled = false;
            thirty.disabled = false;
        },//enableLugBtns


        displayMsg  =   function(){
            flight.style.color = "#f2d207";
            flight.innerHTML = "Your flight details: ";
            subTotal.innerHTML = "flight inc. bkg fee: £" + sum;
            subTotal.style.padding = "10px";
            subTotal.style.borderRadius = "5px";
            subTotal.style.backgroundColor = "white";
            subTotal.style.color = "#f2d207";
            luggageFee.style.color = "rgb(242, 210, 7)";
            luggageFee.innerHTML = "have you selected your luggage option?";
        },//displayMsg


        displayLugMsg   =   function (){
            total.innerHTML = "";
            total.style.padding = "10px";
            total.style.borderRadius = "5px";
            total.style.backgroundColor = "white";
            total.style.color = "#f2d207";
            subTotal.style.padding = "";
            subTotal.style.borderRadius = "";
            subTotal.style.backgroundColor = "";
            subTotal.style.color = "white";
            luggageFee.style.color = "white";
        },//displayLugMsg

   

        pickFlight = function () {

            clearChoice();

            none.addEventListener("click", function () {
                img.src = countryArray[3].img;
                bkg.innerHTML = "Select a Destination";
                bkg.style.color = "#f2d207";
                clearChoice();

            });

            spain.addEventListener("click", function () {
                clearChoice();
                enableLugBtns();
                img.src = countryArray[0].img;
                bkg.innerHTML = "Booking Fee: £" + bkgFee.spainFee;
                sum = countryArray[0].cost;
                displayMsg();
                pickLuggage();
            });

            france.addEventListener("click", function () {
                clearChoice();
                enableLugBtns();
                img.src = countryArray[1].img;
                bkg.innerHTML = "Booking Fee: £" + bkgFee.franceFee;
                sum = countryArray[1].cost;
                displayMsg();
                pickLuggage();
            });

            italy.addEventListener("click", function () {
                clearChoice();
                enableLugBtns();
                img.src = countryArray[2].img;
                bkg.innerHTML = "Booking Fee: £" + bkgFee.italyFee;
                sum = countryArray[2].cost;
                displayMsg();
                pickLuggage();
            });


        },//pickFlight


    pickLuggage = function () {

        total.innerHTML = "";

        noLug.addEventListener("click", function () {
            luggageFee.innerHTML = "luggage fee: £" + lugFee.noLug;
            total.innerHTML = "total cost of flight: £" + (sum + lugFee.noLug);
        });

        ten.addEventListener("click", function () {
            displayLugMsg();
            luggageFee.innerHTML = "luggage fee: £" + lugFee.ten;
            total.innerHTML = "total cost of flight: £" + (sum + lugFee.ten);
        });

        twenty.addEventListener("click", function () {
            luggageFee.innerHTML = "luggage fee: £" + lugFee.twenty;
            displayLugMsg();
            total.innerHTML = "total cost of flight: £" + (sum + lugFee.twenty);
        });

        thirty.addEventListener("click", function () {
            luggageFee.innerHTML = "luggage fee: £" + lugFee.thirty;
            displayLugMsg();
            total.innerHTML = "total cost of flight: £" + (sum + lugFee.thirty);
        });
    }//pickLuggage


        bindBtns    =   function(){

            pickFlight();



        },//bindBtns






        init    =   function () {

            bindBtns();

        };//init;

    window.addEventListener("load", init);
})();
