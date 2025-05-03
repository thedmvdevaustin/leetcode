function validWordAbbreviation(word, abbr) {
    let wordIndex = 0;
    let abbrIndex = 0;

    while (wordIndex < word.length && abbrIndex < abbr.length) {
        if (/^[0-9]$/.test(abbr[abbrIndex])){
            let num = 0;

            if (abbr[abbrIndex]==="0") {
                return false;
            }

            while (abbr[abbrIndex] < abbr.length && /^[0-9]$/.test(abbr[abbrIndex])) {
                num = num * 10 + Number(abbr[abbrIndex]);
                abbrIndex++
            }

            wordIndex+=num;
        } else {
            if (word[wordIndex]!==abbr[abbrIndex]) {
                return false;
            }
            wordIndex++;
            abbrIndex++
        }
    }

    return wordIndex===word.length && abbrIndex===abbr.length;
}

/*
Time Complexity: O(N); worst case we have to traverse through the entire
word(N) because the entire word and abbreviation are the same
Space Complexity: O(1); no new things needed to be added to the memory
*/

//word = "internationalization", abbr="i12iz4n"
//word = "apple", abbr="a2e"
//word = "subsitution", abbr="s10n"
//word = "subsitution", abbr="sub4u4"
//word = "subsitution", abbr="su3i1u2on"
//word = "subsitution", abbr="s55n"
//word = "subsitution", abbr="s010n"
//word = "subsitution", abbr="s0ubstitution"
