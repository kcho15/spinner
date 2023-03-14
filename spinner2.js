const symbols = ['|  ', '/  ', '-  ', '\\  ', '|  ', '/  ', '-  ', '\\  ']

const spinner = () => {
  let timer = 200; 
  for (let i = 0; i < symbols.length; i++) {
    setTimeout(() => { 
      process.stdout.write(`\r${symbols[i]}`)}, timer); // increments the timer during each loop over each element
      timer += 200; 
  }
}
  
spinner(); 