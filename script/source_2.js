var example = ['command', '+', 'alt', '+', 'u','STUDIES'];
var examples = ['a', 'b', 'c', 'd', 'e','GENERAL'];


        textSequence(0);
        function textSequence(i) {

            if (example.length > i) {
                setTimeout(function() {
                    document.getElementById("sequence").innerHTML = example[i];
                    document.getElementById("sequenceS").innerHTML = examples[i];
                    textSequence(++i);
                }, 1000); // 1 second (in milliseconds)

            } else if (example.length == i) { // Loop
                textSequence(0);
            } else if (examples.length == i) { // Loop
                textSequence(0);

        }