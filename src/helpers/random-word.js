const wordList = [
  'አንድ',   'ግለሰብ',  'ደቡብ',  'ኮሪያ',  'ውስጥ',  'ሊያርፍ',  'ተቃረበ',   'አየር',  'ላይ',   'ነበረ',
  'መንገደኞች',  'አውሮፕላን',  'አደጋ','ጊዜ',  'በር',   'መክፈቱ',  'ምክንያት',  'ፖሊስ',   'ቁጥጥር',  
  'ስር',  'ኤሺያን',  'ኤርላይንስ',  'ተባለ',  'ንብረት',  'ሆነው',  'መጓዝ',  'ነው',  'ድንገት', 
   'አደጋ',  'መውጫውን',  'በር',  'ከፈተው',  'ዛሬ',  'አርብ',  '194',  'መንገደኞችን',  'አሳፍሮ',  
   'ሲጓዝ',  'ነበረው',  'በሩ',  'እንደተከፈተ',  'ዴጉ',  'ዓለም',  'አቀፍ',  'ማረፊያ',  'ሰላም',  'ያረፈ',  
   'ምንም',  'ጉዳት',  'አልደረሰም',  'ነገር',  'በተከፈተው',  'በር',  'ምክንያት',  'አውሮፕላኑ', 'ውስጥ',  
   'ተሳፍሮ',  'መጓዝ',  'ሳለ',  'በድንገት',  'የአደጋ',  'ጊዜ',  'መውጫውን',  'በር',  'የከፈተው',
  'አውሮፕላን',  'ካረፈ',  'በኋላ',  'በቁጥጥር',  'ስር',  'መዋሉን',  'ዮንሃፕ',  'የተባለው',  'የደቡብ',  'ኮሪያ',
    'ዜና',  'ወኪል',  'ዘግቧል', 'አንድ',  'አውሮፕላኑ',  'ውስጥ',  'ነበረ',  'አይን',  'ምስክር',  'እንደተናገረው',
     'ለማረፍ',  'እየተዘጋጀ', 'ስለነበረ',  'አስተናጋጆቹ',  'ግለሰቡን',  'በሩን',  'ከመክፈት',  'ሊከላከሉት',  'አልቻሉም', 
      'በበአውሮፕላኑ',  'ዘሎ',  'ለመውጣት',  'ሞክሮ',  'ነበር',  'ተብሏል',  'ደቡብ',  'ኮሪያ',  'ትልቅ',
  'ደሴት',  'ከሆነችው',  'ጄጁ',  'ዛሬ', 'አርብ',  'በአገሩ',  'ሰዓት',  'አቆጣጠር', 'ጠዋት',  'ላይ',  'ነበር',  
  'የአውሮፕላኑ',  'በር',  'ከተከፈተ',  'በኋላ',  'በባድ',  'ድንጋጤ',  'ሽብር',  'ተፈጥሮ',  'የነበረ', 'ሲሆን',  
  'አየር',  'መንገድን','መዳረሻው',  'አውሮፕላኑ',  'ሁለት',  'መቶ',  'ሰዎችን',  'አሳፍሮ',  'ደቡብ',
  'ኮሪያ',  'ትልቋ',  'ደሴት',  'ከሆነችው',  'ጄጁ',  'ተነሳው',  'ዛሬ',  'አርብ',  'በአገሩ',  'ሰዓት',  'አቆጣጠር',  
  'ጠዋት',  'ላይ',  'ነበር',  'ደቡብ',  'ኮሪያ',  'መገናኛ',  'ብዙኃን', 'ዘገቡት',  'ግለሰቡ',  'አውሮፕላኑ',  'በር', 
   'የከፈተው',  'ወደ',  'መዳረሻው',  'ሲቃረብ',  'አየር', 'ላይ',  'ሳለ',  'ነበር',  'አንድ',  'ተሳፋሪ',  '“አውሮፕላኑ', 
    'የሚፈነዳ',  'መስሎ',  'ስለተሰማን',  'እዚያው',  'የምሞት',  'ነበር',  'የመሰለኝ”',  'ብሏል',  'አውሮፕላኑ',  'ሁለት', 
     'መቶ',  'የሚጠጉ',  'ሰዎችን',  'አሳፍሮ',  'ደቡብ',  'ኮሪያ',  'ትልቅ',
  'ደሴት',  'ከሆነችው',  'ጄጁ',  'የተነሳው',  'ዛሬ',  'አርብ',  'በአገሩ',  'ሰዓት',  'አቆጣጠር',  'ጠዋት',  'ላይ',  'ነበር',  'የደቡብ', 
   'ኮሪያ',  'መገናኛ',  'ብዙኃን',  'እንደዘገቡት',  'ግለሰቡ',
  'የአውሮፕላኑን',  'በር',  'የከፈተው',  'ወደ',  'መዳረሻው',  'ሲቃረብ',  'አየር',  'ላይ',  'ሳለ',  'ነበር',  'አንድ',  'ተሳፋሪ',  'መንገደኛ',  
  'በማኅበራዊ',  'ሚዲያ',  'ባጋራው',  'ቪዲዮ',  'ላይ',  'በአውሮፕላኑ',  'አንድ',
  'ወገን',  'ተከፈተው',  'በር',  'ክፍተት',  'እና',  'ከባድ',  'ነፋስ', 'ከተከፈተው',  'በር',  'አቅራቢያ',  'የነበሩ',  'ወንበሮችን',  'በኃይል',  
  'ሲነቀንቃቸው',  'ታይቷል',  'በአውሮፕላኑ',
  'ውስጥ',  'ከሚጠቅሙት', 'በተከፈተ',  'በአገሩ',  'ላይ',  'ሳለ',  'ሞክሮ',  'ነበር',  'አየር', 'ላይ',  'አቅራቢያ',  'የነበሩ',  'ወንበሮችን',  
  'በኃይል',  'ሲነቀንቃቸው',  'ታይቷል',  'በአውሮፕላኑ',
  'ውስጥ',  'ከሚጠቅሙት',  'በተከፈተ',  'በአገሩ',  'ላይ',  'ሳለ',  'ሞክሮ',  'ነበር',  'ብዙዎች', 'ሰዎችን',  'አሳፍሮ',  'በማለት',  'ለቀጣበር',
    'አደራ',  'ስትቀጣበር',  'ይገባል፡'];


