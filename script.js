(function() {
    var countries = [
        "Afghanistan",
        "Albania",
        "Algeria",
        "American Samoa",
        "Angola",
        "Anguilla",
        "Antigua",
        "Argentina",
        "Armenia",
        "Aruba",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahamas",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bermuda",
        "Bhutan",
        "Bolivia",
        "Bonaire (Netherlands Antilles)",
        "Bosnia Herzegovina",
        "Botswana",
        "Brazil",
        "British Virgin Islands",
        "Brunei",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Buthan",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Cape Verde",
        "Cayman Islands",
        "Central African Republic",
        "Chad",
        "Chile",
        "China",
        "Colombia",
        "Comoros",
        "Congo",
        "Congo, The Democratic Republic of",
        "Cook Islands",
        "Costa Rica",
        "Croatia",
        "Curacao (Netherlands Antilles)",
        "Cyprus",
        "Czech Republic",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Eritrea",
        "Estonia",
        "Ethiopia",
        "Fiji",
        "Finland",
        "France",
        "French Guiana",
        "French Polynesia",
        "Gabon",
        "Gambia",
        "Georgia",
        "Germany",
        "Ghana",
        "Gibraltar",
        "Greece",
        "Grenada",
        "Guadeloupe",
        "Guam",
        "Guatemala",
        "Guinea",
        "Guinea Bissau",
        "Guyana",
        "Haiti",
        "Honduras",
        "Hong Kong",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iraq",
        "Iran",
        "Ireland (Republic of)",
        "Israel",
        "Italy",
        "Ivory Coast",
        "Jamaica",
        "Japan",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kiribati",
        "Kosovo",
        "Kosrae Island",
        "Kuwait",
        "Kyrgyzstan",
        "Laos",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Libya",
        "Lithuania",
        "Luxembourg",
        "Macau",
        "Macedonia (FYROM)",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldives",
        "Mali",
        "Malta",
        "Marshall Islands",
        "Martinique",
        "Mauritania",
        "Mauritius",
        "Mayotte",
        "Mexico",
        "Moldova",
        "Mongolia",
        "Montenegro",
        "Montserrat",
        "Morocco",
        "Mozambique",
        "Namibia",
        "Nepal",
        "Netherlands",
        "New Caledonia",
        "New Zealand",
        "Nicaragua",
        "Niger",
        "Nigeria",
        "Northern Mariana Islands",
        "Norway",
        "Oman",
        "Pakistan",
        "Palau",
        "Panama",
        "Papua New Guinea",
        "Paraguay",
        "Peru",
        "Philippines",
        "Poland",
        "Ponape",
        "Portugal",
        "Puerto Rico",
        "Qatar",
        "Reunion",
        "Romania",
        "Rota",
        "Russia",
        "Rwanda",
        "Saba (Netherlands Antilles)",
        "Saipan",
        "Samoa",
        "Saudi Arabia",
        "Senegal",
        "Serbia",
        "Seychelles",
        "Sierra Leone",
        "Singapore",
        "Slovakia",
        "Slovenia",
        "Solomon Islands",
        "South Africa",
        "South Korea",
        "Spain",
        "Sri Lanka",
        "St. Barthelemy",
        "St. Croix",
        "St. Eustatius (Netherlands Antilles)",
        "St. John",
        "St. Kitts and Nevis",
        "St. Lucia",
        "St. Maarten (Netherlands Antilles)",
        "St. Thomas",
        "St. Vincent and the Grenadines",
        "Suriname",
        "Swaziland",
        "Sweden",
        "Switzerland",
        "Syria",
        "Taiwan",
        "Tajikistan",
        "Tanzania",
        "Thailand",
        "Tinian",
        "Togo",
        "Tonga",
        "Tortola",
        "Trinidad and Tobago",
        "Truk",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Turks and Caicos",
        "Tuvalu",
        "US Virgin Islands",
        "Uganda",
        "Ukraine",
        "Union Island",
        "United Arab Emirates",
        "United Kingdom",
        "United States",
        "Uruguay",
        "Uzbekistan",
        "Vanuatu",
        "Venezuela",
        "Vietnam",
        "Virgin Gorda",
        "Wallis and Futuna",
        "Yap",
        "Yemen",
        "Zambia",
        "Zimbabwe"
    ];

    var currentPlayer = "TRAIN";
    var body = $("body");
    var column = $(".column");
    var slotBlock = $(".slot");
    var resetting = $("#resetting");
    var win = $(".youWin");
    var message = $("#message");
    var starting = $("#startTheGame");
    var startModal = $(".startModal");
    var shirt = $(".shirt");

    starting.on("click", function(e) {
        startModal.addClass("disappear");
    });

    // adding chips to each column on click
    column.on("click", function(e) {
        shirt.addClass("movement");
        function cancel() {
            shirt.removeClass("movement");
        }
        setTimeout(cancel, 800);
        var slotsInColumn = $(e.currentTarget).find(".slot");
        for (var i = 5; i >= 0; i--) {
            if (
                !slotsInColumn.eq(i).hasClass("TRAIN") &&
                !slotsInColumn.eq(i).hasClass("PLANE")
            ) {
                slotsInColumn.eq(i).addClass(currentPlayer);
                break;
            }
            // this is working (chips fall down on click)
        }
        console.log(i);
        if (i === -1) {
            alert("This column is full!");
        }

        function clearboard() {
            slotBlock.removeClass("TRAIN");
            slotBlock.removeClass("PLANE");
        }
        var whereToGo = countries[Math.floor(Math.random() * countries.length)];

        if (checkForVictory(slotsInColumn)) {
            message.append(
                "<h2 class='addon'>It is decided! You guys are travelling by " +
                    currentPlayer +
                    " to " +
                    whereToGo +
                    "</h2>"
            );
            win.addClass("start");
            $(".passportPage").append(
                '<li class="destinations">' + whereToGo + "</li>"
            );
            resetting.on("click", function(e) {
                clearboard();
                win.removeClass("start");
                $(".addon").remove();
            });
            return;
        } else if (checkForVictory($(".row" + i))) {
            message.append(
                "<h2 class='addon'>It is decided! You guys are travelling by " +
                    currentPlayer +
                    " to " +
                    whereToGo +
                    "</h2>"
            );
            win.addClass("start");
            $(".passportPage").append(
                '<li class="destinations">' + whereToGo + "</li>"
            );
            resetting.on("click", function(e) {
                clearboard();
                win.removeClass("start");
                $(".addon").remove();
            });

            return;
        } else if (checkforDiagonals()) {
            message.append(
                "<h2 class='addon'>It is decided! You guys are travelling by " +
                    currentPlayer +
                    " to " +
                    whereToGo +
                    "</h2>"
            );
            win.addClass("start");
            $(".passportPage").append(
                '<li class="destinations">' + whereToGo + "</li>"
            );
            resetting.on("click", function(e) {
                clearboard();
                win.removeClass("start");
                $(".addon").remove();
            });

            return;
        }

        switchPlayers();
    });

    // Changing players
    function switchPlayers() {
        if (currentPlayer == "TRAIN") {
            currentPlayer = "PLANE";
        } else {
            currentPlayer = "TRAIN";
        }
    }

    // Checking for victory (row and column)

    function checkForVictory(slot) {
        var count = 0;
        var str = "";
        console.log(slot.index(), "indexOf");
        for (var i = 0; i < slot.length; i++) {
            count++;
            if (slot.eq(i).hasClass(currentPlayer)) {
                str += "w";
                // winner
            } else {
                str += "l";
            }
        }
        if (str.indexOf("wwww") > -1) {
            return true;
        }
    }

    function checkforDiagonals() {
        for (var i = 0; i < slotBlock.length; i++) {
            var colNumberFirst = slotBlock
                .eq(i)
                .parent()
                .index();
            var rowNumberFirst = slotBlock.eq(i).index();
            //
            var rowNumberSecond = rowNumberFirst + 1;
            var rowNumberThird = rowNumberFirst + 2;
            var rowNumberFourth = rowNumberFirst + 3;
            var colNumberSecondRL = colNumberFirst - 1;
            var colNumberThirdRL = colNumberFirst - 2;
            var colNumberFourthRL = colNumberFirst - 3;
            var colNumberSecondLR = colNumberFirst + 1;
            var colNumberThirdLR = colNumberFirst + 2;
            var colNumberFourthLR = colNumberFirst + 3;
            //
            var firstItemRL = $(
                ".row" + rowNumberFirst + (".c" + colNumberFirst)
            );
            var secondItemRL = $(
                ".row" + rowNumberSecond + (".c" + colNumberSecondRL)
            );
            var thirdItemRL = $(
                ".row" + rowNumberThird + (".c" + colNumberThirdRL)
            );
            var fourthItemRL = $(
                ".row" + rowNumberFourth + (".c" + colNumberFourthRL)
            );
            //
            //
            var firstItemLR = $(
                ".row" + rowNumberFirst + (".c" + colNumberFirst)
            );
            var secondItemLR = $(
                ".row" + rowNumberSecond + (".c" + colNumberSecondLR)
            );
            var thirdItemLR = $(
                ".row" + rowNumberThird + (".c" + colNumberThirdLR)
            );
            var fourthItemLR = $(
                ".row" + rowNumberFourth + (".c" + colNumberFourthLR)
            );
            //

            if (
                rowNumberFirst >= 0 &&
                rowNumberSecond >= 0 &&
                rowNumberThird >= 0 &&
                rowNumberFourth >= 0 &&
                //
                colNumberFirst >= 0 &&
                //
                colNumberSecondRL >= 0 &&
                colNumberThirdRL >= 0 &&
                colNumberFourthRL >= 0 &&
                //
                colNumberSecondLR >= 0 &&
                colNumberThirdLR >= 0 &&
                colNumberFourthLR >= 0 &&
                //
                rowNumberFirst <= 5 &&
                rowNumberSecond <= 5 &&
                rowNumberThird <= 5 &&
                rowNumberFourth <= 5 &&
                //
                colNumberFirst <= 6 &&
                //
                colNumberSecondRL <= 6 &&
                colNumberThirdRL <= 6 &&
                colNumberFourthRL <= 6 &&
                //
                colNumberSecondLR <= 6 &&
                colNumberThirdLR <= 6 &&
                colNumberFourthLR <= 6
            ) {
                if (
                    firstItemRL.hasClass(currentPlayer) &&
                    secondItemRL.hasClass(currentPlayer) &&
                    thirdItemRL.hasClass(currentPlayer) &&
                    fourthItemRL.hasClass(currentPlayer)
                ) {
                    return true;
                } else if (
                    firstItemLR.hasClass(currentPlayer) &&
                    secondItemLR.hasClass(currentPlayer) &&
                    thirdItemLR.hasClass(currentPlayer) &&
                    fourthItemLR.hasClass(currentPlayer)
                ) {
                    return true;
                }
            }
        }
    }
})();
