let timer = 0;
const maxTimer = 3100;
const animation = "|/-\\"
while (timer < maxTimer) {
  for (const letter of animation) {
    setTimeout(() => {
      process.stdout.write(`\r${letter}`);
    }, timer); 
    timer += 100;
  }
};