/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable arrow-parens */
/* eslint-disable space-unary-ops */
/* eslint-disable no-shadow */

export const generateWord = (options) => {
  const randInt = (lessThan) => {
    return Math.floor(Math.random() * lessThan);
  };

  const generateRandomWord = () => {
    return wordList[randInt(wordList.length)];
  };

  const generateWordWithMaxLength = () => {
    let rightSize = false;
    let wordUsed;
    while (!rightSize) {  
      wordUsed = generateRandomWord();
      if (wordUsed.length <= options.maxLength) {
        rightSize = true;
      }
    }
    return wordUsed;
  };
  
  const word = () => {
    if (options && options.maxLength > 1) {
      return generateWordWithMaxLength();
    } 
    return generateRandomWord();
  };

  // No arguments = generate one word
  if (typeof (options) === 'undefined') {
    return word();
  }

  // Just a number = return that many words
  if (typeof (options) === 'number') {
    options = { exactly: options };
  }

  // options supported: exactly,  min,  max,  join
  if (options.exactly) {
    options.min = options.exactly;
    options.max = options.exactly;
  }
  
  // not a number = one word par string
  if (typeof (options.wordsPerString) !== 'number') {
    options.wordsPerString = 1;
  }

  // not a function = returns the raw word
  if (typeof (options.formatter) !== 'function') {
    options.formatter = (word) => word;
  }
  
  // not a string = separator is a space
  if (typeof(options.separator) !== 'string') {
    options.separator = ' ';
  }

  const total = options.min + randInt(options.max + 1 - options.min);
  let results = [];
  let token = '';
  let relativeIndex = 0;

  for (let i = 0; (i < total * options.wordsPerString); i++) {
    if (relativeIndex === options.wordsPerString - 1) {
      token += options.formatter(word(), relativeIndex);
    } else {
      token += options.formatter(word(), relativeIndex) + options.separator;
    }
    relativeIndex++;
    if ((i + 1) % options.wordsPerString === 0) {
      results.push(token);
      token = ''; 
      relativeIndex = 0;
    }
  }

  if (typeof options.join === 'string') {
    results = results.join(options.join);
  }

  return results;
};

export const generateGreet = () => {
  const greets = [
    'ጥሩ!', 'ግሩም!', 'በጣም ጥሩ!', 'ድንቅ!',
    'አስደናቂ!', 'ድንቅ!', 'ድንቅ!', 'የማይታመን!'
    , 'አስደሳች!', 'ብልህ!', 'ፍጹም!'
  ];
  const random = Math.floor(Math.random() * greets.length);
  
  return greets[random];
};
