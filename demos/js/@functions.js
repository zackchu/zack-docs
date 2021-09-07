@Foo
class User {
  @readonly
  getName() {
    return 'hello world'
  }
}

function readonly(target, name, descriptor) {
  console.info({name})
  descriptor.writable = false
  return descriptor
}

function Foo(target) {
  target.age = 43
  console.log({name})
}

const u = new User()

u.getName = () => {
  return 'I will override'
}
