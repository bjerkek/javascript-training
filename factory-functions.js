// In most cases it is better to use factory functions
// over classes. It eliminates the issues around the
// this-keyword

const dog = () => {
  const sound = 'woof'
  return {
    talk: () => console.log(sound)
  }
}

const sniffles = dog()
sniffles.talk()
