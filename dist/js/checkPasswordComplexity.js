function StrenghtPassword() {
    let password = document.getElementById('form-strenght__input').value,
        lenghtCase  = password.length;


    console.log("Пароль: " + password)

    // Получение количества заглавных букв
    upperCase = password.replace(/[^ABCDEFGHIJKLMNOPQRSTUVWXYZ]/g, '');
    upperCase = upperCase.length;
    console.log("Количество заглавных букв: " + upperCase);


    // Получение количества заглавных букв
    lowerCase = password.replace(/[^abcdefghijklmnopqrstuvwxyz]/g, '');
    lowerCase = lowerCase.length ;
    console.log("Количество строчных букв:" + lowerCase);


    // Получение колическтва цифр
    numberCase = password.replace(/[^0-9]/g,"");
    numberCase = numberCase.length;
    console.log("Количество цифр:" + numberCase);


    // Получение колическтва символов
    symbolCase = password.replace(/[^!№;%:?*()_+=]/g, '');
    symbolCase = symbolCase.length;
    console.log("Количество символов:" + symbolCase);


    // Получение количества заглавных букв Кириллицы
    cyrillicUpper = password.replace(/[^ЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮ]/g, '');
    cyrillicUpper = cyrillicUpper.length;
    console.log("Количество заглавных символов Кириллицы:" + cyrillicUpper);


    // Получение количества строчных букв Кириллицы
    cyrillicLower = password.replace(/[^йцукенгшщзхъфывапролджэячсмитьбю]/g, '');
    cyrillicLower = cyrillicLower.length ;
    console.log("Количество строчных символов Кириллицы:" + cyrillicLower);
    console.log(typeof(cyrillicLower));

    let result = 0;
    // Условия выдачи сложности пароля сгенерированоного человеком(Без учета Кириллицы)
    if( upperCase < 1 || lowerCase < 1 || lenghtCase <= 4) {
        diff_level = "Пароль слабый!";
        // console.log("Пароль слабый!");
        result = 20;
    }   else if ( upperCase  <= 3 || lowerCase <= 3 || numberCase <= 3 && lenghtCase <= 7) {
        diff_level = "Пароль средний!";
        // console.log("Пароль средний!");
        result = 50;
    }   else if ( upperCase  <= 4 || lowerCase <= 4 || numberCase <= 4 && lenghtCase <= 12) {
        diff_level = "Пароль надежный!";
        // console.log("Пароль надежный!");
        result = 70;
    }   else {
        diff_level = "Паролу супер надежный!!!";
        // console.log("Паролу супер надежный!!!");
        result = 100;
    }

    document.getElementById("strenght__text").innerHTML = diff_level;

    if (result == 20) {
        i = 0;
        var elem = document.getElementById("strenght__scale_progress");
        var width = 0;
        var id = setInterval(frame, 14);
        function frame() {
        if (width >= 20) {
            clearInterval(id);
            i = 0;
        } else {
            width++;
            elem.style.width = width + "%";
            // elem.innerHTML = width  + "%";
        }
        }
    } else if ( result == 50 ) {
        i = 0;
        var elem = document.getElementById("strenght__scale_progress");
        var width = 0;
        var id = setInterval(frame, 14);
        function frame() {
        if (width >= 50) {
            clearInterval(id);
            i = 0;
        } else {
            width++;
            elem.style.width = width + "%";
            // elem.innerHTML = width  + "%";
        }
        }
    } else if ( result == 70 ) {
        i = 0;
        var elem = document.getElementById("strenght__scale_progress");
        var width = 0;
        var id = setInterval(frame, 14);
        function frame() {
        if (width >= 70) {
            clearInterval(id);
            i = 0;
        } else {
            width++;
            elem.style.width = width + "%";
            // elem.innerHTML = width  + "%";
        }
        }
    } else if ( result == 100 ) {
        i = 0;
        var elem = document.getElementById("strenght__scale_progress");
        var width = 0;
        var id = setInterval(frame, 14);
        function frame() {
        if (width >= 100) {
            clearInterval(id);
            i = 0;
        } else {
            width++;
            elem.style.width = width + "%";
            // elem.innerHTML = width  + "%";
        }
        }
    }

}

// let i = 0;
// if (i == 0) {
//     i = 0;
//     var elem = document.getElementById("strenght__scale_progress");
//     var width = 0;
//     var id = setInterval(frame, 12);
//     function frame() {
//     if (width >= 100) {
//         clearInterval(id);
//         i = 0;
//     } else {
//         width++;
//         elem.style.width = width + "%";
//         // elem.innerHTML = width  + "%";
//     }
//     }
// }