//Lista de palabras:
let determiner = ['a', 'the', 'this', 'our'];
let adj = ['adorable', 'calm', 'tiny', 'lively'];
let thing = ['person', 'cat', 'fruit', 'planet'];
let domain = ['.es', '.cl', '.com', 'ar']; 

//Loops:
for (a = 0; a < determiner.length;a++) {
    // Extracción del elemento del arreglo determiner:
    var det = determiner[a];
    for (b = 0; b < adj.length; b++) {
        // Extracción del elemento del arreglo adj:
        var ad = adj[b];
        for (c = 0; c < thing.length; c++) {
            //Extracción del elemento del arreglo thing:
            var th = thing[c];
            for (d = 0; d < domain.length; d++) {
                //Extracción del elemento del arreglo domain:
                var dom = domain[d];
                //Concatenación:
                let page = det + ad + th + dom;
                //Print del resultado final:
                console.log(page);
            }
        }
    }
}


