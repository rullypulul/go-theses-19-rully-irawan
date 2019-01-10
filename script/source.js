var example = ['GENERAL', 'CHECK', 'THE', 'SOURCE', 'CODE', 'CMD + ALT + U'];
var example_2 = ['Graphic design', 'check', 'the', 'source', 'code', 'cmd + alt + u'];
var example_3 = ['students and lecturers', 'check', 'the', 'source', 'code', 'cmd + alt + u'];


        textSequence(0);
        function textSequence(i) {

            if (example, example_2, example_3 .length > i) {
                setTimeout(function() {
                    document.getElementById("sequence").innerHTML = example[i];
                    document.getElementById("sequences").innerHTML = example_2[i];
                    document.getElementById("sequencess").innerHTML = example_3[i];
                    textSequence(++i);
                }, 1000); // 1 second (in milliseconds)


            } else if (example, example_2, example_3.length == i) { // Loop
                textSequence(0);
            }


        }

            