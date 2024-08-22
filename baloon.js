var maxNumberOfBalloons = function(text) {
    let map = new Map();
    let str = "balloon";
    
    // Initialize the map with counts for 'b', 'a', 'l', 'o', 'n'
    for (let char of str) {
        map.set(char, 0);
    }
    console.log(map);
    // Count the occurrences of the required characters in the text
    for (let char of text) {
        if (map.has(char)) {
            map.set(char, map.get(char) + 1);
        }
    }
    
    // Adjust the counts for 'l' and 'o' since we need them twice in "balloon"
    map.set('l', Math.floor(map.get('l') / 2));
    map.set('o', Math.floor(map.get('o') / 2));
    
    // Find the minimum count among the characters required for "balloon"
    let count = Math.min(
        map.get('b'), 
        map.get('a'), 
        map.get('l'), 
        map.get('o'), 
        map.get('n')
    );
    
    return count;
};
console.log(maxNumberOfBalloons('balonballoonabcblaoonl'));
